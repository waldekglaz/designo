import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Designo",
};

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ServicesLayout;
