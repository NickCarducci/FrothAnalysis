import React from "react";
import { shortNumber } from ".";
import { zeroPad } from "./CaseDeaths";
class CaseDeathsAge extends React.Component {
  constructor(props) {
    super(props);
    let date = [0, 1, 2, 3, 4, 5, 6];
    let noData = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0]
    ];
    var data = [];
    let dZeroFour = [];
    let dFiveFortyFive = [];
    let dSixtyFive = [];
    let dSeventyFive = [];
    let dEightyFive = [];
    let dOverEighty = [];
    const dates = [];
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var highdata = Math.max(...data);
    var state = {
      dates,
      chosenDecadeInx: 0,
      date,
      noData,
      yAxis: highdata - 0,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      highdata,
      dZeroFour,
      dFiveFortyFive,
      dSixtyFive,
      dSeventyFive,
      dEightyFive,
      dOverEighty,
      averageheart: {},
      averageneoplasm: {},
      averageflu: {},
      averagecovid: {},
      averagecere: {},
      averagediabetes: {},
      averagealzheimer: {},
      averagenatural: {}
    };
    this.state = state;
  }
  componentDidMount = () => {
    fetch(
      `https://data.cdc.gov/resource/65mz-jvh5.json` +
        `?$where=end_date between '2020-01-10T12:00:00' and '2020-08-31T23:00:00'`
    )
      .then(async (res) => await res.json())
      .then((result) => {
        let p = 0;

        let date = [0, 1, 2, 3, 4, 5, 6];
        let noData = [
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0]
        ];
        var data = [];
        let dZeroFour = [];
        let dFiveFortyFive = [];
        let dSixtyFive = [];
        let dSeventyFive = [];
        let dEightyFive = [];
        let dOverEighty = [];
        let alldates = [];
        let d = {};
        noData.push([0, 0]);
        const ailments = [
          "natural",
          "alzheimer",
          "diabetes",
          "cerebrovascular",
          "covidMulti",
          "covid",
          "fluEtAl",
          "neo_cause",
          "heart"
        ];
        var lifeheart = {};
        var lifeneoplasm = {};
        var lifeflu = {};
        var lifecovid = {};
        var lifecere = {};
        var lifediabetes = {};
        var lifealzheimer = {};
        var lifenatural = {};
        var totalheart = {};
        var totalneoplasm = {};
        var totalflu = {};
        var totalcovid = {};
        var totalcere = {};
        var totaldiabetes = {};
        var totalalzheimer = {};
        var totalnatural = {};
        const age = (x) => {
          var age = null;

          if (x === "0-4 years") {
            age = 2;
          } else if (x === "5-14 years") {
            age = 10;
          } else if (x === "15-24 years") {
            age = 20;
          } else if (x === "25-34 years") {
            age = 30;
          } else if (x === "35-44 years") {
            age = 40;
          } else if (x === "45-54 years") {
            age = 50;
          } else if (x === "55-64 years") {
            age = 60;
          } else if (x === "65-74 years") {
            age = 70;
          } else if (x === "75-84 years") {
            age = 80;
          } else if (x === "85 years and over") {
            age = 90;
          }
          return age;
        };
        result.forEach((x, i) => {
          p++;
          const date =
            new Date(x.end_date).getFullYear() +
            "-" +
            zeroPad(new Date(x.end_date).getMonth() + 1) +
            "-" +
            zeroPad(new Date(x.end_date).getDate());
          alldates.push(date);
          var object = { date };
          object.heart =
            x.diseases_of_heart_i00_i09 &&
            !isNaN(Number(x.diseases_of_heart_i00_i09))
              ? Number(x.diseases_of_heart_i00_i09)
              : 0;

          if (!lifeheart[date]) lifeheart[date] = 0;
          lifeheart[date] = lifeheart[date] + object.heart * age(x.agegroup);
          if (!totalheart[date]) totalheart[date] = 0;
          totalheart[date] = totalheart[date] + object.heart;

          var neoplasms =
            x.malignant_neoplasms_c00_c97 &&
            !isNaN(Number(x.malignant_neoplasms_c00_c97))
              ? Number(x.malignant_neoplasms_c00_c97)
              : 0;

          object.neo_cause = neoplasms + object.heart;

          if (!lifeneoplasm[date]) lifeneoplasm[date] = 0;
          lifeneoplasm[date] = lifeneoplasm[date] + neoplasms * age(x.agegroup);
          if (!totalneoplasm[date]) totalneoplasm[date] = 0;
          totalneoplasm[date] = totalneoplasm[date] + neoplasms;

          var chronic =
            x.chronic_lower_respiratory &&
            !isNaN(Number(x.chronic_lower_respiratory))
              ? Number(x.chronic_lower_respiratory)
              : 0;
          var flureal =
            x.influenza_and_pneumonia_j09 &&
            !isNaN(Number(x.influenza_and_pneumonia_j09))
              ? Number(x.influenza_and_pneumonia_j09)
              : 0;
          object.fluEtAl = flureal + chronic + object.neo_cause;

          if (!lifeflu[date]) lifeflu[date] = 0;
          lifeflu[date] = lifeflu[date] + flureal + chronic * age(x.agegroup);
          if (!totalflu[date]) totalflu[date] = 0;
          totalflu[date] = totalflu[date] + flureal + chronic;

          var covid =
            x.covid_19_u071_underlying &&
            !isNaN(Number(x.covid_19_u071_underlying))
              ? Number(x.covid_19_u071_underlying)
              : 0;
          object.covid = covid + object.fluEtAl;

          if (!lifecovid[date]) lifecovid[date] = 0;
          lifecovid[date] = lifecovid[date] + covid * age(x.agegroup);
          if (!totalcovid[date]) totalcovid[date] = 0;
          totalcovid[date] = totalcovid[date] + covid;

          if (x.alsoCancer) {
            object.alsoCancer = object.covid + x.alsoCancer;
          }

          var covidMulti =
            x.covid_19_u071_multiple_cause &&
            !isNaN(Number(x.covid_19_u071_multiple_cause))
              ? Number(x.covid_19_u071_multiple_cause)
              : 0;
          object.covidMulti = covidMulti + object.fluEtAl;

          var cerebrovascular =
            x.cerebrovascular_diseases &&
            !isNaN(Number(x.cerebrovascular_diseases))
              ? Number(x.cerebrovascular_diseases)
              : 0;
          object.cerebrovascular = cerebrovascular + object.covidMulti;

          if (!lifecere[date]) lifecere[date] = 0;
          lifecere[date] = lifecere[date] + cerebrovascular * age(x.agegroup);
          if (!totalcere[date]) totalcere[date] = 0;
          totalcere[date] = totalcere[date] + cerebrovascular;

          var diabetes =
            x.diabetes_mellitus_e10_e14 &&
            !isNaN(Number(x.diabetes_mellitus_e10_e14))
              ? Number(x.diabetes_mellitus_e10_e14)
              : 0;
          object.diabetes = diabetes + object.cerebrovascular;

          if (!lifediabetes[date]) lifediabetes[date] = 0;
          lifediabetes[date] = lifediabetes[date] + diabetes * age(x.agegroup);
          if (!totaldiabetes[date]) totaldiabetes[date] = 0;
          totaldiabetes[date] = totaldiabetes[date] + diabetes;

          var alzheimer =
            x.alzheimer_disease_g30 && !isNaN(Number(x.alzheimer_disease_g30))
              ? Number(x.alzheimer_disease_g30)
              : 0;
          object.alzheimer = alzheimer + object.diabetes;

          if (!lifealzheimer[date]) lifealzheimer[date] = 0;
          lifealzheimer[date] =
            lifealzheimer[date] + alzheimer * age(x.agegroup);
          if (!totalalzheimer[date]) totalalzheimer[date] = 0;
          totalalzheimer[date] = totalalzheimer[date] + alzheimer;

          var natural =
            x.naturalcause && !isNaN(Number(x.naturalcause))
              ? Number(x.naturalcause)
              : 0;
          object.natural = natural + object.alzheimer;

          if (!lifenatural[date]) lifenatural[date] = 0;
          lifenatural[date] = lifenatural[date] + natural * age(x.agegroup);
          if (!totalnatural[date]) totalnatural[date] = 0;
          totalnatural[date] = totalnatural[date] + natural;

          /*
           lifeheart 
           lifeneoplasm 
           lifeflu
           lifecovid 
           lifecere
           lifediabetes
           lifealzheimer 
           lifenatural*/

          if (x.agegroup === "0-4 years") {
            ailments.forEach((x) => {
              const key = "ZeroFour" + date;
              if (!d[key]) d[key] = {};
              if (!d[key][x]) d[key][x] = 0;
              d[key][x] = d[key][x] + object[x];
            });
          } else if (
            x.agegroup === "5-14 years" ||
            x.agegroup === "15-24 years" ||
            x.agegroup === "25-34 years" ||
            x.agegroup === "35-44 years"
          ) {
            ailments.forEach((x) => {
              const key = "FiveFortyFive" + date;
              if (!d[key]) d[key] = {};
              if (!d[key][x]) d[key][x] = 0;
              d[key][x] = d[key][x] + object[x];
            });
          } else if (
            x.agegroup === "45-54 years" ||
            x.agegroup === "55-64 years"
          ) {
            ailments.forEach((x) => {
              const key = "SixtyFive" + date;
              if (!d[key]) d[key] = {};
              if (!d[key][x]) d[key][x] = 0;
              d[key][x] = d[key][x] + object[x];
            });
          } else if (x.agegroup === "65-74 years") {
            ailments.forEach((x) => {
              const key = "SeventyFive" + date;
              if (!d[key]) d[key] = {};
              if (!d[key][x]) d[key][x] = 0;
              d[key][x] = d[key][x] + object[x];
            });
          } else if (x.agegroup === "75-84 years") {
            ailments.forEach((x) => {
              const key = "EightyFive" + date;
              if (!d[key]) d[key] = {};
              if (!d[key][x]) d[key][x] = 0;
              d[key][x] = d[key][x] + object[x];
            });
          } else if (x.agegroup === "85 years and over") {
            ailments.forEach((x) => {
              const key = "OverEighty" + date;
              if (!d[key]) d[key] = {};
              if (!d[key][x]) d[key][x] = 0;
              d[key][x] = d[key][x] + object[x];
            });
          }
        });

        if (result.length === p) {
          const dates = [...new Set(alldates)];

          var averageheart = {},
            averageneoplasm = {},
            averageflu = {},
            averagecovid = {},
            averagecere = {},
            averagediabetes = {},
            averagealzheimer = {},
            averagenatural = {};

          dates.forEach((date) => {
            if (!averageheart[date]) averageheart[date] = 0;
            averageheart[date] = lifenatural[date] / totalnatural[date];
            if (!averageneoplasm[date]) averageneoplasm[date] = 0;
            averageneoplasm[date] = lifeneoplasm[date] / totalneoplasm[date];
            if (!averageflu[date]) averageflu[date] = 0;
            averageflu[date] = lifeflu[date] / totalflu[date];
            if (!averagecovid[date]) averagecovid[date] = 0;
            averagecovid[date] = lifecovid[date] / totalcovid[date];
            if (!averagecere[date]) averagecere[date] = 0;
            averagecere[date] = lifecere[date] / totalcere[date];
            if (!averagediabetes[date]) averagediabetes[date] = 0;
            averagediabetes[date] = lifediabetes[date] / totaldiabetes[date];
            if (!averagealzheimer[date]) averagealzheimer[date] = 0;
            averagealzheimer[date] = lifealzheimer[date] / totalalzheimer[date];
            if (!averagenatural[date]) averagenatural[date] = 0;
            averagenatural[date] = lifenatural[date] / totalnatural[date];
          });
          Object.values(d).forEach((x, i) => {
            data.push(x.natural);
            const key = Object.keys(d)[i];
            if (key.includes("ZeroFour")) {
              dZeroFour.push({ ...x, date: key.substring(8, key.length) });
            } else if (key.includes("FiveFortyFive")) {
              dFiveFortyFive.push({
                ...x,
                date: key.substring(13, key.length)
              });
            } else if (key.includes("SixtyFive")) {
              dSixtyFive.push({ ...x, date: key.substring(9, key.length) });
            } else if (key.includes("SeventyFive")) {
              dSeventyFive.push({ ...x, date: key.substring(11, key.length) });
            } else if (key.includes("EightyFive")) {
              dEightyFive.push({ ...x, date: key.substring(10, key.length) });
            } else if (key.includes("OverEighty")) {
              dOverEighty.push({ ...x, date: key.substring(10, key.length) });
            }
          });
          var lowDate = Math.min(...date);
          var highDate = Math.max(...date);
          var highdata = Math.max(...data);
          this.setState({
            averageheart,
            averageneoplasm,
            averageflu,
            averagecovid,
            averagecere,
            averagediabetes,
            averagealzheimer,
            averagenatural,
            chosenDecadeInx: dates.length - 1,
            chosenDate: dates[dates.length - 1],
            dates,
            date,
            noData,
            yAxis: highdata - 0,
            xAxis: highDate - lowDate,
            lowDate,
            highDate,
            highdata,
            dZeroFour,
            dFiveFortyFive,
            dSixtyFive,
            dSeventyFive,
            dEightyFive,
            dOverEighty
          });
        }
      })
      .catch((err) => console.log(err.message));
  };
  render() {
    const { highdata, chosenDate, dates } = this.state;
    const { linecss } = this.props;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.props.lastWidth) * 0.9,
      "0"
    ]);
    const colorIs = (key) => {
      var color = null;
      if (key === "heart") {
        color = "blue";
      } else if (key === "neo_cause") {
        color = "orange";
      } else if (key === "fluEtAl") {
        color = "green";
      } else if (key === "covid") {
        color = "red";
      } else if (key === "covidMulti") {
        color = "rgb(250,160,200)";
      } else if (key === "cerebrovascular") {
        color = "rgb(100,200,250)";
      } else if (key === "diabetes") {
        color = "rgb(100,200,250)";
      } else if (key === "alzheimer") {
        color = "rgb(100,200,250)";
      } else if (key === "natural") {
        color = "brown";
      }
      return color;
    };
    const averages = [
      "averageheart",
      "averageneoplasm",
      "averageflu",
      "averagecovid",
      "averagecere",
      "averagediabetes",
      "averagealzheimer",
      "averagenatural"
    ];
    const ite = { border: "1px grey dashed", width: "max-content" };
    const labelstyle = {
      backgroundColor: "rgba(250,250,250,0.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    return (
      <div style={{ ...this.props.countblock, height: "250px", left: "0px" }}>
        <div style={labelstyle}>
          <div style={ite}>0-4&nbsp;</div>
          <div style={ite}>5-44&nbsp;</div>
          <div style={ite}>45-64&nbsp;</div>
          <div style={ite}>65-74&nbsp;</div>
          <div style={ite}>75-84&nbsp;</div>
          <div style={ite}>85+&nbsp;</div>
        </div>
        <div style={labelstyle}>
          average lifetimes
          {averages.map((av) => {
            return (
              <div key={av} style={ite}>
                {av.substring(7, av.length)}:
                {Object.values(this.state[av]).map((x, i) => {
                  const date = Object.keys(this.state[av])[i];
                  return date === chosenDate && Math.round(x);
                })}
              </div>
            );
          })}
        </div>
        <div
          style={{
            right: "0px",
            maxWidth: "50%",
            top: "0px",
            height: "min-content",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            zIndex: "9",
            backgroundColor: "rgba(250,250,250,.6)"
          }}
        >
          highest deaths -&nbsp;
          <br />
          {shortNumber(highdata)}&nbsp;in a month
          <br />
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
            {this.state.lowbrainvirus}
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
                  height={1}
                  stroke="rgb(230,230,230)"
                  fill="transparent"
                  strokeWidth=""
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {this.state.dZeroFour
            .filter((x) => x.date === chosenDate)
            .map((x) => {
              return Object.values(x).map((y, i) => {
                const stroke = colorIs(Object.keys(x)[i]);
                return (
                  !isNaN(y) && (
                    <rect
                      x={(1 / 6) * this.props.lastWidth * 0.9}
                      y={(y / this.state.highdata) * 150}
                      width={2}
                      height={2}
                      stroke={stroke}
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
                );
              });
            })}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {this.state.dFiveFortyFive
            .filter((x) => x.date === chosenDate)
            .map((x) => {
              return Object.values(x).map((y, i) => {
                const stroke = colorIs(Object.keys(x)[i]);
                return (
                  !isNaN(y) && (
                    <rect
                      x={(2 / 6) * this.props.lastWidth * 0.9}
                      y={(y / this.state.highdata) * 150}
                      width={2}
                      height={2}
                      stroke={stroke}
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
                );
              });
            })}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {this.state.dSixtyFive
            .filter((x) => x.date === chosenDate)
            .map((x) => {
              return Object.values(x).map((y, i) => {
                const stroke = colorIs(Object.keys(x)[i]);
                return (
                  !isNaN(y) && (
                    <rect
                      x={(3 / 6) * this.props.lastWidth * 0.9}
                      y={(y / this.state.highdata) * 150}
                      width={2}
                      height={2}
                      stroke={stroke}
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
                );
              });
            })}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {this.state.dSeventyFive
            .filter((x) => x.date === chosenDate)
            .map((x) => {
              return Object.values(x).map((y, i) => {
                const stroke = colorIs(Object.keys(x)[i]);
                return (
                  !isNaN(y) && (
                    <rect
                      x={(4 / 6) * this.props.lastWidth * 0.9}
                      y={(y / this.state.highdata) * 150}
                      width={2}
                      height={2}
                      stroke={stroke}
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
                );
              });
            })}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {this.state.dEightyFive
            .filter((x) => x.date === chosenDate)
            .map((x) => {
              return Object.values(x).map((y, i) => {
                const stroke = colorIs(Object.keys(x)[i]);
                return (
                  !isNaN(y) && (
                    <rect
                      x={(5 / 6) * this.props.lastWidth * 0.9}
                      y={(y / this.state.highdata) * 150}
                      width={2}
                      height={2}
                      stroke={stroke}
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
                );
              });
            })}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {this.state.dOverEighty
            .filter((x) => x.date === chosenDate)
            .map((x) => {
              return Object.values(x).map((y, i) => {
                const stroke = colorIs(Object.keys(x)[i]);
                return (
                  !isNaN(y) && (
                    <rect
                      x={1 * this.props.lastWidth * 0.9}
                      y={(y / this.state.highdata) * 150}
                      width={2}
                      height={2}
                      stroke={stroke}
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
                );
              });
            })}
        </svg>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            margin: "10px 50px",
            display: "flex",
            width: "70%",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{ border: "1px solid", padding: "10px", userSelect: "none" }}
            onClick={() => {
              if (this.state.chosenDecadeInx > 0)
                this.setState(
                  { chosenDecadeInx: this.state.chosenDecadeInx - 1 },
                  () => {
                    this.setState({
                      chosenDate: dates[this.state.chosenDecadeInx]
                    });
                  }
                );
            }}
          >
            {"<"}
          </div>
          {chosenDate}
          <div
            style={{ border: "1px solid", padding: "10px", userSelect: "none" }}
            onClick={() => {
              if (this.state.chosenDecadeInx < dates.length - 1)
                this.setState(
                  { chosenDecadeInx: this.state.chosenDecadeInx + 1 },
                  () => {
                    this.setState({
                      chosenDate: dates[this.state.chosenDecadeInx]
                    });
                  }
                );
            }}
          >
            {">"}
          </div>
        </div>
      </div>
    );
  }
}
export default CaseDeathsAge;
