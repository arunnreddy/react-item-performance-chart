import { mount, shallow, ReactWrapper, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { ChartPerformanceHeader } from "./ChartPerformanceHeader";
import { data } from "../TypeData";
import { PerformanceContextProvider } from "../Context";

configure({ adapter: new Adapter() });

describe("Home Component", () => {
    it("should render without crash", () => {
        const wrapper = mount(
            <PerformanceContextProvider value={data}>
                <ChartPerformanceHeader />
            </PerformanceContextProvider>
        );
        expect(wrapper).toBeTruthy();
    });

})