import Image from "next/image";
import React from "react";
import { getImage } from "~/server/queries";

export default async function ImageModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    return <div>Invalid image id</div>;
  }

  const image = await getImage(idAsNumber);
  return (
    <div>
      <Image src={image.url} alt={image.name} width={256} height={256} />
    </div>
  );
}
