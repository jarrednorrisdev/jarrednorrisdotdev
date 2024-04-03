import { cn } from "@/lib/utils";
import React from "react";

interface TypographyParagraphProps {
  children?: React.ReactNode;
  className?: string;
}

export function TypographyHeadingThree({
  children,
  className,
}: TypographyParagraphProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}
