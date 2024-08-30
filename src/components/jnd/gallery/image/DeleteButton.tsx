"use client";

import { useServerAction } from "zsa-react";
import { LoaderButton } from "~/components/LoaderButton";
import { toast } from "~/components/ui/use-toast";
import { deleteImageAction } from "~/server/gallery/deleteImageAction";
import { type ButtonProps } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function ImageDeleteButton({
  imageId,
  children,
  className,
  ...props
}: ButtonProps & { imageId: number }) {
  const { isPending, execute } = useServerAction(deleteImageAction, {
    onError({ err }) {
      toast({
        title: "Something went wrong",
        description: err.message,
        variant: "destructive",
      });
    },
    onSuccess({ data }) {
      toast({
        title: "Let's Go!",
        description: "Image Deleted",
      });
    },
  });

  return (
    <LoaderButton
      isLoading={isPending}
      onClick={async () => await execute({ imageId })}
      size="sm"
      name="delete"
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </LoaderButton>
  );
}
