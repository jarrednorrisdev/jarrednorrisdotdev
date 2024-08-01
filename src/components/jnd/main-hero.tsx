import React from "react";
import {
  TypographyMuted,
  TypographyP,
} from "~/components/typography/typography";
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
        className="opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        duration={3}
      />
      <CardHeader>
        <CardTitle>Jarred Norris</CardTitle>
        <TypographyMuted>
          Software Developer, Web Developer, Game Developer
        </TypographyMuted>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-grow flex-col justify-between gap-4 lg:flex-row">
          <div className="flex flex-grow flex-col justify-between gap-2">
            {/* <TypographyH4>About Me</TypographyH4> */}
            <TypographyP>
              Hi I&apos;m Jarred. I like finding creative solutions to complex
              problems. From crafting immersive virtual worlds in Unity to
              architecting scalable web applications in React.
            </TypographyP>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <MainHeroButtons />
      </CardFooter>
    </Card>
  );
}
