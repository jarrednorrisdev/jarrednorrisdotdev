import { Context, Effect } from "effect";
import {
  auth,
  currentUser,
  type User,
  clerkClient,
} from "@clerk/nextjs/server";
import { UserNotSignedInError } from "~/server/auth/errors/UserNotSignedInError";
import { type UserNotFoundError } from "~/server/auth/errors/UserNotFoundError";

type Auth = ReturnType<typeof auth>;

export class AuthService extends Context.Tag("@jnd/AuthService")<
  AuthService,
  {
    readonly auth: Effect.Effect<Auth, never, never>;
    readonly currentUser: Effect.Effect<User, UserNotSignedInError, never>;
    readonly getUser: (
      userId: string,
    ) => Effect.Effect<User, UserNotFoundError, never>;
  }
>() {}

export const LiveAuthServiceContext = Context.empty().pipe(
  Context.add(AuthService, {
    auth: Effect.sync(() => auth()),
    currentUser: Effect.promise(async () => {
      const user = await currentUser();
      if (user === null) {
        throw new UserNotSignedInError();
      }
      return user;
    }),
    getUser: (userId: string) =>
      Effect.promise((signal: AbortSignal) => {
        return clerkClient.users.getUser(userId);
      }),
  }),
);
