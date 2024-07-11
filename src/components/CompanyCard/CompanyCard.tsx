import React from "react";
import Image from "next/image";

interface CompanyCardProps {
  src: string;
  alt: string;
  title: string;
  text: string;
  text2: string;
  textLeft?: boolean;
}

const CompanyCard = ({
  src,
  alt,
  title,
  text,
  text2,
  textLeft,
}: CompanyCardProps) => {
  return (
    <div className="lg:flex xl:w-[1111px] xl:mx-auto">
      <div
        className={`relative w-full h-[320px] lg:basis-2/5 lg:h-[640px] ${
          textLeft && "order-1"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          className={`object-cover md:rounded-t-xl  ${
            textLeft
              ? "lg:rounded-l-none lg:rounded-r-xl"
              : "lg:rounded-l-xl lg:rounded-r-none"
          }`}
        />
      </div>
      <div
        className={`bg-hero-pattern bg-no-repeat bg-[#FDF3F0] py-20 px-6 text-center md:rounded-b-xl lg:basis-3/5 lg:flex flex-col justify-center lg:text-left lg:px-24  ${
          textLeft
            ? "lg:rounded-r-none lg:rounded-l-xl"
            : "lg:rounded-r-xl lg:rounded-l-none"
        }`}
      >
        <h2 className="text-3xl text-orange mb-6 lg:text-4xl">{title}</h2>
        <p className="text-sm mb-6">{text}</p>
        <p className="text-sm">{text2}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
