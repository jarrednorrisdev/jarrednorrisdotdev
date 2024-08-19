import { cn } from "~/lib/utils";
import { type Image } from "~/server/db/schema";
import NextImage from "next/image";
import { ImageDetails } from "~/components/jnd/gallery/image/ImageDetails";
import { Card } from "~/components/ui/card";
import { type ProbeResult } from "probe-image-size";
import { Effect } from "effect";

// import { liveGetCurrentUserId } from "~/server/auth/queries/getCurrentUserId";
import { DeleteButton } from "./DeleteButton"; // Import the Client Component
import { TypographyP } from "~/components/typography";
import { ImageDownIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { UserService, UserServiceLive } from "~/server/auth/userService";
import { AuthService } from "~/server/auth/authService";

export async function ImageDisplay({
  image,
  imageData,
  className,
}: {
  image: Image;
  imageData?: ProbeResult;
  className?: string;
}) {
  const getImageUploader = UserServiceLive.pipe(
    Effect.andThen((userService) => userService.getUserById(image.userId)),
  );

  // const currentUserId = liveGetCurrentUserId();

  const isUploader = userId === image.userId;
  return (
    <div className={cn("flex h-full flex-col gap-2 lg:flex-row", className)}>
      <div className="relative flex flex-grow lg:flex-[3]">
        {imageData ? (
          <NextImage
            src={image.url}
            alt={image.name}
            fill
            className="rounded object-contain object-top"
          />
        ) : (
          <Card className="h-full w-full" />
        )}
      </div>

      <div className="flex flex-col gap-2 lg:flex-[2]">
        <Card className="gap-0 p-0 sm:p-0">
          <TypographyP className="items-center break-all border-b p-2 text-center text-sm md:text-base lg:text-lg">
            {image.name}
          </TypographyP>
          <ImageDetails image={image} imageUploader={imageUploader} />
        </Card>
        <div className="flex justify-between gap-2">
          <Button
            asChild
            variant="backgroundSecondary"
            size="sm"
            className="flex gap-2"
          >
            <Link href={image.url}>
              <p>View Original </p> <ImageDownIcon />
            </Link>
          </Button>
          {isUploader && (
            <DeleteButton image={image} buttonProps={{ size: "icon_xs" }} />
          )}
        </div>
      </div>
    </div>
  );
}
