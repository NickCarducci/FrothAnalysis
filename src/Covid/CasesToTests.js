import React from "react";
import { shortNumber } from ".";
//import * as d3 from "d3-shape";
//import { zeroPad } from "./Covid";

class C2T extends React.Component {
  constructor(props) {
    super(props);

    let testingData = [];
    let testing = [];
    let noData = [];
    let suspectedData = [];
    let date = [];
    var suspected = [];
    var no = [];
    props.data.map((x) => {
      date.push(x.week_ending_date);
      suspected.push(x.total);
      suspectedData.push([x.week_ending_date, x.total]);
      testing.push(x.testing);
      testingData.push([x.week_ending_date, x.testing]);
      no.push(0);
      return noData.push([x.week_ending_date, 0]);
    });
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDeaths = 0; //Math.min(...suspected);
    var highDeaths = Math.max(...testing);
    var highCovidDeaths = Math.max(...suspected);
    noData.sort((a, b) => a[0] - b[0]);
    suspectedData.sort((a, b) => a[0] - b[0]);
    testingData.sort((a, b) => a[0] - b[0]);

    var state = {
      highCovidDeaths,
      testingData,
      suspectedData,
      noData,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDeaths,
      highDeaths
    };
    this.state = state;
    this.testing = React.createRef();
  }
  /*mount = () => {
    const start = (ref, data) => {
      console.log(ref);
      var svg = d3.select(ref);
      //.append("svg")
      /*.attr("width", "100%")
        .attr("height", "200px")
        .attr("display", "flex")
        .attr("position", "absolute")
        .attr("transform", "scale(1,-1)")
        .attr("top", "0");*

      var curveFunc = d3
        .line()
        .curve(d3.curveMonotoneX.beta(0.5))
        .x((d) => d.x)
        .y((d) => d.y);

      const curve = data.map((ar) => {
        return { x: ar[0], y: ar[1] };
      });
      svg
        .append("path")
        .attr("d", curveFunc(curve))
        .attr("stroke", "black")
        .attr("fill", "none");
    };
    const testingData = this.state.testingData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - this.state.lowDeaths) / this.state.yAxis) * 150
    ]);
    start(this.testing.current, testingData);
  };*/
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      let testingData = [];
      let testing = [];
      let noData = [];
      let suspectedData = [];
      let date = [];
      var suspected = [];
      var no = [];
      this.props.data.map((x) => {
        date.push(x.week_ending_date);
        suspected.push(x.total);
        suspectedData.push([x.week_ending_date, x.total]);
        testing.push(x.testing);
        testingData.push([x.week_ending_date, x.testing]);
        no.push(0);
        return noData.push([x.week_ending_date, 0]);
      });
      var lowDate = Math.min(...date);
      var highDate = Math.max(...date);
      var lowDeaths = 0; //Math.min(...suspected);
      var highDeaths = Math.max(...testing);
      var highCovidDeaths = Math.max(...suspected);
      noData.sort((a, b) => a[0] - b[0]);
      suspectedData.sort((a, b) => a[0] - b[0]);
      testingData.sort((a, b) => a[0] - b[0]);
      this.setState(
        {
          highCovidDeaths,
          testingData,
          suspectedData,
          noData,
          yAxis: highDeaths - lowDeaths,
          xAxis: highDate - lowDate,
          lowDate,
          highDate,
          lowDeaths,
          highDeaths
        }
        //() => this.mount()
      );
    }
  };
  render() {
    const { linecss } = this.props;
    const noData = this.state.noData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9
      )}`,
      `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
    ]);
    const testingData = this.state.testingData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9
      )}`,
      `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
    ]);
    const suspectedData = this.state.suspectedData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9
      )}`,
      `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
    ]);

    return (
      <div style={{ ...this.props.countblock, width: "100%", height: "200px" }}>
        <div
          style={{
            maxWidth: "50%",
            top: "0px",
            height: "min-content",
            display: "flex",
            position: "absolute",
            right: "20px",
            flexDirection: "column",
            zIndex: "9",
            backgroundColor: "rgba(250,250,250,.6)"
          }}
        >
          highest daily covid-suspected cases&nbsp;-&nbsp;
          {shortNumber(this.state.highCovidDeaths)}
          <br />
          highest daily testing -&nbsp;
          <br />
          {shortNumber(this.state.highDeaths)}
          <div
            style={{
              top: "0px",
              height: "min-content",
              display: "flex",
              position: "relative",
              right: "0px"
            }}
          >
            {new Date(this.state.lowDate).toLocaleDateString()}&nbsp;
            {new Date(this.state.highDate).toLocaleDateString()}
          </div>
          {/*<div
              style={{
                top: "200px",
                height: "min-content",
                display: "flex",
                position: "absolute",
                right: "0px",
                flexDirection: "column"
              }}
            >
              {this.state.lowDeaths}
            </div>*/}
        </div>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {noData.map(
            ([x, y], i) =>
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width={1}
                  height={200}
                  stroke="rgb(230,230,230)"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {testingData.map(
            ([x, y], i) =>
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width={2}
                  height={2}
                  stroke="black"
                  fill="rgb(200,200,200)"
                  strokeWidth={2}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {suspectedData.map(
            ([x, y], i) =>
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width={4}
                  height={4}
                  stroke="rgb(230,230,230)"
                  fill="transparent"
                  strokeWidth={4}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {suspectedData.map(([x, y], i) => {
            return (
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width={1}
                  height={1}
                  stroke="orange"
                  fill="red"
                  strokeWidth={4}
                  key={i}
                />
              )
            );
          })}
        </svg>
        {/*<svg
          ref={this.testing}
          className="all"
          style={{
            top: "0px",
            display: "flex",
            position: "absolute",
            width: "100%",
            height: "200px",
            transform: "scale(1,-1)"
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <Line
            pointElement={([x, y], i) => (
             !isNaN(x) &&
               !isNaN(y) && <rect
                x={x}
                y={y}
                width={1}
                height="1"
                stroke="black"
                fill="transparent"
                strokeWidth="4"
                key={i}
              />
            )}
            data={testingData}
            />
        </svg>*/}
        <div
          style={{
            backgroundColor: "rgba(250,250,250,0.6)",
            top: "10px",
            height: "40px",
            display: "flex",
            position: "relative",
            maxWidth: "40%",
            width: "250px",
            left: "2px",
            zIndex: "0",
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "max-content"
            }}
          >
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "orange"
                }}
              />
              covid19&nbsp;(+)&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "black"
                }}
              />
              testing
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CasesToTests extends React.Component {
  state = {
    data: [],
    chosenState: "Vermont",
    last: 1000,
    crime: true
  };
  getData = async () => {
    var chosenstate = this.props.statesWithCodes.find(
      (x) => x.name === this.state.chosenState
    );
    const url =
      chosenstate &&
      `https://services5.arcgis.com/qWZ7BaZXaP5isnfT/arcgis/` +
        `rest/services/COVID_19_Diagnostic_Lab_Testing/` +
        `FeatureServer/0/query?` +
        //`where=1%3D1&`+
        `where= (state = '${chosenstate.abbreviation}') AND` +
        //`where= (date = '1598932800000' OR date = '1625112000000') AND ` +
        ` (date > Date '2020-09-01 00:00:00')&` +
        //`time=1598932800000, 1625112000000&` +
        //`%20AND%20%20(date%20%3D%20'2020-01-01'%20OR%20date%20%3D%20'2021-07-01')%20&` +
        `outFields=*&` +
        `outSR=4326&f=json`; //&allowedOrigins=` +
    //`${window.location.hostname}`
    var covWeekly =
      url &&
      this.props.covidData.filter(
        (y) => y.jurisdiction_of_occurrence === chosenstate.name
      );
    covWeekly &&
      covWeekly !== [] &&
      (await fetch(url, {
        "Access-Control-Allow-Origin": window.location.hostname
      }) //`https://services5.arcgis.com/qWZ7BaZXaP5isnfT/arcgis/rest/services/COVID_19_Diagnostic_Lab_Testing/FeatureServer/0/query?where=state%20%3D%20'NJ'&outFields=*&outSR=4326&f=json`
        .then(async (res) => await res.json())
        .then((result) => {
          let arr = [];
          result.features.forEach((x) => {
            arr.push(new Date(x.attributes.date).toLocaleDateString());
          });
          Promise.all(
            covWeekly.map(async (cov, i) => {
              const thisone = result.features.filter((x) => {
                const att = x.attributes;
                return (
                  cov.week_ending_date - att.date < 604800000 &&
                  cov.week_ending_date - att.date > 0
                );
              });
              return await new Promise((resolve) => {
                if (!thisone) resolve(cov);
                if (!cov.testing) cov.testing = 0;
                let c = 0;
                thisone.map(async (x) => {
                  c++;
                  const att = x.attributes;
                  const num = !isNaN(att.new_results_reported)
                    ? att.new_results_reported
                    : 0;
                  cov.testing = cov.testing + num;
                });
                if (c === thisone.length) resolve(cov);
              });
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
        .catch((err) => console.log(err.message)));
  };
  componentDidUpdate = (prevProps) => {
    const { chosenState } = this.state;
    if (chosenState !== this.state.lastChosenState) {
      this.setState({ lastChosenState: this.state.chosenState }, this.getData);
    }
    if (
      this.props.covidData !== [] &&
      this.props.covidData !== prevProps.covidData
    ) {
      var covWeekly = this.props.covidData.filter(
        (y) => y.jurisdiction_of_occurrence === chosenState.name
      );
      if (covWeekly.length === 0) {
        this.setState({
          chosenState: this.props.covidData[0].jurisdiction_of_occurrence
        });
      }
    }
  };
  render() {
    const { linecss } = this.props;
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
            left: "0px",
            top: "0px",
            display: "flex",
            position: "relative",
            width: "100%",
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
                  onMouseEnter={() =>
                    this.setState({}, () => {
                      clearTimeout(this.unHover);
                      this.unHover = setTimeout(
                        () => this.setState({ hoveredBtn: i }),
                        200
                      );
                    })
                  }
                  style={{
                    transition: ".3s ease-in",
                    boxShadow: `inset 0px 0px ${
                      this.state.hoveredBtn === i ? 7 : 0
                    }px  ${this.state.hoveredBtn === i ? 2 : 0.5}px black`,
                    alignItems: "center",
                    padding: "4px 7px",
                    border:
                      this.state.chosenState === x ? "1px solid black" : "",
                    display: "flex"
                  }}
                >
                  <div
                    onClick={() =>
                      this.setState({ chosenState: x, hoveredBtn: x })
                    }
                  >
                    {x}
                  </div>
                  &nbsp;
                  {this.state.chosenState === x && (
                    <button
                      onClick={() =>
                        this.setState({ chosenState: null, hoveredBtn: null })
                      }
                    >
                      &times;
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          cases to tests
          <C2T
            linecss={linecss}
            data={filteredByState}
            crime={this.state.crime}
            chosenState={this.state.chosenState}
            lastWidth={this.props.lastWidth}
            countblock={this.props.countblock}
          />
        </div>
      );
    } else return null;
  }
}
export default CasesToTests;
