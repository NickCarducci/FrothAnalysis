import React from "react";
import ".././home.css";

class DollarsEarnedPerPerson extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <a
          className="charttitle"
          href="https://fred.stlouisfed.org/graph/?g=o0Lc"
        >
          <b>dollars earned per person</b>&nbsp;every month
        </a>
        <iframe
          width={width}
          loading="lazy"
          title="dollars earned per person"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0Lc&width=${width}&height=440`}
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
export default DollarsEarnedPerPerson;
