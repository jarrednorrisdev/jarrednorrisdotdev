import { getImage } from "~/server/queries";
import {
  TypographyH4,
  TypographyP,
} from "~/components/typography/typography";
import { Separator } from "~/components/ui/separator";
import { clerkClient } from "@clerk/nextjs/server";

const mockText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export async function ImageView({ imageId }: { imageId: number }) {
  const image = await getImage(imageId);
  const imageUploader = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full max-h-full gap-4 overflow-auto p-4">
      <div className="flex flex-shrink flex-col gap-4 overflow-auto ">
        <TypographyH4>{image.name}</TypographyH4>
        <Separator orientation="horizontal" />
        <div className="flex flex-col gap-2 overflow-auto">
          <TypographyP>Uploaded By: {imageUploader.fullName}</TypographyP>
          <TypographyP>
            Created At: {new Date(image.createdAt).toLocaleString()}
          </TypographyP>
        </div>
      </div>
      <div className="flex h-full max-h-full min-w-max p-4">
        <img
          src={image.url}
          alt={image.name}
          className="h-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}
