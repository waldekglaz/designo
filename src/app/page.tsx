import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import { projectItems } from "@/constants/const";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="pt-28 px-4">
        {projectItems.map((item) => (
          <ProjectsCard
            title={item.name}
            href={item.href}
            bgImage={item.bgImage}
          />
        ))}
      </section>
    </>
  );
}
