import React from "react";
import { Effect } from "effect";
import { liveGetAllImages } from "~/server/gallery/queries";
import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";
import { ScrollArea } from "~/components/ui/scroll-area";

export const dynamic = "force-dynamic";

const breadcrumbLinks = [{ label: "Home", href: "/" }, { label: "Gallery" }];

export default async function GalleryHomePage() {
  const images = await Effect.runPromise(liveGetAllImages());

	return (
    <>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <ScrollArea type="always">
        <StyledPage>
          <div className="p-4">
            <GalleryImagesList images={images} />
          </div>
        </StyledPage>
      </ScrollArea>
    </>
  );
}
