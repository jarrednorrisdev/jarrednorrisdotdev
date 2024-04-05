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
import { JobData, EducationData } from "../data/timeline-data";

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
