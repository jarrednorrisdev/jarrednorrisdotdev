import React from "react";

export default function ImageModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <div>img id: {photoId}</div>;
}
