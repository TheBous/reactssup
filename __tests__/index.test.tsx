/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";

import App from "../src/ts/components/App";

describe("Bootstraping boilerplate", () => {
    test("There's a div in the html with id=app", () => {
        const spy = jest.spyOn(ReactDOM, "render");
        render(<App />);
        expect(screen.queryAllByTestId("app")).toBeTruthy();
        expect(spy).toHaveBeenCalled();
    });
});
