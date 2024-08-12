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
      className={cn("flex h-max items-center gap-2 px-4 py-2", className)}
      asChild={!disabled}
      disabled={disabled}
    >
      <Link href={href} className="flex flex-row">
        <div className="flex flex-col items-center justify-between gap-2">
          <div className="flex flex-col items-center justify-center">
            {projectImage}
            {projectTitle}
          </div>

          <TypographyP className="items-start text-wrap">
            {projectDescription}
          </TypographyP>
        </div>
      </Link>
    </Button>
  );
}
