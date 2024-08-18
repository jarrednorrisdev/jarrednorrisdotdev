// import { DatabaseService } from "~/server/db";
// import { Effect } from "effect";
// import { imageTable } from "~/server/db/schema";
// import { and, eq } from "drizzle-orm";
// import { UserNotSignedInError } from "~/server/auth/errors";
// import { ImageNotFoundError } from "~/server/gallery/errors";
// import { AuthService } from "~/server/auth/authService";

// export function deleteImageById(
//   imageId: number,
//   sessionId: string,
// ): Effect.Effect<
//   void,
//   ImageNotFoundError | UserNotSignedInError,
//   AuthService | DatabaseService
// > {
//   return Effect.gen(function* (_) {
//     const dbService = yield* DatabaseService;
//     const authService = yield* AuthService;

// 		const userId = yield* authService.getCurrentUserId(sessionId);
		

//     if (user == null) {
//       return yield* Effect.fail(new UserNotSignedInError());
//     }

//     yield* Effect.tryPromise({
//       try: () =>
//         dbService
//           .delete(imageTable)
//           .where(
//             and(eq(imageTable.id, imageId), eq(imageTable.userId, user.id)),
//           ),
//       catch: () => {
//         return new ImageNotFoundError("Image not found");
//       },
//     });
//   });
// }
// export function liveDeleteImageById(imageId: number, sessionId: string) {
//   return Effect.provide(
//     deleteImageById(imageId, sessionId),
//     LiveGalleryServiceContext,
//   );
// }
