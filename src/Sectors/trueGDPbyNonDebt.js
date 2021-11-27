import React from "react";
import ".././home.css";

class TrueGDPbyNonDebt extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title={"v2 - GDP/m2-currencym1 (trueVelocity) * currencym1 = trueGDP"}
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=Br2V&width=${width}&height=680`}
          className="embed-container"
        />
        <div>
          v2 - GDP/m2-currencym1 (trueVelocity) * currencym1 = trueGDP, not
          "real gdp" which doesn't account for unspent monetary-inflation
          (potential price-inelasticity inflation)
        </div>
        <br />
      </div>
    );
  }
}
export default TrueGDPbyNonDebt;
