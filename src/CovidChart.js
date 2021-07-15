import React from "react";
import Covid, { zeroPad } from "./Covid";

const statesArray = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];
class CovidChart extends React.Component {
  state = {
    data: [],
    covidData: [],
    chosenState: "Florida",
    last: 1000,
    crime: true
  };
  componentDidMount = async () => {
    //"https://data.cdc.gov/resource/r8kw-7aab.json"
    /**
     * submission_date floating_timestampsubmission_date
 state textstate
 tot_cases numbertot_cases
 conf_cases numberconf_cases
 prob_cases numberprob_cases
 new_case numbernew_case
 pnew_case numberpnew_case
 tot_death numbertot_death
 conf_death numberconf_death
 prob_death numberprob_death
 new_death numbernew_death
 pnew_death numberpnew_death
 created_at floating_timestampcreated_at
 consent_cases textconsent_cases
 consent_deaths
     */
    await fetch("https://data.cdc.gov/resource/r8kw-7aab.json")
      .then(async (res) => await res.json())
      .then((result) =>
        this.setState({
          covidData: result.map((f) => {
            var foo = { ...f };
            foo.jurisdiction_of_occurrence = f.state;
            const monthExact = String(foo.mmwrweek / 4 + 1);
            const hasDecimal = foo.mmwrweek % 4; //(monthExact + "").split(".")[1];
            const dayNum = hasDecimal
              ? hasDecimal * 7 //Number("." + (monthExact + "").split(".")[1])
              : 1;
            //const dayExactish = 30 * (dayNum / 1);
            const monthNum = monthExact.includes(".")
              ? monthExact.slice(0, monthExact.indexOf("."))
              : monthExact;
            var month = monthNum;
            if (monthNum === 0) {
              month = 1;
            } else if (monthNum > 12) {
              month = 12;
            }
            const dtstr =
              foo.year + "-" + zeroPad(month) + "-" + zeroPad(dayNum);

            foo.week_ending_date = new Date(dtstr).getTime();
            //console.log(foo);
            //foo.week_ending_date = new Date(foo.end_date).getTime();
            return foo;
          })
        })
      )
      .catch((err) => console.log(err.message));
    await fetch("https://data.cdc.gov/resource/muzy-jte6.json")
      .then(async (res) => await res.json())
      .then((result) =>
        this.setState({
          data: result.map((f, i) => {
            var foo = { ...f };
            const monthExact = String(foo.mmwrweek / 4 + 1);
            const hasDecimal = foo.mmwrweek % 4; //(monthExact + "").split(".")[1];
            const dayNum = hasDecimal
              ? hasDecimal * 7 //Number("." + (monthExact + "").split(".")[1])
              : 1;
            //const dayExactish = 30 * (dayNum / 1);
            const monthNum = monthExact.includes(".")
              ? monthExact.slice(0, monthExact.indexOf("."))
              : monthExact;
            var month = monthNum;
            if (monthNum === 0) {
              month = 1;
            } else if (monthNum > 12) {
              month = 12;
            }
            const dtstr =
              foo.year + "-" + zeroPad(month) + "-" + zeroPad(dayNum);

            foo.week_ending_date = new Date(dtstr).getTime();
            //console.log(foo);
            //foo.week_ending_date = new Date(foo.end_date).getTime();
            foo.all_cause = isNaN(Number(foo.all_cause))
              ? 0
              : Number(foo.all_cause);
            foo.natural_cause = isNaN(Number(foo.natural_cause))
              ? this.state.last
              : Number(foo.natural_cause);
            foo.diseases_of_heart_i00_i09 = isNaN(
              Number(foo.diseases_of_heart_i00_i09)
            )
              ? this.state.last
              : Number(foo.diseases_of_heart_i00_i09);
            result.length === i &&
              this.setState({ last: Number(foo.natural_cause) });
            return foo;
          })
        })
      );
  };
  render() {
    //
    var combined = [];
    this.state.data.map((x) => {
      var foo = { ...x };
      var thisone = this.state.covidData.find(
        (y) =>
          Math.abs(y.week_ending_date - x.week_ending_date) < 84600000 &&
          this.state.chosenState === y.state
      );
      if (thisone) foo.covid_cause = Number(thisone.covid_deaths);
      return combined.push(foo);
    });
    var statesAvailable = [];
    combined.map((x) => {
      return statesAvailable.push(x.jurisdiction_of_occurrence);
    });
    var filteredByState = combined.filter(
      (x) => x.jurisdiction_of_occurrence === this.state.chosenState
    );
    var unique = [...new Set(statesAvailable)];
    const statesGood = statesArray.filter((x) => unique.includes(x));
    var statesAvailable1 = [];
    this.props.covidData.map((x) => {
      return statesAvailable1.push(x.jurisdiction_of_occurrence);
    });
    var filteredByState1 = this.props.covidData.filter(
      (x) => x.jurisdiction_of_occurrence === this.state.chosenState
    );
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100vw",
          height: "min-content",
          flexDirection: "column",
          marginBottom: "100px"
        }}
      >
        <div style={{ flexWrap: "wrap", display: "flex" }}>
          {statesGood.map((x, i) => {
            return (
              <div
                key={i}
                style={
                  this.state.chosenState === x
                    ? { border: "1px solid black" }
                    : { padding: "5px" }
                }
                onClick={() => this.setState({ chosenState: x })}
              >
                {x}
              </div>
            );
          })}
        </div>
        {/*<div
          onClick={
            this.state.crime
              ? () => this.setState({ crime: false })
              : () => this.setState({ crime: true })
          }
          style={
            this.state.crime
              ? {
                  border: "1px solid black"
                }
              : {}
          }
        >
          chart crime
        </div>*/}
        <strong>Underlying</strong>Complete data is delayed sometimes by 1-2
        weeks
        <br />
        {filteredByState.length > 0 && filteredByState1.length > 0 && (
          <Covid
            data={filteredByState}
            crime={this.state.crime}
            chosenState={this.state.chosenState}
            covidData={filteredByState1}
          />
        )}
      </div>
    );
  }
}
export default CovidChart;
