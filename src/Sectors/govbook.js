import React from "react";
import ".././home.css";

class Govbook extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        width={width}
        loading="lazy"
        title="gdp to debt to money"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=xNMF&width=${width}&height=800`}
        className="embed-container"
      />
    );
  }
}
export default Govbook;
