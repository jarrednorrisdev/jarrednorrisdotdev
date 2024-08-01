import {
  TimelineEntry,
  TimelineEntryDate,
  TimelineEntryTitle,
  TimelineEntrySubTitle,
  TimelineShowcase,
} from "~/components/jnd/timeline-showcase";
import { TypographyP } from "~/components/typography/typography";

export function WorkTimeline() {
  return (
    <TimelineShowcase>
      <TimelineEntry
        date={<TimelineEntryDate>2022 - 2023</TimelineEntryDate>}
        title={
          <TimelineEntryTitle>Simulation and Web Developer</TimelineEntryTitle>
        }
        subtitle={<TimelineEntrySubTitle>Megasets LTD</TimelineEntrySubTitle>}
      >
        <div className="flex flex-col gap-2">
          <TypographyP>
            As a Simulation Developer at Megasets, I played a vital role in the
            development and rendering of a cutting-edge traffic simulation
            pipeline used to generate various flavours of synthetic data.
            Leveraging my expertise in Unity Engine, I contributed to the
            creation of a dynamic world environment in which synthetic data can
            be captured through the running of various configurable simulations,
            capturing frame by frame data from a diverse range of virtual
            sensors. This involved harnessing the power of Unity&apos;s graphics
            pipeline to create custom render pipelines that could generate
            visual data, utilizing Unity animation tools to create realistic
            agent behaviour, and ensuring a seamless user experience within our
            tools.
          </TypographyP>
          <TypographyP>
            Following my successful tenure as a Simulation Developer, I
            transitioned into a Web Development role at Megasets. In this
            capacity, I took on the responsibility of coding a customer platform
            that empowered users to customize their own configurations for a
            diverse range of data sets. This involved creating a site with
            React, Gatsby and Chakra UI, where I bore the responsibilities of
            implementing the team’s designs within an intuitive web app.
            Including, page routing, complex data manipulation, front-end to
            back-end interoperability and much more. Further achievements
            including building a custom sensor editor with Three.js and a custom
            map view with Leaflet.js.
          </TypographyP>
        </div>
      </TimelineEntry>
      <TimelineEntry
        date={<TimelineEntryDate>2021 - 2021</TimelineEntryDate>}
        title={
          <TimelineEntryTitle>Admin and Marketing Assistant</TimelineEntryTitle>
        }
        subtitle={
          <TimelineEntrySubTitle>Robson Analytics LTD</TimelineEntrySubTitle>
        }
      >
        <TypographyP>
          As an admin and marketing assistant at Robson Analytics, I was
          responsible for managing the company&apos;s social media presence,
          creating engaging content, and developing marketing strategies to
          increase brand awareness. I also assisted with administrative tasks
          such as data entry.
        </TypographyP>
      </TimelineEntry>
    </TimelineShowcase>
  );
}
