import { env } from "@/env";

export default function getDomain() {
  const protocol =
    env.NEXT_PUBLIC_VERCEL_ENV === "development" ? "http" : "https";
  const domain = () => {
    switch (env.NEXT_PUBLIC_VERCEL_ENV) {
      case "development":
        return env.NEXT_PUBLIC_VERCEL_BRANCH_URL ? env.NEXT_PUBLIC_VERCEL_BRANCH_URL : "localhost:3000";
      case "preview":
        return env.NEXT_PUBLIC_VERCEL_BRANCH_URL;
      case "production":
        return env.NEXT_PUBLIC_VERCEL_URL;
    }
  };

  return `${protocol}://${domain()}`;
}
