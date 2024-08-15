import { Console, Context, Effect } from "effect";
import {
  auth,
  currentUser,
  type User,
  clerkClient,
} from "@clerk/nextjs/server";
import { UserNotFoundError } from "~/server/auth/errors/UserNotFoundError";
import { ClerkAuthError } from "~/server/auth/errors/ClerkAuthError";

type Auth = ReturnType<typeof auth>;

export class AuthService extends Context.Tag("@jnd/AuthService")<
  AuthService,
  {
    readonly auth: Effect.Effect<Auth, never, never>;
    readonly currentUser: Effect.Effect<User | null, ClerkAuthError, never>;
    readonly getUser: (
      userId: string,
    ) => Effect.Effect<User, UserNotFoundError, never>;
  }
>() {}

export const LiveAuthServiceContext = Context.empty().pipe(
  Context.add(AuthService, {
    auth: Effect.sync(() => auth()),
    currentUser: Effect.catchAll(
      Effect.promise(() => currentUser()),
      (error) =>
        Effect.flatMap(
          Console.log(`Error fetching current user: ${String(error)}`),
          () => Effect.fail(new ClerkAuthError()),
        ),
    ),
    getUser: (userId: string) =>
      Effect.catchAll(
        Effect.promise(() => clerkClient.users.getUser(userId)),
        () => Effect.fail(new UserNotFoundError()),
      ),
  }),
);
