import React from "react";
import Image from "next/image";
import { menuItems } from "@/constants/const";
import Link from "next/link";
import FooterNavItem from "../FooterNavItem/FooterNavItem";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";
import Banner from "../Banner/Banner";

const Footer = () => {
  return (
    <footer className="relative mt-56 xl:mt-80">
      <Banner
        title="Let's talk about your project"
        text="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."
        btnText="Get in touch"
        href="/contact"
      />
      <div className="px-4 bg-[#1D1C1E] pt-60 pb-16 text-white text-center md:px-11 xl:px-40 xl:w-[1440px] xl:mx-auto">
        <Link href="/">
          <Image
            className="mx-auto md:ml-0"
            src="/assets/shared/desktop/logo-light.png"
            width={202}
            height={30}
            alt="Designo Logo"
          />
        </Link>
        <hr className=" my-8 border border-slate-800" />
        <nav>
          <ul className="md:flex md:gap-11 md:absolute md:top-60 left-[49%] lg:left-[60%]">
            {menuItems.map((item) => (
              <FooterNavItem item={item} key={item.href} />
            ))}
          </ul>
        </nav>
        <div className=" md:flex md:justify-between items-end md:text-left">
          <address className="mt-8 leading-7 text-sm text-gray-400 not-italic ">
            <h3 className="font-bold">Designo Central Office</h3>
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </address>
          <div className="mt-8 leading-7 text-sm text-gray-400">
            <h3 className="font-bold">Contact Us (Central Office)</h3>
            P : +1 253-863-8967 <br />M : contact@designo.co
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
