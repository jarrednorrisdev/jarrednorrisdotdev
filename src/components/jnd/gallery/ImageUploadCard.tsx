import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ImageGalleryUpload } from "~/components/jnd/gallery/ImageGalleryUpload";
import { cn } from "~/lib/utils";
import { getCurrentUserId } from "~/server/auth/live";
import { Effect, Option } from "effect";

export async function ImageUploadCard({ className }: { className?: string }) {
  const userId = await Effect.runPromise(getCurrentUserId());

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Upload an image</CardTitle>
      </CardHeader>
      <CardContent>
        {userId && <ImageGalleryUpload userId={userId} />}
      </CardContent>
    </Card>
  );
}
