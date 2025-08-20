import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuckyDucky - Web3 Social Gaming Platform",
  description:
    "Earn crypto rewards through Web3 social gaming and manage your digital assets with LuckyDucky's cutting-edge platform.",
  metadataBase: new URL('https://about.luckyducky.world'),
  openGraph: {
    title: "LuckyDucky Foundation - Web3 Social Gaming Platform",
    description: "Earn crypto rewards through Web3 social gaming and manage your digital assets with LuckyDucky's cutting-edge platform.",
    url: 'https://about.luckyducky.world',
    siteName: 'LuckyDucky Foundation',
    images: [
      {
        url: '/luckyducky-about-og.png',
        width: 1200,
        height: 630,
        alt: 'LuckyDucky Foundation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LuckyDucky Foundation - Web3 Social Gaming Platform",
    description: "Earn crypto rewards through Web3 social gaming and manage your digital assets with LuckyDucky's cutting-edge platform.",
    images: ['/luckyducky-about-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased bg-black", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
