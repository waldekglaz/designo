import React from "react";

interface TextCardProps {
  title: string;
  text: string;
  text2: string;
}

const TextCard = ({ title, text, text2 }: TextCardProps) => {
  return (
    <div className="bg-hero-pattern bg-[rgba(93,2,2,0.1)] py-20 px-6 text-center">
      <h2 className="text-3xl text-orange mb-6">{title}</h2>
      <p className="text-sm mb-6">{text}</p>
      <p className="text-sm">{text2}</p>
    </div>
  );
};

export default TextCard;