import React from "react";
import { Effect } from "effect";
import { liveGetImageById } from "~/server/gallery/queries";

import { ImageDisplay } from "~/components/jnd/gallery/image/ImageDisplay";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";

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

  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: image.name },
  ];

  return (
    <StyledPage>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <main className="flex flex-grow flex-col">
        <ImageDisplay image={image} className="flex-grow" />
      </main>
    </StyledPage>
  );
}
