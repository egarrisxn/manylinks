import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "@/providers/session-provider";
import { DataProvider } from "@/providers/data-provider";
import { SITE_DATA } from "@/lib/site";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import type { Metadata } from "next";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.url),
  title: SITE_DATA.title,
  description: SITE_DATA.description,
  applicationName: SITE_DATA.title,
  referrer: "origin-when-cross-origin",
  keywords: [
    "typesctipt",
    "javascript",
    "next.js",
    "react",
    "tailwindcss",
    "shadcn/ui",
    "vercel",
  ],
  icons: {
    icon: {
      url: "/icon.png",
      sizes: "192x192",
      type: "image/png",
    },
    apple: {
      url: "/apple-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: {
      rel: "icon",
      url: "/icon.svg",
      type: "image/svg+xml",
    },
  },
  openGraph: {
    type: "website",
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    url: SITE_DATA.url,
    siteName: SITE_DATA.title,
    locale: SITE_DATA.locale,
    images: { url: SITE_DATA.og, alt: SITE_DATA.og },
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    creator: SITE_DATA.handle,
    site: SITE_DATA.handle,
    images: { url: SITE_DATA.og, alt: SITE_DATA.og },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <SessionProvider>
          <DataProvider>
            {children}
            <Toaster position='bottom-center' richColors />
          </DataProvider>
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
