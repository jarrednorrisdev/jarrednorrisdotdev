"use server";

import { Effect } from "effect";
import { redirect } from "next/navigation";
import { AuthService, AuthServiceLive } from "~/server/auth/authService";
import { authenticatedAction } from "~/server/auth/safe-action";

export const signOutAction = authenticatedAction
  .createServerAction()
  .handler(async ({ input }) => {
    await Effect.runPromise(
      Effect.provide(
        AuthService.pipe(
          Effect.andThen((authService) => authService.signOut()),
        ),
        AuthServiceLive,
      ),
    );

    return redirect("/");
  });
