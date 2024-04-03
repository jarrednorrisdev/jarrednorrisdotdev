import { cn } from "@/lib/utils";
import React from "react";

interface TypographyParagraphProps {
  children?: React.ReactNode;
  className?: string;
}

export function TypographyParagraph({
  children,
  className,
}: TypographyParagraphProps) {
  return (
    <p className={cn("", className)}>{children}</p>
    // <p className={cn("[&:not(:first-child)]:mt-4", className)}>{children}</p>
  );
}
