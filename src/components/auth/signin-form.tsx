"use client";

import { useRef } from "react";
import { signInWithUsernameAction } from "~/server/auth/actions/signInWithUsernameAction";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useServerAction } from "zsa-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { TerminalIcon } from "lucide-react";
import { signInFormSchema } from "~/server/auth/actions/signInFormSchema";
import { LoaderButton } from "~/components/LoaderButton";
import { toast } from "~/components/ui/use-toast";


export function SignInForm() {
  const { isPending, executeFormAction, error, reset } = useServerAction(
    signInWithUsernameAction,
    {
      onError({ err }) {
        toast({
          title: "Something went wrong",
          description: err.message,
          variant: "destructive",
        });
      },
      onSuccess() {
        toast({
          title: "Let's Go!",
          description: "Enjoy your session",
        });
      },
    },
  );

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      {/* <p>{`IsPending: ${isPending}`}</p> */}
      <form
        // onSubmit={() =>
        //   form.handleSubmit(async () => {
        //     await executeFormAction(new FormData(formRef.current!));
        //   })
        // }
        action={executeFormAction}
        ref={formRef}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full"
                  placeholder="Enter your username"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full"
                  placeholder="Enter your password"
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && (
          <Alert variant="destructive">
            <TerminalIcon className="h-4 w-4" />
            <AlertTitle>Uhoh, we couldn&apos;t sign you in</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
        <LoaderButton isLoading={isPending} className="w-full" type="submit">
          Sign In
        </LoaderButton>
      </form>
    </Form>
  );
}
