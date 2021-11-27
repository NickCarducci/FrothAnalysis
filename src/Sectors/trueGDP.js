import React from "react";
import ".././home.css";

class TrueGDP extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title={"GDP - new debt/debt - new money/money"}
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=BqL3&width=${width}&height=680`}
          className="embed-container"
        />
        <div>GDP - new debt/debt - new money/money</div>
        <br />
      </div>
    );
  }
}
export default TrueGDP;
