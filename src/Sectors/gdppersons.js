import React from "react";
import ".././home.css";

class GDPPersons extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title="gdp traded per person"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=qih7&width=${width}&height=440`}
          className="embed-container"
        />
        <div>
          Real GDP Growth (purple)
          <br />
          Population Growth*10 (tan)
          <br />
          M3 Growth&#247;100 (green)
          <br />
          Debt Growth (red)
          <br />
          GDP Growth (blue)
        </div>
        <br />
      </div>
    );
  }
}
export default GDPPersons;
