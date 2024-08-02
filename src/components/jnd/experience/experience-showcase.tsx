import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import { cn } from "~/lib/utils";
import { WorkTimeline } from "~/components/jnd/experience/work-timeline";
import { EducationTimeline } from "~/components/jnd/experience/education-timeline";

export function ExperienceShowcase({ className }: { className?: string }) {
  return (
    <Tabs defaultValue="Experience" className={cn("flex flex-col", className)}>
      <TabsList className="h-min flex items-center justify-start flex-grow flex-wrap" variant="ghost">
        <TabsTrigger value="Experience" variant="outline">
          Experience
        </TabsTrigger>
        <TabsTrigger value="Education" variant="outline">
          Education
        </TabsTrigger>
      </TabsList>
      <div className="flex flex-col">
        <TabsContent value="Experience">
          <WorkTimeline />
        </TabsContent>
        <TabsContent value="Education">
          <EducationTimeline />
        </TabsContent>
      </div>
    </Tabs>
  );
}
