import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DD Planeje | JBApex",
  description: "Planejamento — ddplaneje.jbapex.com.br",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://ddplaneje.jbapex.com.br",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c1a16] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
