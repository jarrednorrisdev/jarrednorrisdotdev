import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { WorkTimelineShowcase } from "./WorkTimelineShowcase";
import { EducationTimelineShowcase } from "./EducationTimelineShowcase";

export function PreviousExperienceShowcase() {
  return (
    <div className="flex flex-grow flex-wrap gap-2 rounded-md border px-5 py-3 backdrop-blur-sm md:overflow-hidden  lg:flex-nowrap">
      <Tabs defaultValue="Experience" className="min-w-1/2 ">
        <TabsList className="p-0" variant="ghost">
          <TabsTrigger className="" value="Experience" variant="outline">
            Experience
          </TabsTrigger>
          <TabsTrigger className="" value="Education" variant="outline">
            Education
          </TabsTrigger>
        </TabsList>
        <div className="flex  flex-col md:overflow-scroll">
          <TabsContent className="md:overflow-auto" value="Experience">
            <WorkTimelineShowcase />
          </TabsContent>
          <TabsContent className="" value="Education">
            <EducationTimelineShowcase />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
