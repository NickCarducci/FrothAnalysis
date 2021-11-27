import React from "react";
import DollarsSpent from ".././consumption/dollarsspent";
import DollarsSpentPerPerson from ".././consumption/dollarsspentperperson";
import DollarsRevenue from ".././consumption/dollarsrevenue";
import DollarsRevenue2 from ".././consumption/dollarsrevenue2";
import PriceMultiple from ".././consumption/pricemultiple";
import PriceMultiple2 from ".././consumption/pricemultiple2";
import ".././home.css";

class Consumption extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reset: true };
  }
  render() {
    const { reset } = this.state;
    //reset: on
    const { width, lastWidth } = this.props;
    if (this.props.pathname === "/consumption") {
      return (
        <div style={{ width: "100%" }}>
          {width !== lastWidth && (
            <div
              style={{
                right: "0px",
                top: "0px",
                backgroundColor: "red",
                zIndex: "10",
                position: "fixed",
                textAlign: "center",
                padding: "20px 10px",
                width: "max-content"
              }}
              onClick={() =>
                reset &&
                this.setState({ reset: false }, () => {
                  clearTimeout(this.cou);
                  this.cou = setTimeout(
                    () =>
                      this.setState(
                        {
                          reset: true
                        },
                        this.props.clear
                      ),
                    1000
                  );
                })
              }
            >
              Resize Charts?
            </div>
          )}
          {reset && (
            <div style={{ width: "100%" }}>
              <DollarsSpent width={lastWidth} />
              <DollarsSpentPerPerson width={lastWidth} />
              <DollarsRevenue width={lastWidth} />
              <DollarsRevenue2 width={lastWidth} />
              <PriceMultiple width={lastWidth} />
              <PriceMultiple2 width={lastWidth} />
            </div>
          )}
        </div>
      );
    } else return null;
  }
}
export default Consumption;
