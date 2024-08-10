import { DatabaseService } from "~/server/db";
import { Effect } from "effect";
import { AuthService } from "~/server/auth";
import { images } from "~/server/db/schema";
import { and, eq } from "drizzle-orm";
import {
  UserNotSignedInError,
  type ClerkAuthError,
} from "~/server/auth/errors";
import { ImageNotFoundError } from "~/server/gallery/errors";
import { LiveGalleryServiceContext } from "~/server/gallery";

export function deleteImageById(
  imageId: number,
): Effect.Effect<
  void,
  ImageNotFoundError | UserNotSignedInError | ClerkAuthError,
  AuthService | DatabaseService
> {
  return Effect.gen(function* (_) {
    const dbService = yield* DatabaseService;
    const authService = yield* AuthService;

    const user = yield* authService.currentUser;

    if (user == null) {
      return yield* Effect.fail(new UserNotSignedInError());
    }

    yield* Effect.tryPromise({
      try: () =>
        dbService
          .delete(images)
          .where(and(eq(images.id, imageId), eq(images.userId, user.id))),
      catch: () => {
        return new ImageNotFoundError("Image not found");
      },
    });
  });
}
export function liveDeleteImageById(imageId: number) {
  return Effect.provide(deleteImageById(imageId), LiveGalleryServiceContext);
}
