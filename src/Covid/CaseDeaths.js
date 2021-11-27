import React from "react";
import { shortNumber } from ".";

const deaths2019 = [
  {
    State: "Alabama",
    Deaths: 108460,
    Population: 9791056,
    "Crude Rate": 1107.7
  },
  {
    State: "Alaska",
    Deaths: 9066,
    Population: 1468983,
    "Crude Rate": 617.2
  },
  {
    State: "Arizona",
    Deaths: 119518,
    Population: 14450363,
    "Crude Rate": 827.1
  },
  {
    State: "Arkansas",
    Deaths: 65224,
    Population: 6031629,
    "Crude Rate": 1081.4
  },
  {
    State: "California",
    Deaths: 538649,
    Population: 79069268,
    "Crude Rate": 681.2
  },
  {
    State: "Colorado",
    Deaths: 77916,
    Population: 11454300,
    "Crude Rate": 680.2
  },
  {
    State: "Connecticut",
    Deaths: 62975,
    Population: 7137952,
    "Crude Rate": 882.3
  },
  {
    State: "Delaware",
    Deaths: 18735,
    Population: 1940935,
    "Crude Rate": 965.3
  },
  {
    State: "District of Columbia",
    Deaths: 9935,
    Population: 1408204,
    "Crude Rate": 705.5
  },
  {
    State: "Florida",
    Deaths: 412428,
    Population: 42777062,
    "Crude Rate": 964.1
  },
  {
    State: "Georgia",
    Deaths: 171016,
    Population: 21136898,
    "Crude Rate": 809.1
  },
  {
    State: "Hawaii",
    Deaths: 22974,
    Population: 2836363,
    "Crude Rate": 810
  },
  {
    State: "Idaho",
    Deaths: 28691,
    Population: 3541273,
    "Crude Rate": 810.2
  },
  {
    State: "Illinois",
    Deaths: 219118,
    Population: 25412901,
    "Crude Rate": 862.2
  },
  {
    State: "Indiana",
    Deaths: 131694,
    Population: 13424097,
    "Crude Rate": 981
  },
  {
    State: "Iowa",
    Deaths: 61234,
    Population: 6311215,
    "Crude Rate": 970.2
  },
  {
    State: "Kansas",
    Deaths: 55219,
    Population: 5824819,
    "Crude Rate": 948
  },
  {
    State: "Kentucky",
    Deaths: 97697,
    Population: 8936075,
    "Crude Rate": 1093.3
  },
  {
    State: "Louisiana",
    Deaths: 91986,
    Population: 9308772,
    "Crude Rate": 988.2
  },
  {
    State: "Maine",
    Deaths: 29780,
    Population: 2682616,
    "Crude Rate": 1110.1
  },
  {
    State: "Maryland",
    Deaths: 101368,
    Population: 12088398,
    "Crude Rate": 838.6
  },
  {
    State: "Massachusetts",
    Deaths: 117782,
    Population: 13794652,
    "Crude Rate": 853.8
  },
  {
    State: "Michigan",
    Deaths: 197987,
    Population: 19982772,
    "Crude Rate": 990.8
  },
  {
    State: "Minnesota",
    Deaths: 90259,
    Population: 11250811,
    "Crude Rate": 802.2
  },
  {
    State: "Mississippi",
    Deaths: 65265,
    Population: 5962679,
    "Crude Rate": 1094.6
  },
  {
    State: "Missouri",
    Deaths: 125518,
    Population: 12263880,
    "Crude Rate": 1023.5
  },
  {
    State: "Montana",
    Deaths: 20394,
    Population: 2131083,
    "Crude Rate": 957
  },
  {
    State: "Nebraska",
    Deaths: 33874,
    Population: 3863676,
    "Crude Rate": 876.7
  },
  {
    State: "Nevada",
    Deaths: 50301,
    Population: 6114548,
    "Crude Rate": 822.6
  },
  {
    State: "New Hampshire",
    Deaths: 25518,
    Population: 2716169,
    "Crude Rate": 939.5
  },
  {
    State: "New Jersey",
    Deaths: 150775,
    Population: 17790710,
    "Crude Rate": 847.5
  },
  {
    State: "New Mexico",
    Deaths: 38519,
    Population: 4192257,
    "Crude Rate": 918.8
  },
  {
    State: "New York",
    Deaths: 313558,
    Population: 38995770,
    "Crude Rate": 804.1
  },
  {
    State: "North Carolina",
    Deaths: 189766,
    Population: 20871704,
    "Crude Rate": 909.2
  },
  {
    State: "North Dakota",
    Deaths: 13147,
    Population: 1522139,
    "Crude Rate": 863.7
  },
  {
    State: "Ohio",
    Deaths: 247981,
    Population: 23378542,
    "Crude Rate": 1060.7
  },
  {
    State: "Oklahoma",
    Deaths: 81863,
    Population: 7900050,
    "Crude Rate": 1036.2
  },
  {
    State: "Oregon",
    Deaths: 73557,
    Population: 8408450,
    "Crude Rate": 874.8
  },
  {
    State: "Pennsylvania",
    Deaths: 268685,
    Population: 25609049,
    "Crude Rate": 1049.2
  },
  {
    State: "Rhode Island",
    Deaths: 20339,
    Population: 2116676,
    "Crude Rate": 960.9
  },
  {
    State: "South Carolina",
    Deaths: 101602,
    Population: 10232841,
    "Crude Rate": 992.9
  },
  {
    State: "South Dakota",
    Deaths: 16241,
    Population: 1766894,
    "Crude Rate": 919.2
  },
  {
    State: "Tennessee",
    Deaths: 143013,
    Population: 13599184,
    "Crude Rate": 1051.6
  },
  {
    State: "Texas",
    Deaths: 405573,
    Population: 57697726,
    "Crude Rate": 702.9
  },
  {
    State: "Utah",
    Deaths: 37090,
    Population: 6367063,
    "Crude Rate": 582.5
  },
  {
    State: "Vermont",
    Deaths: 11983,
    Population: 1250288,
    "Crude Rate": 958.4
  },
  {
    State: "Virginia",
    Deaths: 139684,
    Population: 17053204,
    "Crude Rate": 819.1
  },
  {
    State: "Washington",
    Deaths: 115140,
    Population: 15150484,
    "Crude Rate": 760
  },
  {
    State: "West Virginia",
    Deaths: 46882,
    Population: 3597979,
    "Crude Rate": 1303
  },
  {
    State: "Wisconsin",
    Deaths: 107873,
    Population: 11636002,
    "Crude Rate": 927.1
  },
  {
    State: "Wyoming",
    Deaths: 10191,
    Population: 1156496,
    "Crude Rate": 881.2
  }
];

export const zeroPad = (num) => {
  var res = "0";
  if (String(num).length === 1) {
    res = `0${num}`;
  } else {
    res = num;
  }
  return res;
};
class CD extends React.Component {
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
    var alsoCancer = [];
    var alsoCancerData = [];
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

      if (x.alsoCancer) {
        alsoCancer.push(covid + fluEtAl + x.alsoCancer);
        alsoCancerData.push([
          x.week_ending_date,
          covid + fluEtAl + x.alsoCancer
        ]);
      }

      var covidMulti =
        x.covid_19_u071_multiple_cause_of_death &&
        !isNaN(Number(x.covid_19_u071_multiple_cause_of_death))
          ? Number(x.covid_19_u071_multiple_cause_of_death)
          : 0;
      covidMulti_cause.push(covidMulti + fluEtAl);
      covidMulti_causeData.push([x.week_ending_date, covidMulti + fluEtAl]);

      var thisweek = 0;
      props.covidData.map((e) => {
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
    let mort = [];
    let mortData = [];
    const stateDeath = deaths2019.find((x) => x.State === props.chosenState);
    const deth = Math.round(stateDeath.Deaths / 52);
    mort.push(deth + deth * 0.003);
    mort.push(deth + deth * 0.006);
    mort.push(deth + deth * 0.008);
    mortData.push([new Date("2020-01-01").getTime(), deth + deth * 0.003]);
    mortData.push([new Date("2021-01-01").getTime(), deth + deth * 0.006]);
    mortData.push([new Date("2021-08-01").getTime(), deth + deth * 0.008]);

    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDeaths = 0; //Math.min(...all_cause);
    var highDeaths = Math.max(...natural_cause, ...mort);
    var highCovidDeaths = Math.max(...covid_cause);
    var onlyhighCovidDeaths = Math.max(...onlycovid_cause);
    var state = {
      mortData,
      alsoCancerData,
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
      var alsoCancer = [];
      var alsoCancerData = [];
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
        if (x.alsoCancer) {
          alsoCancer.push(covid + fluEtAl + x.alsoCancer);
          alsoCancerData.push([
            x.week_ending_date,
            covid + fluEtAl + x.alsoCancer
          ]);
        }

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
      let mort = [];
      let mortData = [];
      const stateDeath = deaths2019.find(
        (x) => x.State === this.props.chosenState
      );
      const deth = Math.round(stateDeath.Deaths / 52);
      mort.push(deth + deth * 0.003);
      mort.push(deth + deth * 0.006);
      mort.push(deth + deth * 0.008);
      mortData.push([new Date("2020-01-01").getTime(), deth + deth * 0.003]);
      mortData.push([new Date("2021-01-01").getTime(), deth + deth * 0.006]);
      mortData.push([new Date("2021-08-01").getTime(), deth + deth * 0.008]);
      var lowDate = Math.min(...date);
      var highDate = Math.max(...date);
      var lowDeaths = 0; //Math.min(...all_cause);
      var highDeaths = Math.max(...natural_cause, ...mort);
      var highCovidDeaths = Math.max(...covid_cause);
      var onlyhighCovidDeaths = Math.max(...onlycovid_cause);
      this.setState({
        mortData,
        alsoCancerData,
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
    const { linecss } = this.props;
    if (this.props.data) {
      const noData = this.state.noData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      const covid_causeData = this.state.covid_causeData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      const natural_causeData = this.state.natural_causeData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      const all_causeData = this.state.all_causeData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      const mortData = this.state.mortData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      const heart_causeData = this.state.heart_causeData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      const covidMulti_causeData = this.state.covidMulti_causeData.map(
        ([x, y]) => [
          `${Math.round(
            ((x - this.state.lowDate) / this.state.xAxis) *
              this.props.lastWidth *
              0.9
          )}`,
          `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
        ]
      );
      const neo_causeData = this.state.neo_causeData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      const ratioData = this.state.ratioData.map(([x, y]) => [
        `${
          ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9
        }`,
        `${((y - 0) / 1) * 150}`
      ]);
      const flu_causeData = this.state.flu_causeData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      const alsoCancerData = this.state.alsoCancerData.map(([x, y]) => [
        `${Math.round(
          ((x - this.state.lowDate) / this.state.xAxis) *
            this.props.lastWidth *
            0.9
        )}`,
        `${Math.round(((y - this.state.lowDeaths) / this.state.yAxis) * 150)}`
      ]);
      return (
        <div
          style={{
            ...this.props.countblock,
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
            {shortNumber(this.state.onlyhighCovidDeaths)}
          </div>
          <svg
            className="all"
            style={linecss}
            xmlns="https://www.w3.org/2000/svg"
          >
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
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {covid_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(200,200,200)"
                    fill="transparent"
                    strokeWidth="0"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            className="all"
            style={linecss}
            xmlns="https://www.w3.org/2000/svg"
          >
            {natural_causeData.map(
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
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
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
               !isNaN(x) &&
                !isNaN(y) && 
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
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {all_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(100,100,250)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {natural_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(100,200,250)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg
            //heart 2018 average
            style={linecss}
            xmlns="https://www.w3.org/2000/svg"
          >
            {natural_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width="100%"
                    height="0"
                    stroke="rgb(100,200,250)"
                    fill="transparent"
                    strokeWidth="0"
                    key={i}
                  />
                )
            )}
            {
              //(this.props.chosenState === "Florida" ? 47027 : 0) / 52
            }
          </svg>
          <svg
            //resp/flu 2018 average
            style={linecss}
            xmlns="https://www.w3.org/2000/svg"
          >
            {natural_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width="100%"
                    height="0"
                    stroke="green"
                    fill="transparent"
                    strokeWidth="0"
                    key={i}
                  />
                )
            )}
            {/**
                  (this.props.chosenState === "Florida"
                    ? 12362 + 3091 + 47027 + 45281
                    : 0) / 52 */}
          </svg>
          <svg
            //accidents 2018 average
            style={linecss}
            xmlns="https://www.w3.org/2000/svg"
          >
            {natural_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width=".5"
                    height="0"
                    stroke="rgb(0,0,0)"
                    fill="transparent"
                    strokeWidth="0"
                    key={i}
                  />
                )
            )}
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
            style={linecss}
            xmlns="https://www.w3.org/2000/svg"
          >
            {natural_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width=".5"
                    height="0"
                    stroke="rgb(250,0,0)"
                    fill="transparent"
                    strokeWidth="0"
                    key={i}
                  />
                )
            )}
            {/*(this.props.chosenState === "Florida" ? 3567 + 12670 : 0) / 52 */}
          </svg>
          <svg style={linecss} xmlns="http://www.w3.org/2000/svg">
            {heart_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke={
                      i === this.state.heart_causeData.length
                        ? "rgba(250,200,100,.5)"
                        : "blue"
                    }
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {covidMulti_causeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="rgb(250,160,200)"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {covid_causeData.map(
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
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {neo_causeData.map(
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
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {flu_causeData.map(
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
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {ratioData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) &&
                isFinite(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="brown"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {alsoCancerData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="brown"
                    fill="transparent"
                    strokeWidth="4"
                    key={i}
                  />
                )
            )}
          </svg>
          <svg style={linecss} xmlns="https://www.w3.org/2000/svg">
            {mortData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={1}
                    height={1}
                    stroke="brown"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
          </svg>
          <div
            style={{
              backgroundColor: "rgba(250,250,250,0.6)",
              top: "210px",
              height: "100px",
              display: "flex",
              position: "absolute",
              width: "370px",
              maxWidth: "50%",
              left: "2px",
              zIndex: "9999",
              overflowX: "auto",
              overflowY: "hidden"
            }}
          >
            <div style={{ border: "1px grey dashed", width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "orange"
                }}
              />
              malignant neoplasms&nbsp;
            </div>
            <div style={{ border: "1px grey dashed", width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "blue"
                }}
              />
              diseases of heart&nbsp;
            </div>
            <div style={{ border: "1px grey dashed", width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "green"
                }}
              />
              influeza, pneumonia & chronic respiratory&nbsp;
            </div>
            <div style={{ border: "1px grey dashed", width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "rgb(100,200,250)"
                }}
              />
              "natural" non-injurious&nbsp;
            </div>
            <div style={{ border: "1px grey dashed", width: "max-content" }}>
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
            <div style={{ border: "1px grey dashed", width: "max-content" }}>
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
            highest wkly deaths -&nbsp;{shortNumber(this.state.highDeaths)}
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
class CaseDeaths extends React.Component {
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
    /*await fetch("https://data.cdc.gov/resource/r8kw-7aab.json")
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
      .then(async () => {*/
    await fetch("https://data.cdc.gov/resource/muzy-jte6.json")
      .then(async (res) => await res.json())
      .then((result) =>
        this.setState({
          data: result.map((f, i) => {
            var foo = { ...f };
            const dtstr = this.getdate(foo);

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
    /*})
      .catch((err) => console.log(err.message));*/
  };
  getdate = (foo) => {
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
    return foo.mmwryear + "-" + zeroPad(month) + "-" + zeroPad(dayNum);
  };
  componentDidUpdate = (prevProps) => {
    if (this.state.chosenState !== this.state.lastChosenState) {
      this.setState({ lastChosenState: this.state.chosenState }, () => {
        /*fetch(
          `https://data.cdc.gov/resource/hk9y-quqm.json?condition_group=Malignant neoplasms&state=${this.state.lastChosenState}&age_group=All Ages`
        )
          .then(async (res) => await res.json())
          .then((result) => {
            this.setState({
              data: this.state.data.map((x, i) => {
                const datestr = this.getdate(x);
                const mon = new Date(datestr).getMonth() + 1;
                const yer = new Date(datestr).getFullYear();
                const month = result.find((r) => {
                  return mon === Number(r.month) && yer === Number(r.year);
                });
                x.alsoCancer = month ? month.covid_19_deaths / 4 : 0;
                return x;
              })
            });
          });*/
      });
    }
  };
  render() {
    const { linecss } = this.props;
    var combined = [];
    this.state.data.map((x) => {
      var foo = { ...x };
      var thisone = this.props.covidData.find(
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
          width: "100%",
          height: "min-content",
          flexDirection: "column"
        }}
      >
        <div style={{ flexWrap: "wrap", display: "flex" }}>
          {statesGood.map((x, i) => {
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
                  border: this.state.chosenState === x ? "1px solid black" : "",
                  padding: "5px",
                  transition: ".3s ease-in",
                  boxShadow: `inset 0px 0px ${
                    this.state.hoveredBtn === i ? 7 : 0
                  }px  ${this.state.hoveredBtn === i ? 2 : 0.5}px black`
                }}
                onClick={() => this.setState({ chosenState: x, hoveredBtn: x })}
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
        {filteredByState.length > 0 && (
          <CD
            linecss={linecss}
            data={filteredByState}
            crime={this.state.crime}
            chosenState={this.state.chosenState}
            covidData={filteredByState1}
            lastWidth={this.props.lastWidth}
            countblock={this.props.countblock}
          />
        )}
      </div>
    );
  }
}
export default CaseDeaths;

/*<svg
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
               !isNaN(x) &&
                !isNaN(y) && 
                <rect
                  x={x}
                  y={y}
                  width="100%"
                  height="0"
                  stroke="rgb(100,200,250)"
                  fill="transparent"
                  strokeWidth="0"
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
            </svg>*/
