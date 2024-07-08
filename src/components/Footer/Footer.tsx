import React from "react";
import Image from "next/image";
import { menuItems } from "@/constants/const";
import Link from "next/link";
import FooterNavItem from "../FooterNavItem/FooterNavItem";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="relative mt-56 ">
      <div className="bg-footer-pattern bg-no-repeat bg-center bg-orange absolute top-[-20%] text-white py-10 px-4 text-center rounded-lg left-1/2 transform -translate-x-1/2 w-[90%] xl:w-[1111px] xl:flex items-center justify-between xl:text-left xl:py-20 xl:px-24 xl:top-[-40%]">
        <div>
          <h2 className="text-3xl mb-4 md:text-5xl md:max-w-[335px] md:mx-auto xl:ml-0">
            Let's talk about your project
          </h2>
          <p className="text-sm leading-relaxed mb-6 md:text-base md:max-w-[520px] md:mx-auto">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <Button text="Get in touch" href="/contact" />
      </div>
      <div className="px-4 bg-[#1D1C1E] pt-60 pb-16 text-white text-center xl:px-40 xl:w-[1440px] xl:mx-auto">
        <Link href="/">
          <Image
            className="mx-auto xl:ml-0"
            src="/assets/shared/desktop/logo-light.png"
            width={202}
            height={30}
            alt="Designo Logo"
          />
        </Link>
        <hr className=" my-8 border border-slate-800" />
        <nav>
          <ul className="xl:flex xl:gap-11 xl:absolute xl:top-60 left-[62%]">
            {menuItems.map((item) => (
              <FooterNavItem item={item} key={item.href} />
            ))}
          </ul>
        </nav>
        <div className=" xl:flex xl:justify-between items-end xl:text-left">
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
