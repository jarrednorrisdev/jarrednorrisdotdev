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
    <div className="container flex h-full flex-grow flex-col flex-wrap items-stretch gap-4 p-4">
      <ImageView imageId={idAsNumber} />
    </div>
  );
}
