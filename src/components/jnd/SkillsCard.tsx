import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  // CardFooter,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { SkillsBadgeList } from "./SkillsBadgeList";

export function SkillsCard({ className }: { className?: string }) {
  return (
    <Card className={cn("group relative", className)}>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <SkillsBadgeList />
      </CardContent>
      {/* <CardFooter></CardFooter> */}
    </Card>
  );
}
