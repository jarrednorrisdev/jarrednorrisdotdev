import { Effect } from "effect";
import { ImageGallery } from "~/components/jnd/gallery/image-gallery";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { liveGetUserImagesById } from "~/server/gallery/queries";

export async function UserImageGallery({ userId }: { userId: string }) {
  const images = await Effect.runPromise(liveGetUserImagesById(userId));
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle>My Images</CardTitle>
      </CardHeader>
      <CardContent>
        <ImageGallery images={images} className="flex-grow" />
      </CardContent>
    </Card>
  );
}
