import React from "react";
import { Modal } from "~/components/modal";
import { ImageDisplay } from "~/components/jnd/gallery/image-display";
import { liveGetImageById } from "~/server/gallery/queries";
import { Effect } from "effect";

export default async function ImageModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    return <div>Invalid image id</div>;
  }
  const image = await Effect.runPromise(liveGetImageById(idAsNumber));

  return (
    <Modal className="h-[90dvh] max-h-[90dvh] min-h-[90dvh] max-w-[90%]">
      <ImageDisplay image={image} className="flex-grow" />
    </Modal>
  );
}
