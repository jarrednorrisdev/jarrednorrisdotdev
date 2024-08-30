"use server";

import { Effect } from "effect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signInFormSchema } from "~/server/auth/actions/signInFormSchema";
import { AuthService, AuthServiceLive } from "~/server/auth/authService";
import { unauthenticatedAction } from "~/server/auth/safe-action";

export const signInWithUsernameAction = unauthenticatedAction
  .createServerAction()
  .input(signInFormSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    const result = await Effect.runPromise(
      Effect.provide(
        Effect.gen(function* () {
          const authService = yield* AuthService;
          const user = yield* authService.signInWithUsername(input);
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

    return redirect("/");
  });
