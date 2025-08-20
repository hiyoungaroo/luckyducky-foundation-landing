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
