import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IllustratedCardProps {
  src: string;
  alt: string;
  title: string;
  text?: string;
  btn?: boolean;
  link?: string | React.AnchorHTMLAttributes<HTMLAnchorElement>;
  btnText?: string;
}

const IllustratedCard = ({
  src,
  alt,
  title,
  text,
  btn,
  link = "", // Provide a default value for the link prop
  btnText,
}: IllustratedCardProps) => {
  return (
    <div className="flex flex-col items-center text-center px-6 mb-20 ">
      <Image
        className="bg-hero-pattern bg-no-repeat bg-contain bg-center"
        src={src}
        width={202}
        height={202}
        alt={alt}
      />
      <h2 className="text-xl uppercase tracking-widest mb-8">{title}</h2>
      {text && <p>{text}</p>}
      {btn && (
        <Link
          href={link}
          className="bg-orange text-white uppercase p-3 rounded-lg transition-colors hover:bg-white hover:text-orange"
        >
          {btnText}
        </Link>
      )}
    </div>
  );
};

export default IllustratedCard;
