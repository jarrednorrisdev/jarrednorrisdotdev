import { z } from "zod";

export const signInFormSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be at least 5 characters")
    .max(31, "Username must be at most 31 characters"),
  password: z
    .string()
    .min(7, "Password must be at least 7 characters")
    .max(31, "Password must be at most 31 characters"),
});