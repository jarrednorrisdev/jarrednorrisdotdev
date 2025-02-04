// import { env } from "~/env";
import { createServerActionProcedure } from "zsa";
import { Effect } from "effect";
import { AuthService } from "~/server/auth/authService";

// function shapeErrors({ err }: any) {
//   const isAllowedError = err instanceof PublicError;
//   // let's all errors pass through to the UI so debugging locally is easier
//   const isDev = env.NODE_ENV === "development";
//   if (isAllowedError || isDev) {
//     console.error(err);
//     return {
//       code: err.code ?? "ERROR",
//       message: `${isDev ? "DEV ONLY ENABLED - " : ""}${err.message}`,
//     };
//   } else {
//     return {
//       code: "ERROR",
//       message: "Something went wrong",
//     };
//   }
// }

export const authenticatedAction = createServerActionProcedure()
  // .experimental_shapeError(shapeErrors)
  .handler(async () => {
    Effect.gen(function* (_) {
      const authService = yield* AuthService;
      const user = yield* authService.assertAuthenticated;
      return { user };
    });
  });

export const unauthenticatedAction = createServerActionProcedure()
  // .experimental_shapeError(shapeErrors)
  .handler(async () => {
    return { user: undefined };
  });
