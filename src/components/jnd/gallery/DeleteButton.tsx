import { Button } from "~/components/ui/button";
import { type Image } from "~/server/db/schema";
import { liveDeleteImageByIdAction } from "~/server/gallery/queries";

export async function DeleteButton({ image }: { image: Image }) {
  const imageId = image.id;

  const deleteImageWithIdAction = liveDeleteImageByIdAction.bind(null, imageId);

  return (
    <form action={deleteImageWithIdAction}>
      <Button type="submit" >Delete</Button>
    </form>
  );
}
