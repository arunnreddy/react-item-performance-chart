import React, { useState } from "react";
import { mount, shallow, ReactWrapper, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SearchBarItemList from "./index";

configure({ adapter: new Adapter() });
const handleInputValue = (str: string) => {
};

describe("Home Component", () => {
  it("should render without crash", () => {
    const wrapper = mount(<SearchBarItemList IsSearchValue={true} searchCetagoryList={[]} handleSelectItem={()=> handleInputValue('item')} />);
    expect(wrapper).toBeTruthy();
  });

  it("Find body-container class name", () => {
    const wrapper = shallow(<SearchBarItemList IsSearchValue={true} searchCetagoryList={[]} handleSelectItem={()=> handleInputValue('item')} />);
    expect(wrapper.find(".search-listbox-container").exists()).toBeTruthy();
  });
})