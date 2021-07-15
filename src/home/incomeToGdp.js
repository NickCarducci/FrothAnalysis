import React from "react";
import ".././home.css";

class IncomeToGdp extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        title="gdp traded per person"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=B8cT&width=${
          this.props.width ? width : "600"
        }&height=440`}
        className="embed-container"
      />
    );
  }
}
export default IncomeToGdp;
