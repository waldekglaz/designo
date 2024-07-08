import React, { ReactNode } from "react";

const ServicesLayout = ({ children }: { children: ReactNode }) => {
  return <div className="md:mx-10">{children}</div>;
};

export default ServicesLayout;
