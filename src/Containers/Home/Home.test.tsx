import { mount, shallow, ReactWrapper,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "./index";

configure({adapter : new Adapter() });

describe("Home Component", ()=> {
    it("should render without crash", () => {
        const Component = <Home />;
        const wrapper = mount(Component);
        expect(wrapper).toBeTruthy();
      });

      it("Find body-container class name", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(".body-container").exists()).toBeTruthy();
      });

      it('should render correctly with no props', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper).toMatchSnapshot();
      });
})