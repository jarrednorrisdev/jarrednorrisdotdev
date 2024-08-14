import { type Image } from "~/server/db/schema";
import { cn } from "~/lib/utils";
import { Effect } from "effect";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import React from "react";
import { TypographyP } from "~/components/typography";
import { User } from "@clerk/nextjs/server";

export async function ImageDetails({
  image,
  imageUploader,
  className,
}: {
  image: Image;
  imageUploader: User;
  className?: string;
}) {
  const imageData = [
    // {
    //   label: "Title",
    //   value: image.name,
    // },
    {
      label: "Uploaded By",
      value:
        imageUploader.username ?? imageUploader.fullName ?? imageUploader.id,
    },
    {
      label: "Uploaded At",
      value: new Date(image.createdAt).toLocaleString(),
    },
  ];

  return (
    <Table className={cn("", className)}>
      {/* <TableCaption>Image Details.</TableCaption> */}

      <TableBody className="w-8 min-w-0">
        {imageData.map((data) => (
          <TableRow key={data.label} className="w-8 min-w-0">
            <TableCell className="p-2">
              <TypographyP className="flex-grow-0 text-nowrap text-right text-muted-foreground">
                {data.label}:
              </TypographyP>
            </TableCell>
            <TableCell className="p-2">
              <TypographyP className="text-wrap break-all">
                {data.value}
              </TypographyP>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
