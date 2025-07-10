import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grow A Garden Calculator - Roblox Mutation Calculator & Value Tool",
  description: "The most accurate Grow A Garden Calculator for Roblox! Instantly calculate crop values with mutations, weight, & friend bonus. Free mutation calculator for maximizing Sheckles now!",
  keywords: [
    "growagardencalculator",
    "grow a garden mutation calculator",
    "grow a garden calculator roblox",
    "grow a garden mutations calculator",
    "mutation calculator grow a garden",
    "roblox grow a garden",
    "grow a garden values",
    "grow a garden crops calculator",
    "roblox farming calculator",
    "grow a garden sheckles calculator"
  ],
  authors: [{ name: "Grow A Garden Calculator Team" }],
  creator: "Grow A Garden Calculator",
  publisher: "Grow A Garden Calculator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://growagardencalculator.net',
    title: 'Grow A Garden Calculator - Roblox Mutation Calculator',
    description: 'Calculate crop values with mutations in Roblox Grow A Garden. Free calculator for mutations, weights, and Sheckles optimization.',
    siteName: 'Grow A Garden Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow A Garden Calculator - Roblox Mutation Calculator',
    description: 'Calculate crop values with mutations in Roblox Grow A Garden. Free calculator for maximizing Sheckles.',
  },
  alternates: {
    canonical: 'https://growagardencalculator.net',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <link rel="canonical" href="https://growagardencalculator.net" />
      </head>
      <ClientBody className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </ClientBody>
    </html>
  );
}
