import React from "react";
import ".././home.css";

class TrueGDPbyNonDebtPerPerson extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title={
            "v2 - GDP/m2-currencym1 (trueVelocity) * currencym1 / people = trueGDP per person"
          }
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=Brfj&width=${width}&height=680`}
          className="embed-container"
        />
        <div>
          v2 - GDP/m2-currencym1 (trueVelocity) * currencym1 / people = trueGDP
          per person, not "real gdp" which doesn't account for unspent
          monetary-inflation (potential price-inelasticity inflation)
        </div>
        <br />
      </div>
    );
  }
}
export default TrueGDPbyNonDebtPerPerson;
