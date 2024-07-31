import { ExperienceShowcase } from "~/components/experience/experience-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { cn } from "~/lib/utils";

export function ExperienceCard({ className }: { className?: string }) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ExperienceShowcase />
      </CardContent>
    </Card>
  );
}
