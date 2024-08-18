import { Effect } from "effect";
import { z } from "zod";
import { createServerAction } from "zsa";
import { AuthService, AuthServiceLive } from "~/app/server/auth/authService";

export const formSchema = z
  .object({
    username: z
      .string()
      .min(5, "Username must be at least 5 characters")
      .max(31, "Username must be at most 31 characters"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(7, "Password must be at least 7 characters")
      .max(31, "Password must be at most 31 characters"),
    confirmPassword: z
      .string()
      .min(7, "Password must be at least 7 characters")
      .max(31, "Password must be at most 31 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signUpWithUsernameAction = createServerAction()
  .input(formSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    // TODO: remove for production
    console.log(input);

    return Effect.provide(
      AuthService.pipe(
        Effect.andThen((authService) => authService.signUpWithUsername(input)),
      ),
      AuthServiceLive,
    );
  });
