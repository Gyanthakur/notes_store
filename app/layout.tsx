import type { Metadata } from "next";

import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes-store",
  description: "Notes_store appears to be a misspelling of Notion,Notion is a popular productivity and note-taking app designed to help users organize their thoughts, manage projects, and collaborate effectively. It offers a variety of features, including:",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: light)",
        url:"/logo.svg",
        href:"/logo.svg"
      },
      {
        media:"(prefers-color-scheme: dark)",
        // url:"/logo.svg",
        // href:"/logo.svg"
        url:"/logo-dark.png",
        href:"/logo-dark.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider> 
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="Jotion-theme-2"
            >
             <Toaster position="bottom-center"/>
             <ModalProvider />
            {children}
          </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}
