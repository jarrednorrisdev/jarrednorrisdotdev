import { MainHero } from "~/components/jnd/main-hero";
import { SkillsCard } from "~/components/jnd/SkillsCard";
import { ExperienceCard } from "~/components/jnd/experience/experience-card";
import { ProjectsCard } from "~/components/projects/projects-card";
import { ScrollArea } from "~/components/ui/scroll-area";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <ScrollArea>
      <main className="flex flex-shrink-0 flex-col gap-4 overflow-auto p-4 lg:grid lg:auto-rows-fr lg:grid-cols-5">
        <div className="flex flex-grow flex-col gap-4 lg:col-span-3">
          <MainHero className="" />
          <SkillsCard className="" />

          <ExperienceCard className="flex-grow" />
        </div>
        <ProjectsCard className="lg:col-span-2 lg:col-start-4" />
      </main>
    </ScrollArea>
  );
}
