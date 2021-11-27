import React from "react";
import {
  flhospflu,
  flhospresp,
  mohospcovid,
  mohospflu,
  mohospresp,
  njhospcovid,
  njhospflu,
  njhospresp,
  njpop
} from "./Casedata";
import { zeroPad } from "./CaseDeaths";
import { shortNumber } from ".";
//import { zeroPad } from "./Covid";

class CH extends React.Component {
  constructor(props) {
    super(props);

    let noData = [];
    let date = [];
    var no = [];

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var hospitalizationICUData = props.covidDataHosp.map((x) => {
      return [
        x.week_ending_date,
        (Number(x.total_staffed_adult_icu_beds) * 4) / 7
      ];
    });
    var hospitalizationICU = hospitalizationICUData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var hospitalizationSuspectedICUData = props.covidDataHosp.map((x) => {
      return [
        x.week_ending_date,
        (Number(
          x.total_adult_patients_hospitalized_confirmed_and_suspected_covid
        ) *
          4) /
          7
      ];
    });
    var hospitalizationSuspectedICU = hospitalizationICUData.map((x) => x[1]);
    var hospitalizationConfirmedICUData = props.covidDataHosp.map((x) => {
      return [
        x.week_ending_date,
        (Number(x.total_adult_patients_hospitalized_confirmed_covid) * 4) / 7
      ];
    });
    var hospitalizationConfirmedICU = hospitalizationICUData.map((x) => x[1]);
    const handleData = (x) => {
      const mnth = zeroPad(months.indexOf(x.year.split("-")[0]) + 1);
      const arr = x.year.split(" Qtr "); ///^[0-9]{4}/
      const year = arr[1]
        ? arr[0] + ["-01", "-04", "-08", "-12"][Number(arr[1]) - 1] + "-01"
        : "20" + x.year.split("-")[1] + "-" + mnth + "-01";
      const num = !isNaN(x.num) ? Number(x.num) : 0;
      return [new Date(year).getTime(), num];
    };
    var eightteenSixtyFourData = props.data.eightteenSixtyFour.map(handleData);
    var eightteenSixtyFour = eightteenSixtyFourData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var sixtyFivePlusData = props.data.sixtyFivePlus.map(handleData);
    var sixtyFivePlus = sixtyFivePlusData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var zeroSeventeenData = props.data.zeroSeventeen.map(handleData);
    var zeroSeventeen = zeroSeventeenData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var zeroFourData = props.data.zeroFour.map(handleData);
    var zeroFour = zeroFourData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var fiveNineData = props.data.fiveNine.map(handleData);
    var fiveNine = fiveNineData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var tenSeventeenData = props.data.tenSeventeen.map(handleData);
    var tenSeventeen = tenSeventeenData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var eightteenFourtyFourData = props.data.eightteenFourtyFour.map(
      handleData
    );
    var eightteenFourtyFour = eightteenFourtyFourData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var fortyFiveSixtyFourData = props.data.fortyFiveSixtyFour.map(handleData);
    var fortyFiveSixtyFour = fortyFiveSixtyFourData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var sixtyFiveSeventyNineData = props.data.sixtyFiveSeventyNine.map(
      handleData
    );
    var sixtyFiveSeventyNine = sixtyFiveSeventyNineData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var eightyPlusData = props.data.eightyPlus.map(handleData);
    var eightyPlus = eightyPlusData.map((x) => {
      date.push(x[0]);
      no.push(0);
      noData.push([x[0], 0]);
      return x[1];
    });
    var sixtyFivePopData = [];
    var sixtyFivePop = [];
    njpop.map((x) => {
      if (Object.keys(x)[0] === "Ages 65+") {
        return Object.values(x).map((w, r) => {
          //w = {"2010": "1190551", ...}
          return Object.values(w).map((d, r) => {
            const year = new Date(Object.keys(w)[r] + "-01-01").getTime();
            //date.push(year);
            //no.push(0);
            //noData.push([year, 0]);
            const yearr = Number(Object.keys(w)[r]);
            const ePone = props.data.eightyPlus.find((f, i) => {
              const arr = f.year.split(" Qtr "); ///^[0-9]{4}/
              const xyear = Number(
                arr[1] ? arr[0] : "20" + f.year.split("-")[1]
              );
              if (xyear === yearr) {
                return f;
              } else return null;
            });
            //console.log(ePone);
            const sSone = props.data.sixtyFiveSeventyNine.find((f, i) => {
              const arr = f.year.split(" Qtr "); ///^[0-9]{4}/
              const xyear = Number(
                arr[1] ? arr[0] : "20" + f.year.split("-")[1]
              );
              if (xyear === yearr) {
                return f;
              } else return null;
            });
            const inter = d;
            let last = Object.values(w)[r - 1];
            //console.log(s);
            if (ePone && sSone) {
              const val = Math.round(
                ePone.num +
                  sSone.num +
                  (((inter - last) / last) * (ePone.num + sSone.num)) / 12
              );
              sixtyFivePopData.push([year, val]);
              sixtyFivePop.push(val);
            }
            return null;
          });
        });
      } else return null;
    });
    const all = [
      ...hospitalizationICU,
      ...hospitalizationSuspectedICU,
      ...hospitalizationConfirmedICU,
      ...zeroSeventeen,
      ...sixtyFivePlus,
      ...eightteenSixtyFour,
      ...zeroFour,
      ...fiveNine,
      ...tenSeventeen,
      ...eightteenFourtyFour,
      ...fortyFiveSixtyFour,
      ...sixtyFiveSeventyNine,
      ...eightyPlus
    ];
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDischarges = Math.min(...all);
    var highDischarges = Math.max(...all);
    noData.sort((a, b) => a[0] - b[0]);
    eightyPlusData.sort((a, b) => a[0] - b[0]);
    sixtyFiveSeventyNineData.sort((a, b) => a[0] - b[0]);
    fortyFiveSixtyFourData.sort((a, b) => a[0] - b[0]);
    eightteenFourtyFourData.sort((a, b) => a[0] - b[0]);
    tenSeventeenData.sort((a, b) => a[0] - b[0]);
    fiveNineData.sort((a, b) => a[0] - b[0]);
    zeroFourData.sort((a, b) => a[0] - b[0]);
    eightteenSixtyFourData.sort((a, b) => a[0] - b[0]);
    sixtyFivePlusData.sort((a, b) => a[0] - b[0]);
    zeroSeventeenData.sort((a, b) => a[0] - b[0]);

    var state = {
      hospitalizationICUData,
      hospitalizationSuspectedICUData,
      hospitalizationConfirmedICUData,
      sixtyFivePopData,
      sixtyFivePop,
      eightteenSixtyFourData,
      sixtyFivePlusData,
      zeroSeventeenData,
      eightyPlusData,
      sixtyFiveSeventyNineData,
      fortyFiveSixtyFourData,
      eightteenFourtyFourData,
      tenSeventeenData,
      fiveNineData,
      zeroFourData,
      noData,
      yAxis: highDischarges - lowDischarges,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDischarges,
      highDischarges
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      let noData = [];
      let date = [];
      var no = [];

      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      var hospitalizationICUData = this.props.covidDataHosp.map((x) => {
        return [
          x.week_ending_date,
          (Number(x.total_staffed_adult_icu_beds) * 4) / 7
        ];
      });
      var hospitalizationICU = hospitalizationICUData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var hospitalizationSuspectedICUData = this.props.covidDataHosp.map(
        (x) => {
          return [
            x.week_ending_date,
            (Number(
              x.total_adult_patients_hospitalized_confirmed_and_suspected_covid
            ) *
              4) /
              7
          ];
        }
      );
      var hospitalizationSuspectedICU = hospitalizationICUData.map((x) => x[1]);
      var hospitalizationConfirmedICUData = this.props.covidDataHosp.map(
        (x) => {
          return [
            x.week_ending_date,
            (Number(x.total_adult_patients_hospitalized_confirmed_covid) * 4) /
              7
          ];
        }
      );
      var hospitalizationConfirmedICU = hospitalizationICUData.map((x) => x[1]);
      const handleData = (x) => {
        const mnth = zeroPad(months.indexOf(x.year.split("-")[0]) + 1);
        const arr = x.year.split(" Qtr "); ///^[0-9]{4}/
        const year = arr[1]
          ? arr[0] + ["-01", "-04", "-08", "-12"][Number(arr[1]) - 1] + "-01"
          : "20" + x.year.split("-")[1] + "-" + mnth + "-01";

        const num = !isNaN(x.num) ? Number(x.num) : 0;
        return [new Date(year).getTime(), num];
      };
      var eightteenSixtyFourData = this.props.data.eightteenSixtyFour.map(
        handleData
      );
      var eightteenSixtyFour = eightteenSixtyFourData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var sixtyFivePlusData = this.props.data.sixtyFivePlus.map(handleData);
      var sixtyFivePlus = sixtyFivePlusData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var zeroSeventeenData = this.props.data.zeroSeventeen.map(handleData);
      var zeroSeventeen = zeroSeventeenData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var zeroFourData = this.props.data.zeroFour.map(handleData);
      var zeroFour = zeroFourData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var fiveNineData = this.props.data.fiveNine.map(handleData);
      var fiveNine = fiveNineData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var tenSeventeenData = this.props.data.tenSeventeen.map(handleData);
      var tenSeventeen = tenSeventeenData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var eightteenFourtyFourData = this.props.data.eightteenFourtyFour.map(
        handleData
      );
      var eightteenFourtyFour = eightteenFourtyFourData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var fortyFiveSixtyFourData = this.props.data.fortyFiveSixtyFour.map(
        handleData
      );
      var fortyFiveSixtyFour = fortyFiveSixtyFourData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var sixtyFiveSeventyNineData = this.props.data.sixtyFiveSeventyNine.map(
        handleData
      );
      var sixtyFiveSeventyNine = sixtyFiveSeventyNineData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var eightyPlusData = this.props.data.eightyPlus.map(handleData);
      var eightyPlus = eightyPlusData.map((x) => {
        date.push(x[0]);
        no.push(0);
        noData.push([x[0], 0]);
        return x[1];
      });
      var sixtyFivePopData = [];
      var sixtyFivePop = [];
      njpop.map((x) => {
        if (Object.keys(x)[0] === "Ages 65+") {
          return Object.values(x).map((w, r) => {
            //w = {"2010": "1190551", ...}
            return Object.values(w).map((d, r) => {
              const year = new Date(Object.keys(w)[r] + "-01-01").getTime();
              //date.push(year);
              //no.push(0);
              //noData.push([year, 0]);
              const yearr = Number(Object.keys(w)[r]);
              const ePone = this.props.data.eightyPlus.find((f, i) => {
                const arr = f.year.split(" Qtr "); ///^[0-9]{4}/
                const xyear = Number(
                  arr[1] ? arr[0] : "20" + f.year.split("-")[1]
                );
                if (xyear === yearr) {
                  return f;
                } else return null;
              });
              //console.log(ePone);
              const sSone = this.props.data.sixtyFiveSeventyNine.find(
                (f, i) => {
                  const arr = f.year.split(" Qtr "); ///^[0-9]{4}/
                  const xyear = Number(
                    arr[1] ? arr[0] : "20" + f.year.split("-")[1]
                  );
                  if (xyear === yearr) {
                    return f;
                  } else return null;
                }
              );
              const inter = d;
              let last = Object.values(w)[r - 1];
              //console.log(s);
              if (ePone && sSone) {
                const val = Math.round(
                  ePone.num +
                    sSone.num +
                    (((inter - last) / last) * (ePone.num + sSone.num)) / 12
                );
                sixtyFivePopData.push([year, val]);
                sixtyFivePop.push(val);
              }
              return null;
            });
          });
        } else return null;
      });
      const all = [
        ...hospitalizationICU,
        ...hospitalizationSuspectedICU,
        ...hospitalizationConfirmedICU,
        ...zeroSeventeen,
        ...sixtyFivePlus,
        ...eightteenSixtyFour,
        ...zeroFour,
        ...fiveNine,
        ...tenSeventeen,
        ...eightteenFourtyFour,
        ...fortyFiveSixtyFour,
        ...sixtyFiveSeventyNine,
        ...eightyPlus
      ];
      var lowDate = Math.min(...date);
      var highDate = Math.max(...date);
      var lowDischarges = Math.min(...all);
      var highDischarges = Math.max(...all);
      noData.sort((a, b) => a[0] - b[0]);
      eightyPlusData.sort((a, b) => a[0] - b[0]);
      sixtyFiveSeventyNineData.sort((a, b) => a[0] - b[0]);
      fortyFiveSixtyFourData.sort((a, b) => a[0] - b[0]);
      eightteenFourtyFourData.sort((a, b) => a[0] - b[0]);
      tenSeventeenData.sort((a, b) => a[0] - b[0]);
      fiveNineData.sort((a, b) => a[0] - b[0]);
      zeroFourData.sort((a, b) => a[0] - b[0]);
      eightteenSixtyFourData.sort((a, b) => a[0] - b[0]);
      sixtyFivePlusData.sort((a, b) => a[0] - b[0]);
      zeroSeventeenData.sort((a, b) => a[0] - b[0]);

      this.setState({
        hospitalizationICUData,
        hospitalizationSuspectedICUData,
        hospitalizationConfirmedICUData,
        sixtyFivePopData,
        sixtyFivePop,
        eightteenSixtyFourData,
        sixtyFivePlusData,
        zeroSeventeenData,
        eightyPlusData,
        sixtyFiveSeventyNineData,
        fortyFiveSixtyFourData,
        eightteenFourtyFourData,
        tenSeventeenData,
        fiveNineData,
        zeroFourData,
        noData,
        yAxis: highDischarges - lowDischarges,
        xAxis: highDate - lowDate,
        lowDate,
        highDate,
        lowDischarges,
        highDischarges
      });
    }
  };

  render() {
    const { linecss } = this.props;
    if (this.props.data) {
      const noData = this.state.noData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(
          ((y - this.state.lowDischarges) / this.state.yAxis) * 150
        )}`
      ]);
      const zeroFourData = this.state.zeroFourData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(
          ((y - this.state.lowDischarges) / this.state.yAxis) * 150
        )}`
      ]);
      const eightyPlusData = this.state.eightyPlusData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(
          ((y - this.state.lowDischarges) / this.state.yAxis) * 150
        )}`
      ]);
      const fiveNineData = this.state.fiveNineData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(
          ((y - this.state.lowDischarges) / this.state.yAxis) * 150
        )}`
      ]);
      const tenSeventeenData = this.state.tenSeventeenData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(
          ((y - this.state.lowDischarges) / this.state.yAxis) * 150
        )}`
      ]);
      const eightteenFourtyFourData = this.state.eightteenFourtyFourData.map(
        ([x, y]) => [
          `${Math.round(
            ((x - this.state.lowDate) / this.state.xAxis) *
              this.props.lastWidth *
              0.9
          )}`,
          `${Math.round(
            ((y - this.state.lowDischarges) / this.state.yAxis) * 150
          )}`
        ]
      );
      const fortyFiveSixtyFourData = this.state.fortyFiveSixtyFourData.map(
        ([x, y]) => [
          `${Math.round(
            ((x - this.state.lowDate) / this.state.xAxis) *
              this.props.lastWidth *
              0.9
          )}`,
          `${Math.round(
            ((y - this.state.lowDischarges) / this.state.yAxis) * 150
          )}`
        ]
      );
      const sixtyFiveSeventyNineData = this.state.sixtyFiveSeventyNineData.map(
        ([x, y]) => [
          `${Math.round(
            ((x - this.state.lowDate) / this.state.xAxis) *
              this.props.lastWidth *
              0.9
          )}`,
          `${Math.round(
            ((y - this.state.lowDischarges) / this.state.yAxis) * 150
          )}`
        ]
      );
      const zeroSeventeenData = this.state.zeroSeventeenData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(
          ((y - this.state.lowDischarges) / this.state.yAxis) * 150
        )}`
      ]);
      const eightteenSixtyFourData = this.state.eightteenSixtyFourData.map(
        ([x, y]) => [
          `${Math.round(
            ((x - this.state.lowDate) / this.state.xAxis) *
              this.props.lastWidth *
              0.9
          )}`,
          `${Math.round(
            ((y - this.state.lowDischarges) / this.state.yAxis) * 150
          )}`
        ]
      );
      const sixtyFivePlusData = this.state.sixtyFivePlusData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(
          ((y - this.state.lowDischarges) / this.state.yAxis) * 150
        )}`
      ]);
      const sixtyFivePopData = this.state.sixtyFivePopData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(
          ((y - this.state.lowDischarges) / this.state.yAxis) * 150
        )}`
      ]);
      const hospitalizationICUData = this.state.hospitalizationICUData.map(
        ([x, y]) => [
          `${Math.round(
            ((x - this.state.lowDate) / this.state.xAxis) *
              this.props.lastWidth *
              0.9
          )}`,
          `${Math.round(
            ((y - this.state.lowDischarges) / this.state.yAxis) * 150
          )}`
        ]
      );
      const hospitalizationSuspectedICUData = this.state.hospitalizationSuspectedICUData.map(
        ([x, y]) => [
          `${Math.round(
            ((x - this.state.lowDate) / this.state.xAxis) *
              this.props.lastWidth *
              0.9
          )}`,
          `${Math.round(
            ((y - this.state.lowDischarges) / this.state.yAxis) * 150
          )}`
        ]
      );
      const hospitalizationConfirmedICUData = this.state.hospitalizationConfirmedICUData.map(
        ([x, y]) => [
          `${Math.round(
            ((x - this.state.lowDate) / this.state.xAxis) *
              this.props.lastWidth *
              0.9
          )}`,
          `${Math.round(
            ((y - this.state.lowDischarges) / this.state.yAxis) * 150
          )}`
        ]
      );
      return (
        <div style={{ ...this.props.countblock, height: "200px" }}>
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
            highest monthly discharges&nbsp;-&nbsp;
            {shortNumber(this.state.highDischarges)}
            <br />
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
              {this.state.lowDischarges}
            </div>*/}
          </div>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height="100%"
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {zeroFourData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
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
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {eightyPlusData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height="100%"
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {zeroFourData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="black"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {fiveNineData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="gold"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {tenSeventeenData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="green"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {eightteenFourtyFourData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="blue"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {fortyFiveSixtyFourData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="purple"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {sixtyFiveSeventyNineData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="red"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {eightyPlusData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="orange"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {zeroSeventeenData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(250,200,200)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {eightteenSixtyFourData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(220,150,150)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {sixtyFivePlusData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(200,100,100)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {sixtyFivePopData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="green"
                    fill="transparent"
                    strokeWidth="2"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {hospitalizationICUData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="black"
                    fill="transparent"
                    strokeWidth="2"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {hospitalizationSuspectedICUData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(200,100,100)"
                    fill="transparent"
                    strokeWidth="2"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="http://www.w3.org/2000/svg"
          >
            {hospitalizationConfirmedICUData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(220,150,150)"
                    fill="transparent"
                    strokeWidth="2"
                    key={i}
                  />
                )
            )}
          </svg>
          <div
            style={{
              backgroundColor: "rgba(250,250,250,0.6)",
              top: "0px",
              height: "60px",
              display: "flex",
              position: "relative",
              maxWidth: "40%",
              width: "300px",
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
              flu/
              <br />
              pneu-
              <br />
              monia
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "black"
                  }}
                />
                0-4
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "yellow"
                  }}
                />
                5-9
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "green"
                  }}
                />
                10-17
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "blue"
                  }}
                />
                18-44
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "purple"
                  }}
                />
                45-64
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "red"
                  }}
                />
                65-79
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "orange"
                  }}
                />
                80+
              </div>
              covid (indexed)
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "rgb(250,200,200)"
                  }}
                />
                0-17
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "rgb(220,150,150)"
                  }}
                />
                18-64
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "rgb(200,100,100)"
                  }}
                />
                65+
              </div>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

class CaseHospitalizations extends React.Component {
  state = {
    hoveredBtn: "Florida",
    chosenState: "Florida",
    covidDataHosp: [],
    last: 1000,
    crime: true
  };

  componentDidUpdate = (prevProps) => {
    if (this.state.chosenState !== this.state.lastChosenState) {
      /*jshint loopfunc:true */
      var chosenstate = this.props.statesWithCodes.find(
        (x) => x.name === this.state.chosenState
      );
      this.setState({ lastChosenState: this.state.chosenState }, async () => {
        var data = null;
        if (chosenstate.name === "New Jersey") {
          data = [...njhospresp, ...njhospflu, ...njhospcovid];
        } else if (chosenstate.name === "Missouri") {
          data = [...mohospresp, ...mohospflu, ...mohospcovid];
        } else if (chosenstate.name === "Florida") {
          data = [...flhospresp, ...flhospflu];
        }
        let zeroSeventeen = [];
        let sixtyFivePlus = [];
        let eightteenSixtyFour = [];
        let zeroFour = [];
        let fiveNine = [];
        let tenSeventeen = [];
        let eightteenFourtyFour = [];
        let fortyFiveSixtyFour = [];
        let sixtyFiveSeventyNine = [];
        let eightyPlus = [];
        data.forEach((x) => {
          var obj = null;
          var num = null;

          if (Object.keys(x)[0] === "Ages 0-17") {
            obj = x["Ages 0-17"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = zeroSeventeen.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = (Number(Object.values(obj)[i]) * 3) / 7;
              if (!isNaN(num)) {
                if (!found) {
                  zeroSeventeen.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  zeroSeventeen = [
                    {
                      year: found.year,
                      num: found.num + num
                    },
                    ...zeroSeventeen.filter(
                      (x) => x.year !== Object.keys(obj)[i]
                    )
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 65+") {
            obj = x["Ages 65+"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = sixtyFivePlus.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = (Number(Object.values(obj)[i]) * 3) / 7;
              if (!isNaN(num)) {
                if (!found) {
                  sixtyFivePlus.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  sixtyFivePlus = [
                    { year: found.year, num: found.num + num },
                    ...sixtyFivePlus.filter(
                      (x) => x.year !== Object.keys(obj)[i]
                    )
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 18-64") {
            obj = x["Ages 18-64"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = eightteenSixtyFour.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = (Number(Object.values(obj)[i]) * 3) / 7;
              if (!isNaN(num)) {
                if (!found) {
                  eightteenSixtyFour.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  eightteenSixtyFour = [
                    { year: found.year, num: found.num + num },
                    ...eightteenSixtyFour.filter(
                      (x) => x.year !== Object.keys(obj)[i]
                    )
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 0-4") {
            obj = x["Ages 0-4"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = zeroFour.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = Number(Object.values(obj)[i]);
              if (!isNaN(num)) {
                if (!found) {
                  zeroFour.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  zeroFour = [
                    {
                      year: found.year,
                      num: found.num + num
                    },
                    ...zeroFour.filter((x) => x.year !== Object.keys(obj)[i])
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 5-9") {
            obj = x["Ages 5-9"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = fiveNine.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = Number(Object.values(obj)[i]);
              if (!isNaN(num)) {
                if (!found) {
                  fiveNine.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  fiveNine = [
                    { year: found.year, num: found.num + num },
                    ...fiveNine.filter((x) => x.year !== Object.keys(obj)[i])
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 10-17") {
            obj = x["Ages 10-17"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = tenSeventeen.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = Number(Object.values(obj)[i]);
              if (!isNaN(num)) {
                if (!found) {
                  tenSeventeen.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  tenSeventeen = [
                    { year: found.year, num: found.num + num },
                    ...tenSeventeen.filter(
                      (x) => x.year !== Object.keys(obj)[i]
                    )
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 18-44") {
            obj = x["Ages 18-44"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = eightteenFourtyFour.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = Number(Object.values(obj)[i]);
              if (!isNaN(num)) {
                if (!found) {
                  eightteenFourtyFour.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  eightteenFourtyFour = [
                    { year: found.year, num: found.num + num },
                    ...eightteenFourtyFour.filter(
                      (x) => x.year !== Object.keys(obj)[i]
                    )
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 45-64") {
            obj = x["Ages 45-64"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = fortyFiveSixtyFour.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = Number(Object.values(obj)[i]);
              if (!isNaN(num)) {
                if (!found) {
                  fortyFiveSixtyFour.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  fortyFiveSixtyFour = [
                    { year: found.year, num: found.num + num },
                    ...fortyFiveSixtyFour.filter(
                      (x) => x.year !== Object.keys(obj)[i]
                    )
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 65-79") {
            obj = x["Ages 65-79"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = sixtyFiveSeventyNine.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = Number(Object.values(obj)[i]);
              if (!isNaN(num)) {
                if (!found) {
                  sixtyFiveSeventyNine.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  sixtyFiveSeventyNine = [
                    { year: found.year, num: found.num + num },
                    ...sixtyFiveSeventyNine.filter(
                      (x) => x.year !== Object.keys(obj)[i]
                    )
                  ];
                }
              }
            }
          } else if (Object.keys(x)[0] === "Ages 80+") {
            obj = x["Ages 80+"];
            for (let i = 0; i < Object.keys(obj).length; i++) {
              const found = eightyPlus.find(
                (x) => x.year === Object.keys(obj)[i]
              );
              num = Number(Object.values(obj)[i]);
              if (!isNaN(num)) {
                if (!found) {
                  eightyPlus.push({
                    year: Object.keys(obj)[i],
                    num
                  });
                } else {
                  eightyPlus = [
                    { year: found.year, num: found.num + num },
                    ...eightyPlus.filter((x) => x.year !== Object.keys(obj)[i])
                  ];
                }
              }
            }
          }
        });
        this.setState({
          data: {
            zeroSeventeen,
            sixtyFivePlus,
            eightteenSixtyFour,
            zeroFour,
            fiveNine,
            tenSeventeen,
            eightteenFourtyFour,
            fortyFiveSixtyFour,
            sixtyFiveSeventyNine,
            eightyPlus
          }
        });
      });
    }
  };
  render() {
    const { linecss } = this.props;
    const { data } = this.state;
    const covidDataHosp = this.props.covidDataHosp.filter(
      (x) => this.state.chosenState === x.jurisdiction_of_occurrence
    );
    /**
     x.total_staffed_adult_icu_beds
   
    x.total_adult_patients_hospitalized_confirmed
    _and_suspected_covid
    
     x.total_adult_patients_hospitalized_confirmed_covid
     */
    return (
      <div
        style={{
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
          {["New Jersey", "Missouri", "Florida"].map((x, i) => {
            return (
              <div
                key={i}
                onMouseEnter={() =>
                  this.setState({}, () => {
                    clearTimeout(this.unHover);
                    this.unHover = setTimeout(
                      () => this.setState({ hoveredBtn: x }),
                      200
                    );
                  })
                }
                style={{
                  transition: ".3s ease-in",
                  boxShadow: `inset 0px 0px ${
                    this.state.hoveredBtn === x ? 7 : 0
                  }px  ${this.state.hoveredBtn === x ? 2 : 0.5}px black`,
                  alignItems: "center",
                  padding: "4px 7px",
                  border: this.state.chosenState === x ? "1px solid black" : "",
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
        {data && (
          <CH
            linecss={linecss}
            data={data}
            crime={this.state.crime}
            chosenState={this.state.chosenState}
            covidDataHosp={covidDataHosp}
            lastWidth={this.props.lastWidth}
            countblock={this.props.countblock}
          />
        )}
      </div>
    );
  }
}
export default CaseHospitalizations;
