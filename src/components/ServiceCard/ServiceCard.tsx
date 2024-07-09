import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const ServiceCard = ({ src, alt, title, text }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center px-6 mb-8 rounded-lg max-w-[327px] mx-auto md:flex-row md:justify-center md:max-w-max ">
      <Image
        src={src}
        alt={alt}
        width={327}
        height={320}
        sizes="(min-width: 768px) 338px, 320px"
      />
      <div className="bg-[#FDF3F0] p-8 rounded-b-xl md:px-8 md:py-28 md:max-h-[298px] md:rounded-none md:pr-11">
        {" "}
        <h2 className="text-orange uppercase tracking-wides text-xl mb-4 ">
          {title}
        </h2>
        <p className="text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
