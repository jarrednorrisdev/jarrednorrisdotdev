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

export async function getOtherUserImages() {
  const user = auth();

  if (!user.userId) {
    throw new Error("User not signed in");
  }

  const images = await db.query.images.findMany({
    where: (model, { ne }) => ne(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return images;
}

export async function getAllImages() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return images;
}

export async function getImage(id: number) {
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) {
    throw new Error("Image not found");
  }

  return image;
}
