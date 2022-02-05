import React from "react";
import "./styles.css";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";
import Archive from "./Archive";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
//import html2canvas from "html2canvas";
//import Tableu from "./Tableau";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      bar: 0,
      listeners: [],
      scrollPlacementHeight: 0,
      width: window.innerWidth,
      //fraudChoice: 4,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari"),
      openForm: true,
      //settleDropboxFree: true,
      browser: name,
      scrollTop: 0
    };
    let genChildRefs = [];
    for (let i = 420; i < 620; i++) {
      this["scrollImg" + i] = React.createRef();
      genChildRefs.push({ ["scrollImg" + i]: this["scrollImg" + i] });
    }
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.saver = React.createRef();
    this.dns = React.createRef();
    this.canvas = React.createRef();
    this.chapter1 = React.createRef();
    this.chapter2 = React.createRef();
    this.work = React.createRef();
    this.gdp = React.createRef();
    this.party = React.createRef();
    this.marx = React.createRef();
    this.air = React.createRef();
    this.pdt = React.createRef();
    this.immi = React.createRef();
    this.rec = React.createRef();
    this.sci = React.createRef();
    this.con = React.createRef();
    this.trust = React.createRef();
    this.sdr = React.createRef();
    this.bottom = React.createRef();
    this.biz = React.createRef();
    /*this.ch2refs = React.createRef([
      this.chapter2,
      this.sci,
      this.trust,
      this.sdr,
      this.rec,
      this.work,
      this.gdp,
      this.party,
      this.marx,
      this.air,
      this.immi
    ]);*/
    /*const convertArrayToObject = (array, key) => {
      const initialValue = {};
      return array.reduce((obj, item) => {
        return {
          ...obj,
          [item[key]]: item
        };
      }, initialValue);
    };*/
    //console.log(genChildRefs);
    this.ch2refs = {
      current: {
        ref: { current: { ...genChildRefs } },
        chapter2: this.chapter2,
        sci: this.sci,
        trust: this.trust,
        sdr: this.sdr,
        rec: this.rec,
        work: this.work,
        gdp: this.gdp,
        party: this.party,
        marx: this.marx,
        air: this.air,
        immi: this.immi
      }
    };
  }
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
            this.getLabel();
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  getLabel = () => {
    /*const { scrollPlacementHeight } = this.state;
    var topProgress = Math.round(
      (scrollPlacementHeight / (window.innerHeight - 215)) *
        document.documentElement.scrollHeight //window.scrollY
    );*/
    const scrollPlacementHeight = Math.round(
      (window.scrollY / document.documentElement.scrollHeight) *
        (window.innerHeight - 215)
    );
    //console.log(window.scrollY);
    this.setState(
      {
        scrollPlacementHeight,
        provisionalScroll: window.scrollY
      },
      () => this.label(window.scrollY)
    );
  };
  componentDidMount = () => {
    this.refresh(true);
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.refresh);

    /*this.ch2refs = React.createRef([
      this.chapter2,
      this.sci,
      this.trust,
      this.sdr,
      this.rec,
      this.work,
      this.gdp,
      this.party,
      this.marx,
      this.air,
      this.immi
    ]);*/
    /*html2canvas(this.chapter1.current).then((canvas) =>
      canvas.toBlob((blob) =>
        this.setState(
          {
            chapter1: window.URL.createObjectURL(blob)
          },
          () =>
            html2canvas(this.chapter2.current).then((canvas) => {
              console.log(canvas);
              canvas.toBlob((blob) =>
                this.setState({
                  chapter2: window.URL.createObjectURL(blob)
                })
              );
            })
        )
      )
    );*/
    const { scrollPlacementHeight } = this.state;
    var topProgress = Math.round(
      (scrollPlacementHeight / (window.innerHeight - 215)) *
        document.documentElement.scrollHeight //window.scrollY
    );
    this.label(topProgress);
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    const height = this.state.ios
      ? window.screen.availHeight
      : window.innerHeight;

    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          height,
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.labelTimer);
    clearTimeout(this.check);
    clearTimeout(this.dragEnd);
    clearTimeout(this.dragMove);
    clearTimeout(this.dragView);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.refresh);
    this.state.listeners.forEach((x) => {
      window.removeEventListener(...x);
    });
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/") {
          this.setState({ journal: true });
        } else if (this.props.pathname === "/dns") {
          this.setState({ journal: true }, () =>
            window.scroll(0, this.dns.current.offsetTop)
          );
        } else if (this.props.pathname === "/work") {
          window.scroll(0, this.work.current.offsetTop);
        } else if (this.props.pathname === "/gdp") {
          window.scroll(0, this.gdp.current.offsetTop);
        } else if (this.props.pathname === "/party") {
          window.scroll(0, this.party.current.offsetTop);
        } else if (this.props.pathname === "/marx") {
          window.scroll(0, this.marx.current.offsetTop);
        } else if (this.props.pathname === "/air") {
          window.scroll(0, this.air.current.offsetTop);
        } else if (this.props.pathname === "/pdt") {
          this.setState({ journal: true }, () =>
            window.scroll(0, this.pdt.current.offsetTop)
          );
        } else if (this.props.pathname === "/sci") {
          window.scroll(0, this.sci.current.offsetTop); //costing lives' Salcedo
        } else if (this.props.pathname === "/con") {
          this.setState(
            { journal: true },
            () => window.scroll(0, this.con.current.offsetTop) //content,comms
          );
        } else if (this.props.pathname === "/trust") {
          this.setState({ journal: true }, () =>
            window.scroll(0, this.trust.current.offsetTop)
          );
        } else if (this.props.pathname === "/sdr") {
          window.scroll(0, this.sdr.current.offsetTop);
        } else if (this.props.pathname === "/rec") {
          window.scroll(0, this.rec.current.offsetTop);
        } else if (this.props.pathname === "/immi") {
          window.scroll(0, this.immi.current.offsetTop);
        } else if (this.props.pathname === "/biz") {
          this.setState(
            { journal: true },
            () => window.scroll(0, this.biz.current.offsetTop) //content,comms
          );
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  saveListeners = (listener, backcall) => {
    this.setState({
      listeners: [
        ...this.state.listeners.filter((x) => x !== listener),
        [listener, backcall]
      ]
    });
  }; /*
  handleMove = (ev, touch) => {
    ev.preventDefault();
    ev.stopPropagation();
    var overMouseDrag = null;
    //var onUpEnd = null;
    var listener = null;
    if (touch) {
      listener = "touchmove";
      //onUpEnd = "ontouchup";
      overMouseDrag = "ontouchenter";
    } else {
      listener = "mousemove";
      //onUpEnd = "onmouseup";
      overMouseDrag = "ondragover";
    }
    const onMouseMove = (ev) => {
      const timeout = 150;
      const e = touch ? ev.touches[0].clientY : ev.clientY;
      const x = touch ? ev.touches[0].clientX : ev.clientX;
      const scrollPlacementHeight = e - 55;
      if (
        e &&
        timeout &&
        !isNaN(scrollPlacementHeight) &&
        scrollPlacementHeight !== this.state.scrollPlacementHeight &&
        scrollPlacementHeight > -5
      ) {
        this.setState(
          { scrollPlacementHeight, offScroll: true, provisionalScroll: e },
          () => {
            //const { scrollPlacementHeight } = this.state;
            var topProgress = Math.round(
              (scrollPlacementHeight / (window.innerHeight - 215)) *
                document.documentElement.scrollHeight //window.scrollY
            );

            clearTimeout(this.dragView);
            this.dragView = setTimeout(() => {
              window.scroll(0, topProgress);

              const ifEnded = (noTime) => {
                window.removeEventListener(listener, onMouseMove);
                window.removeEventListener(overMouseDrag, overIt);

                //clearTimeout(this.dragEnd);
                //this.dragEnd = setTimeout(
                //() => {
                this.setState({ offScroll: false }, () => {
                  this.label(topProgress);
                });
                //},
                //noTime ? 0 : 3500
                //);
              };

              clearTimeout(this.dragMove);
              this.dragMove = setTimeout(ifEnded, timeout);
              if (window.innerWidth - x > 300) {
                console.log("oob");
                clearTimeout(this.dragMove);
                ifEnded(true);
              }
            }, 50);
          }
        );
      }
    };
    const overIt = (event) => event.preventDefault();

    window.addEventListener(overMouseDrag, overIt, false);
    window.addEventListener(listener, onMouseMove);
    this.saveListeners(listener, onMouseMove);
  };*/

  handleMove = (ev, touch) => {
    ev.preventDefault();
    ev.stopPropagation();
    const listener = touch ? "touchmove" : "mousemove";
    const overMouseDrag = touch ? "ontouchenter" : "ondragover";
    const onMouseMove = (ev) => {
      const timeout = 150;
      const e = touch ? ev.touches[0].clientY : ev.clientY;
      //const x = touch ? ev.touches[0].clientX : ev.clientX;
      const scrollPlacementHeight = e - 55;
      if (
        e &&
        !isNaN(scrollPlacementHeight) &&
        scrollPlacementHeight !== this.state.scrollPlacementHeight
      ) {
        this.setState(
          { scrollPlacementHeight, offScroll: true, provisionalScroll: e },
          () => {
            var topProgress = Math.round(
              (scrollPlacementHeight / (window.innerHeight - 215)) *
                document.documentElement.scrollHeight //window.scrollY
            );
            //console.log(document.documentElement.scrollHeight);
            window.scroll(0, topProgress);

            const ifEnded = (noTime) => {
              window.removeEventListener(listener, onMouseMove);
              window.removeEventListener(overMouseDrag, overIt);

              clearTimeout(this.dragEnd);
              this.dragEnd = setTimeout(
                () =>
                  this.setState({ offScroll: false }, () => {
                    this.label(topProgress);
                  }),
                noTime ? 0 : 300
              );
            };

            clearTimeout(this.dragMove);
            this.dragMove = setTimeout(ifEnded, timeout);
            if (
              topProgress - this.state.topProgress >
              0.000001
              //&&window.innerWidth - x > 300
            ) {
              console.log("oob");
              clearTimeout(this.dragMove);
              ifEnded(true);
            }
          }
        );
      }
    };
    const overIt = (event) => event.preventDefault();

    window.addEventListener(overMouseDrag, overIt, false);
    window.addEventListener(listener, onMouseMove);
    this.saveListeners(listener, onMouseMove);
  };
  label = (topProgress) => {
    /*const inSection = (path) => {
      console.log(path);
      this.setState({ scrollPath: path });
    };
    //window.scroll(0, this[path].current.offsetTop);
    const offsetTop = (current) =>
      current.offsetTop < topProgress + window.innerHeight;
*/
    const construct = (current, tryy = 0) => {
      /*console.log(
        offsetTop(current),
        topProgress,
        current.offsetTop,
        current.offsetHeight,
        this.state.scrollTop
      );*/

      return Math.abs(topProgress - current.offsetTop);
      /*this.state.scrollTop - window.innerHeight <
          Math.abs(current.offsetTop + current.offsetHeight) &&
        offsetTop(current)
      */ // < 900;
    };
    //if (this.state.scrollTop < 115) return inSection("saverparty.xyz");
    const gett = (tryy = 0) => {
      var name = null;
      const inSection = (nae) => (name = nae);
      if (this.state.journal) {
        if (construct(this.sci.current) < tryy) {
          inSection("sci");
        } else if (construct(this.sdr.current) < tryy) {
          inSection("sdr");
        } else if (construct(this.trust.current) < tryy) {
          inSection("trust");
        } else if (construct(this.dns.current) < tryy) {
          inSection("dns");
        } //else inSection("saverparty.xyz");
      } else {
        if (construct(this.rec.current) < tryy) {
          inSection("rec");
        } else if (construct(this.gdp.current) < tryy) {
          inSection("gdp");
        } else if (construct(this.party.current) < tryy) {
          inSection("party");
        } else if (construct(this.marx.current) < tryy) {
          inSection("marx");
        } else if (construct(this.air.current) < tryy) {
          inSection("air");
        } else if (construct(this.immi.current) < tryy) {
          inSection("immi");
        } else if (construct(this.work.current) < tryy) {
          inSection("work");
        } //else inSection("saverparty.xyz");
      }
      tryy = tryy + 1000;
      //console.log(tryy);
      if (name /* && construct(this[name].current) < tryy*/) {
        //construct(this[name].current);
        //console.log(name, topProgress, this[name].current.offsetTop);
        this.setState({
          scrollPath: name,
          bar:
            this[name].current.offsetHeight *
            ((window.innerHeight - 215) / document.documentElement.scrollHeight)
        });
      } else return gett(tryy);
    };
    clearTimeout(this.labelTimer);
    this.labelTimer = setTimeout(() => {
      gett();
    }, 5);
  };
  render() {
    //const { width } = this.state;
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    /*const hydratehtml = (text) => {
      return text;
    };*/

    /*var divElement = document.getElementById("viz1643742790357");
    var vizElement = divElement.getElementsByTagName("object")[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "800px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "800px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = divElement.offsetWidth * 1.77 + "px";
    }
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);*/

    return (
      /*<div style={{
        columnCount:""
      }}>*/

      <div
        style={{
          minHeight: "100%",
          height: "min-content",
          overflow: "hidden",
          maxWidth: "600px",
          fontFamily: "sans-serif",
          textAlign: "center"
        }}
      >
        <div
          onDragStart={() => false}
          onMouseDown={this.handleMove} //onDrag
          onTouchStart={(e) => this.handleMove(e, true)}
          style={{
            top: this.state.offScroll
              ? 0
              : Math.min(
                  window.innerHeight - 115,
                  Math.max(60, this.state.scrollPlacementHeight)
                ),
            zIndex: 3,
            backgroundColor: "rgba(255,255,255,.4)",
            position: "fixed",
            width: this.state.offScroll ? "100%" : "0%",
            height: this.state.offScroll ? "100%" : "0%",
            transition: ".3s ease-in",
            right: "0px"
          }}
        >
          <div
            style={{
              right: "10px",
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "10px",
              userSelect: "none",
              cursor:
                this.state.scrollTop !== 0 && !this.state.footer
                  ? "pointer"
                  : this.state.scrollTop !== 0
                  ? "n-resize"
                  : this.state.footer
                  ? "pointer"
                  : "s-resize",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              opacity: this.state.scrollTop === 0 ? 1 : 0.8,
              top: Math.min(
                window.innerHeight - 115,
                Math.max(60, this.state.scrollPlacementHeight)
              ),
              textAlign: "right",
              //right: "10px",
              position: "fixed",
              transition: ".3s ease-in"
            }}
          >
            <span
              style={{
                right: "0px",
                fontWeight: "bolder",
                fontSize: "30px",
                WebkitTextStroke: `1px rgba(10,70,120,${
                  this.state.scrolling ? 0.5 : 0.8
                })`
              }}
            >
              {this.state.scrollPath}
            </span>
            <img
              alt=""
              style={{
                borderRadius: "10px",
                border: "5px solid rgb(5,5,5)",
                width: "30px",
                height: "auto"
              }}
              src={
                this.state.nofred
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/oi43wpcc0h9phcz/saverAcorn%20%281%29.png?dl=0"
              }
            />
            <div
              style={{
                backgroundColor: "black",
                width: "10px",
                position: "absolute",
                height: this.state.bar
              }}
            />
          </div>
        </div>
        {/*<div
          style={{
            width: "100%",
            right: "0px",
            position: "relative",
            height: "0px"
          }}
        >*/}
        {/* <div
        //alt=""
          ref={this.canvas}
          style={{
            transition: ".3s ease-in",
            overflow: "hidden",
            height: "100vh",
            width: this.state.offScroll ? "auto" : "0px",
            right: "0px",
            position: "fixed",
            top: "0px",
            transform: `translateY(${this.state.provisionalScroll}px)`
          }}
        />*/}

        <div
          onClick={(e) => this.setState({ journal: !this.state.journal })}
          style={{
            transition: `${
              this.state.offScroll ? 0.1 : this.state.journal ? 0.5 : 0.2
            }s ease-in`,
            border: "1px solid",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "white",
            display: "flex",
            position: "fixed",
            width: "calc(100% - 42px)",
            fontFamily: "sans-serif",
            justifyContent: this.state.scrollTop === 0 ? "center" : "flex-start"
          }}
        >
          {!this.state.journal ? "journal" : "plan"}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <div
            ref={this.chapter1}
            style={{
              marginLeft: "62px",
              paddingBottom: "70px",
              backgroundColor: "rgb(20,20,25)",
              //height: !this.props.journal ? 0 : "max-content",
              transform: `scale(1,${!this.state.journal ? 0.1 : 1})`,
              position: !this.state.journal ? "fixed" : "relative",
              width: /*this.state.offScroll ? "100px" : */ "calc(100% - 66px)",
              maxWidth: "calc(600px - 100px)",
              fontFamily: "Nunito, sans-serif",
              textAlign: "center",
              transition: `${this.state.scrolling ? 0.3 : 2}s ease-out`,
              color: `rgba(200,200,220,${this.state.scrolling ? 0.5 : 0.8})`,
              fontSize:
                /*this.state.offScroll
              ? "1px"
              : */ this
                  .state.width < 300
                  ? "21px"
                  : "17px"
            }}
          >
            <h1>"thinking doesn't require money."</h1>
            GOP tolls 40% debt service, Dems gentrify. Libertarians in private.
            Saver stops it all. "Why are gains for U.S. workers good for the
            world?"
            <br />
            <br />
            Although poverty has income-gains as its denominalization, it lowers
            as inequality rises because labor is an input cost of labor. So, a
            gain for labor would be{space}
            <a href="https://fred.stlouisfed.org/graph/?g=Llrn">
              productive-efficiency
            </a>
            , GDP/hour-GDP/p bunting, to follow (-GDP/p) tech advancement (less
            work per living costs).
            <br />
            <br />
            supply==demand is labor borne demand, outlay immediately
            (no-profit-accounts)
            <br />
            Free rider immutable labor costs are used to gain equity by gov.
            <h1>
              Conviction/monitoring before evidence too; "put my money to work,"
              beyond Article 4 is free rider mutable, and Article 1.8 is an
              oxymoron{/**david bernheart */}
            </h1>
            <h2>
              challenges for state-vic permits and closed source reason, is
              retarded for GDP/hour-GDP/p
            </h2>
            <h2>
              new road or bypass can be paid by tolls, bike paths, walking pace,
              by Truncated Production Tax, 3% under $2k
            </h2>
            Forcing on device end to end encryption not to work for business,
            forcing open source, and not for scientific nor tech advancement
            less jobs productive efficiency purpose, but to not give secrets to
            competition before users Making them userers.
            <h2>
              nationalization instead of target margin (for operational
              monopoly), retards
            </h2>
            Saver Party vs Taxpayers' Alliance
            <br />
            investment in energy infrastructure is just gentrification, going
            bust is mathematically ensured.
            <h2>The People vs Gov Sleaze</h2>
            <h2>
              "20% is massive profits... energy we bond laundering means of
              production target margin upon Savers' land exploration donee
              rights, 11/12, tax-payer money is not $170t/$30t/$2t, "we dont
              want to charge tax-payers when Savers are so docile."
            </h2>
            I'll fucking kill you brits, daniell boxall, Nana Akua.
            <h2>
              margin target operational monoplolies, laborless-demand
              implausible rental-income use cap by units or days
            </h2>
            no pennywise equity investment for welfare NHS, premium for nothing
            <br />
            <br />
            "Illegal immigrants being dropped into community not elected
            officials knowing," is not the "cost to," Savers' land exploration
            donee rights, the spending is. They are peaceful and working age,
            that which lending, landlording and insuring laborless-demand
            (dead-weight of) are diminishing its benefacidious fruit-bearingness
            of GDP/hour-GDP/p, productive-efficiency and tech advancement.
            <h1>
              Truncated Production Tax - ween cops off bonds net loss profit
            </h1>
            "Hold people in bars or pay the price in court." Claudia Tenney
            saying bribery/state-vic is legal.
            <h2>
              redistricting can be by population density alone, (along lines of
              similar density)
            </h2>
            Gordon G. Chang, "throw-away phones, targeting" can be found by who
            you communicate with. "strong possibility China made virus in a
            lab."
            <h2>
              Trucker freedom rally is terrorism and like a union barrier to
              entry... just quit and admit that you think the pandemic isn't
              real nor does virion inject DNA into cell but actually is
              byproduct of bacterial infection and only comes out, or think
              murder should be legal
            </h2>
            International law acknowledges human rights as donee over contract
            and juris bias.
            <h2>Duress beyond minimal viable product.</h2>
            inflation an slavery reparations and land deprecation is
            laborless-demand, your supply side economics is labor dispoused of
            supply, and is more of a dead-weight-box towards economic welfare,
            productive-efficiency, GDP/hour-GDP/p utility-indifferent trades
            found, and tech advancement by comparative advantstiges.
            <br />
            <br />
            free rider mutable government gentrification, good will and science,
            implausible use intent rent seeking, implausibly deniability.
            <br />
            <br />
            Michael Foot kink of socialism, the voters said no.
            <br />“<a href="https://qr.ae/pGEDI2">Rise up ranks of legal</a>
            {space}profession, now head of labor party.”
            <h2>Art Laffer - "Free trade except fruitless USPTO tariffs."</h2>
            "Chips are part of the economy, subsidize." Many in Trump admin
            wanted to repatriate industry by not banning finance but gentrify,
            only 2 people opposed.{/**trump and kudlow */}
            <br />
            Good Will surrendered freedom donee invocation of Savers' land
            exploration, GDP boom alone is RETARDED macroeconomic GIBBERISH,
            GDP/hour-GDP/p is Nick Carducci's invention, microeconomic that sees
            money-"market" as dead-weight laborless-demand, outstanding good
            will ("supply-side-economics," prosperity by 65% mortagage and asset
            price market concentration by equity, 35% implausible-use
            rental-income, USPTO rent-seeking by bribe, copyright, government
            trust bridge toll/broadband for operational monopoly instead of
            target margin? idiots)
            <hr />
            Free rider immutable labor costs are used to gain equity by gov.
            <br />
            Conviction/monitoring before evidence too.
            <br />
            Forcing on device end to end encryption not to work for business,
            forcing open source, and not for scientific nor tech advancement
            less jobs productive efficiency purpose, but to not give secrets to
            competition before users.
            <br />
            Making them userers.
            <br />
            Stop the spending, reverse amortize the bonds, (cash/debt)*income
            every year back, Article 1.8 is an oxymoron unequal, certainly not
            general revenue asset sales “welfare,” by a century of market
            concentration, misappropriated. Investment in business and
            technology means entrepreneurs need to innovate more ON THEIR OWN,
            you don’t fucking need money to invent, Kudlow. Truncated Production
            Tax/ Max-royalty and equities banked transaction-based-sdr
            thereafter.
            <h2>
              "If inflation is too much money for too much goods (denominomial),
              stimulate like a communist in emergencies of lower prices."
            </h2>
            "They work less, but don't remove their pay, so consumers are in
            pretty good shape here - too much emergency stimulus." ONE CENT IS
            TOO MUCH, let alone{space}
            <a href="https://qr.ae/pGEDI2">Savers' exploration rights</a>. "The
            fed is still punting money, 40%/2 years. That is the cause of 7%
            inflation," but that money isn't even in the economy. "labor have
            more power now to negotiate higher wages' pittance for equity
            surrendered,"{space}
            <a href="https://qr.ae/pGEDpT">for market concentration</a>. "The
            fed will have to take money out of the{space}
            <a href="https://qr.ae/pGEDIE">economy</a>."
            <h1>
              <a href="https://qr.ae/pGEDIW">supply side economics</a>
              {space}== good will
            </h1>
            <h2>revisions of unemployment are claims, not survey</h2>
            <TwitterTweetEmbed
              key="1421471623136358405"
              tweetId="1421471623136358405"
            />
            <h3>
              we are going to have to sweep implausible use landlords off the
              streets.
            </h3>
            tech advancement is less jobs{/**"throwing money at it" */}
            <h2>
              Raegan/Gorbechov false flag, now pipeline sanctions, Trump science
              tariffs
            </h2>
            (mostly good will of equity, $2t checking exists) $4t/yr 2010-2020
            Republicans spend Savers' land exploration rights in "emergencies."
            <br />
            <Cable
              style={{ width: "100%", maxWidth: "300px", height: "auto" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/WlSVwRaO-iQ"
              }
              float="right"
              title="Curtis Sliwa and mentally-ill homeless (Trump USPTO fruitless nonsense) - https://youtu.be/WlSVwRaO-iQ"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            "Which types of wealth are lacking?"
            <br />
            Labor-borne-demand, GDP/hour-GDP/p.
            {/**"levers, gaits, pressure points, not people, forever, real truth" */}
            <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
              Communism deprives no man of the power to appropriate the products
              of society; all that it does is to deprive him of the power to
              subjugate the labour of others by means of such appropriations.
            </div>
            <h1>microeconomists: "altruism!=retarded"</h1>
            Diana 'slanderer of lawyer-bar-class-resolution-malfeasance and
            racketeering-prosecutor' Meade, "the motivation is mental illness."
            what biomedicine? like, a brain-lesion?
            <h2>The right and top left like Good Will over free markets</h2>
            Progressive is a donee claimable false bid pool. I’m holding them to
            desist.
            <h2>
              good will is like taking par-limeLeft value, for pennywise
              "savings," not absolute.
            </h2>
            “They are rooted in psychological and behavioral deficiencies, such
            as lack of work ethic, lack of faith, lack of discipline,
            over-spending, excessive risk-taking in investments, greed, pride,
            and an insatiable desire to impress others.”
            <br />
            Most people are in debt and count assets are Good Will, $170t/$2t
            checking (U.S.). If you are bona fide in your work, you will not be
            rich, no matter if you spend the least of anyone in the world.
            <br />
            <br />
            “Making money is generally difficult for the many who do not have
            higher education, with no elite connections, who are female, and for
            people of color. Not a fair situation.”
            <br />
            Most work doesn't require education
            <br />
            <br />
            10k savings by refinancing by extensions or long term Good Will
            $170t is pennywise like Obamacare is to insurance with price fix,
            not an actual savings relative to the false bid pool loss, donee
            claimable.
            <br />
            <br />
            Force against will includes non-minimal viable product duress.
            <br />
            <br />
            Cheslie Kryst “Mental health illness,” these doctors never get off.
            She was a civil rights activist and martyr. She is rolling over in
            her grave.
            <br />
            <br />
            Non-disclosure and non-compete agreements are illegal: not voluntary
            nor Tranquil, nor productively-efficient, the intent of the Union,
            Article 1.8, Article 3 & Article 4.
            <h3>
              war bond conflict of interest; education, healthcare, housing,
              juris, indices funds over currency, over labor costs, General
              Maintenance keeping us from implausible landlord use, export jury
              saveface lest malpractice torts, and repo-cycle kept down payment,
              fails.
            </h3>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/nKvUf7F4Xn4"
              }
              float="left"
              title="Dick Morris (77WABC) - French Revolution - https://youtu.be/nKvUf7F4Xn4"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Aryian race, blonde hair, blue eye," is not the reason why Italians
            joined Axis.
            <h2>
              <a href="https://thumbprint.us/voting">election/court-tech</a>
            </h2>
            7% of NYC should never represent 11/12 industry-variable REALITY:
            jail or without evidence no bail; 216/day missing children forever
            repeat offender login.gov malfeasance.
            <hr ref={this.saver} />
            Savers' donee invoked Good Will and house-wins pyramid schemes
            <h1>geohash/mo</h1>
            <h3>
              EU INTEGRATED BULLSHIT, no import is Article 4 Article 1.8 (free
              rider immutable competing with producers, speaklegally.
            </h3>
            <h2>You are served a hold, on notice</h2>
            pain/duress is a diability, homelessness nor mental biomedical
            lesions drug users consent, slutty, is not
            <h3>
              Communism deprives no man of the power to appropriate the products
              of society; all that it does is to deprive him of the power to
              subjugate the labour of others by means of such appropriations. I
              would like to know more about these, “blockchain applications for
              government.”
            </h3>
            <h1>
              Rudy Giuliani: "no bail, no incarceration, on murder, I'm
              exagerating the conviction, but I'm making it."
            </h1>
            <h2>buy altruist with attention</h2>
            Have you seen this?? Humanharvest.info/polio cdc wonder data.
            <br />
            <Cable
              style={{ width: "100%", height: "auto", maxWidth: "300px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/pbrz6gdmm72svex/Screen%20Shot%202022-02-04%20at%202.42.50%20PM.png?dl=0"
              }
              float={null}
              title="https://humanharvest.info/polio"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Broader set of rules than profit (material+rent)/income cost market
            concentration, quality tach advance withholding (pennywise general
            revenue stock sales for insurance false-bid-pool loss, invoices'
            donee invoked), GDP/hour-GDP/p productive-growth
            technological-bumping.
            <br />
            Stackin hours expirin false bid pool loss donee invoking
            <br />
            You purchase and sell indices for “welfare,” now buy abroad? No
            Article 4 import exists
            <br />
            (material+rent)/income. It ain’t labor it is unions? Omg
            <br />
            <br />
            Margins makes costs expensive because laborless-demand is margins,
            or profits kept year to year.
            <h2>pain and duress is debilitating slut</h2>
            McCormick says, "he is not putting you at risk by creating virions,"
            it is byproduct of bacteria. Reasonable doubt requires alternative
            …doubt, as until then it is not vivo
            <br />
            <br />
            (material+rent)/income is conspiracy to market concentrate by labor
            costs, “lowering poverty.”
            <br />
            <br />
            216/day missing children forever because login.gov malfeasance,
            convict intranet.
            <br />
            GDP/hour-GDP/p is econ welfare, (-GDP/p tech advancement).
            <br />
            First it was hard,{space}
            <a href="https://billbiden.org">now biden</a>,” Don’t intimidate nor
            scare anybody that cannot be prosecuted in court, for voluntary
            Trade and Tranquil as to comparative advantage Supply and Demand
            productive efficiency GDP/hour-GDP/p by (-GDP/p tech advancement).
            “Due to covid 19, many people feel threatened and can’t afford
            rent.” That has nothing to do with excess deaths expected from
            population growth of single year age life expectancy ago.
            <h1>war bonds is war crime</h1>
            price elasticity is useless, "you people voted murphy in," citarelli
            was the same thing on finance and non-voter "no-candidate" won
            SIMPLY.
            <h1>
              Bernie Sanders is a corporate sellout - 44% of Medicare, all of
              "healthcare"
            </h1>
            <h3>
              invoices, equities' market concentration over the dollar by
              (material+rent)/income labor-costs
            </h3>
            weather made possible by 'name-your-price-tool' false bid pool net
            loss claim lottery without donee invocations except the house that
            also do the weather (just like ed/event tech, without credit-taking
            $12k/64 debt/cash per person a year, paying for court/election tech
            and billfeed)!
            <h1>Ween cops off bonds</h1>
            Qualified immunity is given by natural law, you don’t need to
            enumerate known hazards.
            <br />
            The juris is criminal.
            <br />
            “Criminals about to commit crimes, arrest them before that happens.”
            <h1>
              ghost guns at crime scenes is not before the armed-theft or
              -assault, WITH PROOF
            </h1>
            "How many people have had over 1 trillion dollars?"
            <br />
            Nick Carducci - BA in Political Science & Economics, Johns Hopkins
            University (Graduated 2015)
            <br />
            There are only $2t dollars, so King Solomon had only Good Will, last
            traded neighbor value, which today is $170t. No one has had half the
            currency (state lands’ exploration depositary).
            <br />
            <br />
            Buy altruism with attention
            <h2>(cash/debt)*income every year back</h2>
            <h1>$12k/64 debt/cash per person every year back</h1>
            Indices are cornering market concentration over the dollar with
            labor costs: lower (material+rents)/labor.
            <br />
            I can't prosecute and invoke donee claims.
            <br />
            <br />
            "self-medication is good for{space}
            <a href="https://qr.ae/pGEZyM">attenuating</a>
            {space}stress." Brian Kilmeade, Jobs is a sign of industrial
            devolution This is a{space}
            <a href="https://qr.ae/pGEZyS">White House story</a>, not a Biden
            story.
            <br />
            <br />
            "the federal acquisition."
            <h3>
              if you want available-readiness, just open source instead of FDA
            </h3>
            "low-income meicaid/medicare patients, we take care of them," those
            are funded by stock sales, invoices and expiring premiums, so how
            are you helping anyone but yourself?
            <h2>dangerousness bail component is no evidence prosecution</h2>
            <h1>brandishing and armed robbery, is not a mental health issue</h1>
            <h2>homelessness is not a mental health issues</h2>
            <h3>education level isn't required for most jobs</h3>
            "stabilize interest rates and jobs" - mitch roschelle, why?
            "inflation and unemployment," why? how would buying and selling
            bonds lower prices? Equity concentration over currency "price" or
            good will value increase doesn't matter?
            <h2>it is not to be fair or nice, it is to stop waste</h2>
            “If the jobs is not just a spike, we need to look at ending these
            emergency measures.” Why do you need to use Saver money to bail out
            your insurers, lenders and landlords? Stop cornering the market by
            labor cost, Guthrie. Jobs is a sign of industrial devolution.
            <br />
            <br />
            getting business operating = existing business trust building of
            free rider mutable input cost, for market concentration and
            gentrification for gerontocracy. kill all old people
            <h2>
              never has a supporter of{space}
              <a href="https://occupywallst.quora.com/">
                Occupy Wall St ran for office
              </a>
            </h2>
            Actualized balance of trade, including laborless-demand of finance,
            is repatriated.
            <br />
            False bid pool ‘name-your-price’ tool loss, invoices donee
            claimable, and stock sales, is healthcare, education is trade
            secrets and hardly required for the average per capita work, and
            housing cap {"<"}5
            <br />
            Tamper proof grid, don’t be prudes.
            <br />
            The keymaker is not by device, or is it a function to be ran on
            router device, that can make a durable object and hardware bust the
            wire
            <br />
            Reason for open source (voluntarily , duress)
            <br />
            “Moving oil and gas, our intentions are solving a deeply-economic
            problem.” U.S. Admiral, why wouldn't you target margin and truncated
            production tax pipelines instead?
            <h3>
              no way is Article 1.8 for non Article-4 (Education, healthcare,
              stocks of other industry 1/12, home-building
            </h3>
            mental health 'name-your-price' tools are not your piggy bank to
            house the homeless, removing their own perogatives to make money,
            instead of capping rental-income by 5 storefronts +condominiums, 5
            auto liens, or 30 days (for hotels), not price, so prices match
            quality, and no laborless-demand is borne. Just don't rent-seek
            science, copyright is enough, and 6 patent-holders in a class of an
            industry is NOT, neither is expert saveface lest malpractice more
            than 1/12 industry invariance, as 1/12 reasonable doubt is not
            enough to stop a conviction, one of bona fides.
            <br />
            <br />
            guns are legal without license. you can only have it taken away
            after shooting someone, or armed robbery. Not drug sale protection.
            <hr ref={this.dns} />
            <h1>convict intranet, tamper proof dns grid</h1>
            7% voted, Adams is only concerned with corporations. 44%
            Medicare/Medicaid is stock sales. congradulations, Obamacare.
            <h1>slander new asylums, fear</h1>
            Eric Adams, "Mental health are in subways, that is no place to have
            a dignified existence. I know this is a great city, and we are
            resilient. I am the CEO."
            <h2>
              surrendering others' freedom is on the books now, pussy, ween cops
              off bonds, truncated production tax, jail can't have state vic and
              from false bid pool loss torts even to the rightful victim, and
              not on neighborhood, "good will value," for cornering the market
              by labor costs, of equity indices over the dollar, triple
              material-inflation, and double checking ($64/person/yr,
              currencyComponentOfM1), debt ($12k/person/yr).
            </h2>
            separation of people using it lawfully, nd unlawfully, that would
            just be taken away after threats without using cops to{space}
            <a href="https://truncatedsalestax.com/gov">recoup theft</a>
            {space}- lest malfeasance - 3% under $2k TRUNCATED PRODUCTION TAX
            geohash/month spoofable-precinct.
            <h1>conflict of interest when net loss bond profit</h1>
            <h2>free rider immutable sewage police lawsuits</h2>
            warmonger scott perry over Putin pipelines
            <h3>
              you cannot sign yourself in a contract, but you can self-harm in
              present, because that is subjective. otherwise is donee invoking,
              because it is amortized, accrued and laundered.
            </h3>
            that has nothing to do with the defensive tact, it is superfluous
            tort. agregious, not even needed. get your hands off my drugs and
            guns, old-bitch,{space}
            <a href="https://fred.stlouisfed.org/graph/?g=LCQE">
              19% are "disabled"
            </a>
            , whole lives to save, 44% Medicare stock sales, pennywise off
            {space}
            <a href="https://www.cbo.gov/sites/default/files/111th-congress-2009-2010/costestimate/amendreconprop.pdf#page=14">
              false bid pool loss
            </a>
            .
            <Cable
              style={{ width: "100%", height: "auto" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/xm82a82r7w11c0a/pour%20on%20savings.jpeg?dl=0"
              }
              float={null}
              title="pour on savings propaganda conflict of interest"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h1>
              SAVER MONEY LIVLIBOOD EXPORATION, GLUTTON. TRUNCATED PRODUCTION
              TAX VOLUNTARY TRADE VIRTUOSITY OF WAR IS ONLY VOLUNTARY
            </h1>
            <h2>commit crime, make sure job and mental health?</h2>
            "illegal voting," is not conservative, for anti-competitive market
            concentration over currency as donee in contracts. cut carl higbie's
            throat.{/**matt schlapp conservative.org */}
            <h2>
              <a href="https://qr.ae/pGEWHJ">socialists force free markets</a>
            </h2>
            Bill O'Reilly coming for your guns. GUN TRAFFICKING IS A JOB; this
            is not:
            <Cable
              style={{ width: "100%", height: "auto" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/wgijcheeuof0z4l/Screen%20Shot%202022-02-03%20at%209.06.44%20PM.png?dl=0"
              }
              float={null}
              title="30under5.us"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>
              Why would Dick Morris and Grant Stinchfield, professors of
              'freedom and stability,' draw economic sanctions, over a pipeline?
            </h2>
            Ben Furgeoson, douche: "China is in charge, there is no way to stop
            china from watching your chats," that is not true, and apple is a
            liar, they aren’t privacy, they store keys on the cloud instead of
            {space}
            <a href="https://thumbprint.us/privacy">on device</a>. Very easily I
            made
            {space}
            <a href="https://github.com/NickCarducci/Wavepoint.la/blob/master/src/fumbler/index.js">
              end to end with keys on device
            </a>
            , now that means it is a private key, and we should delegate these
            at the motor vehicle, whenever peaceful illegal immigrant wants to
            buy a house.
            <br />
            <br />
            "Selling out America," but our own: 11/12 Savers say sell,{space}
            <a href="https://qr.ae/pGEWLS">per capita</a>… or dollar? Certainly
            not exploration by bipartisan bonds.
            <br />
            <br />
            "to their reputations and families,"{space}
            <a href="https://qr.ae/pGEWmY">
              why would anyone put us all futher in debt
            </a>
            ? why would anyone pay off or cancel uncollateralized debt?
            <a href="https://qr.ae/pGEWDI">
              trust bust market concentration over the currency
            </a>
            .
            <h2>
              general revenue AOC{space}
              <a href="https://www.programmer-books.com/wp-content/uploads/2019/04/Machining-For-Dummies.pdf#page=49">
                gantrification
              </a>
            </h2>
            <a href="https://froth.app">
              Education, healthcare, housing, tolls, spectrum is NOT government
              business
            </a>
            .
            <hr ref={this.biz} />
            <h2>
              the problem here -{space}
              <a href="https://fred.stlouisfed.org/graph/?g=Lzx3">
                $12k/64 debt/cash new person a year
              </a>
            </h2>
            "Can I legally decline to pay for health insurance through my
            employer?"
            <br />
            Company policy is out of the question if governments cannot force
            it. Insurance is a false bid pool loss, in{space}
            <a href="https://www.cbo.gov/sites/default/files/111th-congress-2009-2010/costestimate/amendreconprop.pdf#page=14">
              2010 CBO admitted insurance is a net loss
            </a>
            , and invokes donee beneficiaries of your customers.
            <br />
            <h2>indices!</h2>I am annoyed at the concentration of the 'cool
            shit' of amongstiositously="Beatle"{" "}
            {/*suppoedly go nowhere, but go through one then another. The kinks!
           which beatle would you, do you think you are, that's the problem with 
           the kinks. if you guys call me ringo I swear tg.*/}
            <h1>Drop dead mark levin</h1>
            <h2>
              Why as a nation do we need to subsidize input costs of
              semiconductors? It is elastic
            </h2>
            "A cop on every subway station," or we could instead of chasing
            people around and removing them from potential labor, cap
            rental-income by units or days, not price.
            <br />
            "shelter, food, and medicine they needed," detective djacimo how the
            fuck are you going to tell someone what they need mental health,
            violence interruptors is just because cops can't bargain with
            hostage-takers?
            <br />
            Michael Goodwin: "Crime is why people are leaving the democratic
            party." KIDS OWNING GUNS ISN'T A CRIME!
            <br />
            <Cable
              style={{ width: "100%", height: "auto" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/gk78gobivw6t21t/Screen%20Shot%202022-01-15%20at%205.17.16%20AM.png?dl=0"
              }
              float={null}
              title="General Mayoral 7% turnout - https://vote.nyc/sites/default/files/pdf/election_results/2021/20211102General%20Election/00000200000Citywide%20Mayor%20Citywide%20Recap.pdf"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Accusations and criminal record must be held on double jeporady."
            <br />
            Charlie Gasparino: "why can't you put mentally-ill people in
            hospitals?" because it isn't proof of a crime!
            <br />"
            <a href="https://qr.ae/pGEWHJ">
              private equity does business with Cathy Wilde
            </a>
            ."{/**charlie gaspirino */}
            <br />
            mental health isn't solved with medicine because it isn't
            biomedical, nor a crime. you cannot prosecute with torts from other
            laws. gun ownership isn't a crime.
            <h2>
              disability without biomedical evidence or unconsent, is a racket
            </h2>
            "if you admit you are wrong, you can't keep asking to save your
            money from tort."
            <h2>
              Substance abuse, eldercare, takes years to accrue (like tests to
              lengthen life 30-45, success?)
            </h2>
            "Works at JHU, full-dental and stock sales. Have you ever heard of a
            study that invests in a study and doesn't talk about it?"
            <br />
            <br />
            "not doing as good as joe rogan," because he talks out of both sides
            of himself. "when people make mistakes, they shouldn't be
            cancelled," but should be prosecuted?
            <h1>
              "We need people to get back to work," why? because you think 6
              producers makes a free market?
            </h1>
            "When does society need become political claim?"
            <br />
            For the U.S.,{space}
            <a href="https://constitutioncenter.org/interactive-constitution/article/article-iv#article-section-4">
              Article 4
            </a>
            {space}
            mentions outlay scope
            <br />
            <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
              and shall protect each of them against Invasion; and on
              Application of the Legislature, or of the Executive (when the
              Legislature cannot be convened) against domestic Violence.
            </div>
            <br />
            and{space}
            <a href="https://constitutioncenter.org/interactive-constitution/article/article-i#article-section-8">
              Article 1.8
            </a>
            {space}
            mentions receipt methods (albeit oxymoronic):
            <br />
            <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
              all Duties, Imposts and Excises shall be **uniform** throughout
              the United States; To borrow Money on the credit of the United
              States;
            </div>
            <br />
            Any free rider mutable (even operational monopolies can be target
            margin instead) is **pure inflation**
            <br />
            * tax from outside the market, or
            <br />
            * free rider immutable made mutable by debt.
            <br />
            It also just goes to laborless-demand/userers (insurers, landlords
            and lenders).
            <br />
            If you mean society as in lands, currency is deed on state-land and
            resources (20% of U.S.).
            <br />
            <br />
            Brian Kilmeade: "Cops need to take guns away."
            <h1>
              "We aren’t anti-anything, we are for freedom," retarded truckers
            </h1>
            "Is banning members of Congress from trading stocks against the
            principles of a free market economy?"
            <br />
            *Free market communism*, where the directive is subjective, is no
            *holds*, barred.
            <br />
            Rather, *communism* or *microeconomics‘ free markets* (Supply and
            Demand) that prevents the profit off anothers’ labor, would prohibit
            such monopoly **power over price or quantity** (free rider immutable
            contractor chosen).
            <br />
            So, it depends on if you consider monopolies as common-artifacts of
            free markets, in which microeconomists do not. *Free markets without
            monopolies are ****auction-based****, not players on both the
            ****ask*** (request for proposals of laborious-contractors-Demand by
            the **free rider immutable** tax-Supply; a free rider mutable supply
            that is bid-and-offered first - tax or donee invocating- and
            multiformed-share split - would be **dead weight box, never a ‘free
            market’**)*, then bid*.
            <br />
            <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
              Labor or goods is usually Supply (ask), but in this third, free
              rider immutable tax, case - neither dead weight box nor demand -
              labor would not exist in anarchy, and Demand (bid with labor,
              subcontracting) would decrease available productively-efficient
              hours, economic welfare (curves cite the free rider mutability
              taxed) as mutability of actualized-anyway-taxes increase, and
              Supply would increase, but it may be absolutely-vertical at q*,
              totally elastic.
            </div>
            <br />
            Not even an index fund nor blind trust would remove the bias,
            conflict of interest, by free rider mutable, nor multiform by bonds,
            -tax, and market concentration over the currency by labor costs.
            <h2>
              {/**shimone procupez */}
              drug related violence, not correlated; money but also prosecution
              is price elastic, vertical q*.
            </h2>
            Joe Manchin is pro-insurance, that is insane, false bid pool loss,
            market concentration over dollars, by cornering the market thru
            labor costs. Corporate flaccid loss and government state vic trust
            for operational monopoly & expert saveface left malpractice instead
            of target margin and industry-variable.
            <br />
            <a href="https://extension.okstate.edu/fact-sheets/coronavirus-sars-cov-2-and-the-covid-19-pandemic-what-is-it-and-how-does-it-spread.html">
              never has a lab shot a virion into my fucking eyeballs
            </a>
            .
            <h2>
              viral load and death rate by lockdown is not significant,
              year-to-year, nor in a boat.
            </h2>
            <a href="https://moldmask.co">Masks are fine</a>
            {space}for spittle that drops into an open body or on a table,
            bacteria is made by spittle.
            <br />
            If it is viewable in cold it is hot enough to rise.
            <br />
            <br />
            "you can't sell the drugs," open-source right to try , bills are
            donee invocations of the collateral-hours!
            <h1>
              Rot in Hell! Jesus is the light to the world, the beginning of
              winter and spring. It’s an easter passover message
              <br />
              Christ
            </h1>
            <h3>
              What does being sober have to do with sin sacrifice?
              <br />
              Why is STI mental compassion involuntary meds? It is irrelevant to
              jailing
              <br />
              Lying to exaggerate a comparative innocence or duress for please
              is your onus! But after some point, your intent is ...exhibitable
              <br />
              Is the egg your mother
              <br />
              Etymology is a religion
            </h3>
            $1b/yr for border patrol, the people aren’t getting arrests, 19% of
            the gerontocratic disabled DIE ALREADY LET THE WORKING AGE HAITIANS
            IN
            <br />
            We don’t even know if DHS is dropping illegals in the Pacific, plane
            rides cost more if you exclude border patrol. 216/day missing
            children because of the child molestor Jim Jordan.
            <br />
            <br />
            "100k/yr children are dying from pot in fentanyl." oh fuck off
            bitch.
            <h2>general maintenance unit</h2>
            "Mental health per criminal on the rise, eduction and teachers, is
            that good? durrrrr?" Gershlagerret reschenthaler "tax-payer dollars
            <br />
            <Cable
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/tr1e169u4qolelp/Screen%20Shot%202022-02-02%20at%201.46.15%20PM.png?dl=0"
              }
              float="left"
              title="https://fred.stlouisfed.org/graph/?g=Lzu0"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            (20% of U.S. is Savers' land and resources) green climate slush
            fund" science is a liesure activity to the economic science, like
            Frank Morano.
            <h1>
              third party donee invoking duress loitering and borrower
              implausibly deniably-purposeful defence.
            </h1>
            labor-shortage, laborless-demand/userers/rent-seeking: insurers
            (non-rollover), lenders (non-concurrentable equity or max-royalty
            1/12 industry label) landlords (above 5 or 30 days)
            <h3>
              Netsuite.com/advantage is front-running uselessly, profits beyond
              labor. Dollars lose value, but that is, 'Tax-Payer Money?'
            </h3>
            <a href="https://qr.ae/pGEuhg">
              price fixing immobilizes quality, at an inefficient change-rate
            </a>
            .
            <h3>
              2 weeks off or permenant is not comparative innocence,
              discrimination can be deduced with a fulfilled example, or
              conversations discrimination cannot be of a quota.
            </h3>
            I think those that want to chore again are just lazy
            <h1>castigated gerontocracy</h1>
            not charged with evidence. kill yourself mtg
            <h2>
              no due process in 1/6, homelessness with psych charges without
              biomedical or consent for self-"harm" subjective,
              indifference-utility. $35m 1/6 witch-hunt, Saver money.
            </h2>
            I'm sorry my POV isn't hott enough
            <h3 ref={this.con}>
              Drugs are a good; would cartel pharmacies be peaceful if we open
              source?
            </h3>
            get rid of all the fractional-reserve-jewelers
            (transaction-based-sdr, truncated production tax, geohash/mo
            spoofable precinct, 3% under $2k, free rider immutable,
            sewage-police-lawsuits)
            <h1>America is not afro culture (per capita), CNN...</h1>
            "What are some scenarios where auditors played a role in the poor
            performance of state-owned institutions?"
            <br />
            *Ratings’ agencies* should be an independent, non-profit, that is,
            technology before it is on the market, or is unable to be
            rent-seeken (which is profits as trust, beyond labor; considering
            such as input costs).
            <br />
            This incentive to **state victimize** is the *actual cause* of
            General Maintenance failures.
            <br />
            The Jury system is broken, for desists and holds are of{space}
            <a href="https://constitutioncenter.org/interactive-constitution/article/article-iii#article-section-2">
              11/12 industry-variable jury surrender
            </a>
            .
            <br />
            Finance and the biomedical mandates, and mental slander for
            homelessness and racketeering state healthcare at the same time,
            forcing medication on people for the former economic welfare
            failures, productive efficiency GDP/hours-GDP/p, and insurance
            mediation pennywise operational monopsony duress false bid pool,
            ‘name-your-price tool,’ -loss, is fallacious; people are good
            economically, and GDP/hours is productivity if GDP/hours-GDP/p is
            productive efficiency, tech advancement -GDP/p.
            <h2 ref={this.pdt}>"bankrolling-rent"</h2>
            How do you bet responsibly by shooting {"<"}$25k fish in a barrel.
            Show us your real time holdings PER ACCOUNT WITH IDENTIFICATION OF
            not more than 3 accounts Castigation gentrification, Medicare 44%
            stock sales, $829.5b/yr Of all healthcare $2.7t/yr that also is
            rent, $700b/yr residential and commercial structural “fixed” startup
            costs, labor-elastic. Commercial leases are UNKNOWN
            <h1>Give me your head and this all goes away</h1>
            contractor liability, donee defense or
            borrower/tennant-potential-condo-owner/
            <a href="https://www.cbo.gov/sites/default/files/111th-congress-2009-2010/costestimate/amendreconprop.pdf#page=14">
              false-bid-pool-loss
            </a>
            {space}implausibly deniable use your own money, trespass, I will
            take the money out. I am suing the Treaury for forcing me to take
            these checks. there is $2t checking, currencyComponentOfM1, $1t
            stimulous, will become ACTUAL tax money after 3 yrs of people like
            me, not cashing out, and accepting such a claim. I prefer
            cashless-bail for unfounded, unmeasured laws, yeild back. "You go on
            a million job interviews, I am going to live until 120." Greg Kelly
            (Trump Supporter).
            <br />
            <br />
            hold = desist, barred is objectables sustained.
            <h1 ref={this.trust}>
              you can't talk your way out of cornering the market, prohibiting
              trade and fraud, cunt
            </h1>
            "Biden deal expired - we are concerned about non-rollover insurance.
            Stop Covid-19 Surprise Medical Bills Act." All bills are duress and
            as price-gounging as surprise impossibilities for borrower (
            <a href="https://fred.stlouisfed.org/graph/?g=Lzx3">
              $12k/64 per person a year new
            </a>
            ), and donee defense invocations.
            <h1>
              Lizzie Fletcher: "This Congress and the previous congress took
              numerous steps to mitigate the health and economic damaging
              impact, and now we are addressing consumers," how? by controlling
              quality? DROP OFF BITCH, tests and medication are expensive
              because USPTO rent-seeks science, you aren't making strides, you
              are a defendant in the case of
              price-gouging/gentrification/cornering by labor costs. Sending
              test kits and masks out are free rider mutable afterwards, and all
              you have done is front-run{space}
              <a href="https://qr.ae/pGEMIn">entrepreneurs</a>, whom bring the
              science to market, in a responsible way if they are waiting for
              transaction-based sdr/vault-share currency/prescribers/insurer
              false bid pool loss/<a href="https://qr.ae/pGEMgV">invoice</a>
              {space}competition.
            </h1>
            <h3>
              "Why are free or low cost but outstanding asymptomatic testing is
              important?"
            </h3>
            <h2>
              it has proven virion isn't correlated above population baseline
              since we test 50% of the time asymptomatically, with 12.5% percent
              true positive and 12.5% false positive{space}
              <a href="https://humanhuman.info/polio">of the whole</a>.
            </h2>
            <br />
            Increasing prices to react to demand is not price gouging, but
            flaccid collective loss for trust-building finite producers, is. We
            are talking pennywise, vs levels.
            <h1>supply==demand when labor==supply (outlay, today)</h1>
            more demand from another market, by debt, allows the free rider
            immutable tax to invoke a mutable premium. A change by technology or
            behavior is the same capacity. Amazon still is a{space}
            <a href="https://www.investopedia.com/ask/answers/031815/why-are-there-no-profits-perfectly-competitive-market.asp">
              finite producer
            </a>
            , so price-discretion is theirs, not the market's.
            {space}
            <a href="https://occupywallst.quora.com">stop the stock</a>
            {space}over{space}
            <a href="https://saverparty.quora.com">currency</a>
            {space}gentrification!
            <h2>
              government gentrification or debt for free rider immutables
              (sewage, poilice and lawsuits exclusively) is price gouging, and
              trust-building with government over operational monopolies instead
              of target margining is rent-seeking.
            </h2>
            when there is a crisis, real, imagined, or{space}
            <a href="https://vaults.biz/gdp">historical/structural</a>, people
            can take advantage of that hazard with false bid pool loss claims, a
            pyramid scheme ('name-your-price-tool').
            <h1>
              the point of tech advancement is unemployment, liesure, choring
              copyrighting and contributions, retard
            </h1>
            Mr. Soto, FL: "
            <a href="https://fred.stlouisfed.org/graph/?g=Lznz">
              We put money in pockets
            </a>
            , from selling shares general revenue, and stopped a great
            recession."
            <Cable
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/1g2h4xn6w9s6ux5/Screen%20Shot%202022-02-02%20at%201.17.58%20PM.png?dl=0"
              }
              float="left"
              title="Pandemic Profiteers: Legislation to Stop Corporate Price Gouging Energy and Commerce (Yooutube) - https://youtu.be/L7nX0yUIRAk"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/tfdxw5izvd5oauo/Screen%20Shot%202022-02-02%20at%201.07.36%20PM.png?dl=0"
              }
              float="left"
              title="Pandemic Profiteers: Legislation to Stop Corporate Price Gouging Energy and Commerce (Yooutube) - https://youtu.be/L7nX0yUIRAk"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Infringing on Savers' resources will improve prices for Savers."
            <h2>
              democrats want to fine operational monopolies (price gouging
              profiteers, profits kept in a business account rather than quality
              of work to sole-proprietorship w/ max-royalies, not-withstanding),
              not target margin, cap by units (5 storefronts + condominiums, 5
              auto liens) or days (30, for hotels).
            </h2>
            for government bond laundering, Republicans want to do that and for
            private userers (laborless-demand, rent-seekers' intent
            implauisbly-deniable)
            <Cable
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/eile44s5dnqd4s7/IMG_9517.PNG?dl=0"
              }
              float="left"
              title=" - https://fred.stlouisfed.org/graph/?g=LxtV"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Getting labor back to work has been an issue this entire pandemic."
            <br />
            Mr. Dunn, FL, "People are incentivized not to work," I don't see how
            2.8m/170m continuing claims has that great of an effect.
            <br />
            <br />
            Mr. Dunn, Most people have taken the shot, there is not many people
            that could not get out of the dilemma-duress. It is not
            constitutional, Tranquil and voluntary trade, by Microeconomic
            Supply and Demand reasoning, for comparative advantage and tech
            advancement (-GDP/p) not cornering the market with higher wages,
            especially from laborless-demand (rent-seeking-userers: insurers,
            lenders, landlords above 5 or 30 days).
            <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
              The Trial of all Crimes, except in Cases of Impeachment; shall be
              by
              {space}
              <a href="https://constitutioncenter.org/interactive-constitution/article/article-iii#article-section-2">
                Jury; and such Trial
              </a>
              {space}shall be held in the State where the said Crimes shall have
              been committed; but when not committed within any State, the Trial
              shall be at such Place or Places as the Congress may by Law have
              directed.
            </div>
            <h2>
              not even 'steel' is without the variable elastic cost of labor and
              its derivations in material-infaltion, market concentration as
              indices over the dollar, homes collateral, profits flaccid loss,
              false bid pools, implausible landlord use, repo-cycle kept down
              payments, and labor...
              <br />
              GDP/hours is productivity only if -GDP/p is tech advancement
              {/**apprecation*/}
            </h2>
            Mr. Bucshon IN: fraud who cannot actualize{/**figure */} per capita
            deaths, "do not castigate our broken free market economy and expert
            lest malpractice industry invariable broken jury" profits are
            flaccid collective loss, waste
            <h2>
              Rakeen Mahud : "As an economist, I need to think GDP/p is good.
              Don't trust three letter names, and don't trust the latest
              saturation of free rider mutable, good, well-paid jobs, that which
              only increases prices, still as disposable demand does get spent
              per food (only fixed after rent-seeking is banned)."
              {/**tony carlenas */}
            </h2>
            not by price. That is why price-elasticity is transitive-property.
            Contracts are estimates, NJ Consumer Fraud Act is fraud, not an
            option to buy a figure. It is donee claimable and borrower duress
            defensable.
            <br />
            <br />
            Mr. Guthrie KY: "People are hiring," because of a century of
            laborless-demand borne of lending, insurance and landlording.{space}
            <a href="https://qr.ae/pGEMIn">We are maxed-out</a>. Unable to make
            money is most harmed of those labor that are retired, not small
            business, whom necessarily have had profits.
            <h1>(cash/debt)*income every year back</h1>
            <h2>
              Truncated Production Tax; don't stop price-gouging unless donee or
              borrower defense, for per quality is subjective.
            </h2>
            Take on{space}
            <a href="https://qr.ae/pGEMpY">
              bad actors that support small business
            </a>
            . Liability is a transitory-property, profits are excess of the
            supply chain, labor-borne-demand.
            <br />
            <br />
            Mr. Harman, localized price gouging, large scale core problem is
            normalizing in industry-variance, not just PPE and toilet paper
            initially, because of USPTO rent-seeking." Manufacturers and
            retailers are mirroring this price-gouging. Crises of corporate
            concentration in every sector. 15 brands of detergent, only a few
            producers provide, which harms consumers ability to compete with
            them, as vendors. Price-gouging legislation is a solution. Focusing
            where consolidation is happening. It is work the FTC needs to do.
            This is a{space}
            <a href="https://humanharvest.info/polio">
              novel national emergency
            </a>
            , pandemic of bona fide academic actuaries (per capita exogeneity).
            <br />
            <Cable
              style={{
                maxWidth: this.state.lastWidth ? "200px" : "300px",
                width: "100%",
                height: "auto"
              }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/fckwkvi1l8ln0gj/Screen%20Shot%202022-01-18%20at%206.53.38%20PM.png?dl=0"
              }
              float="right"
              title="https://humanharvest.info/polio"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Mr. McNerney, "'Well, what is the solution? Enforce price gouging in
            emergencies or disasters.' I don't acknowledge that right." Saver
            Party Chairperson.
            <h2>
              "Touches prices, time and cost. - von mises, government raises
              prices," in dead weight box Pareto Microeconomics Supply and
              Demand propensities and allocation of indifferences between
              marginal utilities.
            </h2>
            <h3>
              Material cost going up, labor, shipping, PCE, then structures for
              lease, we do not know commercial leases only structures. all these
              things drive inflation up, when labor has more money I guess. But
              we don't. Impacts labor-equity/savers the most, not small business
            </h3>
            <br />
            Mt. Latta "prices per quality moves across the market"
            <h2>
              Profit is not part of the supply chain you dumb shit{space}
              <span
                style={{
                  textDecoration: "line-through"
                }}
              >
                republican
              </span>
              {space}male
            </h2>
            They can price gound because they own the goods. Input costs are
            elastic, not brittle.. fucking bitch, Rakeen Mahud wants to
            gentrify, "invest in the system" to rent-seek for the
            corporate-government bourgeois, like hiring more teachers and
            calling education a success, rather than looking at education level
            per industry.
            <h3>3% under $2k</h3>
            target margin operational monopolies, Bipartisans are scam artists,
            sanctions on Russia and China's roads and pipelines?
            <br />
            Kathy Castor: "Double the going rate, is price gouging." Who are you
            to discern location-based price transitions? input costs are input
            costs.
            <br />
            <br />
            I'm not yielding back, you fucking wet pussy.
            <br />
            Mr. Upton, Michigan: "The left wants to allow china to run forward,
            by population size. Our farmers need that, and so do our families
            and streets. -GDP/p is tech advancement."
            <h2>
              This site is a bottom left site. Inflation is because of asset
              market concentration, busy-work, laborless-demand, by donee and
              borrower defense invocations, loitering.
            </h2>
            "
            <a href="https://fred.stlouisfed.org/graph/?g=Lmo6">
              Shortfall by continuing claims
            </a>
            ." - Sarah Frasch.
            <br />
            "Get your thoughts together into one sentence
            <br />
            It should resolve all issues."
            <br />
            <br />
            word salad:{space}
            <a href="https://www.quora.com/profile/Nick-Carducci">
              labor input cost is labor
            </a>
            <h1>
              If suppliers understand how much more spending they have, they
              will raise prices, but it hasn't actually entered the economy,
              still only $2t currency component, $170t Good Will, general
              revenue (asset sales, cornering over elactic-labor costs, made
              inelastic, like debt on free rider immutables, made mutable.
              TRUNCATED PRODUCTION TAX).
            </h1>
            <br />
            bipartisan minority basis, counting non-voter, "no-candidate."
            <h2>
              "I don't want autonomous trucking to be displaced RIGHT NOW?!?!"
            </h2>
            Pallone sounds out of breathe in that{space}
            <a href="https://extension.okstate.edu/fact-sheets/coronavirus-sars-cov-2-and-the-covid-19-pandemic-what-is-it-and-how-does-it-spread.html">
              n95 mask. it
            </a>
            {space}never hops on dust
            <h2>constitutional how? the jury requires industry-variance</h2>
            Price gounding or insurance abetting invoices?
            <br />
            <br />
            Bill belicheck held to ridiculous standards can act normally in
            hiring, all other discrimination can compare to others’ merits, and
            blame other characteristics, or have proof of conversations.
            <h1>
              If a store owner cant take matters into their own hands, I can
              with counterfeit in contract
            </h1>
            "Gun rights," is implied to be denied in stop and frisk, only state
            licensure “rights”
            <br />
            People’s drug use is not your problem
            <br />
            You just want your hospital and pharmacy fund inequality, cornering
            the market with input costs. You are worthless.
            <br />
            Rap sheet a mile long, can be violent, threat to others, bad person,
            that’s its.
            <br />
            "Slap caused a fracture," that could be displaced. He lives in a
            tent. Remember the homeless guy that stabbed a girl in the morning?
            norm, so glad you are ok, that is the most important think.
            Homeless, don’t have an address, because of rent seekers
            <br />
            <Cable
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/mue6qi0tqu1t2ow/IMG_9520.PNG?dl=0"
              }
              float="left"
              title=" - "
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            duress is not hypocrisy
            <br />
            Anti rent seeking is about humanity to man, and economic welfare,
            productive efficiency
            <br />
            General maintenance unit
            <h1>
              the holocaust was about{space}
              <a href="https://journals.openedition.org/monderusse/9324#:~:text=As%20in%20other%20East">
                race
              </a>
            </h1>
            <Cable
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/eile44s5dnqd4s7/IMG_9517.PNG?dl=0"
              }
              float="left"
              title=" - https://fred.stlouisfed.org/graph/?g=LxtV"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>
              <a href="https://fred.stlouisfed.org/graph/?g=Lxue">
                Lou Dobbs: word salad
              </a>
            </h2>
            <a href="https://www.bls.gov/news.release/jolts.t04.htm">
              Quits: 4.3m/December
            </a>
            , the result is 10m open jobs, isn’t that more capacity to spend,
            did you even discount new hires? it is actually the same as 9/2021.
            {space}
            <a href="https://humanharvest.info/polio">MOSTLY OLD PEOPLE</a>.
            <br />
            10t (only $2t checking exists) so everyone who wants to work, can
            work, wages are doing well, economy is go go, how do you balance
            labor as a living cost?
            <br />
            Lack of income, wages, an economy doing what we should, equilibrium
            as economists like to call it. Senior citizens have investments
            depreciated because of high inflation
            <br />
            Get fed to throttle back a bit. Interest rate hikes would lessen
            animated, vigorous jobs, which we want. It doesn’t hurt families.
            <br />
            Taking Savers’ resources in the 20% of U.S. lands will lower
            material prices. It is too much money in financial system, printed.
            <h1>
              Millions of people do it the right way: they are in line, and
              {space}
              <a href="https://qr.ae/pGEHH1">they are waiting</a>.
            </h1>
            "Determined money laundering without any business, that is not
            constitutional to prosecute outside of the racketing law-board,
            mental health biomedical evidence, laundering-intent or
            subjective-monetary or partial-information/duress-moot pleas
            decisionmaking be damned."
            <h2>
              Adjudication can be juris prudent or dictate by diction (state
              standing), juris.
            </h2>
            "Three is a party."
            <br />
            adjunication/security failures will not be adjunicated
            <h2>
              U.S. political prisoners; retards need to shuffle before
              extrapolation
            </h2>
            "I stopped being brandon strock, the runaway
            {/**walkaway democrats founder */} campaign guy, tb test, fight
            breaks out are you able to defend yourself. concret cell, 24hr/day
            lockdown. No judge today, not evidence."
            <br />
            <br />
            Psych incite violence misdemeanor public nuisance, not a crime. Drop
            dead, by any means, wet, wet pussy. Can you defend yourself, your
            honor?
            <br />
            <br />
            "back and forth, leash at least for next election." so why would
            juris be paid by false bid pool losses, anything but truncated
            production tax.
            <br />
            <br />
            {/*it is about race but we don't know which race, non-all-incidence artifact or non-exclusive byproduct*/}
            <Cable
              style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/nt3nzt4okavnm6n/Screen%20Shot%202022-02-01%20at%207.31.56%20PM.png?dl=0"
              }
              float="left"
              title="The SARS-CoV-2 envelope and membrane proteins modulate maturation and retention of the spike protein, allowing assembly of virus-like particles"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "
            <a href="https://www.sciencedirect.com/science/article/pii/S0021925820001015">
              S recycling
            </a>
            {space}and, consequently, M-mediated retention of SARS-CoV-2 S." [
            <a href="https://www.mdpi.com/1422-0067/22/12/6558/pdf">ref</a>]
            <br />
            <br />
            just an unbonified political lie -{space}
            <a href="https://extension.okstate.edu/fact-sheets/coronavirus-sars-cov-2-and-the-covid-19-pandemic-what-is-it-and-how-does-it-spread.html">
              no soul
            </a>
            <h2>Quid pro quo is only for free rider mutable</h2>
            People are going to be using live from drugs, alchool depression at
            a level never seen before. excess population growth a life
            expectancy ago.
            <br />
            <br />
            Steve Scalese: "The top-left wants to undermine the economy, find
            origins of covid, finally prove virion and cell makes virion and it
            isn't just byproduct."
            <br />
            CBO in 2010 said government healthcare would save money from the
            insurance alternative because insurance is a net loss.
            <br />
            <br />
            No past business is actually business because credit is compound and
            donee defense-invocations
            <br />
            <br />
            Jurisdiction is standing, don’t.
            <br />
            “No grey area in law vs crime.”
            <br />
            Metric-system is frequent by which material or liquid? Jurisdiction
            is standing of juris, juris may not be prudent. Diction vs dictate.
            Jurisdictate is juris, but disregards the whole juris of,
            “no-candidate.”
            <br />
            <br />
            "Socialist-China, bringing more chip factories, billions sillindra
            style slush funds, it is driving up inflation and
            market-concentration over currency colludes to do this government,
            corporate vs people. Radical, far-left, big-governemnt socialists."
            <h2>rationalism is conservative, nationalism is retarded</h2>
            "Get people back to work again."{space}
            <a href="https://vaults.biz/party">They are</a>, but why? that is a
            sign of tech deprecation.
            <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
              It is unclear whether such a reduction in the growth rate of
              spending could be achieved, and if so, whether it would be
              accomplished through greater efficiencies in the delivery of
              health care or through reductions in access to care or the quality
              of care.
            </div>
            Only plundering is a fixed cost, Otiose of nothing, integrally
            itself.
            <br />
            <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
              Marx, 188X- "Vulgar socialism (and from it in turn a section of
              the democrats) has taken over ... the mode of production ... After
              the real relation has long been made clear, why retrogress again?"
            </div>
            <br />
            ​People are good for tech advancement, -GDP/p
            <br />
            <br />
            "Good conservative republican over big-gov socialist districts."
          </div>
        </div>

        <Archive
          //chapter2={this.chapter2}
          /*sci={this.sci}
          trust={this.trust}
          sdr={this.sdr}
          receipts={this.receipts}
          work={this.work}
          gdp={this.gdp}
          party={this.party}
          marx={this.marx}
          air={this.air}
          immi={this.immi}*/
          ref={this.ch2refs}
          journal={this.state.journal}
          scrolling={this.state.scrolling}
          width={this.state.width}
          scrollTop={this.state.scrollTop}
          lastWidth={this.state.lastWidth}
          //offScroll={this.state.offScroll}
        />
        <div
          style={{
            opacity: !this.state.footer && this.state.scrollTop !== 0 ? 0.3 : 1,
            maxHeight: "100%",
            height: "min-content",
            overflowY: "auto",
            overflowX: "hidden",
            maxWidth: "594px",
            backgroundColor: "rgb(180,180,250)",
            width: this.state.footer
              ? "min-content"
              : this.state.height < 700
              ? "56px"
              : "56px", //,"calc(100% - 6px)",
            //height:this.state.width<400?"50px":"0px",
            transition: ".3s ease-in",
            border: "3px solid",
            position: "fixed",
            bottom: "0px"
          }}
        >
          {this.state.footer && (
            <div
              onClick={() => this.setState({ footer: false })}
              style={{
                userSelect: "none",
                cursor: "pointer",
                WebkitTextStroke: "2px rgb(100,200,140)",
                fontSize: "26px",
                fontWeight: "bold",
                color: "black",
                position: "fixed",
                bottom: "0px",
                left: 0 /* 600 -( !isNaN(this.state.width)
              ? Math.min(600, this.state.width)
              : 0),*/,
                padding: "6px 10px",
                backgroundColor: "rgba(240,240,240,.6)",
                borderTopRightRadius: "25px",
                borderTop: "2px solid rgba(100,200,250,.6)",
                borderLeft: "2px solid rgba(200,100,250,.6)"
              }}
            >
              &times;
            </div>
          )}
          <div
            style={{
              overflow: "hidden",
              //color: !this.state.footer ? "rgb(180,180,250)" : "black",
              height: this.state.footer ? "" : "0px"
            }}
          >
            Immunity is proven to not be correlated with per capita sickness, so
          </div>
          <a style={{ color: "black" }} href="https://paydayt.com">
            take care of eachother
          </a>
          , globalism,
          {space}
          <a style={{ color: "black" }} href="https://qr.ae/pGEuMc">
            nuclear family
          </a>
          <h2 onClick={() => this.setState({ footer: true })}>
            New technologies, on the market (not free)
          </h2>
          <div
            style={{
              overflow: "hidden",
              //color: !this.state.footer ? "rgb(180,180,250)" : "black",
              height: this.state.footer ? "" : "0px"
            }}
          >
            Superfluous intra juris. Con i see convict interntl intranet. Enough
            said (bona fide politics: doubt, move on). Behaving the way they
            did, while the rest of us couldn’t.{space}
            <a style={{ color: "black" }} href="https://vaults.biz/pdt">
              Pattern day trading
            </a>
            .
            <br />
            <br />
            <a style={{ color: "black" }} href="https://vaults.biz/dns">
              dns
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/biz">
              biz
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/con">
              con
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/sci">
              sci
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/trust">
              trust
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/sdr">
              sdr
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/rec">
              receipts
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/work">
              work
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/gdp">
              gdp
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/party">
              party
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/marx">
              marx
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/air">
              air
            </a>
            {space}
            <a style={{ color: "black" }} href="https://vaults.biz/immi">
              immigration
            </a>
            <br />
            <br />
            per hour price deflation spam
            <br />
            gentrification
            <br />
            juryduty
            <br />
            ftccomplains
            <br />
            censorship
            <br />
            wwii
          </div>
        </div>
        <div
          onClick={
            () =>
              this.state.scrollTop !== 0 && !this.state.footer
                ? this.setState({ footer: true })
                : this.state.scrollTop !== 0
                ? window.scroll(0, 0)
                : this.state.footer
                ? this.setState({ footer: false })
                : window.scrollBy(0, this.bottom.current.offsetTop) //this.state.pageYOffset)

            /*({
              top: 0,
              left: 0,
              behavior: "smooth"
            })*/
          }
          style={{
            userSelect: "none",
            cursor:
              this.state.scrollTop !== 0 && !this.state.footer
                ? "pointer"
                : this.state.scrollTop !== 0
                ? "n-resize"
                : this.state.footer
                ? "pointer"
                : "s-resize",
            WebkitTextStroke: "2px rgb(100,200,140)",
            fontSize: "26px",
            fontWeight: "bold",
            color: "black",
            position: "fixed",
            bottom: "0px",
            right: 0 /* 600 -( !isNaN(this.state.width)
              ? Math.min(600, this.state.width)
              : 0),*/,
            padding: "6px 10px",
            backgroundColor: "rgba(240,240,240,.6)",
            borderTopLeftRadius: "25px",
            borderTop: "2px solid rgba(100,200,250,.6)",
            borderLeft: "2px solid rgba(200,100,250,.6)"
          }}
        >
          {this.state.scrollTop === 0 && !this.state.footer ? "Plan" : "^"}
        </div>
        <hr ref={this.bottom} />
      </div>
    );
  }
}

