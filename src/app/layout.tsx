import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BidZen - Government Tender Discovery for IT Vendors",
  description:
    "Stop chasing tenders. BidZen scans government portals daily and shows you only the IT tenders you're eligible for. Join early access.",
  keywords: [
    "government tenders",
    "IT tenders India",
    "GeM tenders",
    "CPPP tenders",
    "tender discovery",
    "tender alerts",
  ],
  authors: [{ name: "BidZen" }],
  openGraph: {
    title: "BidZen - Government Tender Discovery for IT Vendors",
    description:
      "Stop chasing tenders. Get matched to IT tenders you're eligible for.",
    type: "website",
    locale: "en_IN",
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
      </body>
    </html>
  );
}
