import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Designo",
};

const CompanyLayout = ({ children }: { children: ReactNode }) => {
  return <div className="md:mx-10">{children}</div>;
};

export default CompanyLayout;
