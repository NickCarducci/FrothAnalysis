import React from "react";
import CovidChart from "./CovidChart";
import CovidChart1 from "./CovidChart1";

export var statesWithCodes = [
  {
    name: "Alabama",
    abbreviation: "AL"
  },
  {
    name: "Alaska",
    abbreviation: "AK"
  },
  {
    name: "American Samoa",
    abbreviation: "AS"
  },
  {
    name: "Arizona",
    abbreviation: "AZ"
  },
  {
    name: "Arkansas",
    abbreviation: "AR"
  },
  {
    name: "California",
    abbreviation: "CA"
  },
  {
    name: "Colorado",
    abbreviation: "CO"
  },
  {
    name: "Connecticut",
    abbreviation: "CT"
  },
  {
    name: "Delaware",
    abbreviation: "DE"
  },
  {
    name: "District of Columbia",
    abbreviation: "DC"
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM"
  },
  {
    name: "Florida",
    abbreviation: "FL"
  },
  {
    name: "Georgia",
    abbreviation: "GA"
  },
  {
    name: "Guam",
    abbreviation: "GU"
  },
  {
    name: "Hawaii",
    abbreviation: "HI"
  },
  {
    name: "Idaho",
    abbreviation: "ID"
  },
  {
    name: "Illinois",
    abbreviation: "IL"
  },
  {
    name: "Indiana",
    abbreviation: "IN"
  },
  {
    name: "Iowa",
    abbreviation: "IA"
  },
  {
    name: "Kansas",
    abbreviation: "KS"
  },
  {
    name: "Kentucky",
    abbreviation: "KY"
  },
  {
    name: "Louisiana",
    abbreviation: "LA"
  },
  {
    name: "Maine",
    abbreviation: "ME"
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH"
  },
  {
    name: "Maryland",
    abbreviation: "MD"
  },
  {
    name: "Massachusetts",
    abbreviation: "MA"
  },
  {
    name: "Michigan",
    abbreviation: "MI"
  },
  {
    name: "Minnesota",
    abbreviation: "MN"
  },
  {
    name: "Mississippi",
    abbreviation: "MS"
  },
  {
    name: "Missouri",
    abbreviation: "MO"
  },
  {
    name: "Montana",
    abbreviation: "MT"
  },
  {
    name: "Nebraska",
    abbreviation: "NE"
  },
  {
    name: "Nevada",
    abbreviation: "NV"
  },
  {
    name: "New Hampshire",
    abbreviation: "NH"
  },
  {
    name: "New Jersey",
    abbreviation: "NJ"
  },
  {
    name: "New Mexico",
    abbreviation: "NM"
  },
  {
    name: "New York",
    abbreviation: "NY"
  },
  {
    name: "North Carolina",
    abbreviation: "NC"
  },
  {
    name: "North Dakota",
    abbreviation: "ND"
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP"
  },
  {
    name: "Ohio",
    abbreviation: "OH"
  },
  {
    name: "Oklahoma",
    abbreviation: "OK"
  },
  {
    name: "Oregon",
    abbreviation: "OR"
  },
  {
    name: "Palau",
    abbreviation: "PW"
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA"
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR"
  },
  {
    name: "Rhode Island",
    abbreviation: "RI"
  },
  {
    name: "South Carolina",
    abbreviation: "SC"
  },
  {
    name: "South Dakota",
    abbreviation: "SD"
  },
  {
    name: "Tennessee",
    abbreviation: "TN"
  },
  {
    name: "Texas",
    abbreviation: "TX"
  },
  {
    name: "Utah",
    abbreviation: "UT"
  },
  {
    name: "Vermont",
    abbreviation: "VT"
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI"
  },
  {
    name: "Virginia",
    abbreviation: "VA"
  },
  {
    name: "Washington",
    abbreviation: "WA"
  },
  {
    name: "West Virginia",
    abbreviation: "WV"
  },
  {
    name: "Wisconsin",
    abbreviation: "WI"
  },
  {
    name: "Wyoming",
    abbreviation: "WY"
  }
];
class CovidStuff extends React.Component {
  state = {
    covidData: [],
    width: window.innerWidth,
    height: window.innerHeight
  };
  componentWillUnmount() {
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
  }
  refresh = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      let width = window.innerWidth; // * 0.01;
      let height = window.innerHeight; // * 0.01;
      document.documentElement.style.setProperty("--vw", `${width}px`);
      document.documentElement.style.setProperty("--vh", `${height}px`);
      width = window.innerWidth;
      height = window.innerHeight;
      this.setState({
        width,
        height
      });
    }, 200);
  };
  componentDidMount = async () => {
    this.refresh();
    window.addEventListener("resize", this.refresh);
    let juris = [];
    //"https://api.covidtracking.com/api/v1/states/daily.json"
    fetch("https://data.cdc.gov/resource/9mfq-cb36.json")
      .then(async (res) => await res.json())
      .then((result) => {
        let p = 0;
        var covidData = [];
        result.forEach((x) => {
          p++;
          var foo = { ...x };
          const thisstate = statesWithCodes.find(
            (y) => y.abbreviation === x.state
          );
          if (thisstate) {
            foo.jurisdiction_of_occurrence = thisstate.name;
            if (!juris.includes(foo.jurisdiction_of_occurrence))
              juris.push(foo.jurisdiction_of_occurrence);
            var date = new Date(x.submission_date).getTime();
            foo.week_ending_date = date;
            foo.positive = Number(x.conf_cases); //x.positiveIncrease;
            foo.total = Number(x.new_case); //x.totalTestResultsIncrease;//tot_cases
            return covidData.push(foo);
          }
        });
        if (result.length === p) return covidData;
      })
      .then((covidData) => {
        //var jo = [];
        //this.state.covidData.map((y) => jo.push(y.jurisdiction_of_occurrence));
        //const unique = [...new Set(jo)];
        // return null;
        //hoistable then will require resolve, so use state for next fetch
        //or maybe just use async () => await {}
        this.setState({ covidData });
      })
      .catch((err) => console.log(err.message));
  };
  render() {
    return (
      <div
        style={{
          display: ["Precautions", "Stats"].includes(this.props.openTopic)
            ? "flex"
            : "none",
          position: "relative",
          overflowX: "auto",
          overflowY: "hidden",
          width: "100%",
          height: "400px"
        }}
      >
        <div
          style={{
            overflowY: "auto",
            width: this.props.openTopic === "Precautions" ? "100%" : "0%",
            opacity: this.props.openTopic === "Precautions" ? "1" : "0",
            height: this.props.openTopic === "Precautions" ? "100%" : "0%",
            zIndex: this.props.openTopic === "Precautions" ? "10" : "-3"
          }}
        >
          <div style={{ display: "inline-block" }}>
            CO2 and ice-melt match because, "Obliquity – a 41,000-year change in
            the tilt of the Earth’s axis relative to the sun that changes how
            much sun is received during a year at the poles versus the equator"
            <br />
            (what if our sun revolves around another?)
            <br />
            https://www.carbonbrief.org/explainer-how-the-rise-and-fall-of-co2-levels-influenced-the-ice-ages
            <br />
            2005 novel SARS-CoV (January 28, 2005)
            https://jvi.asm.org/content/79/4/2001/article-info
            <br />
            <br />
            electricity is the release of electrons from the neutron & protons
            when they hit but do not mix/trade into a stable compound. gravity
            are those electrons not mass. I do not understand the logic of
            multiplying lightspeed^2 by grams... which we can make on any scale
          </div>
          <img
            style={{ width: "300px" }}
            src="https://www.dl.dropboxusercontent.com/s/21qr4z03x0itzrg/surgicalmaskwarning.jpeg?dl=0"
            alt="surgical masks only stop spittle which on average travels no more than 1 foot during non-quited talking"
          />
          <img
            style={{ width: "300px" }}
            src="https://www.dl.dropboxusercontent.com/s/xrxzi5oexmizg8a/n95maskbox.jpeg?dl=0"
            alt="n95 masks/gas masks stop aerosols"
          />
          <img
            style={{ width: "300px" }}
            src="https://www.dl.dropboxusercontent.com/s/00cuqd9k6zts7vv/salonmaskeffect.jpg?dl=0"
            alt="Absence of Apparent Transmission of SARS-CoV-2 from Two Stylists After Exposure at a Hair Salon with a Universal Face Covering Policy — Springfield, Missouri, May 2020"
          />
          <img
            style={{ width: "300px" }}
            src="https://www.dl.dropboxusercontent.com/s/5xwv1ieiqopdib3/abc_cdc.jpeg?dl=0"
            alt="When COVID-19 is reported as a cause of death on the death certificate, it is coded and counted as a death due to COVID-19..."
          />
          <img
            style={{ width: "300px" }}
            src="https://www.dl.dropboxusercontent.com/s/xemvtyyx9vy7siu/macrotrendsdeathratesnapshot.jpeg?dl=0"
            alt="US deaths have been trending up since 2013"
          />
          <img
            style={{ width: "300px" }}
            src="https://www.dl.dropboxusercontent.com/s/amd4iuusdt3tetn/allcause.png?dl=0"
            alt="Fluid-filled lung season comparison"
          />
          <img
            style={{ width: "300px" }}
            src="https://www.dl.dropboxusercontent.com/s/twqrwxr85km8ctu/Screen%20Shot%202021-01-06%20at%2012.10.28%20AM.png?dl=0"
            alt="Fluid-filled lung season comparison"
          />
          <img
            style={{ width: "300px" }}
            src="https://www.dl.dropboxusercontent.com/s/y9b0g6bjcrt6naw/spanishflu.jpeg?dl=0"
            alt="Spanish flu historical notion of larger second wave fourfold"
          />
        </div>

        <div
          style={{
            display: this.props.openTopic === "Stats" ? "flex" : "none",
            position: "relative",
            top: "0px",
            width: "min-content",
            height: "100%"
          }}
        >
          <div
            style={{
              overflowY: "auto",
              flexDirection: "column"
            }}
          >
            Weekly Counts of Deaths by State and Select Causes, 2019-2020 - CDC
            <CovidChart
              covidData={this.state.covidData}
              statesWithCodes={statesWithCodes}
            />
            <div
              style={{
                display: "flex",
                position: "relative",
                top: "0px",
                width: "100vw",
                height: "min-content"
              }}
            >
              https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36
              <br />
              https://protect-public.hhs.gov/datasets/covid-19-diagnostic-lab-testing/api
              {/*The COVID Tracking Project at The Atlantic - [license CC
              BY-NC-4.0]*/}
            </div>
            <CovidChart1
              covidData={this.state.covidData}
              statesWithCodes={statesWithCodes}
            />
            <div
              style={{
                display: "flex",
                position: "relative",
                top: "0px",
                width: "100vw",
                height: "min-content"
              }}
            >
              Total cases & confirmed cases are replacements for total tests
              <br />
              likely because the amount of testing we were doing is embarrasing
              for any reputable surveyor with their wits about extrapolation
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CovidStuff;
