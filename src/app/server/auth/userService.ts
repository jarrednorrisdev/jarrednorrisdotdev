import { Context, Effect, Layer, Option } from "effect";
import {
  AccountNotFoundError,
  EmailAlreadyRegisteredError,
  PasswordEncryptError,
  UserNotFoundError,
  UsernameAlreadyExistsError,
} from "~/app/server/auth/errors";
import { DrizzleQueryError } from "~/app/server/db/errors";
import {
  type Account,
  accountTable,
  userTable,
  type User,
} from "~/app/server/db/schema";
import { eq } from "drizzle-orm";
import { DatabaseService, DatabaseServiceLive } from "~/app/server/db";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";

export class UserService extends Context.Tag("@jnd/UserService")<
  UserService,
  {
    readonly getUserById: (
      userId: string,
    ) => Effect.Effect<Option.Option<User>, DrizzleQueryError, never>;
    readonly getAccountByUsername: (
      username: string,
    ) => Effect.Effect<Option.Option<Account>, DrizzleQueryError, never>;
    readonly getUserByEmail: (
      email: string,
    ) => Effect.Effect<Option.Option<User>, DrizzleQueryError, never>;
    readonly getUserByUsername: (
      username: string,
    ) => Effect.Effect<Option.Option<User>, DrizzleQueryError, never>;
    readonly createUserWithUsername: (input: {
      username: string;
      email: string;
      password: string;
    }) => Effect.Effect<
      { user: User; account: Account },
      | DrizzleQueryError
      | EmailAlreadyRegisteredError
      | PasswordEncryptError
      | UsernameAlreadyExistsError,
      never
    >;
    readonly createPasswordHash: (
      password: string,
    ) => Effect.Effect<string, PasswordEncryptError, never>;
  }
>() {}

export const UserServiceLive = Layer.effect(
  UserService,
  Effect.gen(function* (_) {
    const db = yield* DatabaseService;

    const getUserById = (userId: string) => {
      return Effect.tryPromise({
        try: async () => {
          const user = await db.query.userTable.findFirst({
            where: eq(userTable.id, userId),
          });

          return user == undefined ? Option.none() : Option.some(user);
        },
        catch: (e) =>
          new DrizzleQueryError(
            "Unknown Error querying User with userId " + userId,
            e,
          ),
      });
    };

    const getUserByEmail = (email: string) => {
      return Effect.tryPromise({
        try: async () => {
          const user = await db.query.userTable.findFirst({
            where: eq(userTable.email, email),
          });

          return user == undefined ? Option.none() : Option.some(user);
        },
        catch: (e) =>
          new DrizzleQueryError(
            "Unknown Error querying User with userId " + email,
            e,
          ),
      });
    };

    const getAccountByUsername = (username: string) => {
      return Effect.tryPromise({
        try: async () => {
          const account = await db.query.accountTable.findFirst({
            where: eq(accountTable.userId, username),
          });

          return account == undefined ? Option.none() : Option.some(account);
        },
        catch: (e) =>
          new DrizzleQueryError(
            "Unknown Error querying Account with username " + username,
            e,
          ),
      });
    };

    const getUserByUsername = (username: string) =>
      Effect.gen(function* (_) {
        const account = Option.getOrNull(yield* getAccountByUsername(username));

        if (account == null) {
          return Option.none();
        }

        return yield* getUserById(account.userId);
      });

    const createPasswordHash = (password: string) =>
      Effect.tryPromise({
        try: async () => {
          const passwordHash = await hash(password, {
            // recommended minimum parameters
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
          });
          return passwordHash;
        },
        catch: (e) => new PasswordEncryptError("Error hashing password", e),
      });

    const createUserWithUsername = (input: {
      username: string;
      email: string;
      password: string;
    }) =>
      Effect.gen(function* (_) {
        const existingAccount = yield* getAccountByUsername(input.username);
        if (existingAccount != null) {
          return yield* Effect.fail(
            new UsernameAlreadyExistsError(
              `Username ${input.username} already exists`,
            ),
          );
        }
        const existingUser = yield* getUserByEmail(input.email);
        if (existingUser != null) {
          return yield* Effect.fail(
            new EmailAlreadyRegisteredError(
              `Email ${input.email} already registered`,
            ),
          );
        }

        const passwordHash = yield* createPasswordHash(input.password);
        const userId = generateIdFromEntropySize(10); // 16 characters long
        const accountId = generateIdFromEntropySize(10); // 16 characters long

        const newUser = yield* Effect.tryPromise({
          try: async () => {
            return await db
              .insert(userTable)
              .values({
                id: userId,
                email: input.email,
              })
              .returning()
              .then((res) => res[0] ?? null);
          },
          catch: (e) => new DrizzleQueryError("Error creating user", e),
        });

        if (newUser == null) {
          return yield* Effect.fail(
            new DrizzleQueryError("Error creating user"),
          );
        }

        const newAccount = yield* Effect.tryPromise({
          try: async () => {
            return await db
              .insert(accountTable)
              .values({
                accountType: "username",
                userId: userId,
                username: input.username,
                passwordHash: passwordHash,
                id: accountId,
              })
              .returning()
              .then((res) => res[0] ?? null);
          },
          catch: (e) => new DrizzleQueryError("Error creating user", e),
        });

        if (newAccount == null) {
          return yield* Effect.fail(
            new DrizzleQueryError("Error creating account"),
          );
        }

        return { user: newUser, account: newAccount };
      });

    return {
      getUserById,
      getUserByEmail,
      getAccountByUsername,
      getUserByUsername,
      createPasswordHash,
      createUserWithUsername,
    } as const;
  }),
).pipe(Layer.provide(DatabaseServiceLive));
