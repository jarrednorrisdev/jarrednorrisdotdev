import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import {
  TypographyH1,
  TypographyMuted,
  TypographyP,
	TypographySmall,
} from "../typography/typography";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { BackgroundBeams } from "../ui/background-beams";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const ShortBio =
  "Hi I'm Jarred. I thrive on finding creative solutions to complex problems. From crafting immersive virtual worlds in Unity to architecting scalable web applications in React, my expertise lies in leveraging technology to innovate and drive user experience.";

//todo: fix not visible separator

export default function MainHero({
  imageUrl,
  className,
}: {
  imageUrl?: string;
  className?: string;
}) {
  return (
    <header
      className={cn("flex flex-wrap gap-8 rounded md:flex-nowrap ", className)}
    >
      <BackgroundBeams />
      {imageUrl ? (
        <div className="flex flex-grow items-center justify-center ">
          <Image
            src={imageUrl}
            width={512}
            height={512}
            alt="Picture of the world's most hireable software engineer."
            className="aspect-square max-w-64 rounded border-8 border-primary object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-8 p-2">
        <div className="flex flex-col gap-2">
          <TypographyH1>Jarred Norris</TypographyH1>
          <TypographyMuted>
            Software Engineer, Web Designer, Game Developer
          </TypographyMuted>
          <HeroButtons></HeroButtons>
        </div>
        <TypographyP>{ShortBio}</TypographyP>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2 items-center">
            <TypographySmall>Skills:</TypographySmall>
            <Badge>Javascript</Badge>
            <Badge>Typescript</Badge>
            <Badge>React</Badge>
            <Badge>C#</Badge>
            <Badge>Unity</Badge>
            <Badge>Unreal</Badge>
            <Badge>Git</Badge>
            <Badge>Rust</Badge>
            <Badge>Python</Badge>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroButtons() {
  return (
    <div className="flex items-center gap-4 max-[479px]:flex-wrap">
      {/* <Button variant="secondary">Contact</Button> */}
      <Button variant="default">
        <div className="mr-2 flex w-5 flex-col items-center">
          <Download />
        </div>
        CV
      </Button>
    </div>
  );
}
