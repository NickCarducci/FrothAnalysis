import React from "react";
class Liabilities extends React.Component {
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
            title="Total dollars & liabilities per person"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=qDG5&width=${
              width - 10
            }&height=500`}
            style={{
              border: "none",
              position: "relative",
              width: width - 20,
              height: "570px",
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
            <b>Total dollars & liabilities</b>&nbsp; per person
          </span>
          Broad money (bonds & cash) (brown)
          <br />
          Total outstanding loans (blue)
          <br />
          Outstanding loans with real estate collateral (orange)
          <br />
          All federal bank assets (brown)
          <br />
          Outstanding personal loans (light green)
          <br />
          Narrow money (cash) (green)
          <br />
          Outstanding loans with business collateral (pastel purple)
          <br />
          Excess reserve for depositors (purple)
          <br />
          Outstanding student loans (teal 1)
          <br />
          Outstanding personal loans lent by gov (teal 2)
          <br />
          Outstanding loans with auto collateral (teal 3)
        </div>
      </div>
    );
  }
}
export default Liabilities;
