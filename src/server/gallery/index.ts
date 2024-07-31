import "server-only";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Context, Effect } from "effect";
import { AuthService } from "~/server/auth";
import { UserNotSignedInError } from "~/server/auth/errors/UserNotSignedInError";
import { DatabaseService } from "~/server/db";
import { db } from "~/server/db";

export const LiveGalleryServiceContext: Context.Context<
  AuthService | DatabaseService
> = Context.empty().pipe(
  Context.add(AuthService, {
    auth: Effect.sync(() => auth()),
    currentUser: Effect.promise(async () => {
      const user = await currentUser();
      if (user === null) {
        throw new UserNotSignedInError();
      }
      return user;
    }),
  }),
  Context.add(DatabaseService, db),
);
