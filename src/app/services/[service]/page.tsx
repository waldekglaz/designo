import React from "react";
import { services } from "@/constants/const";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import HeroSecondary from "@/components/HeroSecondary/HeroSecondary";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import { projectItems } from "@/constants/const";

const ServicePage = ({ params }: { params: { service: string } }) => {
  console.log(params);
  const service = services.find((service) =>
    service.href.includes(params.service)
  );

  return (
    <div>
      {service && (
        <HeroSecondary
          title={service.title}
          text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />
      )}
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
          if (project.href === service?.href) {
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

export default ServicePage;
