import { cn } from "~/lib/utils";
import React from "react";
import {
  TypographyH4,
  TypographyMuted,
  TypographyP,
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
  label,
  role,
  actions,
  description,
  children,
  className,
}: {
  date: React.ReactNode;
  label: React.ReactNode;
  role: React.ReactNode;
  actions?: React.ReactNode[];
  description: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex gap-4 rounded-sm border p-2", className)}>
      <div className="flex">{date}</div>
      <div className="flex flex-col md:overflow-scroll">
        {label}
        {role}
        {description}
        <TypographyP className="whitespace-pre-line py-2">
          {children}
        </TypographyP>
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

export function TimelineEntryLabel({
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

export function TimelineEntryRole({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <TypographyMuted>{children}</TypographyMuted>;
}
