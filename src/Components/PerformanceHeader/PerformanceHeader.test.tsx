import React, { useState } from "react";
import { mount, shallow, ReactWrapper, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { PerformanceHeader } from "./index";

configure({ adapter: new Adapter() });
const handleInputValue = (str: string) => {
};
const handleClose = (str: string) => {
};

describe("Home Component", () => {
  it("should render without crash", () => {
    const wrapper = mount(<PerformanceHeader value='170' changePercentage={20} title="Actual" />);
    expect(wrapper).toBeTruthy();
  });

  it("Find body-container class name", () => {
    const wrapper = shallow(<PerformanceHeader value='170' changePercentage={20} title="Actual" />);
    expect(wrapper.find(".performance-header-container").exists()).toBeTruthy();
  });
})