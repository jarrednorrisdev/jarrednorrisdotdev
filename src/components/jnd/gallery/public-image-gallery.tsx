import { Effect } from "effect";
import { ImageGallery } from "~/components/jnd/gallery/image-gallery";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { liveGetAllImages } from "~/server/gallery/queries";

export async function PublicImageGallery() {
  const images = await Effect.runPromise(liveGetAllImages());

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
