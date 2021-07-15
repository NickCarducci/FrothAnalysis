import React from "react";
import { Line } from "react-svg-curve";
//import { zeroPad } from "./Covid";

class Covid1 extends React.Component {
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
  }
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
      this.setState({
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
      });
    }
  };
  render() {
    if (this.props.data) {
      return (
        <div
          style={{
            top: "0px",
            display: "flex",
            position: "relative",
            width: "100%",
            height: "200px"
          }}
        >
          <div
            style={{
              maxWidth: "50%",

              top: "0px",
              height: "min-content",
              display: "flex",
              position: "absolute",
              right: "20px",
              flexDirection: "column",
              zIndex: "9999",
              backgroundColor: "rgba(250,250,250,.6)"
            }}
          >
            highest daily covid-suspected cases&nbsp;-&nbsp;
            {this.state.highCovidDeaths}
            <br />
            highest daily testing -&nbsp;
            <br />
            {this.state.highDeaths}
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
          <svg
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
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="100%"
                  stroke="rgb(230,230,230)"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.noData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
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
                <rect
                  x={x}
                  y={y}
                  width="4px"
                  height="100%"
                  stroke="rgb(230,230,230)"
                  fill="rgb(200,200,200)"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.testingData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
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
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="100%"
                  stroke="rgb(230,230,230)"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.suspectedData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
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
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="1"
                  stroke="orange"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.suspectedData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
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
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="1"
                  stroke="black"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.testingData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
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
                width: "min-content"
              }}
            >
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "orange"
                  }}
                />
                covid19&nbsp;(+)&nbsp;&nbsp;
              </div>
              <div style={{ width: "min-content" }}>
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
    } else return null;
  }
}
export default Covid1;
