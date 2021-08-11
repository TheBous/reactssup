/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

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
        const { container, getByText } = render(<Title text="text" />)
        expect(getByText("text")).toBeInTheDocument()
    });
});
