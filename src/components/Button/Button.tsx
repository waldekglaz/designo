import React from "react";
import Link from "next/link";
interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-white rounded-lg text-slate-900 text-sm py-4 px-6 uppercase xl:ml-0 hover:bg-[#ffad98] hover:text-white transition-colors"
    >
      {text}
    </Link>
  );
};

export default Button;
