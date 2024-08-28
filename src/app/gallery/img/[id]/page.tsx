import { Effect, Option } from "effect";
import React from "react";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { ImageDisplay } from "~/components/jnd/gallery/image";
import { StyledPage } from "~/components/jnd/StyledPage";
import { getImageById } from "~/server/gallery/live";
import { probeImage } from "~/server/gallery/probeImage";

export default async function GalleryImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imageId);
  if (isNaN(idAsNumber)) {
    return <div>Invalid image id</div>;
  }
  const image = await Effect.runPromise(getImageById(idAsNumber));

  if (!image) {
    return <div>Image not found</div>;
  }

  const imageData = await probeImage(image);

  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: image.name ?? image.id.toString() },
    { label: "Image" },
  ];

  return (
    <>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <StyledPage>
        <div className="h-full space-y-2 p-4">
          <ImageDisplay
            image={image}
            imageData={imageData ? imageData : undefined}
            className="gap-4"
          />
        </div>
      </StyledPage>
    </>
  );
}
