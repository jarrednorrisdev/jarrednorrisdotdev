import { ExperienceTimeline } from "~/components/jnd/experience/ExperienceTimeline";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { workTimelineData } from "~/data/workTimelineData";
import { educationTimelineData } from "~/data/educationTimelineData";

import { cn } from "~/lib/utils";

export function ExperienceCard({ className }: { className?: string }) {
  return (
    <Card className={cn("", className)}>
      <Tabs defaultValue="Work" className={cn("flex flex-col", className)}>
        <CardHeader className="flex flex-grow flex-row justify-between">
          <CardTitle>Experience</CardTitle>
          <TabsList
            className="flex h-min flex-wrap items-center justify-start"
            variant="ghost"
          >
            <TabsTrigger value="Work" variant="outline">
              Work
            </TabsTrigger>
            <TabsTrigger value="Education" variant="outline">
              Education
            </TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <TabsContent value="Work">
              <ExperienceTimeline TimelineData={workTimelineData} />
            </TabsContent>
            <TabsContent value="Education">
              <ExperienceTimeline TimelineData={educationTimelineData} />
            </TabsContent>
          </div>
        </CardContent>
      </Tabs>
    </Card>
  );
}
