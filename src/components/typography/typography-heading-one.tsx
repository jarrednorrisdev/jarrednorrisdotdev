import { cn } from "@/lib/utils";
import React from "react";

interface TypographyParagraphProps {
  children?: React.ReactNode;
  className?: string;
}

export function TypographyHeadingOne({
  children,
  className,
}: TypographyParagraphProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}