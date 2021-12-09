import React from "react";
import Cable from "./Dropwire";
import Positioning from "./Positioning";
import CovidStuff from "./Covid";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import Employment from "./Employment";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { UAParser } from "ua-parser-js";

import "./home.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    let width = window.innerWidth; // * 0.01;
    let height = window.innerHeight; // * 0.01;
    this.state = {
      scrollTop: 0,
      settleDropboxFree: true,
      browser: name,
      ios: true,
      width,
      height,
      openTopic: "Stats", //"Vaccine-Grafts",
      isTop: true
    };
    this.top = React.createRef();
    for (let i = 0; i < 250; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentWillUnmount() {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.scroll);
  }
  componentDidMount = () => {
    this.setState(
      {
        ios: this.state.browser.includes("Safari"),
        iosNoPhoto: this.state.browser.includes("Safari"),
        settleDropboxFree: this.state.browser.includes("Safari")
      },
      () => {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.refresh);
        this.refresh(true);
      }
    );
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e) {
        this.setState({ settleDropboxFree: true });
      }
    };
    const { width } = this.state;
    const ios = false;
    const count =
      width > 1800
        ? 6
        : width > 1500
        ? 5
        : width > 1200
        ? 4
        : width > 900
        ? 3
        : width > 600
        ? 2
        : 1;
    const countstyle = {
      transform: "translate(0%,0%)",
      top: "0px",
      position: "relative",
      breakInside: "avoid",
      width: "100%"
    };
    const videostyle = { width: "100%", border: 0, height: "min-content" };
    if (this.state.lastWidth) {
      return (
        <div
          style={{
            overflowX: "auto",
            transition: ".3s ease-in",
            display: "block",
            width: "100%"
          }}
        >
          <div
            className={
              this.state.pathname === "/consumption"
                ? "openedPage"
                : !this.state.isTop
                ? "navbarhide"
                : "navbar"
            }
            style={{ maxWidth: "100%", overflowX: "auto", overflowY: "hidden" }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <img
                  style={{ height: "30px", width: "auto" }}
                  alt="saver party squirrel"
                  //this.state.settleDropboxFree

                  src={
                    this.state.settleDropboxFree
                      ? ""
                      : "https://www.dl.dropboxusercontent.com/s/oi43wpcc0h9phcz/saverAcorn%20%281%29.png?dl=0"
                  }
                />
                <div style={{ padding: "6px 10px", color: "black" }}>
                  <a href="https://saverparty.xyz">SaverParty.xyz</a>
                </div>
              </div>
              <Link
                style={{
                  textDecoration: "none",
                  padding: "6px 10px",
                  backgroundColor: "rgba(0,0,0,.1)"
                }}
                to="/positions"
              >
                Positioning
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  padding: "6px 10px",
                  backgroundColor: "rgba(0,0,0,.1)"
                }}
                to="/sectors"
              >
                Sectors
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  padding: "6px 10px",
                  backgroundColor: "rgba(0,0,0,.1)"
                }}
                to="/consumption"
              >
                Consumption
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  padding: "6px 10px",
                  backgroundColor: "rgba(0,0,0,.1)"
                }}
                to="/debt"
              >
                Interest / Debt
              </Link>
            </div>
          </div>
          <div
            ref={this.top}
            style={{
              width: "100%",
              position: "relative"
            }}
          >
            {this.state.pathname === "/work" ? (
              <div>
                we have half unemployment to population than when you were our
                age, and 65+ have half continuing claims, as you can see below
                <br />{" "}
                <Cable
                  style={{ width: "100%", height: "560px" }}
                  onError={handleScollImgError}
                  //img={true}
                  src={
                    this.state.nofred
                      ? ""
                      : `https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=670&height=475`
                  }
                  float="right"
                  title="https://fred.stlouisfed.org/graph/?g=H5XB"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 36]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <Cable
                  onError={handleScollImgError}
                  //img={true}
                  src={
                    this.state.noyoutube
                      ? ""
                      : "https://www.youtube.com/embed/TjvqmfDvOfQ"
                  }
                  float="right"
                  title="https://fb.watch/9ruq5dxR9r/"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 35]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                and the following is 20x/person 55+/millennials (
                <a href="https://30under5.us">rental-income</a>)
                <br />
                <Cable
                  style={{ width: "100%", height: "560px" }}
                  onError={handleScollImgError}
                  //img={true}
                  src={
                    this.state.nofred
                      ? ""
                      : `https://fred.stlouisfed.org/graph/graph-landing.php?g=FSwQ&width=670&height=475`
                  }
                  float="right"
                  title="https://fred.stlouisfed.org/graph/?g=FSwQ"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 34]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              </div>
            ) : this.state.pathname === "/positions" ? (
              <Positioning
                settleDropboxFree={this.state.settleDropboxFree}
                pathname={this.state.pathname}
                lastWidth={this.state.lastWidth}
              />
            ) : this.state.pathname === "/debt" ? (
              <div style={{ width: "100%" }}>
                <div style={{ padding: "10px 4px" }}>
                  <a href="https://micro-theory.com">Micro-theory.com</a>
                </div>
                <div style={{ padding: "10px 4px" }}>
                  Marx is more conservative than Mises, Libertarians and
                  Republicans, $821/day is spent, and that implies accrual
                  instead of trade. Jamie Dimon needs to get car faced like
                  George Floyd
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
                <div style={{ width: "100%" }}>
                  PersonDebtCash
                  <br />
                  <Cable
                    style={{ width: "680px", height: "450px" }}
                    onError={handleScollImgError}
                    src={
                      this.state.nofred
                        ? ""
                        : "https://fred.stlouisfed.org/graph/graph-landing.php?g=G8nU&width=620&height=300"
                    }
                    float="left"
                    title=""
                    scrolling={this.state.scrolling}
                    fwd={this["scrollImg" + 33]}
                    scrollTopAndHeight={
                      this.state.scrollTop + window.innerHeight
                    }
                    scrollTop={this.state.scrollTop}
                  />
                  <br />
                  <Cable
                    style={{ width: "680px", height: "450px" }}
                    onError={handleScollImgError}
                    src={
                      this.state.nofred
                        ? ""
                        : "https://fred.stlouisfed.org/graph/graph-landing.php?g=qDG5&width=620&height=300"
                    }
                    float="left"
                    title=""
                    scrolling={this.state.scrolling}
                    fwd={this["scrollImg" + 32]}
                    scrollTopAndHeight={
                      this.state.scrollTop + window.innerHeight
                    }
                    scrollTop={this.state.scrollTop}
                  />
                  Liabilities
                  <br />
                  <Cable
                    style={{ width: "680px", height: "450px" }}
                    onError={handleScollImgError}
                    src={
                      this.state.nofred
                        ? ""
                        : "https://fred.stlouisfed.org/graph/graph-landing.php?g=pazr&width=620&height=300"
                    }
                    float="left"
                    title=""
                    scrolling={this.state.scrolling}
                    fwd={this["scrollImg" + 31]}
                    scrollTopAndHeight={
                      this.state.scrollTop + window.innerHeight
                    }
                    scrollTop={this.state.scrollTop}
                  />
                  CentralBankAssets
                  <br />
                  <Cable
                    style={{ width: "680px", height: "450px" }}
                    onError={handleScollImgError}
                    src={
                      this.state.nofred
                        ? ""
                        : "https://fred.stlouisfed.org/graph/graph-landing.php?g=o0UO&width=620&height=300"
                    }
                    float="left"
                    title=""
                    scrolling={this.state.scrolling}
                    fwd={this["scrollImg" + 30]}
                    scrollTopAndHeight={
                      this.state.scrollTop + window.innerHeight
                    }
                    scrollTop={this.state.scrollTop}
                  />
                  InterestRates
                  <br />
                </div>
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
            ) : this.state.pathname === "/sectors" ? (
              <div>
                trueGDPbyNonDebtPerPerson
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=Brfj&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 29]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                trueGDPbyNonDebt
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=Br2V&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 28]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                trueGDPminuslostequitySame
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=BraK&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 27]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                trueGDPminuslostequity
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=BqL3&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 26]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                trueVelocityPerQuarter
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=BqS5&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 26]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                SlaveDriver
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=B9UD&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 25]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                SeparatingPeopleFromAssets
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=BqM0&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 24]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                IncomeToGdp
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=B8cT&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 23]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                Pplbook
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=xNRc&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 22]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                Govbook
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=xNMF&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 21]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                FederalEnslavement
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=wWj5&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 20]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                Pensions
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=wThA&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 19]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                GDPtoMoney
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=wOow&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 18]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                DebtToSales
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=vApj&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 17]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                GDPToIncome
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=yngl&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 16]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                DollarsHeld
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=o0GN&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 15]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                DollarsHeldPerPerson
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=pbpA&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 14]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                DollarsEarned
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=o0KQ&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 13]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                DollarsEarnedPerPerson
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=o0Lc&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 12]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                DollarsEarnedPerEmployee
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=paUy&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 11]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                GDPPersons
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=qih7&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 10]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                GDPMoneyPersons
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=qiiu&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 9]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                Realvsnom
                <br />
                <Cable
                  style={{ width: "680px", height: "450px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? ""
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=qjQ2&width=620&height=300"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 8]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              </div>
            ) : this.state.pathname === "/consumption" ? (
              <div
                style={{
                  height: "100px",
                  width: "100%"
                }}
              >
                <Cable
                  style={{ width: "680px", height: "850px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? "" //o0Lb
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=JsVv&width=620&height=700"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 6]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <Cable
                  style={{ width: "680px", height: "850px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? "" //o0Lc
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=JsWk&width=620&height=700"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 5]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <Cable
                  style={{ width: "680px", height: "650px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? "" //o0Lo
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=JsWr&width=620&height=500"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 4]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <Cable
                  style={{ width: "680px", height: "650px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? "" //o0Ls
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=JsXt&width=620&height=500"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 3]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <Cable
                  style={{ width: "680px", height: "850px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? "" //o0LP
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=JsXG&width=620&height=700"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 2]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <Cable
                  style={{ width: "680px", height: "650px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.nofred
                      ? "" //o0M3
                      : "https://fred.stlouisfed.org/graph/graph-landing.php?g=JsXQ&width=620&height=500"
                  }
                  float="left"
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + 1]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  position: "relative"
                }}
              >
                {ios ? (
                  "employment 1939-2020 not available in iOS"
                ) : (
                  <Employment
                    lastWidth={this.state.lastWidth}
                    width={width - 20}
                    isTop={this.state.isTop}
                    unlockTop={() =>
                      this.setState({ lockIsTop: false, isTop: true }, () =>
                        this.top.current.scrollIntoView("smooth")
                      )
                    }
                  />
                )}
                <a
                  style={{
                    display: "flex",
                    position: "relative",
                    marginTop: "10px",
                    left: "20px",
                    width: "max-content",
                    border: "1px solid"
                  }}
                  href="https://book.com.co"
                >
                  equity & option chartbook
                </a>
                Nick@froth.app
                <select
                  style={{
                    display: "flex",
                    position: "relative",
                    marginTop: "10px",
                    left: "20px",
                    width: "max-content",
                    border: "1px solid"
                  }}
                  value={this.state.openTopic}
                  onChange={(e) => {
                    const openTopic = e.target.value;
                    if (openTopic === "Work") this.state.history.push("/work");
                    this.setState({ openTopic });
                  }}
                >
                  {[
                    "Work",
                    "Masks & Physics",
                    "Vaccine-Grafts",
                    "Precautions",
                    "Stats",
                    "Debt"
                  ].map((x) => {
                    return <option key={x}>{x}</option>;
                  })}
                </select>
                <div
                  style={{
                    display:
                      this.state.openTopic === "Masks & Physics" ? "" : "none",
                    position: "relative",
                    width: "calc(100% - 4px)",
                    columnCount: count
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div style={{ display: "flex", margin: "10px" }}>
                      <table style={{ border: "1px solid" }}>
                        <thead>
                          <tr>
                            <th>action</th>
                            <th>fall</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>sneeze</td>
                            <td>6m</td>
                          </tr>
                          <tr>
                            <td>cough</td>
                            <td>2m</td>
                          </tr>
                          <tr>
                            <td>breathe</td>
                            <td>{"<"}1m</td>
                          </tr>
                        </tbody>
                      </table>
                      <div style={{ wordBreak: "break-all" }}>
                        https://pubmed.ncbi.nlm.nih.gov/17542834/#:~:text=Practical
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgb(200,140,60)",
                        color: "rgb(230,230,230)",
                        breakInside: "avoid",
                        borderBottom: "1px solid grey"
                      }}
                    >
                      Masks are harmful as #MasksGestateBacteria - to keep your
                      cough or sneeze on your sleeve then washing hands is
                      better
                      <div
                        style={{
                          fontWeight: "bolder",
                          backgroundColor: "white",
                          margin: "4px",
                          color: "grey"
                        }}
                      >
                        We do need a countertop-talking test
                      </div>
                    </div>
                    atmospheric convection
                  </div>
                  <div style={{ width: "100%" }}>
                    <img
                      height="auto"
                      width="100%"
                      alt="hadley cell"
                      src={
                        this.state.settleDropboxFree
                          ? ""
                          : "https://www.dl.dropboxusercontent.com/s/a1vy0q7ahbrlduf/globe%20weather%20system.jpeg?dl=0"
                      }
                    />
                    weather systems are from heat which is really density from
                    friction of non-solluables
                  </div>
                  <div
                    style={{
                      width: "100%"
                    }}
                  >
                    <img
                      height="auto"
                      width="300px"
                      alt="goldberg drum about 3ft 3 hours covid still detected"
                      src={
                        this.state.settleDropboxFree
                          ? ""
                          : "https://www.dl.dropboxusercontent.com/s/fm92t9anyr47j2t/goldberg.jpeg?dl=0"
                      }
                    />
                    <div style={{ width: "100%", wordBreak: "break-all" }}>
                      https://www.medrxiv.org/content/10.1101/2020.03.09.20033217v1.full.pdf
                    </div>
                    <br />
                    Since covid was found to float on dust they sprayed into a
                    Goldberg drum 3 hours later the scientists conclude it
                    doesn’t dissipate upwards-like or require spittle. There is
                    no proof that spittle stays in the air except in comparison
                    to dust in a 3ft steel drum
                  </div>
                  {/*<div style={{ width: "300px" }}>
                <TwitterTweetEmbed
                  key="1333520425511432196"
                  tweetId="1333520425511432196"
                />
              </div>
              <div style={{ width: "300px" }}>
                <TwitterTweetEmbed
                  key="1309333445970202624"
                  tweetId="1309333445970202624"
                />
              </div>*/}{" "}
                  <TwitterTweetEmbed
                    key="1326577128830275586"
                    tweetId="1326577128830275586"
                  />
                  <a href="https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/">
                    source
                  </a>
                  {/*<div style={{ width: "300px" }}>
                <TwitterTweetEmbed
                  key="1334575619003310082"
                  tweetId="1334575619003310082"
                />
              </div>
              <div
                style={{
                  backgroundColor: "black",
                  
                  width: "100%"
                }}
                id="t1334608763387580425"
              />*/}
                  <div style={{ display: "inline-block" }}>
                    CO2 and ice-melt match carbon assuming natural carbon
                    capture never happens or unbinds after combustion, because,
                    "Obliquity – a 41,000-year change in the tilt of the Earth’s
                    axis relative to the sun that changes how much sun is
                    received during a year at the poles versus the equator,"
                    unless you think humans go extinct, or never burned carbon
                    (burn/binding, not emit/emission)
                    <br />
                    https://www.carbonbrief.org/explainer-how-the-rise-and-fall-of-co2-levels-influenced-the-ice-ages
                    <br />
                    <br />
                    <Cable
                      onError={handleScollImgError}
                      src={
                        this.state.iosNoPhoto
                          ? ""
                          : "https://drive.google.com/file/d/11cmunvYMNbawPPoLCvvd1BPdznBQbc1P/preview"
                      }
                      float="left"
                      title=""
                      scrolling={this.state.scrolling}
                      fwd={this["scrollImg" + 7]}
                      scrollTopAndHeight={
                        this.state.scrollTop + window.innerHeight
                      }
                      scrollTop={this.state.scrollTop}
                    />
                    “I’m not saying there isn’t global warming,”
                    <br />
                    <br />
                    <div style={countstyle}>
                      <iframe
                        style={videostyle}
                        src="https://www.youtube.com/embed/nKvUf7F4Xn4"
                        title="YouTube video player"
                      ></iframe>
                    </div>
                    <br />
                    (what if our sun revolves around another?)
                    <br />
                    2005 novel SARS-CoV (January 28, 2005)
                    https://jvi.asm.org/content/79/4/2001/article-info
                    <br />
                    <br />
                    electricity is the release of electrons from the neutron &
                    protons when they hit but do not mix/trade into a stable
                    compound. gravity are those electrons not mass. I do not
                    understand the logic of multiplying lightspeed^2 by grams...
                    which we can make on any scale
                  </div>
                  <img
                    style={{ width: "300px" }}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dl.dropboxusercontent.com/s/21qr4z03x0itzrg/surgicalmaskwarning.jpeg?dl=0"
                    }
                    alt="surgical masks only stop spittle which on average travels no more than 1 foot during non-quited talking"
                  />
                  <img
                    style={{ width: "300px" }}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dl.dropboxusercontent.com/s/xrxzi5oexmizg8a/n95maskbox.jpeg?dl=0"
                    }
                    alt="n95 masks/gas masks stop aerosols"
                  />
                  <img
                    style={{ width: "300px" }}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dl.dropboxusercontent.com/s/00cuqd9k6zts7vv/salonmaskeffect.jpg?dl=0"
                    }
                    alt="Absence of Apparent Transmission of SARS-CoV-2 from Two Stylists After Exposure at a Hair Salon with a Universal Face Covering Policy — Springfield, Missouri, May 2020"
                  />
                  <img
                    style={{ width: "300px" }}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dl.dropboxusercontent.com/s/5xwv1ieiqopdib3/abc_cdc.jpeg?dl=0"
                    }
                    alt="When COVID-19 is reported as a cause of death on the death certificate, it is coded and counted as a death due to COVID-19..."
                  />
                  <img
                    style={{ width: "300px" }}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dl.dropboxusercontent.com/s/xemvtyyx9vy7siu/macrotrendsdeathratesnapshot.jpeg?dl=0"
                    }
                    alt="US deaths have been trending up since 2013"
                  />
                  {/*<img
                style={{ width: "300px" }}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/amd4iuusdt3tetn/allcause.png?dl=0"
                }
                alt="Fluid-filled lung season comparison"
              />*/}
                  <img
                    style={{ width: "300px" }}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dl.dropboxusercontent.com/s/twqrwxr85km8ctu/Screen%20Shot%202021-01-06%20at%2012.10.28%20AM.png?dl=0"
                    }
                    alt="Fluid-filled lung season comparison"
                  />
                  <img
                    style={{ width: "300px" }}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dl.dropboxusercontent.com/s/y9b0g6bjcrt6naw/spanishflu.jpeg?dl=0"
                    }
                    alt="Spanish flu historical notion of larger second wave fourfold"
                  />
                </div>
                <div
                  style={{
                    display:
                      this.state.openTopic === "Vaccine-Grafts" ? "" : "none",
                    position: "relative",
                    width: "calc(100% - 4px)",
                    columnCount: count
                  }}
                >
                  <div style={countstyle}>
                    Virus isn’t alive nor have the ancestry of bacteria, was
                    made years after cell that which is required to replicate,
                    you may be studying the byproduct not the cause, as bacteria
                    invokes cell to produce virus
                    <br />
                    <br />
                    Infections, just look at the circa bacteria is cell without
                    certain things, evolved from like, water, ok? Ever hear
                    virus isn’t alive?
                  </div>
                  <div style={countstyle}>
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/m-CwPBcrMYQ"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                  <div style={countstyle}>
                    Can&nbsp;
                    <a href="https://www.youtube.com/watch?v=_lK4cX5xGiQ">
                      emulate
                    </a>
                    &nbsp;gravity-free feel without gravity (electrons to core),
                    by flying in&nbsp;
                    <a href="https://nationalsecuritycasino.com">
                      upside parabolic trajectory
                    </a>
                  </div>

                  <div style={countstyle}>
                    growth of hours isn't productivity, it's exactly the
                    reciprocal under price-deflation for tech advancement
                    <br />
                    <br />
                    Bacteria is cause of illness, not virus (unless you think it
                    is an evolutionary trait or spurred from a bunch of
                    antimatter)
                    <br />
                    Projecting complacent science
                    <br />
                    Virus only comes out
                    {/*<br />
            Price continuum (location would be established for product prices)*/}
                    <br />
                    <br />
                    just because you put it in a contract doesn’t mean it isn’t
                    discrimination without the right to. At the very least they
                    lose their copyright, (1) there aren’t infinite producers &
                    (2) Twitter employees use the discriminateds’ services
                    elsewhere without discrimination. Content removable is null
                    except 1/12 of scientific consensus; it is my work, the
                    lexicon is mine. You can block but you can’t remove data nor
                    users unless you pay them for that right.
                    <br />
                    <br />
                    You probably think force majeure isn’t moot either just
                    because someone was under duress to sign up; impossible is
                    purposeful or moot. Contracts can be illegal and unbothered
                    until someone like me complains. Duress makes a contract
                    moot like there only being finite producers, again at the
                    very least they lose their copyright or cannot discriminate,
                    even if they announce it or the user is under duress to
                    “agree”
                  </div>

                  <div style={countstyle}>
                    Right to choose, finite producers, truancy
                    <br />
                    <br />
                    writing down school, pensions
                  </div>
                  <div style={countstyle}>
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/1D6n2om9I6A"
                      title="YouTube video player"
                    ></iframe>
                    after this follow up to by citation of population growth
                    making covid excess deaths insignifiant, a cop complained
                    about the threat to take this wor lose pension. on another
                    chord, this is only solved by reverse debt:cash
                    public-park-deed residual split
                  </div>
                  <div style={countstyle}>
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/mlEFtVlivjs"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                  <div style={countstyle}>
                    People on cnn are saying that 1918 flu wasn't as bad with
                    40% population size without any semblance of understanding
                    of epiology, virus comes from thin air rather than
                    bacterial-cause. Is a leap of faith
                    <br />
                    <br />
                    <a href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full#:~:text=After%20mammalian">
                      https://www.google.com/search?q=a2+receptor+virus+mitosis
                    </a>
                    <br />
                    <br />
                    My 84-yr-old grandma spent 2 days next to PIC (pnemonia,
                    influenza, covid), religion is when consensus isn't had, not
                    exclusively ideas of people thousands of years ago. no mask,
                    is fine.
                    <br />
                    <br />
                    You can see vaccines causing hospitalizations on stats (in
                    dropdown)
                  </div>
                  <div style={countstyle}>
                    Covid in Wuhan mimicked nature by crispr, virus only comes
                    out of cell that encounters bacteria
                    <br />
                    <br />
                    affordable access to vaccines, no mention of utility being
                    common law as open, as uppers are against our pharmacy
                    druglords brought forward demand without rollover is useless
                    price inelasticity
                    <br />
                    <br />
                    Antibodies' onset is illness, virus only goes out of cell,
                    animals are made of cells too, basteria is required
                    everytime
                    <TwitterTweetEmbed
                      key="1420593721096253440"
                      tweetId="1420593721096253440"
                    />
                    <a href="https://kids.frontiersin.org/articles/10.3389/frym.2020.582971">
                      where does the virus come from? Animals have cells too.
                      Virus cannot make virus, only bacteria can
                    </a>
                    <br />
                    <br />
                    We need to know prevalence of suspected illness of
                    unvaccinated, test for covid on tabletops after talking, and
                    creating virus by open wound + bacteria and phages “Multi
                    inflammatory infection illness month later,” says Dr.
                    Safire, “stays in pharynx,” excrement that antibodies didn’t
                    have to attack and prompt the cardiovascular system to heat
                    for what? virus comes from? Virus. Lmao
                    <br />
                    <br />
                    where does virus come from, virus? haha you're good, you're
                    good
                  </div>
                  <div style={countstyle}>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/12049024/">
                      suck my dick
                    </a>
                    , reduce&nbsp;
                    <a href="http://trajectory-inc.com/about-us/#team-members">
                      infection
                    </a>
                    <img
                      style={countstyle}
                      alt="https://www.nature.com/articles/s41598-020-73162-5"
                      src={
                        this.state.settleDropboxFree
                          ? ""
                          : "https://www.dl.dropboxusercontent.com/s/zu3gxwmh34ui7aq/Electron%20infection%20covid%20microscope.png?dl=0"
                      }
                    />
                    <br />
                    <br />
                    Vaccine-abstention of 80% children, 75% afros & 26% of the
                    general public has precedence of Jim Crow (written-english
                    test to vote), although if it were proportional by ago or
                    race it would be illegal to exclude on the following ground,
                    precedence not with standing.
                    <br />
                    <br />
                    <TwitterTweetEmbed
                      key="1435285276704878592"
                      tweetId="1435285276704878592"
                    />
                    <a href="https://kids.frontiersin.org/articles/10.3389/frym.2019.00102">
                      In fact, most viruses in the world infect bacteria, not
                      people.
                    </a>
                    <img
                      height="auto"
                      width="100%"
                      alt="https://kids.frontiersin.org/articles/10.3389/frym.2019.00002"
                      src={
                        this.state.settleDropboxFree
                          ? ""
                          : "https://www.dl.dropboxusercontent.com/s/2jmslkl1zf0lg3s/virus%20frontiers%20young%20minds.jpeg?dl=0"
                      }
                    />
                  </div>
                  <div style={countstyle}>
                    Vaccines are much like brought forward demand, full of
                    bizzare science like this:
                    https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference
                    <br />
                    <br />
                    Bacterial v viral infection is diagnosed by lateral vs both
                    sides, and Harvard wyss counts deaths/hospitalizations rate
                    is highest when bacteria is more acute like that. That being
                    the only indication in insufficient in discerning between
                    the two.
                    <br />
                    <br />
                    Listen to non-conflicted statisticians, not class precedence
                    malfeasance lawyers nor doctors
                    <br />
                    <br />
                    You’ll notice the studies correlate with antibodies cleaning
                    virus onset symptoms, yet virus is created by bacteria
                    encountering cell. If you look under an&nbsp;
                    <a href="https://www.nature.com/articles/s41598-020-73162-5">
                      electron microscope
                    </a>
                    , the multiplicity of infection is garnered by finding a
                    cell showing proteins sticking out, never the&nbsp;
                    <a href="https://ourworldindata.org/coronavirus-testing#:~:text=These%20figures">
                      actual virus
                    </a>
                    &nbsp;other than those sponge-like computer-graphic
                    characterizations. Traditional science think the virus is
                    all that is involved, and must infect as the source, but
                    where does the first virus come from? They cannot answer
                    this, so it likely comes from the cell with the involvement
                    of bacteria in every case, not just when it infects just one
                    side…
                    <br />
                    <br />
                    Symptoms aren’t usual for latent except in sample because
                    some testing is done on indication, when antibody generation
                    is sufficient in generating “fever”
                    <br />
                    <br />
                    20% is my&nbsp;
                    <a href="https://www.cdc.gov/tb/statistics/default.htm">
                      estimate
                    </a>
                    &nbsp;for asymptomatic cases globally as well for all 2k/yr
                    discovered virion mitosisly-propogated, likely
                    <a href="https://ourworldindata.org/coronavirus-testing#:~:text=Because%20limited%20testing%20makes">
                      ourworldindata
                    </a>
                    &nbsp;might estimate this as well, for survivorship bias or
                    just a red herring diagnosis, maybe without a particular
                    order of evidence, for instance
                    <br />
                    <br />
                    https://www.cebm.net/covid-19/covid-19-what-proportion-are-asymptomatic/
                    variance of variance varies greatly, between 5% and 94%
                    asymptomatic, ruining event/population time-series
                    extrapolations of a basis line without exogenus factors
                  </div>
                  <div style={countstyle}>
                    <TwitterTweetEmbed
                      key="1421858300979732480"
                      tweetId="1421858300979732480"
                    />
                    “Our economy, the children of the 75+, is growing at a
                    faster rate than we have seen in 40 years” Biden, "660k
                    lives from the virus," yet it is only conclusively with the
                    virus (excess deaths are less than expected from population
                    growth of 1.2m). like I think the carface is what killed
                    George Floyd, and bacteria causes illness
                    (bacterial-pnemonia is diagnosed by being on-one-side &
                    acute, and bacterial-infection creates virus)
                    <br />
                    You don't have a monopoly on science
                    <br />
                    If vaccines work in preventing illness, the application of
                    Article 4 is relevant as ...breakthrough cases. Lo, bacteria
                    causes illness, here elaborated. but first:
                    <br />
                    faggot (tool), douche (useless-yeast-cleaner), retard
                    (self-harmer).
                    <br />
                    The only fucking difference between the diagnosis of
                    bacterial pneumonia and viral is if it is on one side from
                    pfiezer
                    https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference
                    and we have Harvard saying it is the deadliest bed-borne
                    disease.
                    https://wyss.harvard.edu/news/the-secret-life-of-bacteria-revealed/
                    <br />
                    <br />
                    Bacteria creates virus&nbsp;
                    <a href="https://www.science.org/lookup/doi/10.1126/science.aat9691">
                      68% of 35
                    </a>
                    , virus creates illness&nbsp;
                    <a href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.526.6744&rep=rep1&type=pdf">
                      30% of 200
                    </a>
                    , 2% mRNA-sporing-graft without antigen causes hot module
                    nodes above baseline (see Precautions) or dysregulated
                    b-cells intowards malignant oncogenesis
                    <br />
                    <br />
                    https://www.springer.com/gp/book/9783642346569 #TradeSecrets
                    #EducationForAll #M2Laundering #ConflictOfInterests #Biology
                  </div>
                  <div style={countstyle}>
                    {/*<TwitterTweetEmbed
                  key="1435293704126881796"
                  tweetId="1435293704126881796"
                />*/}
                    <TwitterTweetEmbed
                      key="1425460613711605760"
                      tweetId="1425460613711605760"
                    />
                    {/**“Covid was made by China,” 
              @ kilmeade
              lies about what is known or in-vitro proven 
              @ DickMorrisTweet
              NO PROOF, a viron isn’t domestic violence retardation-fools */}
                    <div
                      style={{
                        backgroundColor: "rgb(20,190,20)",
                        color: "rgb(230,230,230)",
                        breakInside: "avoid",
                        borderBottom: "1px solid grey"
                      }}
                    >
                      humanharvest.info&nbsp;&bull;&nbsp;placenta
                      (traditional-antigen, viral-vector) or
                      lymphoma*(mRNA-sporing-graft)
                      <br />
                      <div
                        style={{
                          fontWeight: "bolder",
                          backgroundColor: "white",
                          margin: "4px",
                          color: "grey"
                        }}
                      >
                        Grounds for discrimination standings is stronger thru
                        Amendment 13 than Amendment 1:
                        <br />
                        From Saver Party Chairperson: "'CDC guidance,' GIVES YOU
                        NOR GOVERNOR MURPHY AUTHORITY TO INSTILL ANY DURESS IN
                        PRODUCTS AND SERVICES; ONLY ABJECT & IN-VITRO
                        'LINKABLE'-PROOF, NOT SNAPSHOT NOR CORRELATION, MAY BE
                        CONSTRUED AS PART OF THE MINIMAL-VIABLE-PRODUCT ON
                        AMENDMENT 13, FOR SURRENDERING UP UNTIL COMMENSURATE
                        DURABLE GOODS TARNISHES COMPARATIVE ADVANTAGE & OUR
                        INCENTIVE-STRUCTURE."
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      ...countstyle,
                      backgroundColor: "rgb(220,20,20)",
                      color: "rgb(230,230,230)",
                      breakInside: "avoid",
                      borderBottom: "1px solid grey"
                    }}
                  >
                    @njdotcom · Dec 3, 2020 Facebook to remove COVID-19
                    vaccine-related misinformation
                    <br />
                    @saverparty · Dec 3, 2020 spike protein in not conclusively
                    harmless @facebook @cdc @nih it may cause oncogenesis (I say
                    this after reading this
                    https://nature.com/articles/cddis2016148
                    <div
                      style={{
                        fontWeight: "bolder",
                        backgroundColor: "white",
                        margin: "4px",
                        color: "grey"
                      }}
                    >
                      "... B cells [made by mRNA] [could] acquire an aggressive
                      phenotype and thus have a major role in oncogenesis."
                    </div>
                  </div>
                  <br />
                  <div
                    style={{
                      ...countstyle,
                      backgroundColor: "rgb(200,140,60)",
                      color: "rgb(230,230,230)",
                      breakInside: "avoid",
                      borderBottom: "1px solid grey"
                    }}
                  >
                    The mRNA-sporing-graft is just that, and a viral-vector,
                    antigen-vaccine merely goes towards booning mutations while
                    the neutralizing titer without an antigen and only a human
                    cell to attack certainly causes non-oncogenic or malignant
                    adaptive-memory-cells, identified by the onset of fatigue in
                    vaccination and pneumatic symptoms when having the latter,
                    but alive.
                    <div
                      style={{
                        fontWeight: "bolder",
                        backgroundColor: "white",
                        margin: "4px",
                        color: "grey"
                      }}
                    >
                      Finally,&nbsp;
                      <b style={{ color: "blue" }}>
                        excrement is likely the source of the virons
                      </b>
                      ,&nbsp;
                      <b>
                        if it is at all harmful and not byproduct of digesting
                        the weapon that is bacteria
                      </b>
                      , &nbsp;and 2k/yr are discovered, without testing the
                      highly-plausible scenario that multiple-virons affect the
                      same host upon pneumatic-symptoms;&nbsp;
                      <b style={{ color: "red" }}>
                        5% of suspected cases in the Pfizer Phase III trial
                      </b>
                      , and now hospitalizations are dealing with still the old,
                      but suspected aren't far from confirmed in the
                      hospitalization data here
                      https://healthdata.gov/dataset/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/6xf2-c3ie
                      <br />
                      <br />
                      https://pubmed.ncbi.nlm.nih.gov/12049024/
                      <br />
                      http://trajectory-inc.com/about-us/#team-members
                    </div>
                  </div>
                  {/**Uh, getting as many people as possible vaccinated is what would get us to herd immunity.
                  #DefundThePolice 🌻🌹 @ Tom4CongressNY6 Not if the vaccine does not provide immunity. And......it doesn't provide immunity. */}
                  {/* Surgical masks work! That means it isn’t airborne just when
                    we spit, which only reaches 1ft when we talk. Masks are
                    useless use the inside of your elbow when you sneeze and it
                   will be more than effective - it will keep your face clean*/}
                  {/**This is hardly in vitro proof of propagation by viral transmission,
               to use embryonic cells is to study bacteria-infected cells multiplication,
               not virion as debris going back into the cell. #COVID19 */}
                  <TwitterTweetEmbed
                    key="1432355213428596736"
                    tweetId="1432355213428596736"
                  />
                  <img
                    height="auto"
                    width="100%"
                    alt="https://sciencebasedmedicine.org/wrong-about-polio-a-review-of-suzanne-humphries-md-and-roman-bystrianyks-dissolving-illusions-part-1-the-long-version/#:~:text=Fewer"
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dl.dropboxusercontent.com/s/yhtm030usfcmivy/feces.jpeg?dl=0"
                    }
                  />
                  {/*<TwitterTweetEmbed
                    tweetId="1429668870151938050"
                    key="1429668870151938050"
                  />*/}
                  {/**Covid-19: Fully vaccinated people can carry as much delta virus as unvaccinated people, data indicate
bmj.com
Covid-19: Fully vaccinated people can carry as much delta virus as unvaccinated people, data...
Adults who have been fully vaccinated against SARS-CoV-2 can carry the same viral load of the delta variant as those who are unvaccinated, a preliminary analysis of UK data suggests.1 The latest...
🐿socialism-is-pareto -spore virus protein 4 money
@ frothanalysis
·
Aug 22
Replying to 
@ katalin_pota
 and 
@ ProMovement1
We aren’t even sure if virons are merely harmless byproducts and bacteria causes sickness */}
                  <div style={countstyle}>
                    <div style={{ breakInside: "avoid", width: "100%" }}>
                      antibodies likely cleanup the produced virons after
                    </div>
                    cellular-digestion of bacteria
                    {/*<TwitterTweetEmbed
              tweetId="1334932642366681089"
              key="1334932642366681089"
            />*/}
                    being Jewish forbids tattoos, an mRNA-sporing-graft is not
                    far off.
                    <br />
                    <br />
                    I think the belief pertains to the in-body antigen-induced
                    oncogenesis process too
                    <br />
                    <br />
                     you probably think exclusion with hung jury-conviction
                    isn’t beast system just because it’s not hand nor forehead
                    injected. 1/4 doctors with conflict of interest to sell are
                    antivax, 1/2 nurses, left and right. Face the facts, the
                    virus being there during sickness isn’t order and
                    correlation with mortality isn’t even there
                  </div>
                </div>
                <div
                  style={{
                    display:
                      this.state.openTopic === "Precautions" ? "block" : "none",
                    width: "100%",
                    height: "min-content",
                    columnCount: count
                    //position: "absolute"
                  }}
                >
                  <div style={countstyle}>
                    Racketeering and share-split benefits for what? so the ask
                    isn't forced to meet price? reverse debt:cash,
                    timelesspaydayroyalty scoped for industry-type, all for
                    bond-laundering withdrawn, and impossible to earn back,
                    third party beneficiary has claim, or moot
                    <br />
                    <br />
                    “Democratic democrats, honor system,” authoritarian is
                    against honor system signatures?
                    <br />
                    <br />
                    Receptors or anus?{" "}
                    {/**"injects dna intermediate stage snapshot," is
              assumed */}
                    <br />
                    boy, “scientists could only wonder how a virus injects their
                    DNA into a cell, because it happens in an instant,”
                  </div>
                  <div style={countstyle}>
                    <iframe
                      style={{ width: "100%" }}
                      src="https://www.youtube.com/embed/Weqb9KrQ-TU?start=21"
                      title="YouTube video player"
                    ></iframe>
                    Don’t believe any cartoon, they literally only use electron
                    microscope for actual proof; S Cohen show antibodies clear
                    blood clots and …onset illness. But never infected a cell in
                    a controlled study, only J M Sweere did that with bacteria
                    in an open wound
                  </div>
                  <div
                    style={{
                      ...countstyle,
                      marginBottom: "4px",
                      backgroundColor: "rgb(220,100,80)",
                      color: "rgb(230,230,230)",
                      borderBottom: "1px solid grey"
                    }}
                  >
                    FDA is ignoring prevalence of lymphomatic-node discharging
                    of the mRNA-sporing-graphs,
                    <div
                      style={{
                        fontWeight: "bolder",
                        backgroundColor: "white",
                        margin: "4px",
                        color: "grey"
                      }}
                    >
                      In 17 of the vaccinated patients with HLN (5.1%), the
                      “hot” nodes reflected&nbsp;
                      <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2#:~:text=In%20332">
                        malignant nodal disease
                      </a>
                      &nbsp;(MHL). An estimated 1,297,027 people in the US are
                      either living with, or are in remission from, &nbsp;
                      <a href="https://www.lls.org/facts-and-statistics/facts-and-statistics-overview#:~:text=Prevalence">
                        leukemia, lymphoma or myeloma
                      </a>
                      .
                      <br />
                      idk what&nbsp;
                      <span style={{ textDecoration: "underline" }}>
                        a malignant hot node
                      </span>
                      &nbsp;looks like, lo it is larger by 4.8% than the
                      population estimate of lymphoma and melanoma
                      <br />
                      Virons are byproducts,&nbsp;
                      <a href="https://2052.live">bacteria cause sickness</a>
                    </div>
                  </div>
                  <div
                    style={{
                      ...countstyle,
                      marginBottom: "4px",
                      backgroundColor: "rgb(20,20,230)",
                      color: "rgb(230,230,230)",
                      borderBottom: "1px solid grey"
                    }}
                  >
                    can we please test for all virons before certifying the
                    cause as only one of them
                    <div
                      style={{
                        fontWeight: "bolder",
                        backgroundColor: "white",
                        margin: "4px",
                        color: "grey"
                      }}
                    >
                      26% of Doctors believe vaccines are useless or harmful
                      <br />
                      <br />
                      Never before has nonunanimous consentsus been used to
                      convict or desist. Involuntary-servitude, duress beyond
                      incontrovertable, absent of reasonable doubt, consensus
                      prior to conviction, permitting, or ordering of
                      desistation #BasisRateFallacy, #Epiology, #NullHypothesis
                    </div>
                  </div>
                  <div style={countstyle}>
                    <b style={{ color: "blue" }}>Covid</b>: 5% is suspected,
                    <br />
                    <b style={{ color: "blue" }}>breakthrough/breakout</b>
                    &nbsp;is expectd,
                    <br />
                    <br />
                    covid cases are all testing, not even on the basis of
                    symptoms. prevalence is not necessarily a cause, there are
                    thousands of virons and they are LIKELY-HARMLESS BYPRODUCTS
                    of BACTERIAL-DIGESTION OF THE CELL
                  </div>
                  <div
                    style={{
                      ...countstyle,
                      margin: "10px",
                      marginBottom: "4px",
                      backgroundColor: "rgb(20,190,20)",
                      color: "rgb(230,230,230)",
                      breakInside: "avoid",
                      borderBottom: "1px solid grey"
                    }}
                  >
                    though virons are&nbsp;
                    <b style={{ color: "blue" }}>of load by the subject</b>, not
                    transmitted
                    <br />
                    as would mutations, which might matter if it weren't merely
                    a byproduct, artifact, of another cause - like bacteria
                    <br />
                    <a
                      style={{ color: "black" }}
                      href="https://www.cell.com/molecular-therapy-family/molecular-therapy/fulltext/S1525-0016(00)90212-0"
                    >
                      https://www.cell.com/molecular-therapy-family/molecular-therapy/fulltext/S1525-0016(00)90212-0
                    </a>
                    <br />
                    Bacteria causes sickness, vaccines merely clean up cellular
                    secretion of contact with bacteria - and is harmless.
                    However, vaccines without an antigen may cause lymphoma and
                    the like
                    <a
                      style={{ color: "black" }}
                      href="https://link.springer.com/article/10.1007/s00259-021-05314-2#:~:text=The%20high%20incidence"
                    >
                      https://link.springer.com/article/10.1007/s00259-021-05314-2#:~:text=The%20high%20incidence
                    </a>
                    <div
                      style={{
                        fontWeight: "bolder",
                        backgroundColor: "white",
                        margin: "4px",
                        color: "grey"
                      }}
                    >
                      <div style={{ color: "grey", fontWeight: "bolder" }}>
                        "In some of the patients, this unfortunate nonconclusive
                        report was caused by the fact that vaccines were
                        administrated in the same side as the tumor expected
                        nodal drainage. Therefore, patients with breast cancer,
                        axillary lymphoma, and malignancy of the upper limb
                        (melanoma, for instance) should be advised to be
                        vaccinated in the arm contralateral to the tumor
                        expected nodal drainage."
                      </div>
                    </div>
                    <a href="https://2052.live">2052.live</a>
                    <iframe
                      style={countstyle}
                      title="2% of the population owns 4400% of the assets"
                      src="https://2052.live"
                    />
                    <iframe
                      style={countstyle}
                      title="plandemic"
                      src="https://www.youtube-nocookie.com/embed/UQAekSF34TY"
                    ></iframe>
                    I later discovered that although antibody production is
                    correlated with symptoms in hospitalizations, to which
                    hospitalizations are without the virus vaccinated with, the
                    hospitalizations haven't changed year to year (bottom of
                    froth.app/stats using cdc fluview) so the cause is something
                    else, I suggest all viral-illness is borne by
                    bacterial-infection and viral excrement, especially after
                    reviewing gold standard diagnosis of lateral/both-lungs
                    discrepancy of bacterial/viral by Pfizer
                    pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference,
                    and death/hospitalization of bacterial-infection by Harvard
                    Wyss
                    https://wyss.harvard.edu/news/the-secret-life-of-bacteria-revealed/
                  </div>
                  <div style={countstyle}>
                    <div style={{ padding: "10px 4px" }}>
                      <a href="https://humanharvest.info">humanharvest.info</a>
                      &nbsp;placenta vintage 1985 J&J antigen
                    </div>
                    <div style={{ padding: "10px 4px" }}>
                      <a href="https://moldmask.co">moldmask.co</a>
                      &nbsp;spittle-humidity gestates virons, if they aren't
                      merely a byproduct, or bacteria, either of which is
                      subject to atmospheric convection anyway, so there is no
                      gain unless you may sneeze into an open body during
                      cardiac-surgery
                    </div>
                    <div style={{ padding: "10px 4px" }}>
                      <a href="https://nationalsecuritycasino.com">
                        nationalsecuritycasino.com
                      </a>
                      &nbsp;away from Article 4 scope is nonunanimous consensus
                      of 50% by nurses and of COI doctors half that proportion
                      is vaccine mandates; never had such contention been met
                      with virulance of opinions, for obvious government
                      monopsony/gentrification and #M2Laundering
                      #CreditCounterfeitLaundering When you launder, it matters
                      not what your promotion. only consumers with currency can
                      discriminate beyond price
                    </div>
                    <div style={{ padding: "10px 4px" }}>
                      <a href="https://2052.live">2052.live</a>
                    </div>
                    &bull;
                    <div style={{ padding: "10px 4px" }}>
                      <a href="https://micro-theory.com">micro-theory.com</a>
                    </div>
                  </div>

                  <div style={countstyle}>
                    54:45 say vaccine passports of 21k nj profiles on facebook
                    (non-"scientific"*)*?
                    <br />
                    <TwitterTweetEmbed
                      key="1428312309685002241"
                      tweetId="1428312309685002241"
                    />
                    {/**there are more deaths than expected with greg kelly reel @ frothanalysis */}
                    I’m for government mandates under Article 4 but not before
                    it is proven beyond a reasonable doubt. Right now, 1/2
                    nurses & 1/4 doctors with something to sell are antivaxx.
                    Counterpoint is that Rutgers showed 1/3 doctors know smoking
                    causes birth defects. Duress of a minimal viable product
                    wouldn’t include jumping out of airplanes without parachute,
                    therefore any deal to do that would be involuntary servitude
                    before there is a smoking gun without a hung jury (11/12 can
                    permit duress to be laid and discriminate)
                    <br />
                    <br />
                    if you want to go by logic and case studies, J Sweere made
                    virus with bacteria and S Cohen made illness with virus, so
                    the mechanism is illness upon antibody creation, but
                    bacteria is the cause of illness. Virus only ever leave,
                    never infect cells, or spread by mitosis
                    <br />
                    <br />
                    there isn’t a database with hospitalizations and vaccines
                    together, for HIPPA. Just word of mouth you hear this,
                    right? If you look at CDC flu view you can see
                    hospitalizations for influenza-like-illness and it’s the
                    same growth-rate year to year….
                  </div>
                </div>
                {this.state.openTopic === "Stats" && this.state.width && (
                  <CovidStuff
                    settleDropboxFree={this.state.settleDropboxFree}
                    count={count}
                    ios={ios}
                    openTopic={this.state.openTopic}
                    lastWidth={this.state.width}
                  />
                )}
                <div
                  style={{
                    display:
                      this.state.openTopic === "Debt" ? "inline-block" : "none",
                    position: "relative",
                    width: "calc(100% - 4px)",
                    columnCount: count
                  }}
                >
                  <div style={countstyle}>
                    I'm sandman in his place
                    <br />
                    Collective bargaining fails when schedule of hours or
                    payables...
                    <a href="https://teapharmacy.party">Except sports</a>.
                    Imagine nfl new draft non compete every season to&nbsp;
                    <a href="https://saverparty.xyz">bona fide</a>
                    &nbsp;collective bargain of concurrentabel goods... like
                    equity-investment bank private communes.
                    <br />
                    <br />
                    Family discount discrimination; my chorers match elderson
                    with care can’t wait! Cursing is compelled in issue
                    printouts, per voting age 5 years for price/hours to double,
                    it should be decreasing as a measure of tech advancement.
                    Landlords, lenders and non-concurrent collective bargain
                    brokers, I have tables for you to bus; cap 5 units not
                    price, allow ask to meet bid-price
                    <br />
                    <br />
                    Seniors on fixed or limited income had their entire lives to
                    save, just amortize reimbursement of down payments upon repo
                    by reverse debt:cash and ween sewage police lawsuits free
                    rider immutable into truncated sales tax of geohash/month
                    that can be triggered 3% under $2k like when repeat-regular
                    items for pay tech to report to congress
                    <br />
                    <br />
                    Trade secrets are counterproductive, nothing new under the
                    sun means utility patents are bonk, impossibilities
                    purposeful lest moot
                  </div>
                  <div style={countstyle}>
                    borrowers loiter & jigger profits from consumers;
                    finite-producers will not save consumers
                    <br />
                    <br />
                    There isn't a socialist that would describe share-split
                    free, expecially during concurrent deficit, but Jen Psaki
                    and Rudy Giuliani declare it so. I don't care what you call
                    yourself, public or private; if you're a dead-weight between
                    supply==demand by communism of non-concurrentable goods
                    (hours) or grandiose scopes, you're invoking economic
                    retardation by price inelasticity from ask meeting
                    bid-priceAsk a socialis what happens after torts to reverse
                    debt:cash they will describe capitalism without delusional
                    counterfeit in contract, with timelesspaydayroyalty scoped
                    for industry-type for p2p only, keep investment banks in
                    concurrentable collective bargaining and equity. Regular
                    business designated by goods exchanged & similar price
                    invokes truncated sales tax for free rider immutable sewage
                    poilice lawsuits, Republicans and Democrats want to own the
                    pipes instead of regulate the led out, libertarians want
                    fractional reserve in contract, greens want growth of hours
                    and bailout. Don't Obama my Bernie! #GlassSteagall
                    <br />
                    <br />
                    prices don't necessarily go up when demand/supply if labor
                    is demand, as propensity-hours/money produces elasticity but
                    finished goods produce scarcity, to which productivity is
                    change in (1/price)/hours, the exact reciprocal of what
                    current economist will try to cajole you into supporting
                    residual share split of your public park deeds in
                    counterfeit-in-contract teach you
                  </div>
                  <div style={countstyle}>
                    Eldersons match care can't wait! or bust, preferably
                    (reverse debt:cash to amortize reimburse downpayments upon
                    repo on third party beneficiary grounds) Care worker
                    gentrification by gov isn't socialist, saver, nor
                    microeconiomics, like shoveling water over a porous fence.
                    <br />
                    <br />
                    $170t value, $88t bond value, $2-6t cash, how the heck when
                    $4t/yr federal spending is normal?
                    <br />
                    <br />
                    greg kelly considering paying monika lewinski money, what a
                    frikken rhino
                    <br />
                    <br />
                    when you launder it matters not what you spend on
                    <br />
                    <br />
                    "shortage of truckers before 3/2020, increase hours limit,"
                    says Mike K. how about cap rent to 5 units and reverse
                    debt:cash, collective bargaining is inelastic-monopsony &
                    nothing gained lest concurrentable goods (not hours).
                    <br />
                    <br />
                    Regulate competing with consumers, don't discriminate;
                    eldest son match care can't wait! ---- off
                  </div>
                  <div style={countstyle}>
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F108986904353225%2Fvideos%2F4404002109665977%2F&show_text=true&width=220&t=0"
                      style={{
                        width: "100%",
                        height: "450px",
                        border: 0,
                        position: "relative"
                      }}
                      title="https://fb.watch/8vc_WNxnzq/"
                    ></iframe>
                    1970 working age unemployment was&nbsp;
                    <a href="https://fred.stlouisfed.org/graph/?g=HHju">
                      6m/20m
                    </a>
                    , today is 6m/40m per decade cohort
                    <br />
                    <br />
                    Can make profit off net loss with bond laundering
                    inelasticity on free rider mutable tax or immutable bonds
                    again
                    <br />
                    <br />
                    How is there only $2-6t cash but federal government spending
                    alone is $4t/yr? Federal reserve&nbsp;
                    <a href="https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm">
                      assets are price-fixed at $8t
                    </a>
                    . We are to fix prohibiting trade, not price. the basis of
                    price stability is the prevention of accrual of assumed
                    third party beneficiary and non-concurrentable collective
                    bargaining fraud
                    <br />
                    It is faster to steal but then the loss in comparative
                    advantage productivity of hours under price-deflation (tech
                    advancement) is astronomical
                    <br />
                    Incentives to get back to work as in share-split is not how
                    you set prices. If you need to regulate, don’t discriminate.
                    Target margin networks, finite producers & hung-jury-permits
                  </div>
                  <div style={countstyle}>
                    https://www.goldmansachs.com/insights/archive/millennials/
                    <img
                      alt=""
                      style={{
                        width: "100%",
                        height: "auto"
                      }}
                      src={
                        this.state.settleDropboxFree
                          ? ""
                          : "https://www.dl.dropboxusercontent.com/s/9v12zzy9m60b5tu/Millenials%20goldman%20sachs.png?dl=0"
                      }
                    />
                    There are 56m 65+ usually 40m, now&nbsp;
                    <a href="https://fred.stlouisfed.org/graph/?g=HKnK">
                      becoming 75+ at 1.2m/yr
                    </a>
                    <br />
                    Excess deaths of 8b is expected from life expectancy ago to
                    be 50m for the world, or 330m “” 1.2m for the US
                    <br />
                    Prices/hours doubles every 5 years
                    <br />
                    6m/20m unemployed was sustained, our tech advancement is
                    going the wrong way
                    <br />
                    Hours under price deflation is productivity not redundant
                    gdp. Even Paul Krugman himself says insurance is a net loss,
                    economic retardation nation!
                    <br />
                    <br />
                    Inflation in the long-term?&nbsp;
                    <a href="https://data.worldbank.org/indicator/CM.MKT.LCAP.CD?end=2020&most_recent_value_desc=true&start=1975">
                      $170t value
                    </a>
                    ,{" "}
                    <a href="https://fred.stlouisfed.org/graph/?g=HKgN">
                      $88t bond-value
                    </a>
                    ,&nbsp;
                    <a href="https://fred.stlouisfed.org/graph/?g=HzBb">
                      $2-6t cash
                    </a>
                    <br />
                    <a href="https://arxiv.org/pdf/1208.0642.pdf#page=12">
                      https://arxiv.org/pdf/1208.0642.pdf#page=12
                    </a>
                  </div>
                  <div style={countstyle}>
                    <a href="https://saverparty.xyz">Article 4 only tax</a>
                    ,&nbsp;
                    <a href="https://vaults.biz">flat flat tax</a>,&nbsp;
                    <a href="https://2052.live">truncated sales tax</a>
                    <br />
                    Everyone has to say it to make it stop,
                    "timlesspaydayroyalty scoped for industry-type for p2p only,
                    reverse debt:cash. concurrentable collective pargaining, cap
                    rent at 5 units. for implausible use rentier intent to
                    compete with consumers, or impossibilities are purposeful or
                    moot."
                    <br />
                    <br />
                    10x more hours to own house 5%/yr outright, from debt:cash
                    7.%/yr not cash inflation effect on rent&goods alone 2%. Cap
                    rent at 5 or under 30 days for implausible use. reverse
                    debt:cash to reappropriate appropriately by
                    cash:debt*purchases. Bernie Sanders hypocrite with
                    #GlassSteagall designate savings as not bonds, flopped, dont
                    obama my bernie. saverparty.xyz. <br />
                    <br />
                    Former economic director of the United States: "Can we slow
                    down m2" wants growth of accrual but not fractional reserve,
                    and cannot figure that it would take 44 years to spend
                    current income on debt and be free of transitory obligations
                    in non-rollover surrenderance as well
                    <br />
                    <br />
                    truncate sales tax free rider mutables spoofable-geohash,
                    tranquility for public-park-shares and depositary, sewage
                    police roads, target margin networks and finite producers.
                    Democrats and Republicans are fawning care for led in pipes
                    instead of just suing for negligence, but bipartisan
                    monopsony and labor equity gentrification
                    <br />
                    <br />
                    rank choice voting prohibits a third party to win if 62%
                    voters (voting-people) in nj vote for the big two parties
                  </div>
                  <div style={countstyle}>
                    That GDP is more than 1/11 of GDP is the biggest lie of the
                    last 5 centuries. Not only is our current theoretical
                    calculus redundant, like e=mc^2 is laughable, or
                    poorness=poverty/equality is worse than poverty, in C + I +
                    G, lest being redundant, P is integrally in the denominator
                    of the GDP scale, and without debt(M2-index-fund-value)
                    minus checking it is $6k/person, $66k if you include bond
                    trading
                    <br />
                    <br />
                    for comparative advantage labor should have means and supply
                    equate demand, where the competition and negotiation, or
                    bargaining is done on the axis of price or voluntary not
                    brought forward or non-rollover demand since 3/2020 only 65+
                    are -2m employed, yet those replaced are getting
                    unemployment on the basis that the job cannot be done with
                    covid
                    <br />
                    <br />
                    Taxes of property for bonds
                    <br />
                    <br />
                    Capitalism is not free markets when with accrual &
                    non-rollover
                    <br />
                    <br />
                    <a href="https://wavv.art/forumZY6ggYTyahoO6qj6J9N8">
                      Utility
                    </a>
                    &nbsp;cannot be owned, there is nothing new under the sun
                    (except copyright) Virus only comes from bacteria father, J
                    M Sweere. Excess antibodies for plaque causes 2%+
                    baseline-population-median cellular immunity dysregulation
                    or blood disorders. S Cohen invoke antibody and illness.
                    1.6b/8b latent virus expected, we only tested 500m. An
                    economic joke, delusions, bizarre, nightmare,
                    hung-jury-permit of minimal viable product duress is illegal
                    appropriation of guilt or malfeasance in national security
                    or regulated-safety (slavery of laurels by scientific
                    monopoly instead of without doubt and scientific-consensus.
                    Covid is the first virus asymptomatically tested for, 2k/yr
                    are discovered by CDC
                    <br />
                    <br />
                    invoices are theft, dollars are public-park-deeds,
                    third-party-beneficiary is law
                  </div>
                  <div style={countstyle}>
                    Borrowers are actually loitering, then the lender keeps the
                    down payments & collateral? I don't get it!
                    <br />
                    <br />
                    use your cash advances on&nbsp;
                    <a href="https://www.census.gov/library/stories/2018/07/educational-attainment.html#:~:text=This,%20in%20part,%20reflects%20the%20age">
                      $TVIX & $TBT
                    </a>
                    <br />
                    <br />
                    Affordable life insurance money-ponzi without rollover,
                    coverage is not being front-ran brought forward without
                    rollover
                    <br />
                    <br />
                    The only way to stop the application of Article 4 (nor
                    private business due to the infinite-producer=assumption of
                    choice self-regulating unreasonable-duress) with vaccines is
                    to prove these nerds wrong with science, although any
                    product duress needs to have consensus to be called part of
                    a wholly-voluntary minimal viable product (mvp: what is, not
                    involuntary-servitude by unnecessary-duress). That’s why,
                    for instance apple now asks you to track, because it isn't
                    part of the MVP, GDPR, and my pressure on them to only deal
                    in minimal-viable-products and leave what is optional or not
                    settled with a hung jury, optional. You cannot leave finite
                    producers to self-regulate, nor weigh for-profit nor
                    governmental operators in the industry over activists,
                    customers and concerned bystranders prior to class
                    precedence malfeasance noticed by complaint. They will want
                    to delay, tranche by ARBitrarily place-limitations instead
                    of a full-reversal, or compete rather than manufacture
                    consent. For, by science monopsony (hung-jury-permit,
                    <a href="https://www.rutgers.edu/news/rutgers-led-national-survey-uncovers-doctors-misconceptions-about-nicotine-risks">
                      counterpoint
                    </a>
                    ), accrual (third-party-beneficiary), nor does rollover
                    (non-improvement competing with consumers), do
                    non-third-parties pay the cost like when pooling without
                    rollover nor isolation of contract, even with
                    investment-banking which could be useless but legal when
                    investing by debt is replaced by timelesspaydayroyalty by
                    industry-type not general-income). The borrowers loiter but
                    the lenders profit on rental-income that is implausible to
                    use on their own, instead of improving it and settling.
                    Precedence isn't legal, some laws countervail like third
                    party beneficiary and precedence of not carfacing Jamie
                    Dimon for coutnerfeit in contract and conspiring with
                    pharmaceutial-licensed-conflict-of-interests/instead of
                    activists for instance
                  </div>
                  <div style={countstyle}>
                    <img
                      style={countstyle}
                      src={
                        this.state.settleDropboxFree
                          ? ""
                          : "https://www.dl.dropboxusercontent.com/s/3x1tzkgciseaa05/duress%20average%20weekly%20earnings.jpeg?dl=0"
                      }
                      alt="logging, mining and finance greatest hourly earnings"
                    />
                  </div>
                  <div style={countstyle}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%"
                      }}
                    >
                      It’s slavery, it is impossible. It is price-fixing, and
                      prohibits trade between the actual producer and consumer,
                      and adds nothing in output or quality, as it just moves
                      both microeconomic curves up. Supply is demand
                      <br />
                      <br />
                      If bills cannot be paid, they don’t, “have to be paid.”
                      Impossible doctrine, forced majeure, impossibilities are
                      always unforeseen, third-party-standing,
                      comparative-innocence, lender inculpability-conspiracy for
                      down-payment lost which is not an option to buy that
                      doesn’t expire
                      <br />
                      <br />
                      “How do you exactly forensically audit the magnets?” Asks
                      @GaSecofState #ConflictOfInterests #Domain #Malfeasance
                      nationalsecuritycasino.com http://thumbprint.us
                      #FaultyElection #TranchedEarlyVoting #PandemicOfTheVaxxed
                      #HonorSystemSignatures #ExtrapolatingBeforeShuffling
                      #ExcessDeathsAreExpected
                      <br />
                      <br />
                      Even though there is lessening population growth
                      1800-today, GDP/person was stagnant before the federal
                      reserve and the #GreenNewDeal using public credit for
                      private debt @People4Bernie . More people doesn’t beget
                      higher prices but competition #MeansOfProduction #Epiology
                      <br />
                      <br />
                      GDP is only to be a measure between countries, not
                      productivity. Relatively more whites loiter on credit
                      counterfeit laundered borne homes. Wealth is relative if
                      it is not utility. #Marxism
                      <br />
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%"
                    }}
                  >
                    Backdoor for sec but&nbsp;
                    <a href="https://nationalsecuritycasino.com">
                      @logindotgov
                    </a>
                    &nbsp;upcoming state-issued, photoID -like api for brokers
                    to anonymously account for positions, for brokers to be a
                    platform like insurance to be&nbsp;
                    <a href="https://2052.live">
                      rollover-collective-bargaining
                    </a>
                    &nbsp;like classified-ads&nbsp;
                    <a href="https://saverparty.xyz">#FairBrokerAct</a>
                    <br />
                    <br />
                    #ImplausibleLandlordUse ya get 5 over 30 days!
                    #FreePeopleLawsuits #FundSewagePolice 3% under $2k
                    spoofable-geohash. THAT’S IT! NO ISSUANCE NOR ACCRUAL FOR
                    BONDS NOR @NJTRANSIT republicans want to pay it off instead
                    <br />
                    <br />
                    What government did Marx ever run ;)
                    <br />
                    <br />
                    Government DOES use its “power for other purposes,” than
                    even free-rider-mutable schools and tollable roads
                    @GovMikeHuckabee ... #FundSewagePolice #DefundThePolice
                    #FreePeopleLawsuits #ReverseM2DontCancel 3under2.us #NoM4A
                    #RolloverInsurance #BottomIsBest #ReverseM2
                    <br />
                    <br />
                    #TaxPayerVacation is when tax-payers don’t pay 1/10
                    operating-outlays-expenses and bond-holders can
                    withdrawal-outstanding at 44/1 debt:cash
                    <br />
                    <br />
                    “Don’t work, free money.” It comes not from another but
                    ourselves. You KNOW what a stock-split is @JCats2013 when
                    you say it comes from someone else, you want to pay off the
                    accrual on residualsplit.us @gop @USProgressives .
                    Dollar-splits come from @SaverParty savers not u
                    <br />
                    <br />
                    Socialists/microeconomists do not want #HumanInfrastructure
                    nor @SBAgov loans for that is #M2Laundering, 10%
                    debt-service for 44x potential-book. @USProgressives
                    @People4Bernie . The Communist neo Dems and Republicans do
                    @LindseyGrahamSC #NoM4A
                    <br />
                    <br />
                    “Regressives,” are not those who want to “tear down
                    America,” but @USProgressives want to make people
                    poor=poverty/equality by bonds #PostalBanking
                    #ThirdPartyStanding
                    <br />
                    <br />
                    Reversing M2 is certainly more socialist than conservative,
                    but socialism is more conservative than republicans
                  </div>
                  {/*<TwitterTweetEmbed
              key="1334950345764646913"
              tweetId="1334950345764646913"
              />*/}
                  <TwitterTweetEmbed
                    key="1429182687588278276"
                    tweetId="1429182687588278276"
                  />
                  <TwitterTweetEmbed
                    key="1403099718511644673"
                    tweetId="1403099718511644673"
                  />
                  <div style={countstyle}>
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/nUNYL8V0GK4"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                  <div style={countstyle}>
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/iT84Pu_u2xs"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                  <div style={countstyle}>
                    flat flat tax, truncated sales tax
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/va9GBd5kgDA"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                  <div style={countstyle}>
                    <a href="https://vaults.biz">
                      vaults.biz - employment by cohort
                    </a>
                    <br />
                    25-54/3 6m/40m today unemployed compared to boomers at that
                    age 6m/20m
                  </div>
                  <div style={countstyle}>
                    {/*<iframe
              style={{ width: "100%", height: "400px" }}
              title="2% of the population owns 4400% of the assets"
              src="https://vaults.biz"
              />*/}
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/NBTw_p-WChI"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                  <div style={countstyle}>
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/xuOq_JFs5m4"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                  <div style={countstyle}>
                    since 3/2020 -1.4m/56m 65+, -1.2m/120m 25-54, -300k/36m
                    15-24 continuing claims (more than eligible)
                  </div>
                  <div style={countstyle}>
                    <iframe
                      style={videostyle}
                      src="https://www.youtube.com/embed/TjvqmfDvOfQ"
                      title="YouTube video player"
                    ></iframe>
                  </div>
                  <div style={countstyle}>
                    no social program is socialist where supply == demand,
                    target margin networks free rider immutable truncated sales
                    tax sewage police lawsuits (all congress needs to see is
                    geohash/month & regulate networks, finite producers
                    and&nbsp;
                    <a href="https://30under5.us">
                      implausible rentier/landlord use
                    </a>
                    )... timelesspaydayroyalty scoped by industry-type to wait
                    for consumers without brought forward demand for growth of
                    people, hours or prices (economic retardation) instead of
                    (1/price)/hours
                  </div>
                  <div styyle={countstyle}>
                    C+I+G is redundant, NE is bad, free rider mutable tax is
                    inelasticity, gentrification, gerontocracy. prices/hours
                    doubles every 5 years, debt every 10 years, homes every 20,
                    goods every 40
                    <br />
                    <br />
                    third party beneficiary impossible is intent, reimburse down
                    payments or go to jail, reverse debt:cash,&nbsp;
                    <a href="https://bankingisnot.biz">
                      carface jamie dimon like floyd
                    </a>
                    <br />
                    <br />
                    no rollover to amass a bid for hours or grandiose delusions
                    of grandeur but items to margain, else fantasy doctors and
                    useless price inelasticity or due to quantity cap of rent by
                    scalping implausible use and abject intent to compete with
                    consumers
                    <br />
                    <br />
                    It will take 44 years to work out of what boomers made us,
                    imagining pensions & debt-principal now that CDC has to
                    write down and mislead on the basis of excess being without
                    epiology or per capita effects.
                    <br />
                    <br />
                    Pay for government internet with $48b Alex describes eminent
                    domain of icann as public goods, but&nbsp;
                    <a href="https://lightte.ch">
                      it cannot be used by bonds assholes
                    </a>
                    , non-profit NGO would suffice as long as without rents pro
                    growth, discrimination, income tax chores, borrowers loiter
                    on bartender-money/public-park-deeds. not consent
                  </div>
                  <div style={countstyle}>
                    If it doesn’t rollover it is competing with consumers by
                    abetting invoices which usurps third party standing by
                    duress instead of settling
                    <br />
                    Huh?
                    <br />
                    collective bargaining is an abject intent to harm if the
                    goods/services don’t rollover, essentially invoices are
                    instigated by pooling non-rollover which are “third party
                    beneficiary*” standing usurped
                  </div>
                </div>
              </div>
            )}
            {/*<div
            style={{
              top: "0px",
              zIndex: "1",
              display: "flex",
              position: "fixed",
              width: "100%",
              height: this.state.pathname !== "/" ? "100%" : "0%",
              overflowY: "auto",
              overflowX: "hidden"
            }}
          >
            <div
              style={{
                display: "flex",
                position: "fixed",
                width: "100%",
                height: this.state.pathname !== "/" ? "100%" : "0%",
                backgroundColor: "rgba(20,20,20,.8)",
                transition: ".3s ease-in"
              }}
            />
            <div
              style={{
                display: "flex",
                position: "absolute",
                width: "100%",
                backgroundColor: "rgba(250,250,250,.8)"
              }}
            >*/}
            <Route
              render={({ location, history }) => {
                if (location.pathname !== this.state.pathname) {
                  clearTimeout(this.pauseRender);
                  this.pauseRender = setTimeout(() => {
                    this.setState(
                      { pathname: location.pathname, history },
                      () =>
                        location.pathname === "/stats" &&
                        this.setState({ openTopic: "Stats" })
                    );
                  }, 200);
                }
                return (
                  <TransitionGroup key="1">
                    <CSSTransition
                      key="1"
                      //key={location.key}
                      timeout={300}
                      classNames={"fade"}
                    >
                      <Switch key={location.key} location={location}>
                        {/*<Route
                            exact
                            path="/positions"
                            render={(props) => (
                              <Positioning
                                settleDropboxFree={this.state.settleDropboxFree}
                                pathname={this.state.pathname}
                                lastWidth={this.state.lastWidth}
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/sectors"
                            render={(props) => (
                              <Sectors
                                pathname={
                                  width === this.state.lastWidth &&
                                  this.state.pathname
                                }
                                width={width}
                                lastWidth={this.state.lastWidth}
                                clear={() =>
                                  this.setState({
                                    lastWidth: this.props.width
                                  })
                                }
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/consumption"
                            render={(props) => (
                              <Consumption
                                pathname={
                                  width === this.state.lastWidth &&
                                  this.state.pathname
                                }
                                width={width}
                                lastWidth={this.state.lastWidth}
                                clear={() =>
                                  this.setState({
                                    lastWidth: this.props.width
                                  })
                                }
                              />
                            )}
                          />
                          <Route
                            exact
                            path="/debt"
                            render={(props) => (
                              <Interest
                                settleDropboxFree={this.state.settleDropboxFree}
                                pathname={
                                  width === this.state.lastWidth &&
                                  this.state.pathname
                                }
                                width={width}
                                lastWidth={this.state.lastWidth}
                                clear={() =>
                                  this.setState({
                                    lastWidth: this.props.width
                                  })
                                }
                              />
                            )}
                          />
                              <Route path="/" render={(props) => <div />} />*/}
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                );
              }}
            />
            {/*</div>
              </div>*/}
            <div
              onClick={() => this.props.history.push("/")}
              style={{
                backgroundColor: "rgba(250,250,250,0.8)",
                display: this.state.page === "home" ? "none" : "flex",
                position: "fixed",
                right: "10px",
                bottom: "10px",
                height: "56px",
                width: "56px",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                zIndex: "9"
              }}
            >
              &times;
            </div>
            {/*<TwitterTweetEmbed
          key={"1305400264535486466"}
          tweetId={"1305400264535486466"}
        />*/}
          </div>
        </div>
      );
    } else return <div>sizing you up</div>;
  }
}
export default withRouter(App);

//`<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">It’s slavery, it is impossible. It is price-fixing, and prohibits trade between the actual producer and consumer, and adds nothing in output or quality, as it just moves both microeconomic curves up</p>&mdash; Saver Party (@SaverParty) <a href="https://twitter.com/SaverParty/status/1334950345764646913?ref_src=twsrc%5Etfw">December 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;
//`<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">spike protein in not conclusively harmless <a href="https://twitter.com/Facebook?ref_src=twsrc%5Etfw">@facebook</a> <a href="https://twitter.com/cdc?ref_src=twsrc%5Etfw">@cdc</a> <a href="https://twitter.com/NIH?ref_src=twsrc%5Etfw">@nih</a> it may cause oncogenesis (I say this after reading this <a href="https://t.co/HEQTTBVRTL">https://t.co/HEQTTBVRTL</a><br>&quot;... B cells [made by mRNA] [could] acquire an aggressive phenotype and thus have a major role in oncogenesis.&quot;<br><br> <a href="https://t.co/ZdVUR4c1wW">https://t.co/ZdVUR4c1wW</a></p>&mdash; Saver Party (@SaverParty) <a href="https://twitter.com/SaverParty/status/1334608763387580425?ref_src=twsrc%5Etfw">December 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;
//`<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">I want sublingual mRNA graft lol 🤢</p>&mdash; Saver Party (@SaverParty) <a href="https://twitter.com/SaverParty/status/1334932642366681089?ref_src=twsrc%5Etfw">December 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;

/*const PrivateRoute = ({ render: Component, ...rest }, props) => {
      return (
        <Route
          {...rest}
          render={(props) =>
            this.props.auth !== undefined ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { bumpedFrom: props.location.pathname }
                }}
              />
            )
          }
        />
      );
    };*/
