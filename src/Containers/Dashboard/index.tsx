import { data } from "./TypeData";
import { PerformanceContextProvider } from "./Context";
import { GasPerformance } from "./ChartBoard";

export const Dashboard = () => {
  return (
    <PerformanceContextProvider value={data}>
      <GasPerformance />
    </PerformanceContextProvider>
  );
};
