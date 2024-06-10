import { cn } from "~/lib/utils";
import React from "react";
import {
  TypographyH4,
  TypographyMuted,
} from "./typography/typography";

export function TimelineShowcase({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-4 ", className)}>{children}</div>
  );
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
    <li className={cn("flex gap-4  py-2", className)}>
      <div className="flex min-w-24">{date}</div>
      <div className="flex flex-col gap-1 ">
        {title}
        {subtitle}
        {children}
        {actions}
      </div>
    </li>
  );
}

export function TimelineEntryDate({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <TypographyMuted className="h-min rounded p-2 font-mono md:text-nowrap">
      {children}
    </TypographyMuted>
  );
}

export function TimelineEntryTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <TypographyH4>{children}</TypographyH4>;
}

export function TimelineEntryActions({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="flex justify-end">{children}</div>;
}

export function TimelineEntrySubTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <TypographyMuted>{children}</TypographyMuted>;
}
