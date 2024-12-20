import { Metadata } from "next";

import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import "@/app/globals.css";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";

const APP_URL = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://chat.vercel.ai");

export const metadata: Metadata = {
  metadataBase: APP_URL,
  title: "AI Chatbot",
  description: "AI Chatbot built with Next.js, Vercel AI, shadcn.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
  
    icon: "/tanya.png",
    shortcut: "/tanya.png",
    apple: "/tanya.png",
  },
  openGraph: {
    title: "AI Chatbot",
    description: "AI Chatbot built with Next.js, Vercel AI, shadcn.",
    url: APP_URL,
    siteName: "AI Chatbot",
    images: [
      {
        url: APP_URL + "/opengraph-image.png",
        alt: "AI Chatbot",
        width: 1686,
        height: 882,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "AI Chatbot",
    description: "AI Chatbot built with Next.js, Vercel AI, shadcn.",
    site: APP_URL.toString(),
    images: [
      {
        url: APP_URL + "/twitter-image.png",
        alt: "AI Chatbot",
        width: 1686,
        height: 882,
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans antialiased", fontSans.variable, fontMono.variable)}>
        <Analytics />
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
