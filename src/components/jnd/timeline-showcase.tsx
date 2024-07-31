import { cn } from "~/lib/utils";
import React from "react";
import { Separator } from "~/components/ui/separator";
import {
  TypographyH4,
  TypographyMuted,
} from "~/components/typography/typography";

export function TimelineShowcase({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
}

export function TimelineEntry({
  date,
  title,
  subtitle,
  actions,
  children,
  className,
}: {
  date: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  actions?: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex gap-4 py-2", className)}>
      <div className="flex min-w-24 justify-end py-[0.3rem]">{date}</div>
      <div className="flex gap-4">
        <Separator orientation="vertical" className="h-full w-px" />
        <div className="flex flex-col gap-1">
          {title}
          {subtitle}
          {children}
          {actions}
        </div>
      </div>
    </li>
  );
}

export function TimelineEntryDate({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <TypographyMuted className={cn("", className)}>{children}</TypographyMuted>
  );
}

export function TimelineEntryTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <TypographyH4 className={cn("", className)}>{children}</TypographyH4>;
}

export function TimelineEntryActions({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex justify-end", className)}>{children}</div>;
}

export function TimelineEntrySubTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <TypographyMuted className={cn("", className)}>{children}</TypographyMuted>
  );
}
