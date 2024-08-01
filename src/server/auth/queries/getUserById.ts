import { type User } from "@clerk/nextjs/server";
import { Effect } from "effect";
import { AuthService, LiveAuthServiceContext } from "~/server/auth";
import { type UserNotFound } from "~/server/auth/errors";

export function getUserById(
  userId: string,
): Effect.Effect<User, UserNotFound, AuthService> {
  return Effect.gen(function* (_) {
    const authService = yield* AuthService;
    const user = yield* authService.getUser(userId);

    return user;
  });
}

export function liveGetUserById(
  userId: string,
): Effect.Effect<User, UserNotFound, never> {
  return Effect.provide(getUserById(userId), LiveAuthServiceContext);
}


