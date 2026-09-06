import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Hassan Ahmed — Backend Engineer & Quality Practitioner",
  description:
    "Personal portfolio of Hassan Ahmed. Software Engineer specializing in Backend Systems, Go Distributed Architectures, Database Integrity, and System Design.",
  keywords: [
    "Hassan Ahmed",
    "Backend Engineer",
    "Go Developer",
    "Software Tester",
    "DEPI",
    "System Design",
    "Egypt",
    "Cairo",
  ],
  authors: [{ name: "Hassan Ahmed" }],
  openGraph: {
    title: "Hassan Ahmed — Backend Engineer",
    description: "Building reliable backend systems and high-concurrency software.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${caveat.variable} bg-background text-foreground antialiased selection:bg-white/20 selection:text-white`}>
        {/* Subtle Film Grain Layer */}
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
