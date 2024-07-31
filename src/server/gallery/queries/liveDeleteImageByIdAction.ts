"use server";
import { Effect } from "effect";
import { liveDeleteImageById } from "./deleteImageById";

export async function liveDeleteImageByIdAction(imageId: number) {
  return Effect.runPromise(liveDeleteImageById(imageId));
}
