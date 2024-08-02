import { type User } from "@clerk/nextjs/server";
import { Effect } from "effect";
import { AuthService, LiveAuthServiceContext } from "~/server/auth";

export function getCurrentUser(): Effect.Effect<User, never, AuthService> {
  return Effect.gen(function* (_) {
    const authService = yield* AuthService;
    const user = yield* authService.currentUser;

    return user;
  });
}

export function liveGetCurrentUser(): Effect.Effect<User, never, never> {
  return Effect.provide(getCurrentUser(), LiveAuthServiceContext);
}
