import Link from "next/link";
import React from "react";
import { TypographyH3, TypographyP } from "~/components/typography/typography";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

export function ProjectsList({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4 transition-all">
      {children}
    </div>
  );
}

export function ProjectsListItem({
  className,
  projectTitle,
  projectImage,
  projectDescription,
  href,
}: {
  className?: string;
  projectTitle: React.ReactNode;
  projectImage?: React.ReactNode;
  projectDescription?: string;
  href: string;
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "flex h-max flex-grow flex-col items-center gap-2 px-4 py-2",
        className,
      )}
      asChild
    >
      <Link href={href}>
        {projectImage}
        {projectTitle}
        <Separator />

        <TypographyP className="items-start text-wrap text-justify">
          {projectDescription}
        </TypographyP>
      </Link>
    </Button>
  );
}
