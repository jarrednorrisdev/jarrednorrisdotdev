import React from "react";
import { Effect } from "effect";
import { liveGetAllImages } from "~/server/gallery/queries";
import { GalleryImagesList } from "~/components/jnd/gallery";
import { GalleryTopNav } from "~/components/jnd/gallery";
import StyledPage from "~/components/jnd/StyledPage";

export const dynamic = "force-dynamic";

const breadcrumbLinks = [{ label: "Home", href: "/" }, { label: "Gallery" }];

export default async function GalleryHomePage() {
  const images = await Effect.runPromise(liveGetAllImages());

  return (
    <StyledPage>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <GalleryImagesList images={images} className="mb-4 p-4" />
    </StyledPage>
  );
}
