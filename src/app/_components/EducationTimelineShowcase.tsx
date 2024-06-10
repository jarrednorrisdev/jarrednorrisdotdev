import {
  TimelineEntry,
  TimelineEntryDate,
  TimelineEntryTitle,
  TimelineEntrySubTitle,
  TimelineShowcase,
} from "~/components/timeline-showcase";
import { TypographyP } from "~/components/typography/typography";

export function EducationTimelineShowcase() {
  return (
    <TimelineShowcase>
      <TimelineEntry
        date={<TimelineEntryDate>2018 - 2021</TimelineEntryDate>}
        title={<TimelineEntryTitle>University of Lincoln</TimelineEntryTitle>}
        subtitle={
          <TimelineEntrySubTitle>
            Games Computing - BSc (Hons)
          </TimelineEntrySubTitle>
        }
      >
        <TypographyP>
          I studied Games Computing at the University of Lincoln, where I
          developed a strong foundation in computer science and software
          engineering. I gained experience in game development, artificial
          intelligence, and computer graphics. I also developed a range of
          technical skills, including programming, software design, and project
          management.
        </TypographyP>
      </TimelineEntry>
      <TimelineEntry
        date={<TimelineEntryDate>2017 - 2018</TimelineEntryDate>}
        title={<TimelineEntryTitle>University of Lincoln</TimelineEntryTitle>}
        subtitle={
          <TimelineEntrySubTitle>
            Politics and International Relations - Certificate of Higher
            Education
          </TimelineEntrySubTitle>
        }
      >
        <TypographyP>
          I studied Games Computing at the University of Lincoln, where I
          developed a strong foundation in computer science and software
          engineering. I gained experience in game development, artificial
          intelligence, and computer graphics. I also developed a range of
          technical skills, including programming, software design, and project
          management.
        </TypographyP>
      </TimelineEntry>
      <TimelineEntry
        date={<TimelineEntryDate>2015 - 2017</TimelineEntryDate>}
        title={<TimelineEntryTitle>University of Lincoln</TimelineEntryTitle>}
        subtitle={
          <TimelineEntrySubTitle>
            Mathematics, Biology, Politics - A-Levels
          </TimelineEntrySubTitle>
        }
      >
        <TypographyP>
          I studied Mathematics, Biology, and Politics at Presdales Academy, I
          gained experience in problem solving, critical thinking, and research.
        </TypographyP>
      </TimelineEntry>
    </TimelineShowcase>
  );
}
