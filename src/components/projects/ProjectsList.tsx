import Link from "next/link";
import React from "react";
import { TypographyP } from "~/components/typography";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function ProjectsListItem({
  className,
  projectTitle,
  projectImage,
  projectDescription,
  disabled = false,
  href,
}: {
  className?: string;
  projectTitle: React.ReactNode;
  projectImage?: React.ReactNode;
  projectDescription?: string;
  disabled?: boolean;
  href: string;
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "flex h-max flex-grow flex-col items-center justify-center gap-2 p-2",
        className,
      )}
      asChild={!disabled}
      disabled={disabled}
    >
      <Link href={href} className="flex h-max flex-col items-center">
        <div className="flex h-max flex-col items-center justify-center">
          {projectImage}
          {projectTitle}
        </div>
        <TypographyP className="flex h-max items-center justify-center text-wrap text-center">
          {projectDescription}
        </TypographyP>
      </Link>
    </Button>
  );
}
