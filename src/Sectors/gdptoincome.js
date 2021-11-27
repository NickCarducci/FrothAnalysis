import React from "react";
import ".././home.css";

class GDPToIncome extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <iframe
        width={width}
        loading="lazy"
        title="total dollars held"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=yngl&width=${width}&height=900`}
        scrolling="no"
        className="embed-container"
      />
    );
  }
}
export default GDPToIncome;
