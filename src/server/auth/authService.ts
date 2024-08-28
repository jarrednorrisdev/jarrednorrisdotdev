import { Context, Effect, Option } from "effect";
import { UserService, UserServiceLive } from "./userService";
import { Layer } from "effect";

import { redirect } from "next/navigation";

import { lucia } from "~/server/auth/lucia";

import {
  AccountNotFoundError,
  PasswordEncryptError,
  UserNotFoundError,
  IncorrectPasswordError,
  MissingPasswordHashError,
  PasswordDecryptError,
  CreateSessionError,
  type EmailAlreadyRegisteredError,
  type UsernameAlreadyExistsError,
  ValidateSessionError,
  GetSessionCookieError,
  NotAuthenticatedError,
} from "~/server/auth/errors";
import { hash, verify } from "@node-rs/argon2";
import { type User as LuciaUser, type Cookie, type Session } from "lucia";
import { type DrizzleQueryError } from "~/server/db/errors";
// import { getSessionCookie } from "~/app/_server/getSessionCookies";
// import { setSessionCookie } from "~/app/_server/setSessionCookies";
import { set } from "zod";
import { cookies } from "next/headers";
import { cons } from "effect/List";
import { User } from "~/server/db/schema";
export class AuthService extends Context.Tag("@jnd/AuthService")<
  AuthService,
  {
    readonly verifyPassword: (
      passwordHash: string,
      password: string,
    ) => Effect.Effect<boolean, PasswordDecryptError, never>;
    readonly hashPassword: (
      password: string,
    ) => Effect.Effect<string, PasswordEncryptError, never>;
    readonly createSession: (
      userId: string,
    ) => Effect.Effect<Session, CreateSessionError, never>;
    readonly createSessionCookie: (
      sessionId: string,
    ) => Effect.Effect<Cookie, never, never>;
    // readonly getSessionCookie: () => Option.Option<string>;
    readonly setSessionCookie: (sessionCookie: Cookie) => Cookie;
    readonly validateSession: (sessionId: string) => Effect.Effect<
      | {
          user: LuciaUser;
          session: Session;
        }
      | {
          user: null;
          session: null;
        },
      ValidateSessionError,
      never
    >;
    readonly getValidatedUserSession: Effect.Effect<
      | {
          user: LuciaUser;
          session: Session;
        }
      | {
          user: null;
          session: null;
        },
      ValidateSessionError,
      never
    >;

    readonly assertAuthenticated: Effect.Effect<
      LuciaUser,
      ValidateSessionError | GetSessionCookieError | NotAuthenticatedError,
      never
    >;
    readonly signInWithUsername: (input: {
      username: string;
      password: string;
    }) => Effect.Effect<
      { user: User; sessionCookie: Cookie },
      | PasswordDecryptError
      | CreateSessionError
      | DrizzleQueryError
      | MissingPasswordHashError
      | AccountNotFoundError
      | UserNotFoundError
      | IncorrectPasswordError,
      never
    >;
    readonly signUpWithUsername: (input: {
      username: string;
      email: string;
      password: string;
    }) => Effect.Effect<
      { user: User; sessionCookie: Cookie },
      | PasswordEncryptError
      | CreateSessionError
      | DrizzleQueryError
      | EmailAlreadyRegisteredError
      | UsernameAlreadyExistsError,
      never
    >;
    readonly signOut: () => Effect.Effect<
      void,
      ValidateSessionError | GetSessionCookieError | NotAuthenticatedError,
      never
    >;
  }
>() {}

export const AuthServiceLive = Layer.effect(
  AuthService,
  Effect.gen(function* (_) {
    const userService = yield* UserService;

    const verifyPassword = (passwordHash: string, password: string) =>
      Effect.tryPromise({
        try: async () =>
          await verify(passwordHash, password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
          }),
        catch: (e) => {
          console.error("Error decrypting password:", e);
          return new PasswordDecryptError("Error decrypting password", e);
        },
      });

    const hashPassword = (password: string) =>
      Effect.tryPromise({
        try: async () =>
          await hash(password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
          }),
        catch: (e) => {
          console.error("Error encrypting password:", e);
          return new PasswordEncryptError("Error encrypting password", e);
        },
      });

    const createSession = (userId: string) =>
      Effect.tryPromise({
        try: async () => await lucia.createSession(userId, {}),
        catch: (e) => {
          console.error("Error creating new session:", e);
          return new CreateSessionError("Error creating new session", {
            cause: e,
          });
        },
      });

    const createSessionCookie = (sessionId: string) =>
      Effect.sync(() => lucia.createSessionCookie(sessionId));

    const validateSession = (sessionId: string) =>
      Effect.tryPromise({
        try: async () => await lucia.validateSession(sessionId),
        catch: (e) => {
          console.error("Error validating session:", e);
          return new ValidateSessionError("Error validating session", {
            cause: e,
          });
        },
      });

    const getSessionCookie = () => {
      const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

      if (sessionId == null) {
        Effect.log("Could not find existing session cookie");
      } else {
        Effect.log("Found existing session cookie:", sessionId);
      }

      return sessionId;
    };

    const setSessionCookie = (sessionCookie: Cookie) => {
      console.log("Setting session cookie:", sessionCookie);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
      console.log("Session cookie set:", cookies().get(sessionCookie.name));
      return sessionCookie;
    };

    const getValidatedUserSession = Effect.gen(function* (_) {
      const sessionId = getSessionCookie();

      if (sessionId == null) {
        Effect.log("No session cookie found");
        return { user: null, session: null };
      }

      // if session cookie is found, validate the session
      const result = yield* validateSession(sessionId);

      // TODO: Make this code effectful
      // next.js throws when you attempt to set cookie when rendering page
      try {
        if (result.session?.fresh) {
          const sessionCookie = yield* createSessionCookie(result.session.id);
          setSessionCookie(sessionCookie);
        }
        if (!result.session) {
          const sessionCookie = lucia.createBlankSessionCookie();
          setSessionCookie(sessionCookie);
        }
      } catch (e) {}

      return result;
    });

    const assertAuthenticated = Effect.gen(function* (_) {
      const validSession = yield* getValidatedUserSession;

      if (validSession.user?.id == null) {
        return yield* Effect.fail(
          new NotAuthenticatedError("User is not authenticated"),
        );
      }

      return validSession.user;
    });

    const signInWithUsername = (input: {
      username: string;
      password: string;
    }) => {
      return Effect.gen(function* (_) {
        Effect.log("Signing in with username:", input.username);

        Effect.log(
          "Checking for existing account with username:",
          input.username,
        );
        const account = yield* userService.getAccountByUsername(input.username);
        if (!account) {
          console.error(`Account with username: ${input.username} not found`);
          return yield* Effect.fail(
            new AccountNotFoundError(
              `Account with username: ${input.username} not found`,
            ),
          );
        }
        Effect.log("Found account:", account.id);

        Effect.log("Checking for existing user with userId:", account.userId);
        const user = yield* userService.getUserById(account.userId);
        if (!user) {
          console.error(`User with userId: ${account.userId} not found`);
          return yield* Effect.fail(
            new UserNotFoundError(
              `User with userId: ${account.userId} not found`,
            ),
          );
        }
        Effect.log("Found user:", user.id);

        Effect.log("Checking for password hash on account:", account.id);
        if (account.passwordHash == null) {
          console.error(`Account ${account.id} is missing a password hash`);
          return yield* Effect.fail(
            new MissingPasswordHashError(
              `Account ${account.id} is missing a password hash`,
            ),
          );
        }
        Effect.log("Found password hash");

        Effect.log("Validating password for account:", account);
        const validPassword = yield* verifyPassword(
          account.passwordHash,
          input.password,
        );
        if (!validPassword) {
          console.error("Incorrect password");
          return yield* Effect.fail(
            new IncorrectPasswordError("Incorrect password"),
          );
        }
        Effect.log("Password is valid");

        const session = yield* createSession(user.id);
        const sessionCookie = yield* createSessionCookie(session.id);
        yield* Effect.sync(() => setSessionCookie(sessionCookie));
        Effect.log("User signed in with session cookie:", sessionCookie);
        return { user, sessionCookie };
      });
    };

    const signUpWithUsername = (input: {
      username: string;
      email: string;
      password: string;
    }) =>
      Effect.gen(function* (_) {
        console.log("Signing up with username:", input.username);
        const { user } = yield* userService.createUserWithUsername(input);
        const session = yield* createSession(user.id);
        const sessionCookie = yield* createSessionCookie(session.id);
        yield* Effect.sync(() => setSessionCookie(sessionCookie));
        console.log(
          "User signed up and signed in with session cookie:",
          sessionCookie,
        );
        return { user, sessionCookie };
      });

    const signOut = () =>
      Effect.gen(function* (_) {
        const { session } = yield* getValidatedUserSession;
        if (!session) {
          return yield* Effect.fail(
            new NotAuthenticatedError("User is not authenticated"),
          );
        }

        const sessionCookie = lucia.createBlankSessionCookie();
        setSessionCookie(sessionCookie);
      });

    return {
      verifyPassword,
      hashPassword,
      createSession,
      createSessionCookie,
      getSessionCookie,
      setSessionCookie,
      validateSession,
      getValidatedUserSession,
      assertAuthenticated,
      signInWithUsername,
      signUpWithUsername,
      signOut,
    } as const;
  }),
).pipe(Layer.provide(UserServiceLive));
