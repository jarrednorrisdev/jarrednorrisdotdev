"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TypographyP } from "@/components/typography/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Task name must be at least 2 characters")
    .max(50, "Task name must be at most 50 characters"),
});

type Props = {};

export default function CreateTask({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "taskname",
    },
  });

  async function onSubmitTask(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("values: ", values);
    const newTask = { id: "0", name: values.name };
    const JSONData = JSON.stringify(newTask);
    console.log("JSONData", JSONData);

    const endpoint = `api/tasks`;
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSONData,
    };
		const response = await fetch(endpoint, options);
		console.log("onSubmitTask response:", response);
    const result = await response.json();
    console.log("onSubmitTask result:", result);
  }

  //<form className="flex flex-col gap-8">
  // <TypographyP>Add Task:</TypographyP>
  // <Input placeholder="Task Name"></Input>
  //  <Button type="submit"></Button>
  //</form>;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitTask)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>This is your task name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
