import React from "react";
import ".././home.css";

class GDPToIncome extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        title="total dollars held"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=yngl&width=${
          this.props.width ? width : "600"
        }&height=900`}
        scrolling="no"
        className="embed-container"
      />
    );
  }
}
export default GDPToIncome;
