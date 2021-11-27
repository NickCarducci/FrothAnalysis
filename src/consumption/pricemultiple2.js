import React from "react";
import ".././home.css";

class PriceMultiple2 extends React.Component {
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
            title="price inflation again"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0M3&width=${
              width - 20
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
            zIndex: "1",
            position: "absolute",
            opacity: this.state.touching ? 1 : 0.2
          }}
        >
          <span className="charttitleconsumption">
            <b>Energy price-inflation</b>, since 1982-1984 prices
          </span>
          Airline fare
          <br />
          Gasoline (b)
          <br />
          All energy (p)
          <br />
          Electricity (r)
          <br />
          Transportation (g)
        </div>
      </div>
    );
  }
}
export default PriceMultiple2;
