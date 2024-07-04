"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { useState } from "react";
import { menuItems } from "@/_const/const";
import Link from "next/link";

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
        <header className="px-4 py-6 flex justify-between items-center">
          <Image
            src="/assets/shared/desktop/logo-dark.png" // Route of the image file
            height={27} // Desired size with correct aspect ratio
            width={202} // Desired size with correct aspect ratio
            alt="Designo logo"
          />
          <button onClick={toggleMenu}>
            {!isMenuOpen ? (
              <Image
                src="/assets/shared/mobile/icon-hamburger.svg"
                height={20}
                width={24}
                alt="hamburger menu"
              />
            ) : (
              <Image
                src="/assets/shared/mobile/icon-close.svg"
                height={20}
                width={20}
                alt="close menu"
              />
            )}
          </button>
        </header>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          }   text-white bg-slate-950 bg-opacity-50 absolute top-[75px] left-0 w-full h-full z-10`}
        >
          <ul className=" bg-slate-950 px-4 py-8">
            {menuItems.map((item) => (
              <li className="mb-5" key={item.href}>
                <Link
                  onClick={handleLinkClick}
                  className="uppercase"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
