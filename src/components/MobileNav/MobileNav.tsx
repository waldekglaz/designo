import React from "react";
import Link from "next/link";
import { menuItems } from "@/_constants/const";

interface MobileNavProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

const MobileNav = ({ isMenuOpen, onClick }: MobileNavProps) => {
  return (
    <nav
      className={`${
        isMenuOpen ? "block" : "hidden"
      }   text-white bg-slate-950 bg-opacity-50 absolute top-[75px] left-0 w-full h-full z-10`}
    >
      <ul className=" bg-slate-900 px-4 py-8">
        {menuItems.map((item) => (
          <li className="mb-5" key={item.href}>
            <Link onClick={onClick} className="uppercase" href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
