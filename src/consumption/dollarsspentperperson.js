import React from "react";
import ".././home.css";

class DollarsSpentPerPerson extends React.Component {
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
            title="total spent per person"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0Lc&width=${
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
            right: "0px",
            width: "max-content",
            textAlign: "right",
            zIndex: "1",
            position: "absolute",
            opacity: this.state.touching ? 1 : 0.2
          }}
        >
          <span className="charttitleconsumption">
            <b>Total spent per person</b>, every month
          </span>
          Food
          <br />
          Housing & utilities
          <br />
          Health care
          <br />
          Energy goods & services
          <br />
          Financial Services & insurance
          <br />
          Federal tax receipts
          <br />
          State & local tax receipts
          <br />
          Clothing & footwear
        </div>
      </div>
    );
  }
}
export default DollarsSpentPerPerson;
