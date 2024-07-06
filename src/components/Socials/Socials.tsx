import React from "react";
import { socials } from "@/constants/const";
import Link from "next/link";
import Image from "next/image";

const Socials = () => {
  return (
    <ul className="flex justify-center gap-3 mt-10">
      {socials.map((social) => (
        <li key={social.name}>
          <Link href={social.href}>
            <Image
              src={social.img}
              alt={`${social.name} logo`}
              width={24}
              height={24}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
