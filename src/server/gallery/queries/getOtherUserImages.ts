import { DatabaseService } from "~/server/db";
import { Effect } from "effect";
import { AuthService } from "~/server/auth";
import { type Image } from "~/server/db/schema";
import { type UserNotSignedInError } from "~/server/auth/errors";
import { LiveGalleryServiceContext } from "~/server/gallery";

export function getOtherUserImages(): Effect.Effect<
  Image[],
  UserNotSignedInError,
  DatabaseService | AuthService
> {
  return Effect.gen(function* (_) {
    const authService = yield* AuthService;
    const dbService = yield* DatabaseService;

    const user = yield* authService.currentUser;

    const images = yield* Effect.promise(() =>
      dbService.query.images.findMany({
        where: (model, { ne }) => ne(model.userId, user.id),
        orderBy: (model, { desc }) => desc(model.createdAt),
      }),
    );

    return images;
  });
}

export function liveGetOtherUserImages(): Effect.Effect<
  Image[],
  UserNotSignedInError,
  never
> {
  return Effect.provide(getOtherUserImages(), LiveGalleryServiceContext);
}

export async function liveGetOtherUserImagesAction() {
  "use server";
  return await Effect.runPromise(liveGetOtherUserImages());
}
