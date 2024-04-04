import React from "react";
import { BriefcaseIcon, Gamepad, PersonStanding } from "lucide-react";
import MainHero from "@/components/hero/main-hero";
import { Separator } from "@/components/ui/separator";
import { TodoNavButtons } from "./TodoNavButtons";
import {
  TimelineEntry,
  TimelineEntryDate,
  TimelineEntryLabel,
  TimelineEntryRole,
  TimelineShowcase,
} from "../components/job-experience-showcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

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
    <main className="flex flex-col gap-6 p-6 md:container md:mx-auto">
      <MainHero imageUrl="/images/portrait.jpg" />
      <Separator />
      <Tabs defaultValue="Experience" className="">
        <TabsList className="flex">
          <TabsTrigger className="flex flex-grow" value="Experience">
            Experience
          </TabsTrigger>
          <TabsTrigger className="flex flex-grow" value="Education">
            Education
          </TabsTrigger>
          <TabsTrigger className="flex flex-grow" value="Games">
            Projects
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Experience">
          <WorkTimelineShowcase />
        </TabsContent>
        <TabsContent value="Education">
          <EducationTimelineShowcase />
        </TabsContent>
      </Tabs>
    </main>
  );
}

const JobData = [
  {
    institution: "Megasets LTD",
    role: "Simulation Developer",
    date: "2022 - 2023",
    moreInforHref: "link",
    description:
      "As a Simulation Developer at Megasets, I played a vital role in the development and rendering of a cutting-edge traffic simulation pipeline used to generate various flavours of synthetic data. Leveraging my expertise in Unity Engine, I contributed to the creation of a dynamic world environment in which vehicle simulations can be run, capturing frames from a diverse range of virtual sensors. This involved harnessing the power of Unity's graphics pipeline, animation tools, and ensuring a seamless user experience.",
  },
  {
    institution: "Robson Analytics LTD",
    role: "Admin and Marketing Assistant",
    date: "2021 - 2021",
    description:
      "As an admin and marketing assistant at Robson Analytics, I was responsible for managing the company's social media presence, creating engaging content, and developing marketing strategies to increase brand awareness. I also assisted with administrative tasks such as data entry.",
  },
];

const EducationData = [
  {
    institution: "University of Lincoln",
    role: "Games Computing BSc (Hons)",
    date: "2017 - 2021",
    description:
      "I studied Games Computing at the University of Lincoln, where I developed a strong foundation in computer science and software engineering. I gained experience in game development, artificial intelligence, and computer graphics.",
  },
];

function WorkTimelineShowcase() {
  return (
    <TimelineShowcase className="w-fit">
      {JobData.map((job) => (
        <TimelineEntry
          key={job.institution}
          date={<TimelineEntryDate>{job.date}</TimelineEntryDate>}
          label={<TimelineEntryLabel>{job.institution}</TimelineEntryLabel>}
          role={<TimelineEntryRole>{job.role}</TimelineEntryRole>}
          actions={
            job.moreInforHref
              ? [
                  <Button variant="link" className="py-0" key="more-info">
                    More Info...
                  </Button>,
                ]
              : undefined
          }
          description={job.description}
        />
      ))}
    </TimelineShowcase>
  );
}

function EducationTimelineShowcase() {
  return (
    <TimelineShowcase className="w-fit">
      {EducationData.map((institution) => (
        <TimelineEntry
          key={institution.institution}
          date={<TimelineEntryDate>{institution.date}</TimelineEntryDate>}
          label={
            <TimelineEntryLabel>{institution.institution}</TimelineEntryLabel>
          }
          role={<TimelineEntryRole>{institution.role}</TimelineEntryRole>}
          description={institution.description}
        />
      ))}
    </TimelineShowcase>
  );
}
