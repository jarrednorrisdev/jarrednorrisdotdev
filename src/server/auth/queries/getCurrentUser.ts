import { type User } from "@clerk/nextjs/server";
import { Effect } from "effect";
import { AuthService, LiveAuthServiceContext } from "~/server/auth";
import { type ClerkAuthError } from "~/server/auth/errors";

export function getCurrentUser(): Effect.Effect<
  User | null,
  ClerkAuthError,
  AuthService
> {
  return Effect.gen(function* (_) {
    const authService = yield* AuthService;
    const user = yield* authService.currentUser;
    return user;
  });
}

export function liveGetCurrentUser(): Effect.Effect<
  User | null,
  ClerkAuthError,
  never
> {
  return Effect.provide(getCurrentUser(), LiveAuthServiceContext);
}
