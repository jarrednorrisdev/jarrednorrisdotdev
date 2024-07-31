import { cn } from "~/lib/utils";
import { type Image } from "~/server/db/schema";
import NextImage from "next/image";
import { ImageDetailsCard } from "~/components/jnd/gallery/image-details-card";
import { Separator } from "~/components/ui/separator";

export function ImageDisplay({
  image,
  className,
}: {
  image: Image;
  className?: string;
}) {
  return (
    <div className={cn("flex", className)}>
      <div className="flex flex-grow flex-wrap gap-4 p-4">
        <div className="flex flex-grow">
          <div className="relative min-w-[200px] flex-grow">
            <NextImage
              src={image.url}
              alt={image.name}
              fill={true}
              objectFit="contain"
              objectPosition="top"
              sizes="(min-width: 900px) 60vw, 100vw"
            />
          </div>
        </div>
        <Separator orientation="vertical" />
        <ImageDetailsCard image={image} className="max-w-[500px]" />
      </div>
    </div>
  );
}
