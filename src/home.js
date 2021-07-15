import React from "react";
import Positioning from "./positioning";
import Sectors from "./sectors";
import Consumption from "./consumption";
import Interest from "./interest";
import CovidStuff from "./CovidStuff";
import "./home.css";
import Masks from "./home/sections/Masks";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import Employment from "./Employment";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Home extends React.Component {
  constructor(props) {
    super(props);
    let width = window.innerWidth; // * 0.01;
    let height = window.innerHeight; // * 0.01;
    this.state = {
      width,
      height,
      openTopic: "Vaccine-Grafts",
      isTop: true
    };
    //this.chartSize = React.createRef();
  }
  componentDidMount = () => {
    //`<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">It’s slavery, it is impossible. It is price-fixing, and prohibits trade between the actual producer and consumer, and adds nothing in output or quality, as it just moves both microeconomic curves up</p>&mdash; Saver Party (@SaverParty) <a href="https://twitter.com/SaverParty/status/1334950345764646913?ref_src=twsrc%5Etfw">December 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;
    //`<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">spike protein in not conclusively harmless <a href="https://twitter.com/Facebook?ref_src=twsrc%5Etfw">@facebook</a> <a href="https://twitter.com/cdc?ref_src=twsrc%5Etfw">@cdc</a> <a href="https://twitter.com/NIH?ref_src=twsrc%5Etfw">@nih</a> it may cause oncogenesis (I say this after reading this <a href="https://t.co/HEQTTBVRTL">https://t.co/HEQTTBVRTL</a><br>&quot;... B cells [made by mRNA] [could] acquire an aggressive phenotype and thus have a major role in oncogenesis.&quot;<br><br> <a href="https://t.co/ZdVUR4c1wW">https://t.co/ZdVUR4c1wW</a></p>&mdash; Saver Party (@SaverParty) <a href="https://twitter.com/SaverParty/status/1334608763387580425?ref_src=twsrc%5Etfw">December 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;
    //`<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">I want sublingual mRNA graft lol 🤢</p>&mdash; Saver Party (@SaverParty) <a href="https://twitter.com/SaverParty/status/1334932642366681089?ref_src=twsrc%5Etfw">December 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;
  };
  componentWillUnmount() {
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
  }
  refresh = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      let width = window.innerWidth; // * 0.01;
      let height = window.innerHeight; // * 0.01;
      document.documentElement.style.setProperty("--vw", `${width}px`);
      document.documentElement.style.setProperty("--vh", `${height}px`);
      this.setState(
        {
          //chartSize: this.chartSize.current.offsetHeight,
          width,
          height
        },
        () => {
          clearTimeout(this.throt);
          this.throt = setTimeout(() => {
            this.setState({
              lastWidth: width
            });
          }, 3000);
        }
      );
    }, 200);
  };
  componentDidMount = () => {
    this.refresh();
    window.addEventListener("resize", this.refresh);
  };
  render() {
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
    const { width } = this.state;
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          position: "fixed",
          width: "100%",
          height: "100%",
          flexDirection: "column"
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
        >
          <Link to="/positions">Positioning</Link>
          <Link to="/sectors">Sectors</Link>
          <Link to="/consumption">Consumption</Link>
          <Link to="/debt">Interest / Debt</Link>
        </div>
        <div
          onScroll={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!this.state.isTop && e.currentTarget.scrollTop <= 10) {
              this.setState({ isTop: true });
            } else if (this.state.isTop && e.currentTarget.scrollTop > 10) {
              this.setState({ isTop: false });
            }
          }}
          style={{
            display: "flex",
            position: "relative",
            overflowY: "auto",
            overflowX: "hidden",
            width: "100%",
            height: "100%",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "min-content",
              position: "absolute"
            }}
          >
            <Employment width={width - 20} />
            <a
              style={{
                height: "min-content",
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
                height: "min-content",
                display: "flex",
                position: "relative",
                marginTop: "10px",
                left: "20px",
                width: "max-content",
                border: "1px solid"
              }}
              value={this.state.openTopic}
              onChange={(e) => this.setState({ openTopic: e.target.value })}
            >
              {["Masks", "Vaccine-Grafts", "Precautions", "Stats", "Debt"].map(
                (x) => {
                  return <option key={x}>{x}</option>;
                }
              )}
            </select>
            <div
              style={{
                overflow: "auto",
                display: this.state.openTopic === "Masks" ? "flex" : "none",
                position: "relative",
                width: "100%",
                height: "500px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  width: "min-content",
                  height: "100%"
                }}
              >
                <Masks />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "black",
                display: "flex",
                position: "relative",
                height: "min-content",
                width: "100%"
              }}
              id="t1334608763387580425"
            />
            <div
              style={{
                margin: "10px 0px",
                display:
                  this.state.openTopic === "Vaccine-Grafts" ? "flex" : "none",
                position: "relative",
                overflow: "auto",
                width: "100%"
              }}
            >
              @njdotcom · Dec 3, 2020 Facebook to remove COVID-19
              vaccine-related misinformation
              <br />
              @saverparty · Dec 3, 2020 spike protein in not conclusively
              harmless @facebook @cdc @nih it may cause oncogenesis (I say this
              after reading this https://nature.com/articles/cddis2016148 "... B
              cells [made by mRNA] [could] acquire an aggressive phenotype and
              thus have a major role in oncogenesis."
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  width: "min-content",
                  height: "100%"
                }}
              >
                <TwitterTweetEmbed
                  tweetId="1334932642366681089"
                  key="1334932642366681089"
                />

                {/* Surgical masks work! That means it isn’t airborne just when
                    we spit, which only reaches 1ft when we talk. Masks are
                    useless use the inside of your elbow when you sneeze and it
                   will be more than effective - it will keep your face clean*/}
              </div>
            </div>
            {this.state.openTopic === "Stats" && (
              <CovidStuff openTopic={this.state.openTopic} />
            )}
            <div
              style={{
                display: "flex",
                height: this.state.openTopic === "Debt" ? "" : "0px",
                zIndex: this.state.openTopic === "Debt" ? "1" : "-9999",
                width: "100%"
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  position: "relative",
                  height: "100%",
                  width: "300px"
                }}
              >
                {" "}
                duress of lending commodities
                <img
                  src="https://www.dl.dropboxusercontent.com/s/3x1tzkgciseaa05/duress%20average%20weekly%20earnings.jpeg?dl=0"
                  alt="https://www.dl.dropboxusercontent.com/s/3x1tzkgciseaa05/duress%20average%20weekly%20earnings.jpeg?dl=0"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  overflowY: "auto",
                  overflowX: "hidden",
                  height: "100%",
                  width: "300px"
                }}
              >
                It’s slavery, it is impossible. It is price-fixing, and
                prohibits trade between the actual producer and consumer, and
                adds nothing in output or quality, as it just moves both
                microeconomic curves up
                <TwitterTweetEmbed
                  key="1334950345764646913"
                  tweetId="1334950345764646913"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
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
              height: "min-content",
              width: "100%"
            }}
          >
            <Route
              render={({ location }) => {
                if (location.pathname !== this.state.pathname) {
                  clearTimeout(this.pauseRender);
                  this.pauseRender = setTimeout(() => {
                    this.setState({ pathname: location.pathname });
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
                        <Route
                          exact
                          path="/positions"
                          render={(props) => (
                            <Positioning pathname={this.state.pathname} />
                          )}
                        />
                        <Route
                          exact
                          path="/sectors"
                          render={(props) => (
                            <Sectors
                              pathname={this.state.pathname}
                              width={width}
                              lastWidth={this.state.lastWidth}
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
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/debt"
                          render={(props) => (
                            <Interest
                              pathname={
                                width === this.state.lastWidth &&
                                this.state.pathname
                              }
                              width={width}
                            />
                          )}
                        />
                        <Route exact path="/" render={(props) => <div />} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                );
              }}
            />
          </div>
        </div>
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
            zIndex: "9999"
          }}
        >
          &times;
        </div>
        <TwitterTweetEmbed
          key={"1305400264535486466"}
          tweetId={"1305400264535486466"}
        />
      </div>
    );
  }
}
export default withRouter(Home);
