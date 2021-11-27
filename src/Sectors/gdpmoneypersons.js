import React from "react";
import ".././home.css";

class GDPMoneyPersons extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title="change in gdp per money and person"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=qiiu&width=${width}&height=440`}
          className="embed-container"
        />
        <div>
          Debt Growth (red)
          <br />
          Real GDP Growth (purple)
          <br />
          GDP Growth (blue)
          <br />
          (GDP Growth-M3 Growth)/Population Growth (pink) (a measure of equality
          of opportunity in income ...growth)
        </div>
        <br />
      </div>
    );
  }
}
export default GDPMoneyPersons;
