// "use client";
// import { type z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useFormState } from "react-dom";
// import { useRef } from "react";

// import { Button } from "~/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "~/components/ui/form";
// import { Input } from "~/components/ui/input";
// import { type formState } from "~/server/actions/auth/signup";
// import { formSchema } from "./signup-form-schema";

// export function SignUpForm({
//   onSignUp,
// }: {
//   onSignUp: (
//     previousState: formState,
//     formData: FormData,
//   ) => Promise<formState>;
// }) {
//   const [state, formAction] = useFormState(onSignUp, {
//     message: "",
//   });
//   const form = useForm<z.output<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     // mode: "onChange",
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       ...(state?.fields ?? {}),
//     },
//   });

//   const formRef = useRef<HTMLFormElement>(null);

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={(evt) => {
//           evt.preventDefault();
//           void form.handleSubmit(() => {
//             formAction(new FormData(formRef.current!));
//           })(evt);
//         }}
//         action={formAction}
//         ref={formRef}
//         className="flex flex-col gap-4"
//       >
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="Username" {...field} type="text" />
//               </FormControl>
//               <FormDescription>
//                 This will be your public username used to login and add friends
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email Address</FormLabel>
//               <FormControl>
//                 <Input placeholder="Email Address" {...field} type="email" />
//               </FormControl>
//               <FormDescription>
//                 This will be your public username used to login and add friends
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input {...field} type="password" placeholder="Password" />
//               </FormControl>
//               {/* <FormDescription>This is your private password</FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="confirmPassword"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Confirm Password</FormLabel>
//               <FormControl>
//                 <Input {...field} type="password" placeholder="Password" />
//               </FormControl>
//               {/* <FormDescription>This is your private password</FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Sign Up</Button>
//       </form>
//     </Form>
//   );
// }
