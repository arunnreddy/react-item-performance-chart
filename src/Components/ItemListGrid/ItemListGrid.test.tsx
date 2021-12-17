import React, { useState } from "react";
import { mount, shallow, ReactWrapper, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ItemListGrid from "./index";

configure({ adapter: new Adapter() });
const handleInputValue = (str: string) => {
};
const handleClose = (str: string) => {
};

describe("Home Component", () => {
  it("should render without crash", () => {
    const wrapper = mount(<ItemListGrid movieCategories={[]} />);
    expect(wrapper).toBeTruthy();
  });

  it("Find body-container class name", () => {
    const wrapper = shallow(<ItemListGrid movieCategories={[]} />);
    expect(wrapper.find(".card-container").exists()).toBeTruthy();
  });
})