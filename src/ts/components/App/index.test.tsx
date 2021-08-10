import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App, { Title } from "../App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
    const app = shallow(<App />);
    test("App matches the snapshot", () => {
        expect(app).toMatchSnapshot();
    });
    
    test("App contains a span with the right title", () => {
        expect(app.find("span").text()).toBe("This is a boilerplate")
    });
});

describe("<Title />", () => {
    const title = shallow(<Title text="hey" />);
    test("App matches the snapshot", () => {
        expect(title).toMatchSnapshot();
        expect(title.instance().props.text).toBe("hey")
    });
});
