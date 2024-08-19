"use server";

import { Effect } from "effect";
import { redirect } from "next/navigation";
import { createServerAction } from "zsa";
import { signInFormSchema } from "~/server/auth/actions/signInFormSchema";
import { AuthService, AuthServiceLive } from "~/server/auth/authService";
import { unauthenticatedAction } from "~/server/auth/safe-action";

export const signInWithUsernameAction = createServerAction()
  .input(signInFormSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    // TODO: remove for production
    console.log(input);
    ("use server");
    Effect.tryPromise({
      try: async () =>
        Effect.provide(
          AuthService.pipe(
            Effect.andThen((authService) =>
              authService.signInWithUsername(input),
            ),
          ),
          AuthServiceLive,
        ),

      catch: (error) => {
        console.error("Error signing in with username:", error);
        // redirect("/login?error=sign-in-failed");
      },
    });
    // redirect("/");
  });
