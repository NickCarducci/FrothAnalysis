import React from "react";
import ".././home.css";

class GDPtoMoney extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        title="gdp to debt to money"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=wOow&width=${
          this.props.width ? width : "600"
        }&height=600`}
        className="embed-container"
        style={{ width }}
      />
    );
  }
}
export default GDPtoMoney;
