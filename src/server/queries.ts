import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";

export async function getCurrentUserImages() {
  const user = auth();

  if (!user.userId) {
    throw new Error("User not signed in");
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return images;
}
