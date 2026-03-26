import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M. Saeed Ahmed",
  description: "Dr. Saeed Ahmed's Portfolio Website",
  manifest: "/manifest.json",
  authors: [{ name: "P2PClouds Dev Team", url: "https://p2pclouds.org/" }],
  creator: "P2PClouds Dev Team",
  category: "Portfolio",
  keywords: ["Portfolio", "PhD"],
  icons: [
    {
      rel: "icon",
      url: "/Saeed_pic.png",
      sizes: "512x512",
      type: "any maskable",
    },
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      url: "/Saeed_pic.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="It is an Dr. MR.Saeed Portfolio Website"
        />
        <meta name="keywords" content="Portolio, Doctor, P2P Cloud,PHD" />
        <meta name="author" content="Dr. Saeed Ahmed" />
        <meta name="theme-color" content="#000000" />
        <meta name="theme-color" content="#3579f6"/>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
