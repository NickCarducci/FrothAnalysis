import React from "react";
import ".././home.css";

class DollarsHeldPerPerson extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title="dollars held per person"
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=pbpA&width=${width}&height=440`}
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
export default DollarsHeldPerPerson;
