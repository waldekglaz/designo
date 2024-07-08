import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-contain bg-no-repeat bg-orange text-white pt-20 px-4 text-center max-h-[620px] overflow-hidden md:mx-6 md:rounded-lg md:px-14 md:max-h-[843px] md:pt-15 lg:w-[94vw] lg:mx-auto xl:w-[1440px] xl:flex xl:h-[640px] xl:pt-36 xl:text-left xl:px-40">
      <div>
        <h1 className="text-3xl mb-4 md:text-5xl max-w-[573px] mx-auto xl:text-left">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-sm leading-relaxed mb-6 max-w-[445px] mx-auto  xl:ml-0">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link
          href="/services/webdesign"
          className="bg-white rounded-lg text-slate-900 text-sm py-4 px-6 uppercase xl:ml-0 hover:bg-[#ffad98] hover:text-white transition-colors"
        >
          Learn More
        </Link>
      </div>

      <Image
        className="mx-auto mt-[-50px] md:hidden"
        src="/assets/home/desktop/image-hero-phone.png"
        width={390}
        height={673}
        alt="hero phone"
      />
      <Image
        className="mx-auto mt-[-50px] md:block hidden xl:hidden"
        src="/assets/home/desktop/image-hero-phone.png"
        width={590}
        height={673}
        alt="hero phone"
      />
      <Image
        className=" xl:block hidden mr-[-100px] mt-[-100px]"
        src="/assets/home/desktop/image-hero-phone.png"
        width={590}
        height={973}
        alt="hero phone"
        style={{ height: "800px" }}
      />
    </div>
  );
};

export default Hero;
