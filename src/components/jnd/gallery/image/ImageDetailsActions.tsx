import React from "react";
import { liveGetCurrentUser } from "~/server/auth/queries/getCurrentUser";
import { type Image } from "~/server/db/schema";
import { DeleteButton } from "./DeleteButton"; // Import the Client Component

export async function ImageDetailsActions({ image }: { image: Image }) {
  const currentUser = await liveGetCurrentUser();
  const isUploader = currentUser?.id === image.userId;

  return <div>{isUploader && <DeleteButton image={image} />}</div>;
}
