import React from "react";
import ".././home.css";

class IncomeToGdp extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        width={width}
        loading="lazy"
        title="gdp traded per person"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=B8cT&width=${width}&height=440`}
        className="embed-container"
      />
    );
  }
}
export default IncomeToGdp;
