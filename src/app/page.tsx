import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import IllustratedCard from "@/components/IllustratedCard/IllustratedCard";
import { services } from "@/constants/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designo",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo</title>
      </Head>
      <Hero />
      <section className="pt-28  px-4 mb-28 xl:w-[1111px] mx-auto xl:px-0 xl:grid grid-cols-2 grid-rows-2 gap-6 ">
        {services.map((item, index) => {
          let gridClass = "";
          if (index === 0) {
            gridClass =
              "col-span-1 row-span-2 xl:min-h-[640px] xl:flex xl:flex-col xl:items-center xl:justify-center"; // First item takes both columns and two rows
          } else if (index === 1) {
            gridClass =
              "row-span-1 xl:flex xl:flex-col xl:items-center xl:justify-center"; // Second item takes one column (by default) and one row
          } else if (index === 2) {
            gridClass =
              "row-span-1 xl:flex xl:flex-col xl:items-center xl:justify-center"; // Third item takes one column (by default) and one row
          }
          return (
            <ProjectsCard
              title={item.title}
              href={item.href}
              bgImage={item.bgImage}
              key={item.title}
              className={gridClass}
            />
          );
        })}
      </section>
      <section className="xl:w-[1111px] mx-auto md:px-11 xl:flex">
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
