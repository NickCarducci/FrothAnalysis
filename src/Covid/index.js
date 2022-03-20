import React from "react";
import Population from "./Population";
import CaseDeaths from "./CaseDeaths";
import CaseExpected from "./CaseExpected";
import CaseHospitalizations from "./CaseHospitalizations";
import CaseHospitalizationsUS from "./CaseHospitalizationsUS";
import CaseMortalAge from "./CaseMortalAge";
import CasesToTests from "./CasesToTests";
import TwitterTweetEmbed from ".././TwitterTweetEmbed";
import CaseDeathsAge from "./CaseDeathsAge";
import CasePolio from "./CasePolio";

export const shortNumber = (scler, notRound) => {
  var newnum = String(Math.round(scler));
  if (notRound) newnum = String(scler);
  var app = null;
  var decimal = null;
  const suff = ["", "k", "m", "b", "t"];
  for (let i = 0; i < suff.length; i++) {
    if (newnum.length > 3) {
      decimal = newnum[newnum.length - 3];
      newnum = newnum.substring(0, newnum.length - 3);
    } else {
      app = i;
      break;
    }
  }
  return newnum + (decimal ? "." + decimal : "") + suff[app];
};

export var statesWithCodes = [
  {
    name: "Alabama",
    abbreviation: "AL"
  },
  {
    name: "Alaska",
    abbreviation: "AK"
  },
  /*{
    name: "American Samoa",
    abbreviation: "AS"
  },*/
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
  /*{
    name: "Palau",
    abbreviation: "PW"
  },*/
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
  constructor(props) {
    super(props);
    const height = window.innerHeight;
    this.state = {
      covidDataHosp: [],
      covidData: [],
      width: window.innerWidth,
      height,
      heightOfBlock: height - 600
    };
    //this.height = React.createRef();
  }
  componentWillUnmount() {
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    // clearTimeout(this.mountingheight);
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
          } // else console.log(foo);
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
        this.setState({ covidData }, () => {
          fetch("https://healthdata.gov/resource/6xf2-c3ie.json")
            .then(async (res) => await res.json())
            .then((result) => {
              // console.log(result);
              let p = 0;
              var covidDataHosp = [];
              result.forEach((x) => {
                p++;
                var foo = { ...x };
                const thisstate = statesWithCodes.find(
                  (y) => y.abbreviation === x.state
                );
                if (thisstate) {
                  // thisstate.abbreviation === "NJ" && console.log(foo);
                  foo.jurisdiction_of_occurrence = thisstate.name;
                  foo.week_ending_date = new Date(
                    x.reporting_cutoff_start
                  ).getTime();
                  covidDataHosp.push(foo);
                }

                if (result.length === p)
                  return this.setState({ covidDataHosp });
              });
            })
            .catch((err) => console.log(err.message));
        });
      })
      .catch((err) => console.log(err.message));
    //this.mountingheight = setTimeout(this.findheight, 10000);
  };
  findheight = () => {
    const heightOfBlock = this.height.current.offsetHeight + 400;
    this.setState({ heightOfBlock });
  };
  render() {
    const linecss = {
      left: "0px",
      top: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "scale(1,-1)"
    };
    const { lastWidth, count } = this.props;
    const countblock = {
      breakInside: "avoid",
      position: "relative",
      overflowX: "auto",
      overflowY: "hidden",
      wordBreak: "break-word",
      padding: "10px 0px",
      width: "100%",
      minWidth: "min-content",
      maxWidth: ""
    };
    const countblockswitch = {
      //left: "50%",
      //transform: "translateX(-150%)",
      ...countblock,
      left: "0px",
      //transform: "scale(-1,-1)",
      minWidth: "",
      maxWidth: "100%"
    };
    //for expanded left overflow
    return (
      /*<div
        style={{
          minHeight: "calc(70vh + 400px)",
          height: this.state.heightOfBlock,
          width: "100%",
          display: "flex",
          overflow: "auto"
        }}
      >*/
      <div
        //ref={this.height}
        style={{
          width: "100%",
          //transform: "rotate(180deg)",
          height: "min-content",
          display: "block",
          columnCount: count
          //position: "absolute"
        }}
      >
        <div style={countblockswitch}>
          <h2>"hospitalizations surged during covid"</h2>
          Total flu hospitalizations us
          <br />
          more demographics:{" "}
          <a href="https://usafacts.org/visualizations/covid-vaccine-tracker-states/">
            https://usafacts.org/visualizations/covid-vaccine-tracker-states/
          </a>
          <br />
          {this.state.ios ? (
            "hospitalizations not available in iOS"
          ) : (
            <CaseHospitalizationsUS
              linecss={linecss}
              statesWithCodes={statesWithCodes}
              lastWidth={lastWidth / count}
              countblock={countblock}
            />
          )}
          <br />
          <br />
          https://www.cdc.gov/flu/prevent/vaccine-supply-historical.htm
          <br />
          https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html
          <br />
          https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance
          <br />
          "Deaths are classified based on ICD-10 multiple cause of death codes
          as associated with influenza, COVID-19, or pneumonia"
          <br />
          how many died with both virus-output? Is has asymptomatic testing
          proven virion-prevalence isn't even correlated as common cold project
          artifact (warning mechanism, placebo or per capita basis, actually)?
          <br />
          <br />
          vaccines have evidently CAUSED (+corr) symptoms, which coincides with
          the hypothesis that antibody production is the rubicon of
          fatigue-vitro observance-control that which cleans harmless virions
          (French for "virons") by&nbsp;<b>cellular-digestion of bacteria</b>
        </div>
        <div style={countblockswitch}>
          Age adjustments do not account for cohort size, 77 life expectancy is
          pulled from a 1.2m/yr increase 75+ starteing around 2018
          <br />
          <br />
          40% of all adults vaxxed and 63% of 65+ means 25-34 is about 20%, Dr.
          Scott Atlas
          <br />
          <br />
          100k/16m vaxxed UK 1800...
          https://pharmajet.com/vaccines-significant-impact-human-lives-public-health/
          <br />
          https://www.prb.org/resources/clean-waters-historic-effect-on-u-s-mortality-rates-provides-hope-for-developing-countries/
          <br />
          https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html
          <br />
          <br />
          At least 80m/(1950-1928) == 3m/year * 5 == 15m #ExcessDeaths every
          year from 1950 in Communist China #Epiology&nbsp;
          <a href="https://en.m.wikipedia.org/wiki/Great_Leap_Forward">
            #GreatLeapForward
          </a>
        </div>
        <div style={countblockswitch}>
          <a href="https://nationalsecuritycasino.com">
            nationalsecuritycasino.com
          </a>
          <br />
          scope beyond Article 4 and duress by private business is involuntary
          servitude and finite producers
          <br />
          without in-vitro nor unanimous science, certainly not 3/4 doctors...
          with a conflict of interests that 1/2 nurses do not have
        </div>
        <div style={countblockswitch}>
          <img
            height="auto"
            width="100%"
            alt=""
            //settleDropboxFree={this.state.settleDropboxFree}

            src={
              this.props.settleDropboxFree
                ? ""
                : "https://www.dropbox.com/s/2ii69nnw5kc4toh/1800%20pop%20growth.jpeg?raw=1"
            }
          />
        </div>
        <img
          alt="youth mortality steadily and continously decline 1800-1980 https://ajph.aphapublications.org/doi/pdf/10.2105/AJPH.79.7.899 https://www.researchgate.net/publication/252553744_The_polio_vaccine_a_critical_assessment_of_its_arcane_history_efficacy_and_long-term_health-related_consequences?fbclid=IwAR3KZCf1jFUE0_NnjXCPJgaavi3XlCOszLiniFqR730yZFzO2fvCHrtK2Wk"
          style={{ ...countblockswitch, height: "auto" }}
          src={
            this.props.settleDropboxFree
              ? ""
              : "https://www.dropbox.com/s/viywk9c9s87ktd5/death%20rate%20youth%201900.jpeg?raw=1"
          }
        />
        <img
          alt=""
          style={{ ...countblockswitch, height: "auto" }}
          src={
            this.props.settleDropboxFree
              ? ""
              : "https://www.dropbox.com/s/lvo3drdp3amxlva/Screen%20Shot%202021-08-16%20at%204.24.43%20AM.png?raw=1"
          }
        />
        <img
          alt="https://www.geog.cam.ac.uk/people/davenport/davenport2.pdf"
          style={{ ...countblockswitch, height: "auto" }}
          src={
            this.props.settleDropboxFree
              ? ""
              : "https://www.dropbox.com/s/ksgevghqmyc7t6u/us%20southern%20migration.jpeg?raw=1"
          }
        />
        <div
          style={{
            backgroundColor: "white",
            padding: "4px 10px",
            wordBreak: "break-all"
          }}
        >
          U.K. geog.cam.ac.uk/people/davenport/davenport2.pdf, "...the infant
          proportion of burials in fact declined gradually over the whole period
          1750-1824."
        </div>
        <img
          alt=""
          style={{ ...countblockswitch, height: "auto" }}
          src={
            this.props.settleDropboxFree
              ? ""
              : "https://www.dropbox.com/s/3lmwgcqcvrj1gx2/Projected%20mortality%20census.png?raw=1"
          }
        />
        <div
          style={{
            ...countblockswitch,
            wordBreak: "break-word"
          }}
        >
          youth mortality steadily and continously decline 1800-1980
          uncorrelated with vaccines... prevalence is staggered
          <br />
          <br />
          We do not know vaccine prevelence in a century-time-series, but we can
          expect 1905 smallpox ruling to be the start
        </div>
        <div
          style={{
            ...countblockswitch,
            backgroundColor: "rgb(180,20,180)",
            color: "rgb(230,230,230)"
          }}
        >
          It was 50% chance your kid would live until 6 from 1200-1800, then
          sanitation becomes better. Prevalence of vaccines was only in 1905 to
          draw your correlative conclusions
          <br />
          <div
            style={{
              fontWeight: "bolder",
              backgroundColor: "white",
              margin: "4px",
              color: "grey"
            }}
          >
            "From the procedure, 1%-2% of variolated individuals died, compared
            to 30% after naturally contracting smallpox." @USATODAYhealth 1%-2%
            is the amount of people that die with or without the vaccine
            #BreakthroughCases
            <br />
            https://www.usatoday.com/story/news/factcheck/2021/01/12/fact-check-vaccination-helped-eliminate-smallpox/4124284001/
            <br />
            <br />
            "We conclude that increases in maternal breastfeeding were probably
            important in improving survival of infants from wealthier families,
            however changes in breastfeeding patterns were insufficient to
            account for the ubiquitous improvements in mortality of urban-born
            infants in this period." So, what else happened before vaccines and
            before wet nurses?
            <br />
            https://www.tandfonline.com/doi/full/10.1080/1081602X.2019.1580601
            <br />
            <br />
            "The adoption of a prophylactic barrier, even before the
            implementation of a therapeutic one whose action had become
            effective only from the years 1930-40, was therefore decisive in the
            first phase of the decline in mortality (Bernabeu-Mestre,
            Perdiguero, Barona, 2007)."
            <br />
            https://www.cairn.info/revue-annales-de-demographie-historique-2015-1-page-55.htm
          </div>
          <div>
            <b>
              WE DO NOT KNOW IF PNEUMONIA WOULD HAVE KILLED REGARDLESS OF VIRUS!
              A FALSE POSITIVE IS NOT PROOF
            </b>
            <br />
            "By the War of 1812 all U.S. soldiers were vaccinated against
            smallpox with the inert cowpox virus. However, throughout the 19th
            century many soldiers died during wartime from diseases such as
            typhus, dysentery, diarrhea, and pneumonia due to unsanitary camp
            conditions and unsafe food and water."
            <br />
            https://omnilogos.com/historical-and-epidemiological-trends-in-mortality-in-united-states/
            <br />
            <br />
            "It remains unclear whether inoculation could have operated to
            enhance smallpox transmission or whether changes in the properties
            of the smallpox virus drove the intensification of smallpox
            mortality among young children post‐1770"
            <br />
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4737216/
            <br />
            <br />
            "The volatility of mortality declined and the incidence of major
            mortality crises fell dramatically, most notably with the
            disappearance of plague after the 1660s but progressively if less
            dramatically throughout the seventeenth and eighteenth centuries
            (Wrigley & Schofield,1989). In tandem with this reduction in the
            amplitude of crises was a shift in the age structure of mortality.
            Adult survival improved progressively from the late seventeenth
            century as child and infant mortality worsened (Wrigley et al.,
            1997). "
            <br />
            <br />
            https://research.ncl.ac.uk/pauperlives/documents/Davenportinfantmortalitybysocialstatusdraft4.pdf
            <br />
            <b>
              AVERAGE AGE OF LIFE IS LIFE EXPECTANCY, median would be worse,
              must not age-standardize but POPULATION-STANDARDIZE (this is why
              life-expectancy is so dramatic, the boomers are outweighing the
              55+:25-54 ratio at a clip of .01-.1/year)
            </b>
            <Population width={lastWidth / count - 20} />
            <br />
            "Life expectancy increases with age as the individual survives the
            higher mortality rates associated with childhood. For instance, the
            table above listed the life expectancy at birth among 13th-century
            English nobles at 30. Having survived until the age of 21, a male
            member of the English aristocracy in this period could expect to
            live:
            <br />
            &bull; 1200–1300: to age 64
            <br />
            &bull; 1300–1400: to age 45 (because of the bubonic plague)
            <br />
            &bull; 1400–1500: to age 69
            <br />
            &bull; 1500–1550: to age 71"
            <br />
            https://en.wikipedia.org/wiki/Life_expectancy#:~:text=Life%20expectancy%20increases
            <br />
            <br />
            http://teacher.scholastic.com/activities/immigration/pdfs/by_decade/decade_line_chart.pdf
            <br />
            <br />
            expected life-expectancy vs actual
          </div>
        </div>
        <div style={countblockswitch}>
          <CaseExpected
            linecss={linecss}
            lastWidth={lastWidth / count}
            count={count}
            countblock={countblock}
          />
        </div>
        <div style={countblockswitch}>
          <CasePolio
            linecss={linecss}
            lastWidth={lastWidth / count}
            countblock={countblock}
          />
          2.5m multiple sclerosis/brain-virus/acute-flaccid-paralysis today,
          1.25m 1950 population, 39k paralytic polio * 38 years = 2.9m, then fix
          for overall average-starvation-age and you get 2.5m, see my site
          froth.app/states
          <div
            style={{
              color: "white",
              backgroundColor: "rgb(170,50,90)",
              width: "100%",
              padding: "6px 0px",
              textAlign: "center"
            }}
          >
            <a
              style={{
                color: "white"
              }}
              href="https://humanharvest.info/polio"
            >
              humanharvest.info/polio (updated version)
            </a>
          </div>
        </div>
        <div style={countblockswitch}>
          <CaseMortalAge
            linecss={linecss}
            lastWidth={lastWidth / count}
            countblock={countblock}
          />
        </div>
        <div style={countblockswitch}>
          {this.state.ios ? (
            "cases-to-tests not available in iOS"
          ) : (
            <CasesToTests
              linecss={linecss}
              covidData={this.state.covidData}
              statesWithCodes={statesWithCodes}
              lastWidth={lastWidth / count}
              countblock={countblock}
            />
          )}
        </div>
        <div
          style={{
            ...countblockswitch,
            wordBreak: "break-word"
          }}
        >
          https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36
          <br />
          https://protect-public.hhs.gov/datasets/covid-19-diagnostic-lab-testing/api
          {/*The COVID Tracking Project at The Atlantic - [license CC
              BY-NC-4.0]*/}
          <br />
          <br />
          Testing rate fixes still show decrease from more appropriate testing
          <br />
          https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818
          <br />
          https://nytimes.com/2020/08/25/health/covid-19-testing-cdc.html
          <br />
          https://www.cdc.gov/coronavirus/2019-ncov/hcp/testing-overview.html
          <br />
          https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7276051/
          <br />
          Tests were more poignant and by symptoms over time, necessarily
          producing less cases as time went on
        </div>
        <div style={countblockswitch}>
          Total cases & confirmed cases are replacements for total tests
          <br />
          likely because the amount of testing we were doing is embarrasing for
          any reputable surveyor with their wits about extrapolation
        </div>
        <div style={countblockswitch}>
          {this.state.ios ? (
            "hospitalizations not available in iOS"
          ) : (
            <CaseHospitalizations
              linecss={linecss}
              lastWidth={lastWidth / count}
              statesWithCodes={statesWithCodes}
              covidDataHosp={this.state.covidDataHosp}
              countblock={countblock}
            />
          )}
        </div>
        <div style={countblockswitch}>
          https://www.hcup-us.ahrq.gov/reports/trendtables/summarytrendtables.jsp#export
        </div>
        <div style={countblockswitch}>
          <TwitterTweetEmbed
            key="1433857610923532288"
            tweetId="1433857610923532288"
          />
        </div>
        <iframe
          style={{
            ...countblockswitch,
            maxWidth: "400px"
          }}
          src="https://www.youtube.com/embed/TjvqmfDvOfQ"
          title="Steve Trevalese nj 101.5 continuing claims-unemployment"
        ></iframe>
        <div style={countblockswitch}>
          1970 25-54/3 "working-age" unemployed was copasetic with 6m/20m now
          -20x/person millennials/55+ work like dogs in this gerontocracy with
          half continuing claims since 3/2020 being because of olds tht brought
          forward demand, can't balance a checkbook, and put their eggs in the
          bipartisan bonopsony gentrification non-concurrentable collective
          bargain racketeering bond laundering 501c3 trust and others instead
          of, I don't know, targeting margins of finite producers, hung-jury
          permits and networks
        </div>
        <iframe
          style={{
            ...countblockswitch,
            maxWidth: "400px"
          }}
          title="Bo Snerdly James Golden Wabc Nick Carducci Unemployment-unemployment"
          src="https://www.youtube-nocookie.com/embed/AJWkVjK7u48"
        ></iframe>

        {/*<iframe
          style={{
            ...countblockswitch,
            maxWidth: "400px"
          }}
          src="https://www.youtube.com/embed/1D6n2om9I6A"
          title="YouTube video player"
        ></iframe>*/}
        <div style={countblockswitch}>
          <CaseDeathsAge
            linecss={linecss}
            lastWidth={lastWidth / count}
            countblock={countblock}
          />
        </div>
        <div
          style={{
            ...countblockswitch,
            wordBreak: "break-word"
          }}
        >
          https://data.cdc.gov/NCHS/AH-Monthly-Provisional-Counts-of-Deaths-for-Select/65mz-jvh5
        </div>
        <div style={countblockswitch}>
          Weekly Counts of Deaths by State and Select Causes, 2019-2020 - CDC
          <CaseDeaths
            linecss={linecss}
            covidData={this.state.covidData}
            statesWithCodes={statesWithCodes}
            lastWidth={lastWidth / count}
            countblock={countblock}
          />
        </div>
        <div
          style={{
            ...countblockswitch,
            wordBreak: "break-word"
          }}
        >
          https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36
        </div>
        <div
          style={{
            ...countblockswitch,
            backgroundColor: "black",
            color: "white",
            padding: "4px",
            borderRadius: "4px"
          }}
        >
          13,698/day deaths: vaccines stop antibodies, not infection nor
          illness. antibodies stop bacterial-byproduct from clotting, but that's
          all a virion is. Virus is NOT alive
          <br />
          <br />
          “Without cells, viruses would not be able to multiply[, let alone be
          created]. Therefore, viruses are not living things[, and are
          exclusively made in mitosis of already infected call, or bacteria].”
          <br />
          <br />
          What do you think?
          <br />
          <br />
          “ When a doctor listens to the lungs and finds breathing sounds are
          not clear on either side of the chest, a viral cause over bacterial is
          even more highly suspected.” Sounds like an absurd discrepancy without
          order-linked, just snapshot.
          <br />
          https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference
          <br />
          <br />
          Bacteria made virus
          <br />
          https://www.science.org/doi/10.1126/science.aat9691
        </div>
      </div>
    );
  }
}
export default CovidStuff;
