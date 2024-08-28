"use server";

import { Effect } from "effect";
import { redirect } from "next/navigation";
import { GalleryService, GalleryServiceLive } from "~/server/gallery/index";
import { authenticatedAction } from "~/server/auth/safe-action";
import { deleteImageSchema } from "~/server/gallery/deleteImageActionSchema";

export const deleteImageAction = authenticatedAction
  .createServerAction()
  .input(deleteImageSchema)
  .handler(async ({ input }) => {
    // TODO: remove for production
    console.error(`Attempting to delete image with id: ${input.imageId}`);
    const result = await Effect.runPromise(
      Effect.provide(
        Effect.gen(function* () {
          const galleryService = yield* GalleryService;
          const user = yield* galleryService.deleteImageById(input.imageId);
          return user;
        }),
        GalleryServiceLive,
      ),
    );

    return redirect("/gallery");
  });
