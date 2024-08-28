import { eq } from "drizzle-orm";
import { Context, Effect, Layer } from "effect";
import { AuthService, AuthServiceLive } from "~/server/auth/authService";
import {
  type GetSessionCookieError,
  NotAuthenticatedError,
  type ValidateSessionError,
} from "~/server/auth/errors";
import { DatabaseService, DatabaseServiceLive } from "~/server/db";
import { DrizzleQueryError } from "~/server/db/errors";

import { imageTable, type Image } from "~/server/db/schema";
import { ImageNotFoundError } from "~/server/gallery/errors";

export class GalleryService extends Context.Tag("@jnd/GalleryService")<
  GalleryService,
  {
    readonly getAllImages: () => Effect.Effect<
      Image[] | null,
      DrizzleQueryError,
      never
    >;
    readonly getImageById: (
      id: number,
    ) => Effect.Effect<Image | null, DrizzleQueryError, never>;
    readonly createImage: (
      imageName: string,
      imageUrl: string,
      imageUserId: string,
    ) => Effect.Effect<Image | null, DrizzleQueryError, never>;
    readonly getImagesByUserId: (
      userId: string,
    ) => Effect.Effect<Image[] | null, DrizzleQueryError, never>;
    readonly getImagesNotByUserId: (
      userId: string,
    ) => Effect.Effect<Image[] | null, DrizzleQueryError, never>;
    readonly deleteImageById: (
      imageId: number,
    ) => Effect.Effect<
      void,
      | ValidateSessionError
      | NotAuthenticatedError
      | DrizzleQueryError
      | ImageNotFoundError
      | GetSessionCookieError,
      never
    >;
  }
>() {}

// todo solve Option usage
export const GalleryServiceLive = Layer.effect(
  GalleryService,
  Effect.gen(function* (_) {
    const dbService = yield* DatabaseService;
    const authService = yield* AuthService;

    const getAllImages = () => {
      return Effect.tryPromise({
        try: async () => {
          const images = await dbService.query.imageTable.findMany({
            orderBy: (model, { desc }) => desc(model.createdAt),
          });
          return images.length > 0 ? images : null;
        },
        catch: () => {
          return new DrizzleQueryError("Error querying for images");
        },
      });
    };

    const getImageById = (id: number) => {
      return Effect.tryPromise({
        try: async () => {
          const image = await dbService.query.imageTable.findFirst({
            where: (model, { eq }) => eq(model.id, id),
          });
          return image ?? null;
        },
        catch: (error) =>
          new DrizzleQueryError("Error querying for image", error),
      });
    };

    const createImage = (
      imageName: string,
      imageUrl: string,
      imageUserId: string,
    ) => {
      return Effect.tryPromise({
        try: async () => {
          const image = await dbService
            .insert(imageTable)
            .values({
              name: imageName,
              url: imageUrl,
              userId: imageUserId,
            })
            .returning()
            .then((res) => res[0]);
          return image ?? null;
        },
        catch: (error) => new DrizzleQueryError("Error creating image", error),
      });
    };

    const getImagesByUserId = (userId: string) => {
      return Effect.tryPromise({
        try: async () => {
          const images = await dbService.query.imageTable.findMany({
            where: (model, { eq }) => eq(model.userId, userId),
            orderBy: (model, { desc }) => desc(model.createdAt),
          });
          return images.length > 0 ? images : null;
        },
        catch: (error) =>
          new DrizzleQueryError("Error querying for image", error),
      });
    };

    const getImagesNotByUserId = (userId: string) => {
      return Effect.tryPromise({
        try: async () => {
          const images = await dbService.query.imageTable.findMany({
            where: (model, { ne }) => ne(model.userId, userId),
            orderBy: (model, { desc }) => desc(model.createdAt),
          });
          return images.length > 0 ? images : null;
        },
        catch: (error) =>
          new DrizzleQueryError("Error querying for image", error),
      });
    };

    const deleteImageById = (imageId: number) =>
      Effect.gen(function* (_) {
        console.log("asserting authenticated user");
        const authenticatedUserId = yield* authService.assertAuthenticated;

        if (!authenticatedUserId?.id) {
          return yield* Effect.fail(
            new NotAuthenticatedError(
              "User is not authenticated, to delete this image please sign in",
            ),
          );
        }
        console.log("successfully asserted authenticated user");

        console.log("getting image by id");
        const image = yield* getImageById(imageId);

        if (!image) {
          return yield* Effect.fail(new ImageNotFoundError("Image not found"));
        }
        console.log("successfully got image by id");

        console.log("checking if image belongs to authenticated user");
        if (image.userId !== authenticatedUserId?.id) {
          return yield* Effect.fail(
            new NotAuthenticatedError(
              "User is not authenticated, are you signed in as the correct user?",
            ),
          );
        }
        console.log("image belongs to authenticated user");

        console.log("deleting image");
        return yield* Effect.tryPromise({
          try: async () => {
            const deletedImage = await dbService
              .delete(imageTable)
              .where(eq(imageTable.id, imageId))
              .returning();
            return deletedImage;
          },
          catch: (error) =>
            new DrizzleQueryError("Error querying for image", error),
        });
      });

    return {
      getAllImages,
      getImageById,
      createImage,
      getImagesByUserId,
      getImagesNotByUserId,
      deleteImageById,
    } as const;
  }),
).pipe(Layer.provide(DatabaseServiceLive), Layer.provide(AuthServiceLive));
