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
      const userSession = yield* authService.getValidatedUserSession;
      return userSession.user?.id;
    }),
    AuthServiceLive,
  );

export const assertAuthenticated = () =>
  Effect.provide(
    Effect.gen(function* () {
      const authService = yield* AuthService;
      const authenticatedUserId = yield* authService.assertAuthenticated;
      return authenticatedUserId.id;
    }),
    AuthServiceLive,
  );
