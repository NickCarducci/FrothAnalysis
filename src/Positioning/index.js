import React from "react";

class Positioning extends React.Component {
  render() {
    if (this.props.pathname === "/positions") {
      return (
        <div>
          <div>
            <span>
              TLT, SPY, VIX (weekly heiken ashi) Week of 22 June 2002 - May 10,
              2019
              <br />
              Posted 5/11/2019
            </span>
            <img
              className="image"
              //settleDropboxFree

              src={
                this.props.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/7porl1exsfksm0g/positioning_1.png?dl=0"
              }
              alt="error"
            />
          </div>
          <div>
            <span>
              Vix term structure (& rolling indexes) Vixcentral.com "Historical
              Prices" as of April 29, 2019
              <br />
              Posted 4/29/2019
            </span>
            <img
              className="image"
              src={
                this.props.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/9npmwus5ms6g0pz/Screen%20Shot%202019-04-29%20at%206.55.41%20PM.png?dl=0"
              }
              alt="error"
            />
          </div>
          <div>
            <span>
              Dark Index (on alternative trading systems) Squeezemetrics.com
              "DIX" as of April 29, 2019
              <br />
              Posted 4/29/2019
            </span>
            <img
              className="image"
              src={
                this.props.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/fer901nsncbs013/Screen%20Shot%202019-04-29%20at%207.13.14%20PM.png?dl=0"
              }
              alt="error"
            />
          </div>
          <div>
            <span>
              TLT, SPY, VIX (weekly heiken ashi) Week of 22 June 2002 - April
              26, 2019
              <br />
              Posted 4/28/2019
            </span>
            <img
              className="image"
              src={
                this.props.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/ue21i7788ntrabd/download%20%283%29%20%281%29.png?dl=0"
              }
              alt="error"
            />
          </div>
          <div>
            <span>
              TLT (daily ohlc max opex range) 12 January 2019 - April 26, 2019
              <br />
              Posted 4/28/2019
            </span>
            <img
              className="imagetall"
              src={
                this.props.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/086rzp7s4b0obne/IMG_1020.jpeg?dl=0"
              }
              alt="error"
            />
          </div>

          <span>
            <br />
            <br />
            Until 'positioning' features are developed, I suggest using: <br />
            <br />
            <a href="https://www.barchart.com/futures/commitment-of-traders">
              Barchart
              <br />
              for commitment of traders (COT) reports,
            </a>
            <br />
            <br />
            <a href="https://www.stockcharts.com/h-sc/ui?s=$CPC">
              StockCharts
              <br />
              for CBOE Put-Call ratio,
            </a>
            <br />
            <br />
            <a href="https://squeezemetrics.com/monitor/dix?">
              SqueezeMetrics
              <br />
              for dark index and gamma (options price velocity bets: probably
              out-of-the-money options with gamma as greatest dependent variable
              for price),
            </a>
            <br />
            <br />&<br />
            <a href="http://vixcentral.com/">
              VixCentral
              <br />
              for vix term structure (options price index that investors place
              an over/under + options indexes' book on)
            </a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </span>
        </div>
      );
    } else return null;
  }
}
export default Positioning;
