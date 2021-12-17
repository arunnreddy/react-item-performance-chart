import React, { useState } from "react";
import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Footer from "./index";

configure({adapter : new Adapter() });
const setTabsType = (str: string) => {
    
}
describe("Home Component", ()=> {
    it("should render without crash", () => {
        const wrapper = mount(<Footer tabsType='dashboard' setTabsType={(str)=> setTabsType(str)} />);
        expect(wrapper).toBeTruthy();
      });

      it("Find body-container class name", () => {
        const wrapper = shallow(<Footer tabsType='dashboard' setTabsType={(str)=> setTabsType(str)} />);
        expect(wrapper.find(".footer-container").exists()).toBeTruthy();
      });

})