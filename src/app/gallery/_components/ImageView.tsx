import { getImage } from "~/server/queries";
import { TypographyH4, TypographyP } from "~/components/typography/typography";
import { Separator } from "~/components/ui/separator";
import { clerkClient } from "@clerk/nextjs/server";
import { cn } from "~/lib/utils";

const mockText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export async function ImageView({
  imageId,
  className,
}: {
  imageId: number;
  className?: string;
}) {
  const image = await getImage(imageId);
  const imageUploader = await clerkClient.users.getUser(image.userId);
  return (
    <div className={cn("flex flex-grow gap-4 overflow-auto p-4", className)}>
      <div className="flex flex-shrink-0 flex-grow flex-col ">
        <TypographyH4>{image.name}</TypographyH4>
        <Separator orientation="horizontal" />
        <div className="flex flex-grow flex-col gap-2 overflow-auto">
          <TypographyP>Uploaded By: {imageUploader.fullName}</TypographyP>
          <TypographyP>
            Created At: {new Date(image.createdAt).toLocaleString()}
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-shrink-[2] p-4">
				<img src={image.url} alt={image.name} />
				
      </div>
    </div>
  );
}
