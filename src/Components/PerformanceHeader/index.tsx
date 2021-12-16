import { GasPercentage } from "../GasPercentage";

import "./style.scss";

type Props = {
  value: string;
  changePercentage?: number;
  title: string;
};

export const PerformanceHeader = ({ value, title, changePercentage }: Props) => {
  return (
    <div className="performance-header-container">
      <div className="performance-value-section">
        <span className="performance-header-value">{value}</span>
        <GasPercentage value={changePercentage || 0} />
      </div>
      <span className="performance-header-title">{title}</span>
    </div>
  );
};

