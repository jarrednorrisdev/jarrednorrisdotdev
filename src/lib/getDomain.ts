import { env } from "@/env";

export default function getDomain() {
  const protocol =
    env.NEXT_PUBLIC_VERCEL_ENV === "development" ? "http" : "https";
  const domain =
    env.NEXT_PUBLIC_VERCEL_URL 
  return `${protocol}://${domain}`;
}
