"use server";
import { Effect } from "effect";
import { liveDeleteImageById } from "./deleteImageById";
import { redirect } from "next/navigation";

export async function liveDeleteImageByIdAction(
  imageId: number,
  _formData: FormData,
) {
  try {
    await Effect.runPromise(liveDeleteImageById(imageId));
    // Redirect to the gallery page after successful deletion
  } catch (error) {
    // Handle any errors here
    console.error("Error deleting image:", error);
    // You might want to redirect to an error page or back to the gallery with an error message
    // todo implement error page
    redirect("/gallery?error=delete-failed");
  } finally {
    redirect("/gallery");
  }
}
