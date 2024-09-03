import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/provider";
import { NextSeo } from "next-seo";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

///used for SEO 
export const metadata: Metadata = {
  title: 'StarFund.io - StarFund',
  description: 'Build digital experiences for any tech stack, visually.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Providers children={children}></Providers>
      </body>
    </html>
  );
}
