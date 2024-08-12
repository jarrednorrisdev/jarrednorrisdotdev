import React from "react";
import { Badge } from "~/components/ui/badge";

export interface TimelineEntry {
  title: string;
  location: string;
  date: string;
  content: string;
  extra?: string;
  badges?: {
    name: string;
    variant: React.ComponentProps<typeof Badge>["variant"];
  }[];
}
