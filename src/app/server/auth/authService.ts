import { Context, Effect, Option } from "effect";
import { UserService, UserServiceLive } from "./userService";
import { Layer } from "effect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { lucia } from "~/app/server/auth/lucia";

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
} from "~/app/server/auth/errors";
import { hash, verify } from "@node-rs/argon2";
import { type User as LuciaUser, type Cookie, type Session } from "lucia";
import { type DrizzleQueryError } from "~/app/server/db/errors";

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
        catch: (e) => new PasswordDecryptError("Error decrypting password", e),
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
        catch: (e) => new PasswordEncryptError("Error encrypting password", e),
      });

    const createSession = (userId: string) =>
      Effect.tryPromise({
        try: async () => await lucia.createSession(userId, {}),
        catch: (e) =>
          new CreateSessionError("Error creating new session", { cause: e }),
      });

    const createSessionCookie = (sessionId: string) =>
      Effect.sync(() => lucia.createSessionCookie(sessionId));

    const validateSession = (sessionId: string) =>
      Effect.tryPromise({
        try: async () => await lucia.validateSession(sessionId),
        catch: (e) =>
          new ValidateSessionError("Error creating new session", {
            cause: e,
          }),
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
      // const sessionId = yield* getSessionCookie();

      const sessionId = yield* Effect.orElse(getSessionCookie(), () =>
        Effect.fail(
          new GetSessionCookieError(
            `Error getting session cookie from request`,
          ),
        ),
      );

      const result = yield* validateSession(sessionId);

      // TODO: next.js throws when you attempt to set cookie when rendering page
      if (result.session?.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }

      return result;
    });

    const getCurrentUserId = Effect.gen(function* (_) {
      const session = yield* validateRequest;
      return session.user == null ? Option.none() : Option.some(session.user);
    });

    const assertAuthenticated = Effect.gen(function* (_) {
      const user = yield* Effect.orElse(yield* getCurrentUserId, () =>
        Effect.fail(
          new NotAuthenticatedError(
            `User is not authenticated, please sign in`,
          ),
        ),
      );
      return user;
    });

    const signInWithUsername = (input: {
      username: string;
      password: string;
    }) =>
      Effect.gen(function* (_) {
        const account = yield* Effect.orElse(
          yield* userService.getAccountByUsername(input.username),
          () =>
            Effect.fail(
              new AccountNotFoundError(
                `Account with username: ${input.username} not found`,
              ),
            ),
        );

        const user = yield* Effect.orElse(
          yield* userService.getUserById(account.userId),
          () =>
            Effect.fail(
              new UserNotFoundError(
                `User for accountId: ${account.id}, username: ${input.username}, userId ${account.userId} not found`,
              ),
            ),
        );

        if (account.passwordHash == null) {
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
          return yield* Effect.fail(
            new IncorrectPasswordError("Incorrect password"),
          );
        }

        const session = yield* createSession(user.id);
        const sessionCookie = yield* createSessionCookie(session.id);

        setSessionCookie(sessionCookie);
        return redirect("/");
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
        redirect("/");
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
    } as const;
  }),
).pipe(Layer.provide(UserServiceLive));
