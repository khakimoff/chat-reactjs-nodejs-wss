import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Logo from "./Logo";

test("Renders Logo component with default size", () => {
    const { getByAltText } = render(<Logo />);

    // Проверяем, что компонент отображается
    const logoElement = getByAltText("logo");
    expect(logoElement).toBeInTheDocument();

    // Проверяем, что размеры по умолчанию
    expect(logoElement).toHaveStyle("width: auto");
    expect(logoElement).toHaveStyle("height: auto");
});

test("Renders Logo component with custom size", () => {
    const { getByAltText } = render(<Logo width="100px" height="50px" />);

    // Проверяем, что компонент отображается
    const logoElement = getByAltText("logo");
    expect(logoElement).toBeInTheDocument();

    // Проверяем, что размеры соответствуют заданным
    expect(logoElement).toHaveStyle("width: 100px");
    expect(logoElement).toHaveStyle("height: 50px");
});
