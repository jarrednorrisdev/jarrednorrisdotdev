import { DatabaseService } from "~/server/db";
import { Effect } from "effect";
import { AuthService } from "~/server/auth";
import { images } from "~/server/db/schema";
import { and, eq } from "drizzle-orm";
import { type UserNotSignedInError } from "~/server/auth/errors";
import { LiveGalleryServiceContext } from "..";
import { type ImageNotFoundError } from "~/server/gallery/errors";

export function deleteImageById(
  imageId: number,
): Effect.Effect<
  void,
  UserNotSignedInError | ImageNotFoundError,
  AuthService | DatabaseService
> {
  return Effect.gen(function* (_) {
    const dbService = yield* DatabaseService;
    const authService = yield* AuthService;

    const user = yield* authService.currentUser;

    yield* Effect.promise(() =>
      dbService
        .delete(images)
        .where(and(eq(images.id, imageId), eq(images.userId, user.id)))
        .returning(),
    );
  });
}
export function liveDeleteImageById(imageId: number) {
  return Effect.provide(deleteImageById(imageId), LiveGalleryServiceContext);
}
