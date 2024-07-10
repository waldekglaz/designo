import React from "react";
import Image from "next/image";

interface HeroWithImageProps {
  title: string;
  text: string;
  src: string;
  alt: string;
}

const HeroWithImage = ({ title, text, src, alt }: HeroWithImageProps) => {
  return (
    <div className="lg:flex max-w-[1111px] mx-auto">
      <div className="relative h-[375px] lg:h-[480px] basis-2/5 order-2">
        <Image
          src={src}
          alt={alt}
          fill={true}
          className="md:rounded-t-xl object-cover lg:rounded-r-xl lg:rounded-l-none"
        />
      </div>
      <div className="bg-hero-pattern bg-right-top  bg-contain  bg-no-repeat bg-orange text-center py-20 text-white px-6 md:rounded-xl md:py-16 md:rounded-t-none lg:max-w-[1111px] lg:mx-auto basis-3/5 lg:rounded-l-xl lg:rounded-r-none lg:flex flex-col justify-center lg:text-left lg:px-[90px]">
        <h1 className="text-3xl mb-6 xl:text-5xl">{title}</h1>
        <p className="text-sm leading-relaxed md:w-80 mx-auto lg:ml-0 xl:text-base xl:w-auto">
          {text}
        </p>
      </div>
    </div>
  );
};

export default HeroWithImage;
