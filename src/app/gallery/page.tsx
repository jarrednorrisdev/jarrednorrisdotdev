import { ImageGallery } from "~/app/gallery/_components/ImageGallery";
import { TypographyH1, TypographyH3 } from "~/components/typography/typography";
import { ImageGalleryUpload } from "./_components/ImageGalleryUpload";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex flex-col flex-wrap items-center justify-center gap-4 p-4 md:container md:mx-auto md:overflow-auto ">
      <TypographyH1>Image Gallery</TypographyH1>
      <div className="flex flex-col gap-4">
        <TypographyH3>Upload an image</TypographyH3>
        <ImageGalleryUpload />
      </div>
      <ImageGallery />
    </main>
  );
}
