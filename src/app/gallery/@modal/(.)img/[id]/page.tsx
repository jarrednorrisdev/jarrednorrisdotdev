import React from "react";
import { Modal } from "~/components/modal";
import { ImageView } from "~/app/gallery/_components/ImageView";

export default async function ImageModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    return <div>Invalid image id</div>;
  }

  return (
    <Modal className="min-w-max w-max">
      <ImageView imageId={idAsNumber} />
    </Modal>
  );
}
