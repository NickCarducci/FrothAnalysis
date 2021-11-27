import React from "react";
import InterestRates from "./interestrates";
import CentralBankAssets from "./centralbankassets";
import Liabilities from "./liabilities";
import PersonDebtCash from "./persondebtcash";

class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastWidth: props.width, reset: true };
  }
  render() {
    const { reset } = this.state;
    //reset: on
    const { width, lastWidth } = this.props;
    if (this.props.pathname === "/debt") {
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
          <div style={{ padding: "10px 4px" }}>
            <a href="https://micro-theory.com">Micro-theory.com</a>
          </div>
          <div style={{ padding: "10px 4px" }}>
            Marx is more conservative than Mises, Libertarians and Republicans,
            $821/day is spent, and that implies accrual instead of trade. Jamie
            Dimon needs to get car faced like George Floyd
          </div>
          <div
            style={{
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
                src={
                  this.props.settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/ohyyc9wensqjmar/interest%20dead%20weight%20%282%29.png?dl=0"
                }
                alt="err"
              />
            </div>
            <div style={{ position: "relative", width: "300px" }}>
              <div style={{ position: "relative", width: "300px" }}>
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={
                    this.props.settleDropboxFree
                      ? ""
                      : "https://www.dl.dropboxusercontent.com/s/027c9fnbex54vv5/jewishdebt.jpeg?dl=0"
                  }
                  alt="The Talmud dwells on Ezekiel's condemnation of charging interest. The Torah and Talmud encourage lending money without interest. But the halakha (Jewish law) that prescribes interest-free loans applies only to loans made to other Jews. Jewish law allows making loans with interest to persons who are not Jewish."
                />
              </div>
              <div style={{ position: "relative", width: "300px" }}>
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={
                    this.props.settleDropboxFree
                      ? ""
                      : "https://www.dl.dropboxusercontent.com/s/q06z0f1a8irozfx/Screen%20Shot%202021-01-27%20at%2012.59.30%20AM.png?dl=0"
                  }
                  alt="Wiki hypocrit checkmate"
                />
              </div>
            </div>
          </div>
          {reset && (
            <div style={{ width: "100%" }}>
              <Cable
                style={{ width: "680px", height: "450px" }}
                onError={handleScollImgError}
                src={
                  this.state.nofred
                    ? ""
                    : "https://fred.stlouisfed.org/graph/graph-landing.php?g=G8nU&width=620&height=300"
                }
                float="right"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + 1]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <PersonDebtCash width={lastWidth} />
              <Cable
                style={{ width: "680px", height: "450px" }}
                onError={handleScollImgError}
                src={
                  this.state.nofred
                    ? ""
                    : "https://fred.stlouisfed.org/graph/graph-landing.php?g=qDG5&width=620&height=300"
                }
                float="right"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + 1]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <Liabilities width={lastWidth} />
              <Cable
                style={{ width: "680px", height: "450px" }}
                onError={handleScollImgError}
                src={
                  this.state.nofred
                    ? ""
                    : "https://fred.stlouisfed.org/graph/graph-landing.php?g=pazr&width=620&height=300"
                }
                float="right"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + 1]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <CentralBankAssets width={lastWidth} />
              <Cable
                style={{ width: "680px", height: "450px" }}
                onError={handleScollImgError}
                src={
                  this.state.nofred
                    ? ""
                    : "https://fred.stlouisfed.org/graph/graph-landing.php?g=o0UO&width=620&height=300"
                }
                float="right"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + 1]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <InterestRates width={lastWidth} />
            </div>
          )}
          <iframe
            loading="lazy"
            style={{ width: "100%", height: "400px" }}
            title="2% of the population owns 4400% of the assets"
            src="https://vaults.biz"
          />
          <div style={{ width: "100%" }}>
            <img
              height="auto"
              width="100%"
              alt=""
              src={
                this.props.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/b3ywv62waw7rccp/1800%20taxation.jpeg?dl=0"
              }
            />
          </div>
        </div>
      );
    }
    return null;
  }
}
export default Interest;
