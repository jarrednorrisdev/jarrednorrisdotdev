import { getCurrentUserImages } from "~/server/queries";
import {
  GalleryTitle,
  ImageGallery,
} from "~/app/gallery/_components/image-gallery";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export async function MyImageGallery() {
  const images = await getCurrentUserImages();
	return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle>My Images</CardTitle>
      </CardHeader>
      <CardContent>
        <ImageGallery
          images={images}
          galleryTitle={<GalleryTitle>My Images</GalleryTitle>}
        />
      </CardContent>
    </Card>
  );
}
