import { DatabaseService } from "~/server/db";
import { Effect } from "effect";
import { AuthService } from "~/server/auth";
import { images } from "~/server/db/schema";
import { and, eq } from "drizzle-orm";
import { type UserNotSignedInError } from "~/server/auth/errors";
import { LiveGalleryServiceContext } from "..";

export function deleteImageById(
  imageId: number,
): Effect.Effect<void, UserNotSignedInError, AuthService | DatabaseService> {
  return Effect.gen(function* (_) {
    const dbService = yield* _(DatabaseService);
    const authService = yield* _(AuthService);

    const user = yield* _(authService.currentUser);
    yield* _(
      Effect.promise(() =>
        dbService
          .delete(images)
          .where(and(eq(images.id, imageId), eq(images.userId, user.id))),
      ),
    );
  });
}
export function liveDeleteImageById(imageId: number) {
  return Effect.provide(deleteImageById(imageId), LiveGalleryServiceContext);
}
