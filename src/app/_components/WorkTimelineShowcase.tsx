import {
  TimelineEntry,
  TimelineEntryDate,
  TimelineEntryLabel,
  TimelineEntryRole,
  TimelineShowcase,
} from "~/components/timeline-showcase";
import { JobData } from "~/mockdata/timeline-data";

export function WorkTimelineShowcase() {
  return (
    <TimelineShowcase>
      {JobData.map((job) => (
        <TimelineEntry
          key={job?.institution}
          date={<TimelineEntryDate>{job?.date}</TimelineEntryDate>}
          label={<TimelineEntryLabel>{job?.institution}</TimelineEntryLabel>}
          role={<TimelineEntryRole>{job?.role}</TimelineEntryRole>}
          description={job?.description}
        />
      ))}
    </TimelineShowcase>
  );
}
