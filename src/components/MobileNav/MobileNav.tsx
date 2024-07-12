import React from "react";
import Link from "next/link";
import { menuItems } from "@/constants/const";
import { motion, spring } from "framer-motion";

interface MobileNavProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const MobileNav = ({ isMenuOpen, onClick }: MobileNavProps) => {
  return (
    <motion.nav
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      transition={{ type: spring, stiffness: 260, damping: 20 }}
      variants={variants}
      className={`text-white bg-slate-950 bg-opacity-50 absolute top-[75px] left-0 w-full h-full z-50`}
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
    </motion.nav>
  );
};

export default MobileNav;
