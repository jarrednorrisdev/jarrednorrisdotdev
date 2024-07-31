import { ImageGallery } from "~/components/jnd/gallery/image-gallery";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { liveGetAllImagesAction } from "~/server/gallery/queries";

export async function PublicImageGallery() {
  const images = await liveGetAllImagesAction();

  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle>Public Images</CardTitle>
      </CardHeader>
      <CardContent>
        <ImageGallery images={images} />
      </CardContent>
    </Card>
  );
}
