import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default async function SignUpPage() {
  return (
    <main className="flex h-full flex-grow flex-col items-center justify-center">
      <Card className="gap-4 p-8">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>

        <CardContent>{/* <SignUpForm onSignUp={onSignUp} /> */}</CardContent>
      </Card>
    </main>
  );
}
