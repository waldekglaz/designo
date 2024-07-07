import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import IllustratedCard from "@/components/IllustratedCard/IllustratedCard";
import { services } from "@/constants/const";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="pt-28  px-4 mb-28">
        {services.map((item) => (
          <ProjectsCard
            title={item.title}
            href={item.href}
            bgImage={item.bgImage}
            key={item.title}
          />
        ))}
      </section>
      <section>
        <IllustratedCard
          src="/assets/home/desktop/illustration-passionate.svg"
          title="passionate"
          text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          alt="Illustration of a person working on a laptop"
        />
        <IllustratedCard
          src="/assets/home/desktop/illustration-resourceful.svg"
          title="resourceful"
          text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          alt="Illustration of a person working on a laptop"
        />
        <IllustratedCard
          src="/assets/home/desktop/illustration-friendly.svg"
          title="friendly"
          text="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          alt="Illustration of a person working on a laptop"
        />
      </section>
    </>
  );
}
