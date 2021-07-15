import React from "react";
import Manufacturing from "./Manufacturing";
import Construction from "./Construction";
import Government from "./Government";
import Hospitality from "./Hospitality";
import OilAndGas from "./OilAndGas";
import TotalPrivate from "./TotalPrivate";
import Mining from "./Mining";
import Finance from "./Finance";
import Education from "./Education";
import { totalPrivate } from "./BLS/data";
import BLS from "./BLS";

class Employment extends React.Component {
  state = { chosenTurn: "change" };
  render() {
    var allYears = [];
    totalPrivate.map((year, i) =>
      Object.values(year[Object.keys(year)]).map(
        (value) => !isNaN(Number(value)) && allYears.push(Number(value))
      )
    );
    var highest = Math.max(...allYears);
    const { chosenTurn } = this.state;
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          backgroundColor: "rgb(200,150,00)",
          flexDirection: "column",
          width: "100vw"
        }}
      >
        <div
          onClick={() => this.setState({ openDecade: !this.state.openDecade })}
          style={{
            overflow: "hidden",
            transition: ".3s ease-in",
            display: "flex",
            position: "relative",
            backgroundColor: "rgb(200,150,00)",
            flexDirection: "column",
            width: "100vw",
            height: this.state.openDecade ? "min-content" : "0px"
          }}
        >
          <BLS />
        </div>
        <div
          style={{
            overflow: "hidden",
            transition: ".3s ease-in",
            display: "flex",
            position: "relative",
            backgroundColor: "rgb(200,150,00)",
            flexDirection: "column",
            width: "100vw",
            height: !this.state.openDecade ? "min-content" : "0px"
          }}
        >
          <div
            onClick={(e) => this.setState({ chosenTurn: e.target.id })}
            style={{
              height: "56px",
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%"
            }}
          >
            <div
              id="change"
              style={{
                textDecoration: chosenTurn === "change" ? "underline" : "none",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "56px"
              }}
            >
              change
            </div>
            <div
              id="absolute"
              style={{
                textDecoration:
                  chosenTurn === "absolute" ? "underline" : "none",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "56px"
              }}
            >
              absolute
            </div>
            <div
              id="income"
              style={{
                textDecoration: chosenTurn === "income" ? "underline" : "none",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "56px"
              }}
            >
              income
            </div>
            <div
              id="incomePerPerson"
              style={{
                textDecoration:
                  chosenTurn === "incomePerPerson" ? "underline" : "none",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "56px"
              }}
            >
              incomePerPerson
            </div>
          </div>
          <div
            onClick={() =>
              this.setState({ openDecade: !this.state.openDecade })
            }
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              transform: "scale(1,-1)",
              position: "relative",
              width: "100%",
              height: "200px",
              backgroundColor: "blue"
            }}
          >
            <TotalPrivate
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
            <Government
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
            <Construction
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
            <OilAndGas
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
            <Education
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
            <Hospitality
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
            <Manufacturing
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
            <Mining
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
            <Finance
              chosenTurn={chosenTurn}
              totalPrivate={totalPrivate}
              highest={highest}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            {" "}
            purple - mining*
            <br />
            blue - oil & gas*
            <br />
            orange - finance
            <br />
            green - manufacturing*
            <br />
            red - hospitality
            <br />
            blackish - education
            <br />
            grey - government
            <br />
            white - construction
            <br />
            teal - total private
          </div>
          <div>employment 1939-2020</div>
        </div>
      </div>
    );
  }
}
export default Employment;
