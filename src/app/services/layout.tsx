import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Designo",
  description:
    "We are a creative group of people who design influential brands and digital experiences.",
};

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ServicesLayout;
