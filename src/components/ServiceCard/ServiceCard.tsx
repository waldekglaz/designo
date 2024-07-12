import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const ServiceCard = ({ src, alt, title, text }: ServiceCardProps) => {
  return (
    <Link
      href="#"
      className="group flex flex-col items-center text-center mb-8 rounded-lg md:flex-row md:justify-center md:w-full  lg:flex-col lg:max-w-[310px] xl:max-w-[350px] lg:mx-0 lg:px-0 "
    >
      <div className="relative min-h-[320px] w-full basis-1/2 lg:min-h-320 lg:basis-auto">
        <Image
          src={src}
          alt={alt}
          fill={true}
          className="object-cover rounded-t-xl md:rounded-l-xl lg:rounded-r-xl lg:rounded-b-none"
        />
      </div>

      <div className="bg-[#FDF3F0] p-8 w-full rounded-b-xl md:px-8 md:py-28  md:rounded-r-xl md:rounded-l-none md:pr-11 md:h-[320px] basis-1/2 lg:basis-auto lg:h-auto lg:py-8 lg:min-h-[200px] lg:rounded-s-xl lg:rounded-t-none group-hover:bg-orange group-hover:text-white transition-colors">
        {" "}
        <h2 className="text-orange uppercase tracking-[5px] text-xl mb-4 group-hover:text-white transition-colors">
          {title}
        </h2>
        <p className="text-sm md:text-base">{text}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
