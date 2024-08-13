import { StyledPage } from "~/components/jnd/StyledPage";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export default async function ColorsTestPage() {
  return (
    <StyledPage className="flex-row">
      <div className="flex w-1/2 flex-grow flex-col gap-2 p-2">
        <Button
          variant="outline"
          className="flex-grow bg-background text-foreground"
        >
          bg-background | text-foreground
        </Button>
        <Button
          variant="outline"
          className="flex-grow bg-background-secondary text-foreground"
        >
          bg-background-secondary | text-foreground
        </Button>
        <Button
          variant="outline"
          className="flex-grow bg-secondary text-secondary-foreground"
        >
          bg-secondary | text-secondary-foreground
        </Button>
        <Button
          variant="outline"
          className="flex-grow bg-card text-card-foreground"
        >
          bg-card | text-card-foreground
        </Button>
        <Button
          variant="outline"
          className="flex-grow bg-popover text-popover-foreground"
        >
          bg-popover | text-popover-foreground
        </Button>
        <Button
          variant="outline"
          className="flex-grow bg-primary text-primary-foreground"
        >
          bg-primary | text-primary-foreground
        </Button>

        <Button
          variant="outline"
          className="flex-grow bg-tertiary text-tertiary-foreground"
        >
          bg-tertiary | text-tertiary-foreground
        </Button>
        <Button
          variant="outline"
          className="flex-grow bg-quaternary text-quaternary-foreground"
        >
          bg-quaternary | text-quaternary-foreground
        </Button>
        <Button
          variant="outline"
          className="flex-grow bg-destructive text-destructive-foreground"
        >
          bg-destructive | text-destructive-foreground
        </Button>
        <Button
          variant="outline"
          className="flex-grow bg-muted text-muted-foreground"
        >
          bg-muted | text-muted-foreground
        </Button>
      </div>

      <div className="flex w-1/2 flex-col gap-2 p-2">
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
