"use server";

import { Effect } from "effect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signUpFormSchema } from "~/server/auth/actions/signUpFormSchema";
import { AuthService, AuthServiceLive } from "~/server/auth/authService";
import { unauthenticatedAction } from "~/server/auth/safe-action";

export const signUpWithUsernameAction = unauthenticatedAction
  .createServerAction()
  .input(signUpFormSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    // TODO: remove for production
    console.log("Executing signUpWithUsernameAction with input:", input);

    const result = await Effect.runPromise(
      Effect.provide(
        Effect.gen(function* () {
          const authService = yield* AuthService;
          const user = yield* authService.signUpWithUsername(input);
          return user;
        }),
        AuthServiceLive,
      ),
    );

    cookies().set(
      result.sessionCookie.name,
      result.sessionCookie.value,
      result.sessionCookie.attributes,
    );

    console.log("signUpWithUsernameAction completed successfully");
    return redirect("/");
  });
