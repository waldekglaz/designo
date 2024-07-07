"use client";
import React from "react";
import HeroSecondary from "../../../components/HeroSecondary/HeroSecondary";
import { usePathname } from "next/navigation";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import { projectItems } from "@/constants/const";
import { services } from "@/constants/const";
import ServiceCard from "@/components/ServiceCard/ServiceCard";

const page = () => {
  const pathname = usePathname();
  const service = services.find((service) => service.href === pathname);

  return (
    <div>
      <HeroSecondary
        title="Web Design"
        text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <section>
        {service?.projects.map((project) => (
          <ServiceCard
            key={project.title}
            src={project.bgImage}
            alt={project.title}
            title={project.title}
            text={project.text}
          />
        ))}
      </section>
      <section className="pb-40 px-6">
        {projectItems.map((project) => {
          if (project.href === pathname) {
            return;
          } else {
            return (
              <ProjectsCard
                key={project.name}
                title={project.name}
                bgImage={project.bgImage}
                href={project.href}
              />
            );
          }
        })}
      </section>
    </div>
  );
};

export default page;
