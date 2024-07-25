import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { WorkTimeline } from "./work-timeline";
import { EducationTimeline } from "./education-timeline";
import { cn } from "~/lib/utils";

export function ExperienceShowcase({ className }: { className?: string }) {
  return (
    <div className={cn(className, "")}>
      <Tabs defaultValue="Experience" className="min-w-1/2 ">
        <TabsList className="p-0" variant="ghost">
          <TabsTrigger  value="Experience" variant="outline">
            Experience
          </TabsTrigger>
          <TabsTrigger  value="Education" variant="outline">
            Education
          </TabsTrigger>
        </TabsList>
        <div className="flex  flex-col md:overflow-scroll">
          <TabsContent  value="Experience">
            <WorkTimeline />
          </TabsContent>
          <TabsContent  value="Education">
            <EducationTimeline />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
