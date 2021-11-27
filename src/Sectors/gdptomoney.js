import React from "react";
import ".././home.css";

class GDPtoMoney extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        width={width}
        loading="lazy"
        title="gdp to debt to money"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=wOow&width=${width}&height=600`}
        className="embed-container"
        style={{ width }}
      />
    );
  }
}
export default GDPtoMoney;
