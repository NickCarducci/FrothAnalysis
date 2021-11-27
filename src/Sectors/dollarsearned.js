import React from "react";
import ".././home.css";

class DollarsEarned extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <a
          className="charttitle"
          href="https://fred.stlouisfed.org/graph/?g=o0KQ"
        >
          <b>total dollars earned</b>&nbsp;every month
        </a>

        <iframe
          width={width}
          loading="lazy"
          title="total dollars earned"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0KQ&width=${width}&height=440`}
          className="embed-container"
        />
        <div>
          Wages & salaries excluding bonus
          <br />
          Profit before taxes, depreciation & amortization
          <br />
          Profits before taxes (b)
          <br />
          Profit after taxes, depreciation & amortization (lb)
          <br />
          Dividends
          <br />
          Financial wages & salaries
          <br />
          Federal tax receipts
          <br />
          State & local tax receipts
        </div>
        <br />
      </div>
    );
  }
}
export default DollarsEarned;
