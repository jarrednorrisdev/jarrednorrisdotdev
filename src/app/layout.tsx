import "~/styles/globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { ThemeProvider } from "~/components/theme-provider";
import { JetBrains_Mono } from "next/font/google";

import { GlobalTopNavContents } from "~/components/jnd/navigation/GlobalTopNavContents";
import { NavBarTop } from "~/components/jnd/navigation/NavBarTop";
import { liveGetCurrentUser } from "~/server/auth/queries";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "jarrednorrisdev",
  description: "The Personal Website of Jarred Norris, Software Engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const user = await liveGetCurrentUser();
  return (
    <ClerkProvider>
      <html lang="en" className={`${jetBrainsMono.className} h-full`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <div className="flex h-screen max-h-screen min-h-screen flex-col items-stretch justify-stretch overflow-auto">
              <NavBarTop className="bg-card">
                <GlobalTopNavContents userId={user?.id} />
              </NavBarTop>

              {children}
              {modal}
              <div id="modal-root" />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
