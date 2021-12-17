import React, { useState } from "react";
import { mount, shallow, ReactWrapper, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {TooltipMessage} from "./index";

configure({ adapter: new Adapter() });
const handleInputValue = (str: string) => {
};
const handleClose = (str: string) => {
};

describe("Home Component", () => {
  it("should render without crash", () => {
    const wrapper = mount(<TooltipMessage title="Gas Performanc" arrow={false} fontSize={14} />);
    expect(wrapper).toBeTruthy();
  });

  it("Find body-container class name", () => {
    const wrapper = shallow(<TooltipMessage title="Gas Performanc" arrow={false} fontSize={14} />);
    expect(wrapper.find(".tooltip-container").exists()).toBeTruthy();
  });
})