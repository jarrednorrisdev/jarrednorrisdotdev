import { SignInForm } from "~/components/auth/signin-form";
import { StyledPage } from "~/components/jnd/StyledPage";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default async function SignInPage() {
  return (
    <StyledPage>
      <main className="flex h-full flex-col items-center justify-center p-4">
        <Card className="gap-4 p-8">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
        </Card>
      </main>
    </StyledPage>
  );
}
