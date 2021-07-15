import React from "react";
import ".././home.css";

class DollarsRevenue2 extends React.Component {
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
          title="total revenue again"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0Ls&width=${
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
            <b>Total revenue</b>, every month in a 13,000-firm sample
          </span>
          Motor vehicle & parts
          <br />
          General merchandise
          <br />
          Warehouse & superstores
          <br />
          Building materials & supplies
          <br />
          Department stores
          <br />
          Furniture & furnishings
          <br />
          Hardware stores
        </div>
      </div>
    );
  }
}
export default DollarsRevenue2;
