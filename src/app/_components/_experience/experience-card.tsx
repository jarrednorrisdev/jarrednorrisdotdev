import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ExperienceShowcase } from "./experience-showcase";

export function ExperienceCard() {
  return (
    <Card className="group relative flex-grow">
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ExperienceShowcase />
      </CardContent>
    </Card>
  );
}
