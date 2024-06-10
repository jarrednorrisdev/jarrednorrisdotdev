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
    <Modal className="h-[95vh] flex max-h-screen max-w-screen-2xl items-start justify-start overflow-y-scroll">
      <ImageView imageId={idAsNumber} />
    </Modal>
  );
}
