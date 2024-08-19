// import { DatabaseService } from "~/server/db";
// import { Effect } from "effect";
// import { type Image } from "~/server/db/schema";
// import { type UserNotSignedInError } from "~/server/auth/errors";
// import { LiveGalleryServiceContext } from "..";

// export function getUserImagesById(
//   userId: string,
// ): Effect.Effect<Image[], UserNotSignedInError, DatabaseService> {
//   return Effect.gen(function* (_) {
//     const dbService = yield* DatabaseService;

//     const images = yield* Effect.promise(() =>
//       dbService.query.images.findMany({
//         where: (model, { eq }) => eq(model.userId, userId),
//         orderBy: (model, { desc }) => desc(model.createdAt),
//       }),
//     );

//     return images;
//   });
// }

// export function liveGetUserImagesById(
//   userId: string,
// ): Effect.Effect<Image[], UserNotSignedInError, never> {
//   return Effect.provide(getUserImagesById(userId), LiveGalleryServiceContext);
// }
