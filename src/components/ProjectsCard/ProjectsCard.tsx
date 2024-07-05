import React from "react";
import Link from "next/link";

interface ProjectsCardProps {
  title: string;
  href: string;
  bgImage: string;
}

const ProjectsCard = ({ title, href, bgImage }: ProjectsCardProps) => {
  return (
    <div
      className="mb-4 py-[90px] px-8 text-center text-white bg-no-repeat bg-cover bg-center  relative rounded-2xl overflow-hidden uppercase"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
      }}
    >
      <h2 className="text-3xl tracking-wide">{title}</h2>
      <Link className="text-sm" href={href}>
        View Project <span className="text-orange ml-2">&gt;</span>
      </Link>
    </div>
  );
};

export default ProjectsCard;
