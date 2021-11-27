import React from "react";
import ".././home.css";

class TrueVelocity extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title={"v2 - GDP/m2-currencym1"}
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=BqS5&width=${width}&height=440`}
          className="embed-container"
        />
        <div>
          The difference between velocity purported by corrupt/conflicted bona
          fide-good information interests of economic advisors, evident by the
          difference between v2 - GDP/m2-currencym1 (real-real, blue),
          GDP/currencym1 (green), and what they tell us (purple)
        </div>
        <br />
      </div>
    );
  }
}
export default TrueVelocity;
