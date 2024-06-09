import {
  TimelineEntry,
  TimelineEntryDate,
  TimelineEntryLabel,
  TimelineEntryRole,
  TimelineShowcase,
} from "~/components/timeline-showcase";
import { EducationData } from "~/mockdata/timeline-data";

export function EducationTimelineShowcase() {
  return (
    <TimelineShowcase>
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
