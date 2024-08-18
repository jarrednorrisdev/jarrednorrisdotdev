import { SignInForm } from "~/components/auth/signin-form";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default async function SignInPage() {
	return (
    <main className="flex h-full flex-grow flex-col items-center justify-center">
      <Card className="gap-4 p-8">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </main>
  );
}
