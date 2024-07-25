import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "../components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { ThemeProvider } from "~/components/theme-provider";
import React from "react";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import { Particle } from "@tsparticles/engine";
import ParticlesEffect from "~/components/particles";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "jarrednorrisdev",
  description: "The Personal Website of Jarred Norris, Software Engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
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
            <div className="  flex h-dvh max-h-dvh flex-grow flex-col items-stretch justify-stretch overflow-auto">
              <TopNav className="bg-background/80 px-8 py-2 backdrop-blur-lg" />
              <ParticlesEffect />
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
