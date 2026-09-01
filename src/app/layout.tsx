import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "SharpLink — Ethereum with an Edge",
  description: "The institutional-grade Ethereum treasury platform giving investors smarter, more productive access to ETH.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
