import React from "react";
import ".././home.css";

class Realvsnom extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div style={{ width }}>
        <iframe
          width={width}
          loading="lazy"
          title="real gdp vs nominal"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=qjQ2&width=${width}&height=440`}
          className="embed-container"
        />
        <div>
          GDP (green)
          <br />
          Real GDP (blue)
          <br />
          M3 (orange)
          <br />
          Total non-financial corporate debt w/ US issuer (pale)
          <br />
          GDP, not seasonally-adjusted (red)
          <br />
          Interest payments on consumer debt
          <br />
          Interest payments on consumer debt
        </div>
        <br />
      </div>
    );
  }
}
export default Realvsnom;
