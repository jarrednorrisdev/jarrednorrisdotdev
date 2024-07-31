"use client";

import { Button } from "~/components/ui/button";
import { liveDeleteImageByIdAction } from "~/server/gallery/queries/liveDeleteImageByIdAction";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteButton({ imageId }: { imageId: number }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleDelete = () => {
    setError(null);
    startTransition(async () => {
      try {
        await liveDeleteImageByIdAction(imageId);
        // Optionally, you can add a small delay to ensure the deletion is processed
        // await new Promise(resolve => setTimeout(resolve, 500));
        router.back();
      } catch (err) {
        console.error("Failed to delete image:", err);
        setError("Failed to delete image. Please try again.");
      }
    });
  };

  return (
    <>
      <Button onClick={handleDelete} disabled={isPending}>
        {isPending ? "Deleting..." : "Delete"}
      </Button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </>
  );
}
