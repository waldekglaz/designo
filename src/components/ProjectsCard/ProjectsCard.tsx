import React from "react";
import Link from "next/link";

interface ProjectsCardProps {
  title: string;
  href: string;
  bgImage: string;
  className?: string;
}

const ProjectsCard = ({
  title,
  href,
  bgImage,
  className,
}: ProjectsCardProps) => {
  return (
    <div
      className={`group mb-4 py-[90px] px-8 text-center text-white bg-no-repeat bg-cover bg-center  relative rounded-2xl overflow-hidden uppercase ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
      }}
    >
      <h2 className="text-3xl tracking-wide md:text-4xl md:mb-6">{title}</h2>
      <Link
        className="text-sm tracking-widest group-hover:text-orange group-hover:text-base transition-all"
        href={href}
      >
        View Project <span className="text-orange ml-2">&gt;</span>
      </Link>
    </div>
  );
};

export default ProjectsCard;
