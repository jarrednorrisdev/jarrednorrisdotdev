// "use server";

// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { lucia, validateRequest } from "~/lib/auth";

// export type formState = {
//   message: string;
//   issues?: string[];
// };

// export const onSignOut = async () => {
//   const { session } = await validateRequest();
//   if (!session) {
//     return {
//       message: "Unauthorized",
//     };
//   }

//   await lucia.invalidateSession(session.id);

//   const sessionCookie = lucia.createBlankSessionCookie();
//   cookies().set(
//     sessionCookie.name,
//     sessionCookie.value,
//     sessionCookie.attributes,
//   );
//   return redirect("/login");
// };
