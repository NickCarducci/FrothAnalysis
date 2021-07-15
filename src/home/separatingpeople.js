import React from "react";
import ".././home.css";

class SeparatingPeople extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          title={
            "money (recently includes not money and increased to help bondholders with usurped promises)" +
            " to 'savings' account valuations (not money) to total debt"
          }
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=BqM0&width=${
            this.props.width ? width : "600"
          }&height=680`}
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
