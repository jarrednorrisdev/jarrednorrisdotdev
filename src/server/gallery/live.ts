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

export const getImageById = (imageId: number) =>
  Effect.provide(
    Effect.gen(function* () {
      const galleryService = yield* GalleryService;
      const user = yield* galleryService.getImageById(imageId);
      return user;
    }),
    GalleryServiceLive,
  );

export const getImagesByUserId = (userId: string) =>
  Effect.provide(
    Effect.gen(function* () {
      const galleryService = yield* GalleryService;
      const user = yield* galleryService.getImagesByUserId(userId);
      return user;
    }),
    GalleryServiceLive,
  );

export const createImage = (
  imageName: string,
  imageUrl: string,
  imageUserId: string,
) =>
  Effect.provide(
    Effect.gen(function* () {
      const galleryService = yield* GalleryService;
      const user = yield* galleryService.createImage(
        imageName,
        imageUrl,
        imageUserId,
      );
      return user;
    }),
    GalleryServiceLive,
  );
