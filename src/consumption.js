import React from "react";
import "./home.css";
import DollarsSpent from "./consumption/dollarsspent";
import DollarsSpentPerPerson from "./consumption/dollarsspentperperson";
import DollarsRevenue from "./consumption/dollarsrevenue";
import DollarsRevenue2 from "./consumption/dollarsrevenue2";
import PriceMultiple from "./consumption/pricemultiple";
import PriceMultiple2 from "./consumption/pricemultiple2";

class Consumption extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div
        className={
          this.props.pathname === "/consumption"
            ? "chartslist"
            : "chartslisthide"
        }
      >
        <DollarsSpent width={width - 20} />
        <DollarsSpentPerPerson width={width - 40} />
        <DollarsRevenue width={width - 20} />
        <DollarsRevenue2 width={width - 20} />
        <PriceMultiple width={width - 20} />
        <PriceMultiple2 width={width - 20} />
      </div>
    );
  }
}
export default Consumption;
