import { type Cookie } from "lucia";
import { cookies } from "next/headers";

export const setSessionCookie = (sessionCookie: Cookie) => {
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
};
