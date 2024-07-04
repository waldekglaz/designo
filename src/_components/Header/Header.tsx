import React from "react";
import Image from "next/image";

interface HeaderProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

const Header = ({ onClick, isMenuOpen }: HeaderProps) => {
  return (
    <header className="px-4 py-6 flex justify-between items-center">
      <Image
        src="/assets/shared/desktop/logo-dark.png" // Route of the image file
        height={27} // Desired size with correct aspect ratio
        width={202} // Desired size with correct aspect ratio
        alt="Designo logo"
      />
      <button onClick={onClick}>
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
  );
};

export default Header;
