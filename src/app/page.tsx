import MainHero from "~/components/hero/main-hero";
import { PreviousExperienceShowcase } from "./_components/PreviousExperienceShowcase";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex flex-grow flex-wrap gap-4 p-4 md:container md:mx-auto md:overflow-auto">
      <div className="flex flex-row flex-wrap  gap-4 p-4 lg:flex-nowrap">
        <MainHero className="flex flex-grow gap-8 rounded border bg-background px-4 py-2" />
        <PreviousExperienceShowcase className="flex flex-grow flex-wrap gap-2 rounded-md border bg-background px-5 py-3  md:overflow-hidden  " />
      </div>
    </main>
  );
}
