import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Alvara Trade — AI-Powered Trading in Telegram",
  description: "AI analysis across 26 trading strategies, one-click trade execution, and $ALVARA token farming—all inside Telegram.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
