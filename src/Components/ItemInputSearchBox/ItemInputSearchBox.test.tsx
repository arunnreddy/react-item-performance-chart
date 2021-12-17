import React, { useState } from "react";
import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {ItemInputSearchBox} from "./index";

configure({adapter : new Adapter() });
const handleInputValue = (str: string) => {
    
};
const handleClose = (str: string) => {

};

describe("Home Component", ()=> {
    it("should render without crash", () => {
        const wrapper = mount(<ItemInputSearchBox CategoryItems={[]} handleInputValue={(str)=> handleInputValue(str)} handleClose={(str)=> handleClose(str)} />);
        expect(wrapper).toBeTruthy();
      });

      it("Find body-container class name", () => {
        const wrapper = shallow(<ItemInputSearchBox CategoryItems={[]} handleInputValue={(str)=> handleInputValue(str)} handleClose={(str)=> handleClose(str)} />);
        expect(wrapper.find(".item-input-container").exists()).toBeTruthy();
      });

})