import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { type Image } from "~/server/db/schema";
import { TypographyP } from "~/components/typography/typography";
import { cn } from "~/lib/utils";
import { liveGetUserByIdAction } from "~/server/auth/queries/getUserById";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { ImageDetailsActions } from "~/components/jnd/gallery/image-details-actions";

export async function ImageDetailsCard({
  image,
  className,
}: {
  image: Image;
  className?: string;
}) {
  const imageUploader = await liveGetUserByIdAction(image.userId);

  return (
    <Card className={cn("border-0 bg-transparent", className)}>
      <CardHeader>
        <CardTitle className="text-wrap break-words">{image.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <TypographyP>
          {"Uploaded By: "}
          <Link
            href={`/gallery/user/${imageUploader.id}`}
            className="text-primary underline"
          >
            {imageUploader.fullName}
          </Link>
        </TypographyP>
        <TypographyP>
          Uploaded At: {new Date(image.createdAt).toLocaleString()}
        </TypographyP>
      </CardContent>
      <CardFooter>
        <SignedIn>
          <ImageDetailsActions image={image} />
        </SignedIn>
      </CardFooter>
    </Card>
  );
}
