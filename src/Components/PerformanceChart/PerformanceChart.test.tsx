import React, { useState } from "react";
import { mount, shallow, ReactWrapper, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { PerformanceChart } from "./index";

configure({ adapter: new Adapter() });
const Option = {};

describe("Home Component", () => {
  it("should render without crash", () => {
    const wrapper = mount(<PerformanceChart options={Option} />);
    expect(wrapper).toBeTruthy();
  });

  it("Find body-container class name", () => {
    const wrapper = shallow(<PerformanceChart options={Option} />);
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
})