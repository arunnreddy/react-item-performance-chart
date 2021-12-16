import { Meta, Story } from "@storybook/react";
import { DataType } from "../Containers/Dashboard/TypeData/DataType";
import { PerformanceContextProvider } from "../Containers/Dashboard/Context";
import { GasPerformance } from "../Containers/Dashboard/ChartBoard";
import { data } from "../Containers/Dashboard/TypeData";
import { GasHeader } from "../Components/GasHeader";
import './GasPerformanceStyle.scss';
import { ChartPerformanceHeader } from "../Containers/Dashboard/ChartBoard/ChartPerformanceHeader";
import { Chart } from "../Containers/Dashboard/ChartBoard/Chart";

type Props = {
    value: DataType;
};

export default {
    title: "Gas Performance",
} as Meta;

const Header: Story = () => (
    <div className="gas-performance-container">
        <GasHeader
            title="Gas Performance"
            tooltipContent="This graph shows the gas performance from the mock data"
        />
    </div>
);

export const ContainHeader = Header.bind({});

const gasPerformanceHeader: Story<Props> = (args) => (
    <div className="gas-performance-container">
        <PerformanceContextProvider {...args}>
            <ChartPerformanceHeader />
        </PerformanceContextProvider>
    </div>
);

export const GasPerformanceHeader = gasPerformanceHeader.bind({});
GasPerformanceHeader.args = {
    value: data,
};

const gasPerformanceChart: Story<Props> = (args) => (
    <div className="gas-performance-container">
        <PerformanceContextProvider {...args}>
            <Chart />
        </PerformanceContextProvider>
    </div>
);

export const PerformanceChart = gasPerformanceChart.bind({});
PerformanceChart.args = {
    value: data,
};

const ChartInputs: Story<Props> = (args) => (
    <PerformanceContextProvider {...args}>
        <GasPerformance />
    </PerformanceContextProvider>
);

export const GasPerformanceChart = ChartInputs.bind({});
GasPerformanceChart.args = {
    value: data,
};
