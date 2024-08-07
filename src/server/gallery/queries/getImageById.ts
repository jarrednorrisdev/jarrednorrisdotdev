import { DatabaseService } from "~/server/db";
import { Effect } from "effect";
import { type Image } from "~/server/db/schema";
import { LiveGalleryServiceContext } from "..";
import { ImageNotFoundError } from "~/server/gallery/errors";
import { DrizzleQueryError } from "~/server/db/errors";

export function getImageById(imageId: number) {
  return Effect.gen(function* (_) {
    const dbService = yield* DatabaseService;

    const image = yield* Effect.tryPromise({
      try: () =>
        dbService.query.images.findFirst({
          where: (model, { eq }) => eq(model.id, imageId),
        }),
      catch: (error) =>
        new DrizzleQueryError("Error querying for image", error),
    });

    if (image === undefined) {
      yield* Effect.fail(new ImageNotFoundError("Image not found"));
    }

    return image!;
  });
}

export function liveGetImageById(
  imageId: number,
): Effect.Effect<Image, ImageNotFoundError | DrizzleQueryError, never> {
  return Effect.provide(getImageById(imageId), LiveGalleryServiceContext);
}
