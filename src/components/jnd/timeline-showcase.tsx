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
  children,
  className,
}: {
  date: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex gap-4 py-2", className)}>
      <div className="hidden w-16 justify-end py-[0.3rem] sm:visible sm:flex">
        {date}
      </div>
      <div className="flex gap-4">
        <Separator
          orientation="vertical"
          className="hidden h-full w-px sm:visible sm:flex"
        />
        <div className="flex flex-col gap-1">
          {title}
          {subtitle}
          <div className="flex sm:hidden">{date}</div>
          <div className="">{children}</div>
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
