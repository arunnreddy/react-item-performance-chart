import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Items from "./index";

configure({adapter : new Adapter() });

describe("Home Component", ()=> {
    it("should render without crash", () => {
        const wrapper = mount(<Items />);
        expect(wrapper).toBeTruthy();
      });

      it("Find body-container class name", () => {
        const wrapper = shallow(<Items />);
        expect(wrapper.find(".body-container").exists()).toBeTruthy();
      });

})