import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henophilia · Inhabitable Systems Design",
  description:
    "Designing inhabitable systems that integrate digital, economic, democratic, and political principles into permanent structures for living and community organization.",
  keywords: [
    "Henophilia",
    "systems design",
    "digital democracy",
    "inhabitable systems",
    "community organization",
  ],
  authors: [{ name: "Henophilia" }],
  openGraph: {
    title: "Henophilia · Inhabitable Systems Design",
    description:
      "Designing inhabitable systems that integrate digital, economic, democratic, and political principles.",
    url: "https://henophilia.art",
    siteName: "Henophilia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henophilia · Inhabitable Systems Design",
    description: "Designing inhabitable systems for community living",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
