import { Context, Effect, Layer, Option } from "effect";
import {
  AccountNotFoundError,
  EmailAlreadyRegisteredError,
  PasswordEncryptError,
  UserNotFoundError,
  UsernameAlreadyExistsError,
} from "~/server/auth/errors";
import { DrizzleQueryError } from "~/server/db/errors";
import {
  type Account,
  accountTable,
  userTable,
  type User,
} from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { DatabaseService, DatabaseServiceLive } from "~/server/db";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { randomUUID } from "crypto";

export class UserService extends Context.Tag("@jnd/UserService")<
  UserService,
  {
    readonly getUserById: (
      userId: string,
    ) => Effect.Effect<User | null, DrizzleQueryError, never>;
    readonly getAccountByUsername: (
      username: string,
    ) => Effect.Effect<Account | null, DrizzleQueryError, never>;
    readonly getAccountByUserId: (
      username: string,
    ) => Effect.Effect<Account | null, DrizzleQueryError, never>;
    readonly getUserByEmail: (
      email: string,
    ) => Effect.Effect<User | null, DrizzleQueryError, never>;
    readonly getUserByUsername: (
      username: string,
    ) => Effect.Effect<User | null, DrizzleQueryError, never>;
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
    // readonly createPasswordHash: (
    //   password: string,
    // ) => Effect.Effect<string, PasswordEncryptError, never>;
  }
>() {}

export const UserServiceLive = Layer.effect(
  UserService,
  Effect.gen(function* (_) {
    const db = yield* DatabaseService;

    const getUserById = (userId: string) => {
      return Effect.tryPromise({
        try: async () => {
          console.log("searching for user with id", userId);
          const user = await db.query.userTable.findFirst({
            where: eq(userTable.id, userId),
          });
          user
            ? console.log("searching for user with id", userId)
            : console.log("user not found with id", userId);
          return user ?? null;
        },
        catch: (e) => {
          console.error("Error when querying User by UserId:", e);
          return new DrizzleQueryError(
            "Unknown Error querying User with userId " + userId,
            e,
          );
        },
      });
    };

    const getAccountByUsername = (username: string) => {
      return Effect.tryPromise({
        try: async () => {
          const account = await db.query.accountTable.findFirst({
            where: eq(accountTable.username, username),
          });

          return account ?? null;
        },
        catch: (e) => {
          console.error("Error when querying Account by Username:", e);
          return new DrizzleQueryError(
            "Unknown Error querying Account with username " + username,
            e,
          );
        },
      });
    };

    const getAccountByUserId = (userId: string) => {
      return Effect.tryPromise({
        try: async () => {
          const account = await db.query.accountTable.findFirst({
            where: eq(accountTable.userId, userId),
          });

          return account ?? null;
        },
        catch: (e) => {
          console.error("Error when querying Account by UserId:", e);
          return new DrizzleQueryError(
            "Unknown Error querying Account with userId " + userId,
            e,
          );
        },
      });
    };

    const getUserByEmail = (email: string) => {
      return Effect.tryPromise({
        try: async () => {
          const user = await db.query.userTable.findFirst({
            where: eq(userTable.email, email),
          });

          return user ?? null;
        },
        catch: (e) => {
          console.error("Error when querying User by Email:", e);
          return new DrizzleQueryError(
            "Unknown Error querying User with userId " + email,
            e,
          );
        },
      });
    };

    const getUserByUsername = (username: string) =>
      Effect.gen(function* (_) {
        const account = yield* getAccountByUsername(username);

        if (account == null) {
          return null;
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
        catch: (e) => {
          console.error("Error hashing password:", e);
          return new PasswordEncryptError("Error hashing password", e);
        },
      });

    const createUserWithUsername = (input: {
      username: string;
      email: string;
      password: string;
    }) =>
      Effect.gen(function* (_) {
        const existingAccount = yield* getAccountByUsername(input.username);

        if (existingAccount) {
          Effect.logError("Username already exists: ", input.username);
          return yield* Effect.fail(
            new UsernameAlreadyExistsError(
              `Username ${input.username} already exists`,
            ),
          );
        }

        const existingUser = yield* getUserByEmail(input.email);

        if (existingUser) {
          Effect.logError("Email already registered:", input.email);
          return yield* Effect.fail(
            new EmailAlreadyRegisteredError(
              `Email ${input.email} already registered`,
            ),
          );
        }

        const passwordHash = yield* createPasswordHash(input.password);
        // const userId = generateIdFromEntropySize(10); // 16 characters long
        const userId = randomUUID(); // 16 characters long
        // const accountId = generateIdFromEntropySize(10); // 16 characters long
        const accountId = randomUUID(); // 16 characters long

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
          catch: (e) => {
            console.error("Error creating user in userTable", e);
            return new DrizzleQueryError("Error creating user", e);
          },
        });

        if (newUser == null) {
          console.error("Error creating user, insert returned null");
          return yield* Effect.fail(
            new DrizzleQueryError("Error creating user, insert returned null"),
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
          catch: (e) => {
            console.error("Error creating account in accountTable", e);
            return new DrizzleQueryError(
              "Error creating account in accountTable",
              e,
            );
          },
        });

        if (newAccount == null) {
          console.error("Error creating account, returned null");
          return yield* Effect.fail(
            new DrizzleQueryError("Error creating account, returned null"),
          );
        }

        return { user: newUser, account: newAccount };
      });

    return {
      getUserById,
      getUserByEmail,
      getAccountByUsername,
      getAccountByUserId,
      getUserByUsername,
      createPasswordHash,
      createUserWithUsername,
    } as const;
  }),
).pipe(Layer.provide(DatabaseServiceLive));
