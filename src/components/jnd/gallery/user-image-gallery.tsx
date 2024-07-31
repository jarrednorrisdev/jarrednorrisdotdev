import { ImageGallery } from "~/components/jnd/gallery/image-gallery";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { liveGetUserImagesByIdAction } from "~/server/gallery/queries";

export async function UserImageGallery({ userId }: { userId: string }) {
  const images = await liveGetUserImagesByIdAction(userId);
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
