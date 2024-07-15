import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the button with the correct text and href", () => {
    const buttonText = "Click Me";
    const buttonHref = "/test-path";
    render(<Button text={buttonText} href={buttonHref} />);

    // Check if the button renders with the correct text
    expect(screen.getByRole("link")).toHaveTextContent(buttonText);

    // Check if the button has the correct href attribute
    expect(screen.getByRole("link")).toHaveAttribute("href", buttonHref);
  });
});
