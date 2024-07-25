import React from "react";
import {
  TypographyMuted,
  TypographySmall,
} from "~/components/typography/typography";
import { cn } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
3;

export function HireMeHero({
  className,
  children,
  heroTitle,
  heroSubtitle,
  heroSkills,
  heroButtons,
}: {
  className?: string;
  children?: React.ReactNode;
  heroTitle?: React.ReactNode;
  heroSubtitle?: React.ReactNode;
  heroSkills?: React.ReactNode;
  heroButtons?: React.ReactNode;
}) {
  return (
    <section className={cn("flex flex-col gap-4 p-4 ", className)}>
      <div className="flex flex-col ">
        {heroTitle}
        {heroSubtitle}
      </div>
      <div className="flex flex-col gap-8">
        {heroSkills}
        {heroButtons}
      </div>
      <Separator />
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function HeroSkills({
  children,
  className,
  textClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <TypographySmall className={cn("", textClassName)}>
        Skills:
      </TypographySmall>
      {children}
    </div>
  );
}

export function HeroTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <a className={cn("text-5xl font-bold", className)}>{children}</a>;
}

export function HeroSubtitle({
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

export function HeroButtons({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>{children}</div>
  );
}
