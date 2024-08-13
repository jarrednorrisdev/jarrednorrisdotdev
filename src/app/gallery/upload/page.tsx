import { ImageUploadCard } from "~/components/jnd/gallery/ImageUploadCard";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";

const breadcrumbLinks = [{ label: "Home", href: "/" }, { label: "Upload" }];

export default async function GalleryPage() {
  return (
    <StyledPage>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />

      <main className="flex flex-grow flex-col gap-2 overflow-y-auto p-4">
        <ImageUploadCard className="" />
      </main>
    </StyledPage>
  );
}

//
