import React from "react";
import Image from "next/image";
import { menuItems } from "@/constants/const";
import Link from "next/link";
import FooterNavItem from "../FooterNavItem/FooterNavItem";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className="relative mt-56">
      <div className="bg-footer-pattern bg-no-repeat bg-center bg-orange absolute top-[-20%] text-white py-10 px-4 text-center rounded-lg left-1/2 transform -translate-x-1/2 w-[90%]">
        <h2 className="text-3xl mb-4">Let's talk about your project</h2>
        <p className="text-sm leading-relaxed mb-6">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button className="bg-white rounded-lg text-slate-900 text-sm py-4 px-5">
          Get in touch
        </button>
      </div>
      <div className="px-4 bg-[#1D1C1E] pt-60 pb-16 text-white text-center">
        <Link href="/">
          <Image
            className="mx-auto"
            src="/assets/shared/desktop/logo-light.png"
            width={202}
            height={30}
            alt="Designo Logo"
          />
        </Link>
        <hr className=" my-8 border border-slate-800" />
        <nav>
          <ul>
            {menuItems.map((item) => (
              <FooterNavItem item={item} />
            ))}
          </ul>
        </nav>
        <address className="not-italic">
          <div className="mt-8 leading-7 text-sm text-gray-400">
            <h3 className="font-bold">Designo Central Office</h3>
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </div>
          <div className="mt-8 leading-7 text-sm text-gray-400">
            <h3 className="font-bold">Contact Us (Central Office)</h3>
            P : +1 253-863-8967 <br />M : contact@designo.co
          </div>
        </address>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
