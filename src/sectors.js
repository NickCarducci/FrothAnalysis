import React from "react";
import DollarsHeld from "./home/dollarsheld";
import DollarsEarned from "./home/dollarsearned";
import DollarsEarnedPerPerson from "./home/dollarsearnedperperson";
import DollarsEarnedPerEmployee from "./home/dollarsearnedperemployee";
import DollarsHeldPerPerson from "./home/dollarsheldperperson";
import GDPPersons from "./home/gdppersons";
import GDPMoneyPersons from "./home/gdpmoneypersons";
import Realvsnom from "./home/realvsnom";
import DebtToSales from "./home/debttosales";
import GDPtoMoney from "./home/gdptomoney";
import Pensions from "./home/pensions";
import FederalEnslavement from "./home/federalenslavement";
import Govbook from "./home/govbook";
import Pplbook from "./home/pplbook";
import GDPToIncome from "./home/gdptoincome";
import IncomeToGdp from "./home/incomeToGdp";
import SlaveDriver from "./home/slavedriver";
import SeparatingPeople from "./home/separatingpeople";
import TrueGDP from "./home/trueGDP";
import TrueVelocity from "./home/trueVelocity";
import TrueGDPbyNonDebt from "./home/trueGDPbyNonDebt";
import TrueGDPSame from "./home/trueGDPSame";
import TrueGDPbyNonDebtPerPerson from "./home/trueGDPbyNonDebtPP";
import "./home.css";

class Sectors extends React.Component {
  state = {
    openChart: "trueGDPbyNonDebtPerPerson"
  };
  render() {
    const { width } = this.props;
    return (
      <div
        className={
          this.props.pathname === "/sectors" ? "chartslist" : "chartslisthide"
        }
      >
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
        {width === this.props.lastWidth && (
          <div className="fullchart">
            {this.state.openChart === "trueGDPbyNonDebtPerPerson" && (
              <TrueGDPbyNonDebtPerPerson width={width - 20} />
            )}
            {this.state.openChart === "trueGDPbyNonDebt" && (
              <TrueGDPbyNonDebt width={width - 20} />
            )}
            {this.state.openChart === "trueGDPminuslostequitySame" && (
              <TrueGDPSame width={width - 20} />
            )}
            {this.state.openChart === "trueGDPminuslostequity" && (
              <TrueGDP width={width - 20} />
            )}
            {this.state.openChart === "trueVelocityPerQuarter" && (
              <TrueVelocity width={width - 20} />
            )}
            {this.state.openChart === "SlaveDriver" && (
              <SlaveDriver width={width - 20} />
            )}
            {this.state.openChart === "SeparatingPeopleFromAssets" && (
              <SeparatingPeople width={width - 20} />
            )}
            {this.state.openChart === "IncomeToGdp" && (
              <IncomeToGdp width={width - 20} />
            )}
            {this.state.openChart === "Pplbook" && (
              <Pplbook width={width - 20} />
            )}
            {this.state.openChart === "Govbook" && (
              <Govbook width={width - 20} />
            )}
            {this.state.openChart === "FederalEnslavement" && (
              <FederalEnslavement width={width - 20} />
            )}
            {this.state.openChart === "Pensions" && (
              <Pensions width={width - 20} />
            )}
            {this.state.openChart === "GDPtoMoney" && (
              <GDPtoMoney width={width - 20} />
            )}
            {this.state.openChart === "DebtToSales" && (
              <DebtToSales width={width - 20} />
            )}
            {this.state.openChart === "GDPToIncome" && (
              <GDPToIncome width={width - 20} />
            )}
            {this.state.openChart === "DollarsHeld" && (
              <DollarsHeld width={width - 20} />
            )}
            {this.state.openChart === "DollarsHeldPerPerson" && (
              <DollarsHeldPerPerson width={width - 20} />
            )}
            {this.state.openChart === "DollarsEarned" && (
              <DollarsEarned width={width - 20} />
            )}
            {this.state.openChart === "DollarsEarnedPerPerson" && (
              <DollarsEarnedPerPerson width={width - 20} />
            )}
            {this.state.openChart === "DollarsEarnedPerEmployee" && (
              <DollarsEarnedPerEmployee width={width - 20} />
            )}
            {this.state.openChart === "GDPPersons" && (
              <GDPPersons width={width - 20} />
            )}
            {this.state.openChart === "GDPMoneyPersons" && (
              <GDPMoneyPersons width={width - 20} />
            )}
            {this.state.openChart === "Realvsnom" && (
              <Realvsnom width={width - 20} />
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
  }
}
export default Sectors;
