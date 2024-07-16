import React from "react";
import { render } from "@testing-library/react";
import FooterNavItem from "./FooterNavItem";
import "@testing-library/jest-dom";

describe("FooterNavItem", () => {
  const item = {
    name: "Home",
    href: "/home",
  };

  it("renders the item name", () => {
    const { getByText } = render(<FooterNavItem item={item} />);
    expect(getByText(item.name)).toBeInTheDocument();
  });

  it("renders a link with the correct href", () => {
    const { getByRole } = render(<FooterNavItem item={item} />);
    const link = getByRole("link");
    expect(link).toHaveAttribute("href", item.href);
  });
});
