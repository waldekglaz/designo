import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us | Designo",
  description:
    "Get in touch with us to discuss your project. We are a creative group of people who design influential brands and digital experiences.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
