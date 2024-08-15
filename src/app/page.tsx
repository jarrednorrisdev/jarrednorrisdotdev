import { MainHero } from "~/components/jnd/main-hero";
import { SkillsCard } from "~/components/jnd/SkillsCard";
import { ExperienceCard } from "~/components/jnd/experience/ExperienceCard";
import { ProjectsCard } from "~/components/projects/ProjectsCard";
import { ScrollArea } from "~/components/ui/scroll-area";
import { StyledPage } from "~/components/jnd/StyledPage";

export default async function HomePage() {
  return (
    <ScrollArea type="always">
      <StyledPage>
        <main className="grid flex-col gap-4 p-4 md:container md:grid-cols-2 xl:grid-cols-3">
          <MainHero className="md:col-span-1 md:col-start-1" />
          <ProjectsCard className="md:col-span-1 md:col-start-2" />
          <SkillsCard className="col-span-1 md:col-span-2 md:col-start-1 xl:col-span-full xl:col-start-3" />
          <ExperienceCard className="md:col-span-2 md:col-start-1 xl:col-span-3" />
        </main>
      </StyledPage>
    </ScrollArea>
  );
}
