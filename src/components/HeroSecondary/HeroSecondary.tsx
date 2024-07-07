import React from "react";

interface HeroSecondaryProps {
  title: string;
  text: string;
}

const HeroSecondary = ({ title, text }: HeroSecondaryProps) => {
  return (
    <div className="bg-hero-pattern bg-right-top  bg-contain  bg-no-repeat bg-orange text-center py-28 text-white px-6">
      <h1 className="text-3xl mb-6">{title}</h1>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default HeroSecondary;
