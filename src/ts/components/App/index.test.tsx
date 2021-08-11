/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App, { Title } from "../App";

describe("<App />", () => {
    const {container: app} = render(<App />);
    test("App matches the snapshot", () => {
        expect(app).toMatchSnapshot();
    });
    test("App text expected to be the correct one", () => {
        const { getByText } = render(<App />)
        expect(getByText("This is a boilerplate")).toBeInTheDocument()
    });
});

describe("<Title />", () => {
    test("App matches the snapshot", () => {
        const { container, getByText, debug } = render(<Title text="text" />)
        debug();
        expect(getByText("text")).toBeInTheDocument()
    });
});

describe("H1 visibility", () => {
    test("Bootstrapping boilerplate, title is hidden and after click on the button, it's visible", () => {
        render(<App />);
        expect(screen.queryByTestId("title")).toBeNull();
        fireEvent.click(screen.getByTestId("button"));
        expect(screen.getByText("Reactssup title")).toBeVisible()
    });
});
