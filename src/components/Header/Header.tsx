import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/constants/const";

interface HeaderProps {
  onClick: () => void;
  isMenuOpen: boolean;
  onLinkClick: () => void;
}

const Header = ({ onClick, isMenuOpen, onLinkClick }: HeaderProps) => {
  return (
    <header className="px-4 py-6 flex justify-between items-center md:py-16 md:px-10 lg:px-10 lg:mx-auto xl:w-[1111px] xl:px-0">
      <Link href="/" onClick={onLinkClick}>
        <Image
          src="/assets/shared/desktop/logo-dark.png" // Route of the image file
          height={27} // Desired size with correct aspect ratio
          width={202} // Desired size with correct aspect ratio
          alt="Designo logo"
        />
      </Link>
      <button onClick={onClick} className="md:hidden">
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
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={onLinkClick}>
                {item.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
