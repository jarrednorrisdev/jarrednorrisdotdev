import { DatabaseService } from "~/server/db";
import { Effect } from "effect";
import { type Image } from "~/server/db/schema";
import { type UserNotSignedInError } from "~/server/auth/errors";
import { LiveGalleryServiceContext } from "..";

export function getImageById(
  imageId: number,
): Effect.Effect<Image, UserNotSignedInError, DatabaseService> {
  return Effect.gen(function* (_) {
    const dbService = yield* DatabaseService;

    const image = yield* Effect.promise(() =>
      dbService.query.images.findFirst({
        where: (model, { eq }) => eq(model.id, imageId),
      }),
    );

    if (!image) {
      throw new Error("Image not found");
    }

    return image;
  });
}

export function liveGetImageById(
  imageId: number,
): Effect.Effect<Image, UserNotSignedInError, never> {
  return Effect.provide(getImageById(imageId), LiveGalleryServiceContext);
}

export async function liveGetImageByIdAction(imageId: number) {
  "use server";
  return await Effect.runPromise(liveGetImageById(imageId));
}
