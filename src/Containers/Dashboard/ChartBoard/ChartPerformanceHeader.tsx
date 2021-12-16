import { useContext } from "react";
import { PerformanceHeader } from "../../../Components/PerformanceHeader";
import { DataType } from "../TypeData/DataType";
import { PerformanceContext } from "../Context";
import "./style.scss";

export const ChartPerformanceHeader = () => {
  const apiContext = useContext<DataType>(PerformanceContext);
  const utilityMeasurementUnit = apiContext.data.utilityMeasurementUnit;
  const totalAggregations = apiContext.data.regions[0].facilities[0].totalAggregations;

  return (
    <div className="metrics-container">
      <PerformanceHeader
        title="Actual"
        value={`${
          totalAggregations.totalActualConsumption + utilityMeasurementUnit
        }`}
      />
      <PerformanceHeader
        title="Baseline"
        value={`${
          totalAggregations.totalBaselineConsumption + utilityMeasurementUnit
        }`}
      />
      <PerformanceHeader
        title="Savings"
        value={`${
          totalAggregations.totalConsumptionSavings + utilityMeasurementUnit
        }`}
        changePercentage={totalAggregations.totalConsumptionSavingsPercentage}
      />
      <div className="vertical-divider" />
      <PerformanceHeader
        title="Actual Cost"
        value={`$${totalAggregations.totalActualCost}`}
      />
      <PerformanceHeader
        title="Baseline Cost"
        value={`$${totalAggregations.totalBaselineCost}`}
      />
      <PerformanceHeader
        title="Savings"
        value={`$${totalAggregations.totalCostSavings}`}
        changePercentage={totalAggregations.totalCostSavingsPercentage}
      />
    </div>
  );
};
