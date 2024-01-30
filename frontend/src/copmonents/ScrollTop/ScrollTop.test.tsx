import React from "react";
import { render, screen } from "@testing-library/react";
import ScrollTop from "./ScrollTop";

test("renders ScrollTop component", () => {
    render(<ScrollTop />);

    // Проверяем, что компонент отрисован
    const scrollTopElement = screen.getByLabelText("scroll back to top");
    expect(scrollTopElement).toBeInTheDocument();
});