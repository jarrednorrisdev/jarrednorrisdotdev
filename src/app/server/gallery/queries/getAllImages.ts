// import { DatabaseService } from "~/server/db";
// import { Effect } from "effect";
// import { type AuthService } from "~/server/auth";
// import { type Image } from "~/server/db/schema";
// import { type UserNotSignedInError } from "~/server/auth/errors";
// import { LiveGalleryServiceContext } from "..";
// import { DrizzleQueryError } from "~/server/db/errors";

// export function getAllImages(): Effect.Effect<
//   Image[],
//   DrizzleQueryError,
//   DatabaseService | AuthService
// > {
//   return Effect.gen(function* (_) {
//     const dbService = yield* DatabaseService;

//     const images = yield* Effect.tryPromise({
//       try: () =>
//         dbService.query.images.findMany({
//           orderBy: (model, { desc }) => desc(model.createdAt),
//         }),
//       catch: () => {
//         return new DrizzleQueryError("Error querying for images");
//       },
//     });

//     return images;
//   });
// }

// export function liveGetAllImages(): Effect.Effect<
//   Image[],
//   DrizzleQueryError,
//   never
// > {
//   return Effect.provide(getAllImages(), LiveGalleryServiceContext);
// }
