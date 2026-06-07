import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const fraunces = Fraunces({
  variable: "--font-solarpunk-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-solarpunk-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Julian Nalenz · Sovereign Infrastructure",
  description:
    "Building sovereign infrastructure for allowing all humans to realize their full potential.",
  keywords: [
    "Julian Nalenz",
    "sovereign infrastructure",
    "solarpunk",
    "systems design",
    "digital democracy",
  ],
  authors: [{ name: "Julian Nalenz" }],
  openGraph: {
    title: "Julian Nalenz · Sovereign Infrastructure",
    description:
      "Building sovereign infrastructure for allowing all humans to realize their full potential.",
    url: "https://nalenz.org",
    siteName: "nalenz.org",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian Nalenz · Sovereign Infrastructure",
    description:
      "Building sovereign infrastructure for allowing all humans to realize their full potential.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} solarpunk-page antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
