import { createServerAction } from "zsa";
import { Effect } from "effect";

import { z } from "zod";
import { AuthService, AuthServiceLive } from "~/app/server/auth/authService";
import { unauthenticatedAction } from "~/app/server/auth/safe-action";

export const formSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be at least 5 characters")
    .max(31, "Username must be at most 31 characters"),
  password: z
    .string()
    .min(7, "Password must be at least 7 characters")
    .max(31, "Password must be at most 31 characters"),
});

export const signInWithUsernameAction = unauthenticatedAction
  .createServerAction()
  .input(formSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    // TODO: remove for production
    console.log(input);

    return Effect.provide(
      AuthService.pipe(
        Effect.andThen((authService) => authService.signInWithUsername(input)),
      ),
      AuthServiceLive,
    );
  });
