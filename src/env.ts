import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_VERCEL_ENV: z.enum(["development", "preview", "production"]),
    NEXT_PUBLIC_VERCEL_URL: z.string().url("invalid URL for NEXT_PUBLIC_VERCEL_URL"),
    NEXT_PUBLIC_VERCEL_BRANCH_URL: z.string().url("invalid URL for NEXT_PUBLIC_VERCEL_BRANCH_URL"),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
  },
});