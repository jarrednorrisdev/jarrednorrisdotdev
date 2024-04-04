import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import {
  TypographyH1,
  TypographyMuted,
  TypographyP,
} from "../typography/typography";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

const ShortBio =
  "Hi I'm Jarred. I thrive on finding creative solutions to complex problems. From crafting immersive virtual worlds in Unity to architecting scalable web applications in React, my expertise lies in leveraging technology to innovate and drive user experience.";

//todo: fix not visible separator

export default function MainHero({ imageUrl }: { imageUrl?: string }) {
  return (
    <header className="flex flex-wrap gap-8 md:flex-nowrap">
      {imageUrl ? (
        <div className="flex flex-grow items-center justify-center ">
          <Image
            src={imageUrl}
            width={512}
            height={512}
            alt="Picture of the world's most hireable software engineer."
            className="aspect-square max-w-64 rounded object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-wrap gap-8 p-2">
        <div className="flex flex-col gap-2">
          <TypographyH1>Jarred Norris</TypographyH1>
          <TypographyMuted>
            Software Engineer, Web Designer, Game Developer
          </TypographyMuted>
          <HeroButtons></HeroButtons>
        </div>
        <TypographyP>{ShortBio}</TypographyP>
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
