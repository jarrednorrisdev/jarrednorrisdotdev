import React from "react";
import { BriefcaseIcon, Gamepad, PersonStanding } from "lucide-react";
import FlexWidget from "@/components/flex-widget";
import MainHero from "@/components/hero/main-hero";
import { Url } from "next/dist/shared/lib/router/router";
import { Separator } from "@/components/ui/separator";
import { TodoNavButtons } from "./TodoNavButtons";
import { TypographyHeadingTwo } from "@/components/typography/typography-heading-two";
import { WorkExperienceShowcase } from "../components/job-experience-showcase";

export default function HomePage() {
  const iconSize = 32;

  const sectionLinks = [
    {
      label: "Experience",
      icon: <BriefcaseIcon size={iconSize} />,
      href: "/experience",
    },
    {
      label: "About Me",
      icon: <PersonStanding size={iconSize} />,
      href: "/experience",
    },
    {
      label: "Game Projects",
      icon: <Gamepad size={iconSize} />,
      href: "/experience",
    },
  ];

  return (
    <main className="flex flex-col gap-8 p-8 md:container md:mx-auto">
      <MainHero />
      <Separator />
      <WorkExperienceShowcase></WorkExperienceShowcase>
      <Separator />
      <TodoNavButtons sectionLinks={sectionLinks}></TodoNavButtons>
    </main>
  );
}
