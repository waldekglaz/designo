import { render, screen } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import "@testing-library/jest-dom";

describe("CompanyCard", () => {
  const defaultProps = {
    src: "/test-image.jpg",
    alt: "Test Image",
    title: "Test Title",
    text: "Test Text 1",
    text2: "Test Text 2",
    textLeft: false,
  };

  it("renders without crashing", () => {
    render(<CompanyCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it("displays the correct content", () => {
    render(<CompanyCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.text2)).toBeInTheDocument();
  });

  it("renders the image with correct src and alt attributes", () => {
    render(<CompanyCard {...defaultProps} />);
    const image = screen.getByAltText(defaultProps.alt);
    // Check if the `src` attribute contains the expected image path
    expect((image as HTMLImageElement).src).toContain(
      encodeURIComponent(defaultProps.src)
    );
    expect(image).toHaveAttribute("alt", defaultProps.alt);
  });

  // Optional: Test for conditional rendering based on `textLeft` prop
  it("conditionally applies order class based on textLeft prop", () => {
    const { rerender } = render(<CompanyCard {...defaultProps} />);
    expect(screen.getByRole("img").parentElement).not.toHaveClass("order-1");
    rerender(<CompanyCard {...defaultProps} textLeft={true} />);
    expect(screen.getByRole("img").parentElement).toHaveClass("order-1");
  });
});
