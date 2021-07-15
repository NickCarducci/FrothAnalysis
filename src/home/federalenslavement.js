import React from "react";
import ".././home.css";

class FederalEnslavement extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        title="gdp to debt to money"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=wWj5&width=${
          this.props.width ? width : "600"
        }&height=600`}
        className="embed-container"
      />
    );
  }
}
export default FederalEnslavement;
