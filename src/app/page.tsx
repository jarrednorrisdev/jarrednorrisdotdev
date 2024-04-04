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
    description: `
		At Megasets, I played a key role in developing a cutting-edge traffic simulation pipeline using Unity Engine, which improved synthetic data generation and visual fidelity.
		I also enhanced rendering performance and data efficiency by optimizing Unity’s graphics and animation tools, contributing to more realistic simulations.
		Transitioning to Web Development, I led the creation of a customizable data set platform, utilizing React, Gatsby, Chakra UI, and Three.js to ensure high performance, maintainability, and user-friendly design.
		This role highlighted my ability to innovate and adapt across different technology sectors, as well as highlighting my ability to deliver customer friendly platforms that ease use of our advanced tooling.
		My role here demonstrates a passion for innovation, versatility in tech domains, and a commitment to excellence.
		`,
  },
  {
    institution: "Robson Analytics LTD",
    role: "Admin and Marketing Assistant",
    date: "2021 - 2021",
    description:
      `As an admin and marketing assistant at Robson Analytics, I was responsible for managing the company's social media presence, creating engaging content, and developing marketing strategies to increase brand awareness.
			I also assisted with administrative tasks such as data entry.`,
  },
];

const EducationData = [
  {
    institution: "University of Lincoln",
    role: "Games Computing - BSc (Hons)",
    date: "2018 - 2021",
    description: `I studied Games Computing at the University of Lincoln, where I developed a strong foundation in computer science and software engineering.
			I gained experience in game development, artificial intelligence, and computer graphics.
			I also developed a range of technical skills, including programming, software design, and project management.
			
			`,
  },
  {
    institution: "University of Lincoln",
    role: "Politics and International Relations - Certificate of Higher Education",
    date: "2017 - 2018",
    description:
      "I studied Politics and International Relations at the University of Lincoln, where I developed a strong foundation in political theory, international relations, and political economy. I gained experience in political analysis, research, and policy development.",
  },
  {
    institution: "Presdales Academy",
    role: "A Levels - Mathematics, Biology, Politics",
    date: "2018 - 2021",
    description:
      "I studied Mathematics, Biology, and Politics at Presdales Academy, I gained experience in problem solving, critical thinking, and research.",
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
