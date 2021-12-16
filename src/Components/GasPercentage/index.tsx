import "./style.scss";

type Props = {
  value: number;
};

export const GasPercentage = ({ value }: Props) => {
  return !value || value === 0 ? (
    <></>
  ) : (
    <div
      id="change-percentage"
      className={value >= 0 ? "increase-value" : "decrease-value"}
    >
      <div className="value-change-icon" />
      {value}%
    </div>
  );
};
