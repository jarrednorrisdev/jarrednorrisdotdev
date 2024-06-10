import React from "react";
import { ImageView } from "~/app/gallery/_components/ImageView";

export default async function ImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    return <div>Invalid image id</div>;
  }

  return (
    <div className="container flex h-[90dvh] max-h-[90dvh] flex-grow flex-col gap-4 overflow-auto">
      <ImageView imageId={idAsNumber} />
    </div>
  );
}
