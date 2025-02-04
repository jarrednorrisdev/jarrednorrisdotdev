import "~/styles/globals.css";
import React from "react";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { ThemeProvider } from "~/components/theme-provider";
import { JetBrains_Mono } from "next/font/google";

import { GlobalTopNavContents } from "~/components/jnd/navigation/GlobalTopNavContents";
import { NavBarTop } from "~/components/jnd/navigation/NavBarTop";
import { Providers } from "~/components/Providers";
import { getCurrentUserId } from "~/server/auth/live";
import { Effect, Option } from "effect";

export const dynamic = "force-dynamic";

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
  const htmlClassName: React.ComponentProps<"html">["className"] = `${jetBrainsMono.className} h-full `;

  return (
    <html lang="en" className={htmlClassName}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <body className="flex h-full flex-col">
        <Providers>
          <div className="flex h-full flex-col">
            <NavBarTop className="bg-card">
              <GlobalTopNavContents />
            </NavBarTop>

            {children}

            {modal}
            <div id="modal-root" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
