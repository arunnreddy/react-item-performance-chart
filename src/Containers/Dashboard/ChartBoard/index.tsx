import { GasHeader } from "../../../Components/GasHeader";
import { ChartPerformanceHeader } from "./ChartPerformanceHeader";
import './style.scss'
import { Chart } from "./Chart";

export const GasPerformance = () => {
  return (
    <div className="gas-performance-container">
      <GasHeader
        title="Gas Performance"
        tooltipContent="This graph shows the gas performance from the mock data"
      />
      <ChartPerformanceHeader />
      <Chart />
    </div>
  );
};
