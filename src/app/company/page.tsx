import React from "react";
import { locations } from "@/constants/const";
import IllustratedCard from "@/components/IllustratedCard/IllustratedCard";
import HeroWithImage from "@/components/HeroWithImage/HeroWithImage";
import CompanyCard from "@/components/CompanyCard/CompanyCard";

const Company = () => {
  return (
    <>
      <HeroWithImage
        src="/assets/about/desktop/image-about-hero.jpg"
        alt="Picture of our office"
        title="About Us"
        text="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
      />
      <section className="lg:flex md:mt-32">
        <CompanyCard
          src="/assets/about/desktop/image-world-class-talent.jpg"
          alt="World class talent"
          title="World-class talent"
          text="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
          text2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
          textLeft
        />
      </section>

      <section className="pt-32 lg:flex justify-between xl:w-[1111px] xl:mx-auto">
        {locations.map((location) => (
          <IllustratedCard
            key={location.name}
            src={location.img}
            btn
            link={location.href}
            btnText="See Location"
            alt={location.name}
            title={location.name}
            noText={true}
          />
        ))}
      </section>
      <section>
        <CompanyCard
          src="/assets/about/desktop/image-real-deal.jpg"
          alt="The real deal"
          title="The real deal"
          text="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
          text2="We are visual storytellers in making content stand out in the noisy world. We offer branding that resonates with the audience, and helps meet business goals. It’s all about crafting experiences that change the way users interact with your product and services."
        />
      </section>
    </>
  );
};

export default Company;
