import { mount, shallow, ReactWrapper, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { GasPerformance } from "./index";
import { data } from "../TypeData";
import { PerformanceContextProvider } from "../Context";

configure({ adapter: new Adapter() });

describe("Home Component", () => {
  it("should render without crash", () => {
    const wrapper = mount(
      <PerformanceContextProvider value={data}>
        <GasPerformance />
      </PerformanceContextProvider>
    );
    expect(wrapper).toBeTruthy();
  });

})