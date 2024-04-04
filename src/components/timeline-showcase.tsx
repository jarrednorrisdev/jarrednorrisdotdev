import { cn } from "@/lib/utils";
import React from "react";
import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyMuted,
  TypographyP,
} from "./typography/typography";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export function TimelineShowcase({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <ol className={cn("flex flex-col gap-4", className)}>{children}</ol>;
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
    <li className={cn("flex gap-6 p-4", className)}>
      <div className="flex">{date}</div>
      <div className="flex flex-col">
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
