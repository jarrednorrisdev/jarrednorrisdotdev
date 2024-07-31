import { MainHero } from "~/components/jnd/main-hero";
import { ExperienceCard } from "~/components/experience/experience-card";
import { ProjectsCard } from "~/components/projects/projects-card";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="container flex flex-shrink-0 flex-col gap-4 py-4 lg:auto-rows-fr lg:grid lg:grid-cols-5">
      <div className="flex flex-grow flex-col gap-4 lg:col-span-3">
        <MainHero className="" />

        <ExperienceCard className="flex-grow" />
      </div>
      <ProjectsCard className="lg:col-span-2 lg:col-start-4" />
    </main>
  );
}
