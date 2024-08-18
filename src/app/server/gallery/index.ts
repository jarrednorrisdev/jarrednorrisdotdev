import { Context, Effect, Layer, Option } from "effect";
import { AuthServiceLive } from "~/app/server/auth/authService";

import { UserService, UserServiceLive } from "~/app/server/auth/userService";
import { DatabaseService, DatabaseServiceLive } from "~/app/server/db";
import { DrizzleQueryError } from "~/app/server/db/errors";

import { type Image } from "~/app/server/db/schema";

export class GalleryService extends Context.Tag("@jnd/GalleryService")<
  GalleryService,
  {
    readonly getAllImages: () => Effect.Effect<
      Option.Option<Image[]>,
      unknown,
      never
    >;
    readonly getImageById: (
      id: number,
    ) => Effect.Effect<Option.Option<Image>, unknown, never>;
    readonly getImagesByUserId: (
      userId: string,
    ) => Effect.Effect<Option.Option<Image[]>, unknown, never>;
    readonly getImagesNotByUserId: (
      userId: string,
    ) => Effect.Effect<Option.Option<Image[]>, unknown, never>;
  }
>() {}

// todo solve Option usage
export const GalleryServiceLive = Layer.effect(
  GalleryService,
  Effect.gen(function* (_) {
    const dbService = yield* DatabaseService;

    const getAllImages = () => {
      return Effect.tryPromise({
        try: async () => {
          const images = await dbService.query.imageTable.findMany({
            orderBy: (model, { desc }) => desc(model.createdAt),
          });
          return images.length === 0 ? Option.none() : Option.some(images);
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
          return image == undefined ? Option.none() : Option.some(image);
        },
        catch: (error) =>
          new DrizzleQueryError("Error querying for image", error),
      });
    };

    const getImagesByUserId = (userId: string) => {
      return Effect.tryPromise({
        try: async () => {
          const images = await dbService.query.imageTable.findMany({
            where: (model, { eq }) => eq(model.userId, userId),
            orderBy: (model, { desc }) => desc(model.createdAt),
          });
          return images.length < 1 ? Option.none() : Option.some(images);
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
          return images.length < 1 ? Option.none() : Option.some(images);
        },
        catch: (error) =>
          new DrizzleQueryError("Error querying for image", error),
      });
    };

    return {
      getAllImages,
      getImageById,
      getImagesByUserId,
      getImagesNotByUserId,
    } as const;
  }),
).pipe(Layer.provide(DatabaseServiceLive));
