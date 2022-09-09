import "./ChartBar.css";
function ChartBar(props) {
  const { value, maxValue, label } = props;

  let barFillHeight = "0%"; //using String to feed to CSS Style

  // if maxValue = 0, means there is no expense in this year.
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
