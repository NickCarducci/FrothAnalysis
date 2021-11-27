import React from "react";

class CentralBankAssets extends React.Component {
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
            title="Federal reserve member bank assets"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=pazr&width=${
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
            <b>Federal reserve</b>&nbsp; member bank assets
          </span>
          All federal bank assets (br)
          <br />
          Mortgage debt lent by major bank (navy)
          <br />
          30 year ust yield (dark teal)
          <br />
          Reserve balances for fed banks (orange)
          <br />
          Excess reserve for depositors (smooth orange)
          <br />
          Federal funds rate (purple)
          <br />
          Fed excess reserve rate (bright blue)
          <br />
          {/*Cash
          <br />
          Lendable-cash
          <br />*/}
          Mortgage debt lent by individuals (light brown)
          <br />
          30 year 2046 1%-inflation indexed bond (green)
          <br />
          Required balances for fed banks (dark purple)
        </div>
      </div>
    );
  }
}
export default CentralBankAssets;
