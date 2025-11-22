import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blox.capital"),
  title: "Blox Capital — Regulated Commerce Infrastructure",
  description:
    "Blox Capital LLC, a DoneUp, Inc. company, operates the Blox Pay and Blox Wallet platforms with institutional-grade compliance and Omne-powered settlement.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon-192.png",
    other: [{ rel: "mask-icon", url: "/favicon-512.png" }],
  },
  openGraph: {
    title: "Blox Capital — Regulated Commerce Infrastructure",
    description:
      "Regulated subsidiary delivering Omne-powered payments through Blox Pay and Blox Wallet.",
    url: "https://blox.capital",
    siteName: "Blox Capital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blox Capital — Regulated Commerce Infrastructure",
    description:
      "Blox Capital LLC, the regulated operator of Blox Pay and Blox Wallet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${jetBrainsMono.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
