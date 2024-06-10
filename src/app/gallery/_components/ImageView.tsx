import { getImage } from "~/server/queries";
import Image from "next/image";
import { TypographyH2 } from "~/components/typography/typography";

export async function ImageView({ imageId }: { imageId: number }) {
  const image = await getImage(imageId);
  return (
    <div className="flex flex-grow flex-col gap-4">
      <TypographyH2>{image.name}</TypographyH2>
      <div className="align-center flex h-80  justify-center rounded-lg ">
        <div className="relative h-full w-full">
          <Image src={image.url} alt={image.name} fill objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
