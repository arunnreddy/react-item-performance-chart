import { mount, shallow, ReactWrapper, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Chart } from "./Chart";
import { data } from "../TypeData";
import { PerformanceContextProvider } from "../Context";

configure({ adapter: new Adapter() });

describe("Home Component", () => {
    it("should render without crash", () => {
        const wrapper = mount(
            <PerformanceContextProvider value={data}>
                <Chart />
            </PerformanceContextProvider>
        );
        expect(wrapper).toBeTruthy();
    });

})