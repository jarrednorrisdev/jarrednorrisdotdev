import React from "react";
import {
  TypographyMuted,
  TypographyP,
} from "~/components/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { BorderBeam } from "~/components/magicui/border-beam";
import { cn } from "~/lib/utils";
import { MainHeroButtons } from "./MainHeroButtons";

export function MainHero({ className }: { className?: string }) {
  return (
    <Card className={cn("group relative", className)}>
      <BorderBeam
        className=""
        duration={8}
      />
      <CardHeader>
        <CardTitle>Jarred Norris</CardTitle>
        <TypographyMuted className="flex flex-wrap whitespace-pre-wrap text-xs sm:text-base">
          <span>Software Developer, </span>
          <span>Web Developer, </span>
          <span>Game Developer</span>
        </TypographyMuted>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col justify-between gap-4 lg:flex-row">
        <TypographyP className="text-sm sm:text-base">
          Hi I&apos;m Jarred. I like finding creative solutions to complex
          problems. From crafting immersive virtual worlds in Unity to
          architecting scalable web applications in React.
        </TypographyP>
      </CardContent>
      <CardFooter>
        <MainHeroButtons className="flex flex-grow flex-wrap items-end" />
      </CardFooter>
    </Card>
  );
}
