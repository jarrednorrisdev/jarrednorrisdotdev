import { ImageUploadCard } from "~/components/jnd/gallery/ImageUploadCard";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";
import { ScrollArea } from "~/components/ui/scroll-area";

const breadcrumbLinks = [{ label: "Home", href: "/" }, { label: "Upload" }];

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  return (
    <>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <ScrollArea type="always">
        <StyledPage>
          <div className="p-4">
            <ImageUploadCard className="flex-grow" />
          </div>
        </StyledPage>
      </ScrollArea>
    </>
  );
}

//
