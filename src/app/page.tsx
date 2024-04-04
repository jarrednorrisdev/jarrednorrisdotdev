import React from "react";
import MainHero from "@/components/hero/main-hero";

import {
  TimelineEntry,
  TimelineEntryDate,
  TimelineEntryLabel,
  TimelineEntryRole,
  TimelineShowcase,
} from "../components/timeline-showcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Meteors } from "@/components/ui/meteors";

export default function HomePage() {
  return (
    <main className=" flex  flex-col gap-8  border-accent bg-background  p-6 md:container md:mx-auto ">
      <MainHero imageUrl="/images/portrait.jpg" className=" " />
      {/* <Separator /> */}
      <div className="flex h-max flex-wrap gap-2 lg:flex-nowrap">
        <TimelineShowcases />

        <div></div>
      </div>
    </main>
  );
}

function TimelineShowcases() {
	const [isPinned, setPinShowcase] = React.useState(false);
  return (
    <Tabs defaultValue="Experience" className="min-w-1/2 px-4 ">
      <TabsList className="">
        <TabsTrigger className="" value="Experience">
          Experience
        </TabsTrigger>
        <TabsTrigger className="" value="Education">
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Experience">
        <WorkTimelineShowcase />
      </TabsContent>
      <TabsContent value="Education">
        <EducationTimelineShowcase />
      </TabsContent>
    </Tabs>
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
    date: "2018 - 2021",
    description:
      "I studied Games Computing at the University of Lincoln, where I developed a strong foundation in computer science and software engineering. I gained experience in game development, artificial intelligence, and computer graphics.",
  },
];

function WorkTimelineShowcase() {
  return (
    <TimelineShowcase>
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
