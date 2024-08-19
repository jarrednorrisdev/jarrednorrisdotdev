import { Effect } from "effect";
import { AuthService, AuthServiceLive } from "~/server/auth/authService";
import { UserService, UserServiceLive } from "~/server/auth/userService";

export const getUserById = (userId: string) =>
  Effect.provide(
    Effect.gen(function* () {
      const userService = yield* UserService;
      const user = yield* userService.getUserById(userId);
      return user;
    }),
    UserServiceLive,
  );

export const getAccountByUserId = (userId: string) =>
  Effect.provide(
    Effect.gen(function* () {
      const userService = yield* UserService;
      const user = yield* userService.getAccountByUserId(userId);
      return user;
    }),
    UserServiceLive,
  );

export const getAccountByUsername = (username: string) =>
  Effect.provide(
    Effect.gen(function* () {
      const userService = yield* UserService;
      const user = yield* userService.getAccountByUsername(username);
      return user;
    }),
    UserServiceLive,
  );

export const getCurrentUserId = () =>
  Effect.provide(
    Effect.gen(function* () {
      const authService = yield* AuthService;
      const userId = yield* authService.getCurrentUserId;
      return userId;
    }),
    AuthServiceLive,
  );
