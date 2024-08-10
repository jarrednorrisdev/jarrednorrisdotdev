import { DatabaseService } from "~/server/db";
import { Effect } from "effect";
import { AuthService } from "~/server/auth";
import { type Image } from "~/server/db/schema";
import {
  type ClerkAuthError,
  UserNotSignedInError,
} from "~/server/auth/errors";
import { LiveGalleryServiceContext } from "~/server/gallery";
import { DrizzleQueryError } from "~/server/db/errors";

export function getOtherUserImages(): Effect.Effect<
  Image[],
  DrizzleQueryError | UserNotSignedInError | ClerkAuthError,
  DatabaseService | AuthService
> {
  return Effect.gen(function* (_) {
    const authService = yield* AuthService;
    const dbService = yield* DatabaseService;

    const user = yield* authService.currentUser;

    if (user == null) {
      return yield* Effect.fail(new UserNotSignedInError());
    }

    const images = yield* Effect.tryPromise({
      try: () =>
        dbService.query.images.findMany({
          where: (model, { ne }) => ne(model.userId, user.id),
          orderBy: (model, { desc }) => desc(model.createdAt),
        }),
      catch: () => {
        return new DrizzleQueryError("Error querying for images");
      },
    });

    return images;
  });
}

export function liveGetOtherUserImages(): Effect.Effect<
  Image[],
  DrizzleQueryError | UserNotSignedInError | ClerkAuthError,
  never
> {
  return Effect.provide(getOtherUserImages(), LiveGalleryServiceContext);
}
