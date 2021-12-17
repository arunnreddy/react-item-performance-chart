import React, { useState } from "react";
import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {GasHeader} from "./index";

configure({adapter : new Adapter() });

describe("Home Component", ()=> {
    it("should render without crash", () => {
        const wrapper = mount(<GasHeader title='Gas Performance' tooltipContent='This graph shows the gas performance from the mock data' />);
        expect(wrapper).toBeTruthy();
      });

      it("Find body-container class name", () => {
        const wrapper = shallow(<GasHeader title='Gas Performance' tooltipContent='This graph shows the gas performance from the mock data' />);
        expect(wrapper.find(".header-container").exists()).toBeTruthy();
      });

})