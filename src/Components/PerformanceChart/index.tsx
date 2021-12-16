import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import './style.scss';

type Props = {
  options: Highcharts.Options;
};

export const PerformanceChart = ({ options }: Props) => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);
