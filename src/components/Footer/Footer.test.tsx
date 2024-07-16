import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the heading and description correctly", () => {
    render(<Footer />);
    expect(
      screen.getByText("Let's talk about your project")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Ready to take it to the next level\? Contact us today and find out how our expertise can help your business grow\./
      )
    ).toBeInTheDocument();
  });
  it("renders the button with the correct text and href", () => {
    render(<Footer />);
    expect(screen.getByRole("link")).toHaveTextContent("Get in touch");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/contact");
  });
});
