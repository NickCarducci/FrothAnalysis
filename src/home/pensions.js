import React from "react";
import ".././home.css";

class Pensions extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        title="gdp to debt to money"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=wThA&width=${
          this.props.width ? width : "600"
        }&height=800`}
        className="embed-container"
      />
    );
  }
}
export default Pensions;
