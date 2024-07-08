import React from "react";
import Link from "next/link";

interface FooterNavItemProps {
  item: {
    name: string;
    href: string;
  };
}

const FooterNavItem = ({ item }: FooterNavItemProps) => {
  return (
    <li key={item.name} className="mb-5">
      <Link
        className="uppercase text-sm tracking-wider hover:text-slate-400"
        href={item.href}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default FooterNavItem;
