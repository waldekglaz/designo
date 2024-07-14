import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Designo",
};

const LocationLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default LocationLayout;
