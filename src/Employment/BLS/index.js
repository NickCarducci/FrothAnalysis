import React from "react";
import AbsoDecade from "./AbsoDecade";
import { blsEmployment } from "./data";

class BLS extends React.Component {
  state = {};
  render() {
    var all = "ALL EMPLOYEES, THOUSANDS";
    var comp = {};
    var alll = [];
    Object.values(blsEmployment).map((year) =>
      Object.values(year).map((value, i) => {
        const label = Object.keys(year)[i];
        if (!label.includes("Total")) {
          var val = isNaN(value) ? value : String(value);
          var num = Number(val.replace(/[,]+/g, ""));
          alll.push(num);
          if (comp[label]) {
            return comp[label].push(num);
          } else return (comp[label] = [num]);
        } else return null;
      })
    );
    var lowest = Math.min(...alll);
    var highest = Math.max(...alll);
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          backgroundColor: "blue",
          flexDirection: "column",
          width: "100vw",
          height: "200px"
        }}
      >
        <div style={{ backgroundColor: "white" }}>
          Mar-01 to Mar-21 - (top black is retail or professional)
        </div>
        {Object.values(comp).map((label, i) => {
          const title = Object.keys(comp)[i];
          return (
            <AbsoDecade
              color={
                title === "Mining and logging"
                  ? "purple"
                  : title === "Utilities"
                  ? "rgb(30,150,250)"
                  : title === "Financial activities"
                  ? "orange"
                  : title === "Manufacturing"
                  ? "rgb(40,230,30)"
                  : title === "Leisure and hospitality"
                  ? "red"
                  : title === "Education and health services"
                  ? "black"
                  : [
                      "Government",
                      "Federal government",
                      "State government",
                      "Local government"
                    ].includes(title)
                  ? "grey"
                  : title === "Construction"
                  ? "white"
                  : "rgb(0,0,0)"
              }
              highest={highest}
              lowest={lowest}
              key={Object.keys(comp)[i]}
              all={all}
              label={label}
              comp={comp}
            />
          );
        })}
      </div>
    );
  }
}
export default BLS;
