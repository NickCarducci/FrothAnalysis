import React from "react";
import ".././home.css";

class FederalEnslavement extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        width={width}
        loading="lazy"
        title="gdp to debt to money"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=wWj5&width=${width}&height=600`}
        className="embed-container"
      />
    );
  }
}
export default FederalEnslavement;
