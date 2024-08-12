import { MainHero } from "~/components/jnd/main-hero";
import { SkillsCard } from "~/components/jnd/SkillsCard";
import { ExperienceCard } from "~/components/jnd/experience/ExperienceCard";
import { ProjectsCard } from "~/components/projects/ProjectsCard";
import { ScrollArea } from "~/components/ui/scroll-area";
import StyledPage from "~/components/jnd/StyledPage";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <StyledPage>
      <ScrollArea>
        <main className="flex flex-col gap-4 overflow-auto p-4 md:container md:grid md:grid-cols-2 xl:grid-cols-3">
          <MainHero className="flex-grow md:col-span-1 md:col-start-1" />
          <SkillsCard className="flex-grow md:col-span-1 md:col-start-2" />
          <ProjectsCard className="flex-grow md:col-span-2 md:col-start-1 xl:col-span-full xl:col-start-3" />
          <ExperienceCard className="flex-grow md:col-span-2 md:col-start-1 xl:col-span-3" />
        </main>
      </ScrollArea>
    </StyledPage>
  );
}
