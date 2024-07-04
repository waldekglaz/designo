import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-orange text-white pt-20 px-4 text-center">
      <h1 className="text-3xl mb-4">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className="text-sm leading-relaxed mb-6">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button className="bg-white rounded-lg text-slate-900 text-sm py-4 px-5">
        Learn More
      </button>
      <Image
        className="mx-auto"
        src="/assets/home/desktop/image-hero-phone.png"
        width={284}
        height={573}
        alt="hero phone"
      />
    </div>
  );
};

export default Hero;
