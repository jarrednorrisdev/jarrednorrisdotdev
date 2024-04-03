import { TypographyHeadingTwo } from "@/components/typography/typography-heading-two";
import { cn } from "@/lib/utils";
import React from "react";
import { TypographyHeadingThree } from "./typography/typography-heading-three";

const JobsData = [
  {
    company: "MEGASETS",
    role: "Simulation Developer",
    date: "2022 - 2023",
    description:
      "As a Simulation Developer at Megasets, I played a vital role in the development and rendering of a cutting-edge traffic simulation pipeline used to generate various flavours of synthetic data. Leveraging my expertise in Unity Engine, I contributed to the creation of a dynamic world environment in which vehicle simulations can be run, capturing frames from a diverse range of virtual sensors. This involved harnessing the power of Unity's graphics pipeline, animation tools, and ensuring a seamless user experience.",
  },
];

export function WorkExperienceShowcase() {
  return (
    <>
      <TypographyHeadingTwo>Experience</TypographyHeadingTwo>
      {JobsData.map((job) => (
        <WorkListItem jobData={job} key={job.company}></WorkListItem>
      ))}
    </>
  );
}

function WorkListItem({ jobData }: { jobData: (typeof JobsData)[0] }) {
  return (
    <div className="flex gap-4">
      <WorkDate>{jobData.date}</WorkDate>
      <div>
				<TypographyHeadingThree>{jobData.company}</TypographyHeadingThree>
        <p className="[&:not(:first-child)]:mt-2">{jobData.description}</p>
      </div>
    </div>
  );
}

export function WorkDate({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="p-1">
      <p
        className={cn(
          "relative flex text-nowrap rounded bg-accent px-2 py-1 font-mono text-sm font-semibold",
          className,
        )}
      >
        {children}
      </p>
    </div>
  );
}


