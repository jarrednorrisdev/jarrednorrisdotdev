import React from "react";
import { Effect } from "effect";
import { liveGetCurrentUser } from "~/server/auth/queries/getCurrentUser";
import { liveGetAllImages } from "~/server/gallery/queries";

import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { GalleryNavSheet } from "~/components/jnd/gallery/GalleryNavSheet";
import { GallerySideNavContents } from "~/components/jnd/gallery/GallerySideNavContents";

export const dynamic = "force-dynamic";

const breadcrumbLinks = [{ label: "Home", href: "/" }, { label: "Gallery" }];

export default async function GalleryHomePage() {
  const images = await Effect.runPromise(liveGetAllImages());

  return (
    <div className="flex h-full flex-grow flex-col overflow-y-auto">
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <main className="flex flex-grow flex-col gap-2 overflow-y-auto p-4">
        <GalleryImagesList images={images} />
      </main>
    </div>
  );
}
