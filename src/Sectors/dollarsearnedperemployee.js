import React from "react";
import ".././home.css";

class DollarsEarnedPerEmployee extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <a
          className="charttitle"
          href="https://fred.stlouisfed.org/graph/?g=paUy"
        >
          <b>dollars earned per employee</b>&nbsp; every month
        </a>
        <iframe
          width={width}
          loading="lazy"
          title="dollars earned per employee"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=paUy&width=${width}&height=300`}
          className="embed-container"
        />
        <div>
          Wages & salary accruals
          <br />
          Non-financial wages & salaries
          <br />
          Average earnings per month
          <br />
          Wages & salaries excluding bonus
          <br />
          Profit before taxes, depreciation & amortization (g)
          <br />
          Dividends
          <br />
          Financial wages & salaries
          <br />
          Federal tax receipts
        </div>
        <br />
      </div>
    );
  }
}
export default DollarsEarnedPerEmployee;
