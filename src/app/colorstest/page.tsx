import { StyledPage } from "~/components/jnd/StyledPage";
import { Card } from "~/components/ui/card";

export default async function ColorsTestPage() {
  return (
    <StyledPage className="flex-row">
      <div className="flex flex-col gap-2 p-16">
        <Card className="flex-grow justify-center bg-background text-foreground">
          bg-background | text-foreground
        </Card>
        <Card className="flex-grow justify-center bg-background-secondary text-foreground">
          bg-background-secondary | text-foreground
        </Card>
        <Card className="flex-grow justify-center bg-secondary text-secondary-foreground">
          bg-secondary | text-secondary-foreground
        </Card>
        <Card className="flex-grow justify-center bg-card text-card-foreground">
          bg-card | text-card-foreground
        </Card>
        <Card className="flex-grow justify-center bg-popover text-popover-foreground">
          bg-popover | text-popover-foreground
        </Card>
        <Card className="flex-grow justify-center bg-primary text-primary-foreground">
          bg-primary | text-primary-foreground
        </Card>

        <Card className="flex-grow justify-center bg-tertiary text-tertiary-foreground">
          bg-tertiary | text-tertiary-foreground
        </Card>
        <Card className="flex-grow justify-center bg-quaternary text-quaternary-foreground">
          bg-quaternary | text-quaternary-foreground
        </Card>
        <Card className="flex-grow justify-center bg-destructive text-destructive-foreground">
          bg-destructive | text-destructive-foreground
        </Card>
        <Card className="flex-grow justify-center bg-muted text-muted-foreground">
          bg-muted | text-muted-foreground
        </Card>
      </div>
    </StyledPage>
  );
}
