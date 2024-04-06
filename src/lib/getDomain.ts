import { env } from "@/env";

export default function getDomain() {
  const protocol =
    env.VERCEL_ENV === "production" ? "https" : "http";
  const domain =
    env.VERCEL_URL &&
    env.VERCEL_ENV === "production"
      ? env.VERCEL_URL
      : "localhost:3000";
  return `${protocol}://${domain}`;
}
