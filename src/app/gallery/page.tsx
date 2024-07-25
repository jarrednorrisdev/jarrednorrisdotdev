import { MyImageGallery } from "~/app/gallery/_components/my-image-gallery";
import { TypographyH1, TypographyH3 } from "~/components/typography/typography";
import { ImageGalleryUpload } from "./_components/ImageGalleryUpload";
import { PublicImageGallery } from "./_components/public-image-gallery";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex h-full flex-grow flex-col flex-wrap items-stretch gap-4 p-4">
      <TypographyH1>Image Gallery</TypographyH1>
      <div className="flex flex-col gap-4">
        <TypographyH3>Upload an image</TypographyH3>
        <ImageGalleryUpload />
      </div>
      <div className="flex gap-4">
        <MyImageGallery />
        <PublicImageGallery />
      </div>
    </main>
  );
}
