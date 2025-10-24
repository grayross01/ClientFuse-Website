import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClientFuse - Simplify Client Account Access for Marketing Agencies",
  description: "Get instant access to your clients' social media and Google accounts with one simple link. No more back-and-forth, no more hassle.",
  keywords: "marketing agency, client access, social media management, google ads, facebook ads, account access",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

