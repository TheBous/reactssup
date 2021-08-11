/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Title from "../Title";

describe("<Title />", () => {
    test("Title matches the snapshot", () => {
        const { container } = render(<Title text="text" />)
        expect(container).toMatchSnapshot()
    });

    test("Title is visible on DOM", () => {
        const { getByText, debug } = render(<Title text="text" />)
        debug();
        expect(getByText("text")).toBeInTheDocument()
    });
});