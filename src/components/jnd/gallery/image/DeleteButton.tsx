import { TrashIcon } from "lucide-react";
import { Button, ButtonProps } from "~/components/ui/button";
import { type Image } from "~/server/db/schema";
import { liveDeleteImageByIdAction } from "~/server/gallery/queries/actions";

export async function DeleteButton({
  image,
  buttonProps,
}: {
  image: Image;
  buttonProps?: ButtonProps;
}) {
  const imageId = image.id;

  const deleteImageWithIdAction = liveDeleteImageByIdAction.bind(null, imageId);

  return (
    <form action={deleteImageWithIdAction}>
      <Button type="submit" {...buttonProps}>
        <TrashIcon />
      </Button>
    </form>
  );
}
