import { cn } from "~/lib/utils";
import React from "react";

interface ITypographyProps {
  children?: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: ITypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: ITypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: ITypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight sm:text-2xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: ITypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}

// Consider "[&:not(:first-child)]:mt-4"
export function TypographyP({ children, className }: ITypographyProps) {
  return (
    <p className={cn("text-sm leading-5 sm:text-base", className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  className,
}: ITypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({
  children,
  className,
}: ITypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}

export function TypographyLead({ children, className }: ITypographyProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  );
}

export function TypographyLarge({ children, className }: ITypographyProps) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}

export function TypographySmall({ children, className }: ITypographyProps) {
  return (
    <small
      className={cn("text-xs font-medium leading-none sm:text-sm", className)}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: ITypographyProps) {
  return (
    <p className={cn("text-xs text-muted-foreground sm:text-sm", className)}>
      {children}
    </p>
  );
}
