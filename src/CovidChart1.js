import React from "react";
import Covid1 from "./Covid1";
class CovidChart1 extends React.Component {
  state = {
    data: [],
    chosenState: "Florida",
    last: 1000,
    crime: true
  };
  componentDidUpdate = (prevProps) => {
    if (this.state.chosenState !== this.state.lastChosenState) {
      var chosenstate = this.props.statesWithCodes.find(
        (x) => x.name === this.state.chosenState
      );
      this.setState(
        { lastChosenState: this.state.chosenState },
        async () =>
          chosenstate &&
          (await fetch(
            `https://services5.arcgis.com/qWZ7BaZXaP5isnfT/arcgis/` +
              `rest/services/COVID_19_Diagnostic_Lab_Testing/` +
              `FeatureServer/0/query?` +
              //`where=1%3D1&`+
              `where=state%20%3D%20'${chosenstate.abbreviation}'&` +
              `outFields=*&` +
              `outSR=4326&f=json`, //&allowedOrigins=` +
            //`${window.location.hostname}`
            {
              "Access-Control-Allow-Origin": window.location.hostname
            }
          ) //`https://services5.arcgis.com/qWZ7BaZXaP5isnfT/arcgis/rest/services/COVID_19_Diagnostic_Lab_Testing/FeatureServer/0/query?where=state%20%3D%20'NJ'&outFields=*&outSR=4326&f=json`
            .then(async (res) => await res.json())
            .then((result) => {
              var covWeekly = this.props.covidData.filter(
                (y) => y.jurisdiction_of_occurrence === chosenstate.name
              );
              Promise.all(
                covWeekly.map(async (cov, i) => {
                  const thisone = result.features.filter((x) => {
                    const att = x.attributes;
                    return (
                      cov.week_ending_date - att.date < 604800000 &&
                      cov.week_ending_date - att.date > 0
                    );
                  });
                  if (!thisone) return null;
                  if (!cov.testing) cov.testing = 0;
                  let c = 0;
                  thisone.map(async (x) => {
                    c++;
                    const att = x.attributes;
                    cov.testing = cov.testing + att.new_results_reported;
                  });
                  return await new Promise(
                    (resolve) => c === thisone.length && resolve(cov)
                  );
                })
              ).then((da) => {
                /*let data = [];
                let p = 0;
                covidDatas.map((x) => {
                  p++;
                  return (data = [...data, ...x]);
                });
                if (p === covidDatas.length)*/
                this.setState({
                  data: da.filter((x) => x)
                });
              });
            })
            .catch((err) => console.log(err.message)))
      );
    }
  };
  render() {
    var statesAvailable = [];
    this.props.covidData.map((x) => {
      return statesAvailable.push(x.jurisdiction_of_occurrence);
    });
    var filteredByState = this.state.data.filter(
      (x) => x.jurisdiction_of_occurrence === this.state.chosenState
    );
    var unique = [...new Set(statesAvailable)];
    /*var statesGood = unique.filter((x) =>
       unique.includes(
        x.jurisdiction_of_occurrence
      )
    );*/
    //console.log(this.props.covidData);
    if (this.state.chosenState === this.state.lastChosenState) {
      return (
        <div
          style={{
            top: "0px",
            display: "flex",
            position: "relative",
            width: "100vw",
            height: "min-content",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              position: "relative",
              top: "0px",
              height: "min-content",
              flexWrap: "wrap",
              display: "flex"
            }}
          >
            {unique.map((x, i) => {
              return (
                <div
                  key={i}
                  style={{
                    alignItems: "center",
                    padding: "4px 7px",
                    border:
                      this.state.chosenState === x ? "1px solid black" : "",
                    display: "flex"
                  }}
                >
                  <div onClick={() => this.setState({ chosenState: x })}>
                    {x}
                  </div>
                  &nbsp;
                  {this.state.chosenState === x && (
                    <button
                      onClick={() => this.setState({ chosenState: null })}
                    >
                      &times;
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          cases to tests
          {filteredByState.length > 0 && (
            <Covid1
              data={filteredByState}
              crime={this.state.crime}
              chosenState={this.state.chosenState}
            />
          )}
        </div>
      );
    } else return null;
  }
}
export default CovidChart1;
