import { type User } from "@clerk/nextjs/server";
import { Effect } from "effect";
import { UserNotSignedInError } from "~/server/auth/errors";
import { AuthService, LiveAuthServiceContext } from "~/server/auth";

export function getCurrentUser(): Effect.Effect<
  User,
  UserNotSignedInError,
  AuthService
> {
  return Effect.gen(function* (_) {
    const authService = yield* AuthService;
    const user = yield* authService.currentUser;

    if (user === null) {
      yield* Effect.fail(new UserNotSignedInError());
    }

    return user;
  });
}

export function liveGetCurrentUser(): Effect.Effect<
  User,
  UserNotSignedInError,
  never
> {
  return Effect.provide(getCurrentUser(), LiveAuthServiceContext);
}


