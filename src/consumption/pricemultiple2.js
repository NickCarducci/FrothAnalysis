import React from "react";
import ".././home.css";

class PriceMultiple2 extends React.Component {
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
          title="price inflation again"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0M3&width=${
            this.props.width ? width : "600"
          }&height=300`}
          className="embed-containerconsumption"
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
