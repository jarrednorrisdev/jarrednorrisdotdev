import { DatabaseService } from "~/server/db";
import { Effect } from "effect";
import { type AuthService } from "~/server/auth";
import { type Image } from "~/server/db/schema";
import { type UserNotSignedInError } from "~/server/auth/errors";
import { LiveGalleryServiceContext } from "..";

export function getAllImages(): Effect.Effect<
  Image[],
  UserNotSignedInError,
  DatabaseService | AuthService
> {
  return Effect.gen(function* (_) {
    const dbService = yield* DatabaseService;

    const images = yield* _(
      Effect.promise(() =>
        dbService.query.images.findMany({
          orderBy: (model, { desc }) => desc(model.createdAt),
        }),
      ),
    );

    return images;
  });
}

export function liveGetAllImages(): Effect.Effect<
  Image[],
  UserNotSignedInError,
  never
> {
  return Effect.provide(getAllImages(), LiveGalleryServiceContext);
}


