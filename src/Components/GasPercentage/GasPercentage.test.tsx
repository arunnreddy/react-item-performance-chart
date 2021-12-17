import React, { useState } from "react";
import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {GasPercentage} from "./index";

configure({adapter : new Adapter() });

describe("Home Component", ()=> {
    it("should render without crash", () => {
        const wrapper = mount(<GasPercentage value={0} />);
        expect(wrapper).toBeTruthy();
      });

      it("Find body-container class name", () => {
        const wrapper = shallow(<GasPercentage value={1} />);
        expect(wrapper.find(".value-change-icon").exists()).toBeTruthy();
      });

})