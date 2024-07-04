"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Header from "@/components/Header/Header";
import MobileNav from "@/components/MobileNav/MobileNav";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Designo",
//   description:
//     "Designo is a multi-page website built with Next.js and Tailwind CSS.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        <MobileNav isMenuOpen={isMenuOpen} onClick={handleLinkClick} />
        {children}
      </body>
    </html>
  );
}
