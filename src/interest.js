import React from "react";
import "./home.css";
import InterestRates from "./interest/interestrates";
import CentralBankAssets from "./interest/centralbankassets";
import Liabilities from "./interest/liabilities";

class Interest extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.pathname === "/debt" ? "chartslist" : "chartslisthide"
        }
      >
        <div
          style={{
            paddingTop: "70px",
            flexWrap: "wrap",
            display: "flex",
            width: "100%",
            maxWidth: "600px",
            height: "min-content"
          }}
        >
          <div style={{ position: "relative", width: "300px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://www.dl.dropboxusercontent.com/s/ohyyc9wensqjmar/interest%20dead%20weight%20%282%29.png?dl=0"
              alt="err"
            />
          </div>
          <div style={{ position: "relative", width: "300px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://www.dl.dropboxusercontent.com/s/027c9fnbex54vv5/jewishdebt.jpeg?dl=0"
              alt="The Talmud dwells on Ezekiel's condemnation of charging interest. The Torah and Talmud encourage lending money without interest. But the halakha (Jewish law) that prescribes interest-free loans applies only to loans made to other Jews. Jewish law allows making loans with interest to persons who are not Jewish."
            />
          </div>
          <a href="https://vaults.biz">vaults.biz</a>
          <div style={{ position: "relative", width: "300px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://www.dl.dropboxusercontent.com/s/q06z0f1a8irozfx/Screen%20Shot%202021-01-27%20at%2012.59.30%20AM.png?dl=0"
              alt="Wiki hypocrit checkmate"
            />
          </div>
        </div>
        <InterestRates />
        <CentralBankAssets />
        <Liabilities />
      </div>
    );
  }
}
export default Interest;
