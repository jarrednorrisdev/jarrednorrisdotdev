import { Option } from "effect";
import { cookies } from "next/headers";
import { lucia } from "~/server/auth/lucia";

export const getSessionCookie = () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  return sessionId == null ? Option.none() : Option.some(sessionId);
};
