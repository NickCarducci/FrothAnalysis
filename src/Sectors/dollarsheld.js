import React from "react";
import ".././home.css";

class DollarsHeld extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <a
          className="charttitle"
          href="https://fred.stlouisfed.org/graph/?g=o0GN"
        >
          <b>total dollars held</b>&nbsp; or valuation thereof, counted every 3
          months
        </a>

        <iframe
          width={width}
          loading="lazy"
          title="total dollars held"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=o0GN&width=${width}&height=440`}
          className="embed-container"
        />
        <div>
          Federal debt book value
          <br />
          Federal debt
          <br />
          Commercial bank assets
          <br />
          Financial sector debt
          <br />
          Broad money
          <br />
          Federal debt held by public
          <br />
          Federal debt held by foreign
          <br />
          Non-financial sector debt
          <br />
          Gross domestic product
          <br />
          Narrow money
          <br />
          Federal debt held by fed banks
          <br />
          Federal tax receipts
        </div>
        <br />
      </div>
    );
  }
}
export default DollarsHeld;
