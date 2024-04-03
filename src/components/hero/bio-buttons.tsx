import React from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

export function BioButtons() {
  return (
    <div className="flex items-center gap-4 max-[479px]:flex-wrap">
      <Button>Contact</Button>
      <Button variant="outline">
        <div className="mr-2 flex-col flex items-center w-5">
          <Download />
        </div>
        CV
      </Button>
    </div>
  );
}
