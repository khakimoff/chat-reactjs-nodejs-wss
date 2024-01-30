import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./Logo";

test("Logo renders with alt text", () => {
  render(<Logo />);

  // Проверка, что компонент содержит изображение с заданным атрибутом alt
  const logoImage = screen.getByAltText("logo");
  expect(logoImage).toBeInTheDocument();
});
