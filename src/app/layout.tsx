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
  title: "Blox Pay — Stop Losing Money on Every Sale",
  description:
    "Payment processing with zero card fees. 3-second settlement. Same-day payouts to your bank. Built on the Omne blockchain.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon-192.png",
    other: [{ rel: "mask-icon", url: "/favicon-512.png" }],
  },
  openGraph: {
    title: "Blox Pay — Stop Losing Money on Every Sale",
    description:
      "Payment processing with zero card fees. 3-second settlement. Same-day payouts. Built for small merchants.",
    url: "https://blox.capital",
    siteName: "Blox Capital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blox Pay — Zero-Fee Payment Processing",
    description:
      "Card fees eat up to 10% of small-ticket sales. Blox Pay eliminates them. 3-second settlement, same-day payouts.",
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
