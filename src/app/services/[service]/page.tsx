import React from "react";
import { services } from "@/constants/const";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import HeroSecondary from "@/components/HeroSecondary/HeroSecondary";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";

const ServicePage = ({ params }: { params: { service: string } }) => {
  const service = services.find((service) =>
    service.href.includes(params.service)
  );

  return (
    <div>
      {service && <HeroSecondary title={service.title} text={service.text} />}
      <section className="mt-24 pb-12 md:mt-32 mx-6 md:mx-10 lg:flex lg:flex-wrap lg:justify-center xl:justify-start xl:max-w-[1111px] xl:mx-auto gap-[30px] lg:pt-0">
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
      <section className="mx-6 md:mx-10  xl:mx-auto xl:max-w-[1111px]">
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
