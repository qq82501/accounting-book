import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const { dataPoints } = props;
  const maxValue = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
