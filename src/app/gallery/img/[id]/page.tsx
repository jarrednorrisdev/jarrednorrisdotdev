import React from "react";
import { ImageDisplay } from "~/components/jnd/gallery/image-display";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { type Image } from "~/server/db/schema";
import { liveGetImageByIdAction } from "~/server/gallery/queries";

export default async function GalleryImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    return <div>Invalid image id</div>;
  }
  const image = await liveGetImageByIdAction(idAsNumber);

  return (
    <div className="container flex h-full flex-grow flex-col flex-wrap items-stretch gap-4 py-4">
      <ImagePageBreadcrumb image={image} />
      <ImageDisplay image={image} className="flex-grow" />
    </div>
  );
}

function ImagePageBreadcrumb({ image }: { image: Image }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/gallery">Gallery</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{image.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
