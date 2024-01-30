import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HaderHideOnScroll from "./HideOnScroll";

test("HeaderHideOnScroll renders with correct text", () => {
  render(<HaderHideOnScroll />);

  const headerText = screen.getByText("Test chat");
  expect(headerText).toBeInTheDocument();
});
