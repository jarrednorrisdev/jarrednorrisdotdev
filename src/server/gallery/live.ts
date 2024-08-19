import { Effect } from "effect";
import { GalleryService, GalleryServiceLive } from "~/server/gallery";

export const getAllImages = () =>
  Effect.provide(
    Effect.gen(function* () {
      const galleryService = yield* GalleryService;
      const user = yield* galleryService.getAllImages();
      return user;
    }),
    GalleryServiceLive,
  );
