import React from "react";
import { Effect } from "effect";
import { liveGetAllImages } from "~/server/gallery/queries";
import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";

export const dynamic = "force-dynamic";

const breadcrumbLinks = [{ label: "Home", href: "/" }, { label: "Gallery" }];

export default async function GalleryHomePage() {
  const images = await Effect.runPromise(liveGetAllImages());

  return (
    <div className="flex max-h-full flex-grow flex-col ">
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <GalleryImagesList images={images} className="mb-4  p-4" />
    </div>
  );
}
