import React from "react";
import { Line } from "react-svg-curve";
export const zeroPad = (num) => {
  var res = "0";
  if (String(num).length === 1) {
    res = `0${num}`;
  } else {
    res = num;
  }
  return res;
};
class Covid extends React.Component {
  constructor(props) {
    super(props);

    var all_cause = [];
    var natural_cause = [];
    var flu_cause = [];
    var covid_cause = [];
    var covidMulti_cause = [];
    var onlycovid_cause = [];
    var neo_cause = [];
    var heart_cause = [];
    let all_causeData = [];
    let natural_causeData = [];
    let flu_causeData = [];
    var covidMulti_causeData = [];
    let covid_causeData = [];
    let neo_causeData = [];
    let heart_causeData = [];
    let noData = [];
    let date = [];
    var no = [];
    var ratio = [];
    var ratioData = [];
    props.data.map((x) => {
      const monthExact = String(x.mmwrweek / 4 + 1);
      const hasDecimal = x.mmwrweek % 4; //(monthExact + "").split(".")[1];
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
      const dtstr = x.mmwryear + "-" + zeroPad(month) + "-" + zeroPad(dayNum);

      x.week_ending_date = new Date(dtstr).getTime();
      date.push(x.week_ending_date);
      all_cause.push(x.all_cause);
      all_causeData.push([x.week_ending_date, x.all_cause]);
      var natural =
        x.natural_cause && !isNaN(Number(x.natural_cause))
          ? Number(x.natural_cause)
          : 0;

      natural_cause.push(natural);
      natural_causeData.push([x.week_ending_date, natural]);
      var heart =
        x.diseases_of_heart_i00_i09 &&
        !isNaN(Number(x.diseases_of_heart_i00_i09))
          ? Number(x.diseases_of_heart_i00_i09)
          : 0;

      heart_cause.push(heart);
      heart_causeData.push([x.week_ending_date, heart]);
      var neoplasms =
        x.malignant_neoplasms_c00_c97 &&
        !isNaN(Number(x.malignant_neoplasms_c00_c97))
          ? Number(x.malignant_neoplasms_c00_c97)
          : 0;

      neo_cause.push(neoplasms + heart);
      neo_causeData.push([x.week_ending_date, neoplasms + heart]);
      var chronic =
        x.chronic_lower_respiratory &&
        !isNaN(Number(x.chronic_lower_respiratory))
          ? Number(x.chronic_lower_respiratory)
          : 0;
      var flureal =
        x.influenza_and_pneumonia_j09_j18 &&
        !isNaN(Number(x.influenza_and_pneumonia_j09_j18))
          ? Number(x.influenza_and_pneumonia_j09_j18)
          : 0;
      var fluEtAl = flureal + chronic + neoplasms + heart;
      flu_cause.push(fluEtAl);
      flu_causeData.push([x.week_ending_date, fluEtAl]);
      var covid =
        x.covid_19_u071_underlying_cause_of_death &&
        !isNaN(Number(x.covid_19_u071_underlying_cause_of_death))
          ? Number(x.covid_19_u071_underlying_cause_of_death)
          : 0;
      covid_cause.push(covid + fluEtAl);
      onlycovid_cause.push(covid);
      covid_causeData.push([x.week_ending_date, covid + fluEtAl]);

      var covidMulti =
        x.covid_19_u071_multiple_cause_of_death &&
        !isNaN(Number(x.covid_19_u071_multiple_cause_of_death))
          ? Number(x.covid_19_u071_multiple_cause_of_death)
          : 0;
      covidMulti_cause.push(covidMulti + fluEtAl);
      covidMulti_causeData.push([x.week_ending_date, covidMulti + fluEtAl]);

      var thisweek = 0;
      this.props.covidData.map((e) => {
        if (
          Math.abs(e.week_ending_date - x.week_ending_date) <
          86400000 * 2.5
        ) {
          return (thisweek = thisweek + e.positive);
        } else {
          return null;
        }
      });
      var ratioo = covidMulti / thisweek;
      ratio.push(ratioo);
      ratioData.push([x.week_ending_date, ratioo]);
      no.push(0);
      return noData.push([x.week_ending_date, 0]);
    });
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDeaths = 0; //Math.min(...all_cause);
    var highDeaths = Math.max(...natural_cause);
    var highCovidDeaths = Math.max(...covid_cause);
    var onlyhighCovidDeaths = Math.max(...onlycovid_cause);
    var state = {
      ratioData,
      ratio,
      covid_causeData,
      covidMulti_causeData,
      neo_causeData,
      flu_causeData,
      heart_causeData,
      natural_causeData,
      all_causeData,
      noData,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDeaths,
      highDeaths,
      highCovidDeaths,
      onlyhighCovidDeaths
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      var all_cause = [];
      var natural_cause = [];
      var flu_cause = [];
      var covid_cause = [];
      var covidMulti_cause = [];
      var onlycovid_cause = [];
      var neo_cause = [];
      var heart_cause = [];
      let all_causeData = [];
      let natural_causeData = [];
      let flu_causeData = [];
      var covidMulti_causeData = [];
      let covid_causeData = [];
      let neo_causeData = [];
      let heart_causeData = [];
      let noData = [];
      let date = [];
      var no = [];
      var ratio = [];
      var ratioData = [];
      this.props.data.map((x) => {
        const monthExact = String(x.mmwrweek / 4 + 1);
        const hasDecimal = x.mmwrweek % 4; //(monthExact + "").split(".")[1];
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
        const dtstr = x.mmwryear + "-" + zeroPad(month) + "-" + zeroPad(dayNum);

        x.week_ending_date = new Date(dtstr).getTime();
        date.push(x.week_ending_date);
        all_cause.push(x.all_cause);
        all_causeData.push([x.week_ending_date, x.all_cause]);
        var natural =
          x.natural_cause && !isNaN(Number(x.natural_cause))
            ? Number(x.natural_cause)
            : 0;

        natural_cause.push(natural);
        natural_causeData.push([x.week_ending_date, natural]);
        var heart =
          x.diseases_of_heart_i00_i09 &&
          !isNaN(Number(x.diseases_of_heart_i00_i09))
            ? Number(x.diseases_of_heart_i00_i09)
            : 0;

        heart_cause.push(heart);
        heart_causeData.push([x.week_ending_date, heart]);
        var neoplasms =
          x.malignant_neoplasms_c00_c97 &&
          !isNaN(Number(x.malignant_neoplasms_c00_c97))
            ? Number(x.malignant_neoplasms_c00_c97)
            : 0;

        neo_cause.push(neoplasms + heart);
        neo_causeData.push([x.week_ending_date, neoplasms + heart]);
        var chronic =
          x.chronic_lower_respiratory &&
          !isNaN(Number(x.chronic_lower_respiratory))
            ? Number(x.chronic_lower_respiratory)
            : 0;
        var flureal =
          x.influenza_and_pneumonia_j09_j18 &&
          !isNaN(Number(x.influenza_and_pneumonia_j09_j18))
            ? Number(x.influenza_and_pneumonia_j09_j18)
            : 0;
        var fluEtAl = flureal + chronic + neoplasms + heart;
        flu_cause.push(fluEtAl);
        flu_causeData.push([x.week_ending_date, fluEtAl]);
        var covid =
          x.covid_19_u071_underlying_cause_of_death &&
          !isNaN(Number(x.covid_19_u071_underlying_cause_of_death))
            ? Number(x.covid_19_u071_underlying_cause_of_death)
            : 0;
        covid_cause.push(covid + fluEtAl);
        onlycovid_cause.push(covid);
        covid_causeData.push([x.week_ending_date, covid + fluEtAl]);

        var covidMulti =
          x.covid_19_u071_multiple_cause_of_death &&
          !isNaN(Number(x.covid_19_u071_multiple_cause_of_death))
            ? Number(x.covid_19_u071_multiple_cause_of_death)
            : 0;
        covidMulti_cause.push(covidMulti + fluEtAl);
        covidMulti_causeData.push([x.week_ending_date, covidMulti + fluEtAl]);

        var thisweek = 0;
        this.props.covidData.map((e) => {
          if (
            Math.abs(e.week_ending_date - x.week_ending_date) <
            86400000 * 2.5
          ) {
            return (thisweek = thisweek + e.positive);
          } else {
            return null;
          }
        });
        var ratioo = covidMulti / thisweek;
        ratio.push(ratioo);
        ratioData.push([x.week_ending_date, ratioo]);
        no.push(0);
        return noData.push([x.week_ending_date, 0]);
      });
      var lowDate = Math.min(...date);
      var highDate = Math.max(...date);
      var lowDeaths = 0; //Math.min(...all_cause);
      var highDeaths = Math.max(...natural_cause);
      var highCovidDeaths = Math.max(...covid_cause);
      var onlyhighCovidDeaths = Math.max(...onlycovid_cause);
      this.setState({
        ratioData,
        ratio,
        covid_causeData,
        covidMulti_causeData,
        neo_causeData,
        flu_causeData,
        heart_causeData,
        natural_causeData,
        all_causeData,
        noData,
        yAxis: highDeaths - lowDeaths,
        xAxis: highDate - lowDate,
        lowDate,
        highDate,
        lowDeaths,
        highDeaths,
        highCovidDeaths,
        onlyhighCovidDeaths
      });
    }
  };
  render() {
    if (this.props.data) {
      return (
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "230px"
          }}
        >
          <div
            style={{
              top: "0px",
              height: "min-content",
              display: "flex",
              position: "absolute",
              right: "22px",
              flexDirection: "column",
              zIndex: "9999",
              backgroundColor: "white"
            }}
          >
            highest weekly covid-death count&nbsp;-&nbsp;
            {this.state.onlyhighCovidDeaths}
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
            xmlns="https://www.w3.org/2000/svg"
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
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="100%"
                  stroke="rgb(200,200,200)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.covid_causeData.map(([x, y]) => [
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
            xmlns="https://www.w3.org/2000/svg"
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
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          {/*<svg
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
              data={this.state.all_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${
                  this.state.xAxis
                }) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>*/}
          <svg
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="1"
                  stroke="rgb(100,100,250)"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.all_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
            //heart 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 47027 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //resp/flu 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height=".1"
                  stroke="green"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida"
                    ? 12362 + 3091 + 47027 + 45281
                    : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //accidents 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width=".5"
                  height=".1"
                  stroke="rgb(0,0,0)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${
                  y + (this.props.chosenState === "Florida" ? 12670 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                }
                )`
              ])}
            />
          </svg>
          <div style={{ color: "rgb(250,0,0)", fontSize: "12px", zIndex: "1" }}>
            suicide
          </div>
          <div style={{ color: "rgb(0,0,0)", fontSize: "12px", zIndex: "1" }}>
            murder
          </div>
          <div
            style={{ color: "rgb(100,100,250)", fontSize: "12px", zIndex: "1" }}
          >
            all
          </div>
          <svg
            //suicide 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width=".5"
                  height=".1"
                  stroke="rgb(250,0,0)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${
                  y +
                  (this.props.chosenState === "Florida" ? 3567 + 12670 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          {/*<svg
            //cancer neo 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 45281 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //cerebrovascular 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 13225 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //accidents 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 12670 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //resp/flu 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 12362 + 3091 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //alzheimer 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 6725 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //diabetes 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 6204 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //suicide 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 3567 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //liver cirrhosis 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 3345 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //nephritis nephtosis 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 3133 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //renal 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 2776 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //parkinson 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 2691 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //septicemia 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 2469 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <svg
            //murder 2018 average
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "90%",
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
                  width="100%"
                  height=".1"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )}
              data={this.state.natural_causeData.map(([x, y]) => [
                `calc(0vw)`,
                `calc(((${
                  (this.props.chosenState === "Florida" ? 2469 : 0) / 52
                } - ${this.state.lowDeaths}) / ${this.state.yAxis}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
            </svg>*/}
          <svg
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
                  stroke={
                    i === this.state.heart_causeData.length
                      ? "rgba(250,200,100,.5)"
                      : "blue"
                  }
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.heart_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="1"
                  stroke="rgb(250,160,200)"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.covidMulti_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="1"
                  stroke="red"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.covid_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
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
              data={this.state.neo_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="1"
                  stroke="green"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.flu_causeData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${this.state.lowDeaths}) / ${
                  this.state.yAxis
                }) * ${this.props.crime ? "150px" : "1px"})`
              ])}
            />
          </svg>
          <svg
            style={{
              top: "0px",
              display: "flex",
              position: "absolute",
              width: "100%",
              height: "200px",
              transform: "scale(1,-1)"
            }}
            xmlns="https://www.w3.org/2000/svg"
          >
            <Line
              pointElement={([x, y], i) => (
                <rect
                  x={x}
                  y={y}
                  width="1"
                  height="1"
                  stroke="brown"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
              data={this.state.ratioData.map(([x, y]) => [
                `calc(((${x} - ${this.state.lowDate}) / ${this.state.xAxis}) * 90vw)`,
                `calc(((${y} - ${0}) / ${1}) * ${
                  this.props.crime ? "150px" : "1px"
                })`
              ])}
            />
          </svg>
          <div
            style={{
              backgroundColor: "rgba(250,250,250,0.6)",
              top: "210px",
              height: "100px",
              display: "flex",
              position: "relative",
              width: "300px",
              maxWidth: "50%",
              left: "2px",
              zIndex: "9999",
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
              <div style={{ border: "1px grey dashed", width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "orange"
                  }}
                />
                malignant neoplasms&nbsp;
              </div>
              <div style={{ border: "1px grey dashed", width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "blue"
                  }}
                />
                diseases of heart&nbsp;
              </div>
              <div style={{ border: "1px grey dashed", width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "green"
                  }}
                />
                influeza, pneumonia & chronic respiratory&nbsp;
              </div>
              <div style={{ border: "1px grey dashed", width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "rgb(100,200,250)"
                  }}
                />
                "natural" non-injurious&nbsp;
              </div>
              <div style={{ border: "1px grey dashed", width: "min-content" }}>
                <div
                  style={{
                    border: "1px grey dashed",
                    width: "5px",
                    height: "5px",
                    backgroundColor: "rgb(250,160,200)"
                  }}
                />
                covid19 multiple causes&nbsp;
              </div>
              <div style={{ border: "1px grey dashed", width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "red"
                  }}
                />
                covid19&nbsp;
              </div>
              {/*<div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "black"
                  }}
                />
                all - covid19
              </div>*/}
            </div>
          </div>
          <div
            style={{
              maxWidth: "40%",
              top: "200px",
              height: "100px",
              display: "flex",
              position: "absolute",
              right: "22px",
              flexDirection: "column"
            }}
          >
            highest wkly deaths -&nbsp;{this.state.highDeaths}
            <br />
            {/*this.state.lowDeaths*/}
            {new Date(this.state.lowDate).toLocaleDateString()}&nbsp;-
            <br />
            {new Date(this.state.highDate).toLocaleDateString()}
          </div>
        </div>
      );
    } else return null;
  }
}
export default Covid;
