import React from "react";
import ".././home.css";

class TrueGDP extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          title={"GDP - new debt/debt - new money/money"}
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=BqL3&width=${
            this.props.width ? width : "600"
          }&height=680`}
          className="embed-container"
        />
        <div>GDP - new debt/debt - new money/money</div>
        <br />
      </div>
    );
  }
}
export default TrueGDP;
