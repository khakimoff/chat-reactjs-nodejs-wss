// src/App.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders App component", () => {
    render(<App />);

    // Check if the Vite and React logos are present
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();

    // Check if the "count is 0" text is present initially
    const countText = screen.getByText("count is 0");
    expect(countText).toBeInTheDocument();

    // Simulate a button click and check if the count updates
    const button = screen.getByText("count is 0").closest("button");
    fireEvent.click(button);
    expect(screen.getByText("count is 1")).toBeInTheDocument();
});

// You can add more tests as needed
