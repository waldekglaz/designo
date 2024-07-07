"use client";
import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import MobileNav from "@/components/MobileNav/MobileNav";
import Footer from "@/components/Footer/Footer";

// const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

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
  // Side effect to disable/enable scrolling
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scrolling is enabled when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]); // Depend on isMenuOpen
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header
          onClick={toggleMenu}
          isMenuOpen={isMenuOpen}
          onLinkClick={handleLinkClick}
        />
        <MobileNav isMenuOpen={isMenuOpen} onClick={handleLinkClick} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
