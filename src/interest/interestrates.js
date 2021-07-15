import React from "react";
import ".././home.css";

class InterestRates extends React.Component {
  state = {};
  render() {
    const { width } = this.props;
    return (
      <div
        onMouseEnter={() => {
          this.setState({ touching: true });
          clearTimeout(this.off);
          this.off = setTimeout(() => this.setState({ touching: false }), 3000);
        }}
        style={{ width, display: "flex" }}
      >
        <iframe
          title="interest rates"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0UO&width=${
            this.props.width ? width : "600"
          }&height=300`}
          className="embed-container"
        />
        <div
          style={{
            transition: `${this.state.touching ? 1 : 0.3}s ease-in`,
            backgroundColor: "rgba(230,230,230,.7)",
            right: "0px",
            width: "max-content",
            textAlign: "right",
            zIndex: "1",
            position: "absolute",
            opacity: this.state.touching ? 1 : 0.2
          }}
        >
          <span className="charttitleconsumption">
            <b>US government & interbank</b>&nbsp; yields
          </span>
          12 month libor (red)
          <br />
          6 month libor (brown)
          <br />
          3 month libor (light brown)
          <br />
          Fed excess reserve rate (light blue)
          <br />
          Overnight libor (grey)
          <br />
          3 month ust yield (green)
          <br />
          10 year ust yield (teal)
          <br />
          10 year breakeven inflation (purple)
        </div>
      </div>
    );
  }
}
export default InterestRates;
