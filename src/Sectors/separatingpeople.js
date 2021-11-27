import React from "react";
import ".././home.css";

class SeparatingPeople extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title={
            "money (recently includes not money and increased to help bondholders with usurped promises)" +
            " to 'savings' account valuations (not money) to total debt"
          }
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=BqM0&width=${width}&height=680`}
          className="embed-container"
        />
        <div>
          money (recently includes not money and increased to help bondholders
          with usurped promises) to 'savings' account valuations (not money) to
          total debt
        </div>
        <br />
      </div>
    );
  }
}
export default SeparatingPeople;
