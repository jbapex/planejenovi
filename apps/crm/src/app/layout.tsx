import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DD CRM | JBApex",
  description: "CRM — ddcrm.jbapex.com.br",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://ddcrm.jbapex.com.br",
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
      className={`${outfit.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f1a] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
