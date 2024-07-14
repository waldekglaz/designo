import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Designo",
  description:
    "We are a creative group of people who design influential brands and digital experiences.",
};

const LocationLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default LocationLayout;
