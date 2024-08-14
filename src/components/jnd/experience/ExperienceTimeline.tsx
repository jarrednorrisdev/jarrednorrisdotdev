import {
  TypographyH4,
  TypographyMuted,
  TypographyP,
} from "~/components/typography";
import {
  Accordion,
  Content,
  Tab,
  Trigger,
} from "~/components/lukacho/accordion";
import { Badge } from "~/components/ui/badge";
import { type TimelineEntry } from "~/components/jnd/experience";

export function ExperienceTimeline({
  TimelineData,
}: {
  TimelineData: TimelineEntry[];
}) {
  return (
    <Accordion>
      {TimelineData.map((data, index) => (
        <Tab key={index}>
          <Trigger>
            <div className="flex flex-grow flex-col flex-wrap gap-2">
              <div>
                <TypographyH4>{data.title}</TypographyH4>
                <TypographyMuted className="flex gap-2">
                  {data.location} | {data.date}
                </TypographyMuted>
              </div>
              <div className="flex flex-grow flex-row flex-wrap items-center gap-2">
                {data.badges?.map((badge, index) => (
                  <Badge
                    key={index}
                    // variant={badge.variant}
                    variant="secondaryNoHover"
                    className="min-w-max"
                  >
                    {badge.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Trigger>
          <Content>
            <TypographyP className="whitespace-pre-line">
              {data.content}
            </TypographyP>
          </Content>
        </Tab>
      ))}
    </Accordion>
  );
}
