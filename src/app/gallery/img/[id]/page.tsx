import React from "react";
import { Effect } from "effect";
import { liveGetImageById } from "~/server/gallery/queries";

import { ImageDisplay } from "~/components/jnd/gallery/image/ImageDisplay";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";
import { probeImage } from "~/server/gallery/probeImage";
import { TypographyP } from "~/components/typography";

export default async function GalleryImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imageId);
  if (isNaN(idAsNumber)) {
    return <div>Invalid image id</div>;
  }
  const image = await Effect.runPromise(liveGetImageById(idAsNumber));
  const imageData = await probeImage(image);

  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    // { label: image.name },
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
