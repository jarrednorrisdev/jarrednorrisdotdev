"use client";

import { useRef } from "react";
import { signUpWithUsernameAction } from "~/server/auth/actions/signUpWithUsernameAction";

import {
  Form,
  FormControl,
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
import { signUpFormSchema } from "~/server/auth/actions/signUpFormSchema";
import { LoaderButton } from "~/components/LoaderButton";

// TODO: Check if username is already used in the database
export function SignUpForm() {
  const { isPending, executeFormAction, error, reset } = useServerAction(
    signUpWithUsernameAction,
  );

  // TODO: remove default values for production
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    mode: "onChange",
    defaultValues: {
      username: "aaaaaaaa",
      email: "aaaaaaaa@aa.aa",
      password: "aaaaaaaa",
      confirmPassword: "aaaaaaaa",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <form
        onSubmit={async () =>
          form.handleSubmit(async () => {
            console.log("Executing Sign Up Submit Button");
            await executeFormAction(new FormData(formRef.current!));
          })
        }
        action={executeFormAction}
        ref={formRef}
        className="w-96 space-y-6"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full"
                  placeholder="Enter your email"
                  type="email"
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full"
                  placeholder="Confirm your password"
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
            <AlertTitle>Uhoh, we couldn&apos;t sign you up</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
        <LoaderButton isLoading={isPending} className="w-full" type="submit">
          Sign Up
        </LoaderButton>
      </form>
    </Form>
  );
}
