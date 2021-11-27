import React from "react";
import DollarsHeld from "./dollarsheld";
import DollarsEarned from "./dollarsearned";
import DollarsEarnedPerPerson from "./dollarsearnedperperson";
import DollarsEarnedPerEmployee from "./dollarsearnedperemployee";
import DollarsHeldPerPerson from "./dollarsheldperperson";
import GDPPersons from "./gdppersons";
import GDPMoneyPersons from "./gdpmoneypersons";
import Realvsnom from "./realvsnom";
import DebtToSales from "./debttosales";
import GDPtoMoney from "./gdptomoney";
import Pensions from "./pensions";
import FederalEnslavement from "./federalenslavement";
import Govbook from "./govbook";
import Pplbook from "./pplbook";
import GDPToIncome from "./gdptoincome";
import IncomeToGdp from "./incomeToGdp";
import SlaveDriver from "./slavedriver";
import SeparatingPeople from "./separatingpeople";
import TrueGDP from "./trueGDP";
import TrueVelocity from "./trueVelocity";
import TrueGDPbyNonDebt from "./trueGDPbyNonDebt";
import TrueGDPSame from "./trueGDPSame";
import TrueGDPbyNonDebtPerPerson from "./trueGDPbyNonDebtPP";

class Sectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChart: "trueGDPbyNonDebtPerPerson",
      reset: true
    };
  }
  render() {
    const { reset } = this.state;
    //reset: on
    const { width, lastWidth } = this.props;
    /*const ios = () => {
      return [
        /\((ipad);[-\w),; ]+apple/i, // iPad
        /applecoremedia\/[\w.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w.]+);)/i,
        /\bgsa\/([\w.]+) .*safari\//i
      ].find((x) => {
        return navigator.userAgent.match(x);
      });
      /**
       * 
        /\((ipad);[-\w\),; ]+apple/i, // iPad
        /applecoremedia\/[\w\.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
        /\bgsa\/([\w\.]+) .*safari\//i
       *
      /*return (
        [
          "iPad Simulator",
          "iPhone Simulator",
          "iPod Simulator",
          "iPad",
          "iPhone",
          "iPod"
        ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)*
  };*/
    //!/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
    if (this.props.pathname === "/sectors") {
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
          <select
            style={{
              marginTop: "10px",
              width: "100%"
            }}
            value={this.state.openChart}
            onChange={(e) => this.setState({ openChart: e.target.value })}
          >
            {[
              "trueGDPbyNonDebtPerPerson",
              "trueGDPbyNonDebt",
              "trueVelocityPerQuarter",
              "trueGDPminuslostequity",
              "trueGDPminuslostequitySame",
              "SeparatingPeopleFromAssets",
              "SlaveDriver",
              "IncomeToGdp",
              "Pplbook",
              "Govbook",
              "FederalEnslavement",
              "Pensions",
              "GDPtoMoney",
              "DebtToSales",
              "GDPToIncome",
              "DollarsHeld",
              "DollarsHeldPerPerson",
              "DollarsEarned",
              "DollarsEarnedPerPerson",
              "DollarsEarnedPerEmployee",
              "GDPPersons",
              "GDPMoneyPersons",
              "Realvsnom"
            ].map((x) => {
              return <option key={x}>{x}</option>;
            })}
          </select>
          {reset && (
            <div className="fullchart">
              {this.state.openChart === "trueGDPbyNonDebtPerPerson" && (
                <TrueGDPbyNonDebtPerPerson width={lastWidth} />
              )}
              {this.state.openChart === "trueGDPbyNonDebt" && (
                <TrueGDPbyNonDebt width={lastWidth} />
              )}
              {this.state.openChart === "trueGDPminuslostequitySame" && (
                <TrueGDPSame width={lastWidth} />
              )}
              {this.state.openChart === "trueGDPminuslostequity" && (
                <TrueGDP width={lastWidth} />
              )}
              {this.state.openChart === "trueVelocityPerQuarter" && (
                <TrueVelocity width={lastWidth} />
              )}
              {this.state.openChart === "SlaveDriver" && (
                <SlaveDriver width={lastWidth} />
              )}
              {this.state.openChart === "SeparatingPeopleFromAssets" && (
                <SeparatingPeople width={lastWidth} />
              )}
              {this.state.openChart === "IncomeToGdp" && (
                <IncomeToGdp width={lastWidth} />
              )}
              {this.state.openChart === "Pplbook" && (
                <Pplbook width={lastWidth} />
              )}
              {this.state.openChart === "Govbook" && (
                <Govbook width={lastWidth} />
              )}
              {this.state.openChart === "FederalEnslavement" && (
                <FederalEnslavement width={lastWidth} />
              )}
              {this.state.openChart === "Pensions" && (
                <Pensions width={lastWidth} />
              )}
              {this.state.openChart === "GDPtoMoney" && (
                <GDPtoMoney width={lastWidth} />
              )}
              {this.state.openChart === "DebtToSales" && (
                <DebtToSales width={lastWidth} />
              )}
              {this.state.openChart === "GDPToIncome" && (
                <GDPToIncome width={lastWidth} />
              )}
              {this.state.openChart === "DollarsHeld" && (
                <DollarsHeld width={lastWidth} />
              )}
              {this.state.openChart === "DollarsHeldPerPerson" && (
                <DollarsHeldPerPerson width={lastWidth} />
              )}
              {this.state.openChart === "DollarsEarned" && (
                <DollarsEarned width={lastWidth} />
              )}
              {this.state.openChart === "DollarsEarnedPerPerson" && (
                <DollarsEarnedPerPerson width={lastWidth} />
              )}
              {this.state.openChart === "DollarsEarnedPerEmployee" && (
                <DollarsEarnedPerEmployee width={lastWidth} />
              )}
              {this.state.openChart === "GDPPersons" && (
                <GDPPersons width={lastWidth} />
              )}
              {this.state.openChart === "GDPMoneyPersons" && (
                <GDPMoneyPersons width={lastWidth} />
              )}
              {this.state.openChart === "Realvsnom" && (
                <Realvsnom width={lastWidth} />
              )}
            </div>
          )}
          <div>
            <br />
            <br />
            Until 'company' & more 'relative-sector' features are developed, I
            suggest using:
            <br />
            <br />
            <a href="https://seekingalpha.com/earnings/earnings-calendar">
              SeekingAlpha
              <br />
              for valuation,
            </a>
            <br />
            <br />
            <a href="https://www.stockcharts.com/search/?blogAuthor=&q=above&section=symbols">
              StockCharts
              <br />
              for % above n-day moving averages,{" "}
            </a>
            <br />
            <br />
            <a href="https://www.estimize.com/calendar">
              Estimize
              <br />
              for crowdsourced estimates,
            </a>
            <br />
            <br />
            <a href="https://www.profitspi.com/stock/view.aspx?v=search-stocks&p=">
              Profitspi
              <br />
              for earnings information from Quandl (or build with ChartIQ,
              OpenFin, ZoomCharts, Highcharts, etc. (owler.com/company/chartiq),
            </a>
            <br />
            <br />&<br />
            <a href="https://www.gurufocus.com/industry_overview.php?region=USA">
              GuruFocus
              <br />
              for ownership
            </a>
          </div>
        </div>
      );
    } else return null;
  }
}
export default Sectors;
