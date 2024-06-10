"use client";

import React from "react";
import {
  TypographyH1,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "~/components/typography/typography";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { cn } from "~/lib/utils";
import { Badge } from "../ui/badge";

export default function MainHero({ className }: { className?: string }) {
  return (
    <header className={cn("", className)}>
      <div className="flex flex-grow flex-col gap-8 p-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-8">
            <TypographyH1>Jarred Norris</TypographyH1>
            <HeroButtons />
          </div>
          <TypographyMuted>
            Software Engineer, Web Designer, Game Developer
          </TypographyMuted>
        </div>
        <div className="flex flex-col gap-1">
          <TypographyP>Hi I&apos;m Jarred.</TypographyP>
          <TypographyP className="max-w-[500px]">
            I like finding creative solutions to complex problems. From crafting
            immersive virtual worlds in Unity to architecting scalable web
            applications in React.
          </TypographyP>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
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
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    // Set the path of the link to your CV file
    // Note: Adjust the path if your CV is located in a different directory
    link.href =
      "https://utfs.io/f/58632244-2509-48f2-943b-a8674f6a54c4-1nab7z.pdf";
    // Set the download attribute to the filename you want users to see
    link.download = "Jarred Norris - CV.pdf";
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the click event on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center gap-4 max-[479px]:flex-wrap">
      {/* <Button variant="secondary">Contact</Button> */}
      <Button variant="default" onClick={handleDownloadCV}>
        <div className="mr-2 flex w-5 flex-col items-center">
          <Download />
        </div>
        CV
      </Button>
    </div>
  );
}
