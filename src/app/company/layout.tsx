import React, { ReactNode } from "react";

const CompanyLayout = ({ children }: { children: ReactNode }) => {
  return <div className="md:mx-10">{children}</div>;
};

export default CompanyLayout;
