import {Tooltip} from "@material-ui/core";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import './style.scss'

type Props = {
  title: string;
  arrow?: boolean;
  fontSize?: number;
};

const defaultProps = {
  arrow: false,
  fontSize: 14,
};

export const TooltipMessage = ({
  title,
  arrow,
  fontSize,
}: Props & typeof defaultProps) => {
  return (
    <div className="tooltip-container">
      <Tooltip title={title} arrow={arrow}>
        <InfoOutlinedIcon sx={{ fontSize }} />
      </Tooltip>
    </div>
  );
};

TooltipMessage.defaultProps = defaultProps;
