import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "../App";

describe("Testing App.tsx File", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    })
    test("App Header Test", () => {
        expect(wrapper.find("header").text()).toContain("testing with jest"); 
    })
})