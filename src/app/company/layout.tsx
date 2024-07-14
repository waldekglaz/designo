import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Designo",
  description:
    "We are a creative group of people who design influential brands and digital experiences.",
};

const CompanyLayout = ({ children }: { children: ReactNode }) => {
  return <div className="md:mx-10">{children}</div>;
};

export default CompanyLayout;
