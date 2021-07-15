import React from "react";
import ".././home.css";

class DebtToSales extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <a
          className="charttitle1"
          href="https://fred.stlouisfed.org/graph/?g=vApj"
        >
          multiplied by 1000 was in billions. this is in millions
        </a>

        <iframe
          title="total dollars held"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=vApj&width=${
            this.props.width ? width : "600"
          }&height=900`}
          className="embed-container"
        />
      </div>
    );
  }
}
export default DebtToSales;
