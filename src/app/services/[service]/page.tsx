import React from "react";
import { services } from "@/constants/const";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import HeroSecondary from "@/components/HeroSecondary/HeroSecondary";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";

const ServicePage = ({ params }: { params: { service: string } }) => {
  console.log(params.service);
  const service = services.find((service) =>
    service.href.includes(params.service)
  );

  return (
    <div>
      {service && <HeroSecondary title={service.title} text={service.text} />}
      <section className="py-24">
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
      <section className=" px-6">
        {services.map((project) => {
          if (project.href === service?.href) {
            return;
          } else {
            return (
              <ProjectsCard
                key={project.title}
                title={project.title}
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
