import { Account, User, type Image } from "~/server/db/schema";
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
import Link from "next/link";

export async function ImageDetails({
  image,
  uploaderUser,
  uploaderAccount,
  className,
}: {
  image: Image;
  uploaderUser: User;
  uploaderAccount: Account;
  className?: string;
}) {
  const imageData = [
    // {
    //   label: "Title",
    //   value: image.name,
    // },
    {
      label: "Uploaded By",
      value: uploaderAccount?.username ?? uploaderUser?.id,
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
                {data.label === "Uploaded By" ? (
                  <Link
                    href={`/gallery/user/${uploaderUser.id}`}
                    className="text-primary underline"
                  >
                    {data.value}
                  </Link>
                ) : (
                  data.value
                )}
              </TypographyP>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
