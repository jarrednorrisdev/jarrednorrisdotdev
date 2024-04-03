import Image from "next/image";
import React from "react";
import HeroTitle from "./hero-title";
import { TypographyParagraph } from "../typography/typography-paragraph";
import { BioButtons } from "./bio-buttons";
import FlexWidget from "../flex-widget";
import { Separator } from "../ui/separator";
import { TypographyHeadingThree } from "../typography/typography-heading-three";
import { TypographyHeadingOne } from "../typography/typography-heading-one";

type Props = {};

const ShortBio =
  "Hi I'm Jarred. I thrive on finding creative solutions to complex problems. From crafting immersive virtual worlds in Unity to architecting scalable web applications in React, my expertise lies in leveraging technology to innovate and drive user experience.";

//todo: fix not visible separator
export default function MainHero({}: Props) {
  return (
    <header className="flex gap-8">
      <Image
        src="/images/portrait.jpg"
        width={512}
        height={512}
        alt="Picture of the world's most hireable software engineer."
        className="aspect-square min-w-64 rounded object-contain"
      />
      <div className="flex  flex-col gap-8 p-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <TypographyHeadingOne className="text-nowrap">
              Jarred Norris
            </TypographyHeadingOne>
            <TypographyParagraph className="text-nowrap ">
              Software Engineer, Web Designer, Game Developer
            </TypographyParagraph>
          </div>
          <BioButtons />
        </div>
        <div className="flex flex-grow">
          <TypographyParagraph>{ShortBio}</TypographyParagraph>
        </div>
      </div>
    </header>
  );
}
