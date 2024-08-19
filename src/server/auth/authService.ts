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
    readonly getSessionCookie: () => Option.Option<string>;
    readonly setSessionCookie: (sessionCookie: Cookie) => void;
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
    readonly getCurrentUserId: Effect.Effect<
      Option.Option<LuciaUser>,
      ValidateSessionError | GetSessionCookieError,
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
      void,
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
      void,
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
      return sessionId == null ? Option.none() : Option.some(sessionId);
    };

    const setSessionCookie = (sessionCookie: Cookie) => {
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
    };

    const validateRequest = Effect.gen(function* (_) {
      const sessionId = Option.getOrElse(getSessionCookie(), () => {
        console.log("Could not find existing session cookie");
        // return Effect.fail(
        //   new GetSessionCookieError(
        //     `Error getting session cookie from request`,
        //   ),
        // );
        return null;
      });

      if (sessionId == null) {
        return { user: null, session: null };
      }

      const result = yield* validateSession(sessionId);

      // TODO: next.js throws when you attempt to set cookie when rendering page
      if (result.session?.fresh) {
        // const sessionCookie = lucia.createSessionCookie(result.session.id);
        const sessionCookie = yield* createSessionCookie(result.session.id);
        setSessionCookie(sessionCookie);
        // cookies().set(
        //   sessionCookie.name,
        //   sessionCookie.value,
        //   sessionCookie.attributes,
        // );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        setSessionCookie(sessionCookie);
        // cookies().set(
        //   sessionCookie.name,
        //   sessionCookie.value,
        //   sessionCookie.attributes,
        // );
      }

      return result;
    });

    const getCurrentUserId = Effect.gen(function* (_) {
      const session = yield* validateRequest;
      return session.user == null ? Option.none() : Option.some(session.user);
    });

    const assertAuthenticated = Effect.gen(function* (_) {
      const user = yield* Effect.orElse(yield* getCurrentUserId, () => {
        console.error("User is not authenticated, please sign in");
        return Effect.fail(
          new NotAuthenticatedError(
            `User is not authenticated, please sign in`,
          ),
        );
      });
      return user;
    });

    const signInWithUsername = (input: {
      username: string;
      password: string;
    }) =>
			Effect.gen(function* (_) {
				
				console.error(`TEST Signing in with username: ${input.username}`);

        const account = yield* Effect.orElse(
          yield* userService.getAccountByUsername(input.username),
          () => {
            console.error(`Account with username: ${input.username} not found`);
            return Effect.fail(
              new AccountNotFoundError(
                `Account with username: ${input.username} not found`,
              ),
            );
          },
        );

        console.log(
          `Found account - id:${account.id}, userId:${account.userId}`,
        );

        const user = yield* Effect.orElse(
          yield* userService.getUserById(account.userId),
          () => {
            console.error(
              `User for accountId: ${account.id}, username: ${input.username}, userId ${account.userId} not found`,
            );
            return Effect.fail(
              new UserNotFoundError(
                `User for accountId: ${account.id}, username: ${input.username}, userId ${account.userId} not found`,
              ),
            );
          },
        );

        console.log(`Found user - id:${user.id},`);

        if (account.passwordHash == null) {
          console.error(`Account ${account.id} is missing a password hash`);
          return yield* Effect.fail(
            new MissingPasswordHashError(
              `Account ${account.id} is missing a password hash`,
            ),
          );
        }

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
				
				console.log(`Password is correct`);

        const session = yield* createSession(user.id);
        const sessionCookie = yield* createSessionCookie(session.id);

        setSessionCookie(sessionCookie);
      });

    const signUpWithUsername = (input: {
      username: string;
      email: string;
      password: string;
    }) =>
      Effect.gen(function* (_) {
        const { user } = yield* userService.createUserWithUsername(input);
        const session = yield* createSession(user.id);
        const sessionCookie = yield* createSessionCookie(session.id);
        setSessionCookie(sessionCookie);
      });

    const signOut = () =>
      Effect.gen(function* (_) {
        const { session } = yield* validateRequest;
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
      getCurrentUserId,
      assertAuthenticated,
      signInWithUsername,
      signUpWithUsername,
      signOut,
    } as const;
  }),
).pipe(Layer.provide(UserServiceLive));
