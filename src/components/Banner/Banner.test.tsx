import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner Component", () => {
  const bannerProps = {
    title: "Test Title",
    text: "Test text content for the Banner component.",
    btnText: "Click Me",
    href: "/test-link",
  };

  it("renders without crashing", () => {
    render(<Banner {...bannerProps} />);
    expect(screen.getByText(bannerProps.title)).toBeInTheDocument();
    expect(screen.getByText(bannerProps.text)).toBeInTheDocument();
    expect(screen.getByText(bannerProps.btnText)).toBeInTheDocument();
  });

  it("displays the title and text passed as props", () => {
    render(<Banner {...bannerProps} />);
    expect(screen.getByText(bannerProps.title)).toBeInTheDocument();
    expect(screen.getByText(bannerProps.text)).toBeInTheDocument();
  });

  it("passes the correct href to the Button component", () => {
    render(<Banner {...bannerProps} />);
    const button = screen.getByRole("link", { name: bannerProps.btnText });
    expect(button).toHaveAttribute("href", bannerProps.href);
  });
});
