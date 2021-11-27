import React from "react";

class InterestRates extends React.Component {
  state = {};
  componentWillUnmount = () => {
    clearTimeout(this.off);
  };
  render() {
    const { width } = this.props;
    return (
      <div
        onMouseEnter={() => {
          this.setState({ touching: true });
          clearTimeout(this.off);
          this.off = setTimeout(() => this.setState({ touching: false }), 3000);
        }}
        style={{ display: "flex", position: "relative", width: "min-content" }}
      >
        {this.state.giveUp ? (
          <div style={{ padding: "4px 10px", backgroundColor: "white" }}>
            not available
          </div>
        ) : (
          <iframe
            width={width}
            loading="lazy"
            title="interest rates"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0UO&width=${
              width - 10
            }&height=300`}
            style={{
              border: "none",
              position: "relative",
              width: width - 20,
              height: "370px",
              transition: "0.3s ease-in"
            }}
            onError={() => this.setState({ giveUp: true })}
          />
        )}
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
