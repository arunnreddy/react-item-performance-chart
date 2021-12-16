import { TooltipMessage } from "../TooltipMessage";
import "./style.scss";

type Props = {
  title: string;
  tooltipContent?: string;
};

export const GasHeader = ({ title, tooltipContent }: Props) => {
  return (
    <div className="header-container">
      <span className="header-title">{title}</span>
      {tooltipContent && <TooltipMessage title={tooltipContent} fontSize={16} arrow />}
    </div>
  );
};
