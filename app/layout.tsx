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
  title: "EazyLinc - Connect with Trusted Service Providers",
  description: "Find and hire reliable house helps, drivers, cleaners, and more with ease. EazyLinc makes connecting with trusted service providers fast, safe, and affordable.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EazyLinc - Connect with Trusted Service Providers",
    description: "Find and hire reliable house helps, drivers, cleaners, and more with ease. EazyLinc makes connecting with trusted service providers fast, safe, and affordable.",
    url: "https://eazy-waitlist.vercel.app/", 
    siteName: "EazyLinc",
    images: [
      {
        url: "/easy2.png", 
        width: 1200,
        height: 630,
        alt: "EazyLinc - Connecting with Trusted Service Providers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EazyLinc - Connect with Trusted Service Providers",
    description: "Find and hire reliable house helps, drivers, cleaners, and more with ease. EazyLinc makes connecting with trusted service providers fast, safe, and affordable.",
    images: ["/easy2.png"], 
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