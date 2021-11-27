import React from "react";
import ".././home.css";

class TrueGDPSame extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title={"GDP - new debt/debt - new money/money"}
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=BraK&width=67${width}0&height=680`}
          className="embed-container"
        />
        <div>
          GDP - new debt - new money <br />
          same as <br />
          GDP - new debt/debt - new money/money
        </div>
        <br />
      </div>
    );
  }
}
export default TrueGDPSame;
