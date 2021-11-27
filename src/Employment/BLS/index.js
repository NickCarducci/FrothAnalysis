import React from "react";
import AbsoDecade from "./AbsoDecade";
import { blsEmployment } from "./data";

class BLS extends React.Component {
  state = {};
  render() {
    var all = "ALL EMPLOYEES, THOUSANDS";
    var comp = {};
    var alll = [];
    var p = 0;
    Object.values(blsEmployment).forEach((year) => {
      Object.values(year).map((value, i) => {
        const label = Object.keys(year)[i];
        if (!label.includes("Total")) {
          var val = isNaN(value) ? value : String(value);
          var num = Math.round(Number(val.replace(/[,]+/g, "")));
          alll.push(num);
          if (comp[label]) {
            return comp[label].push([p + 1, num]);
          } else return (comp[label] = [[p + 1, num]]);
        } else return null;
      });
      p++;
    });
    var lowest = Math.min(...alll);
    var highest = Math.max(...alll);
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          backgroundColor: "blue",
          flexDirection: "column",
          width: "100%",
          height: "200px"
        }}
      >
        <div style={{ backgroundColor: "white" }}>
          Mar-01 to Mar-21 - (top black is retail or professional)
        </div>
        {p === Object.values(blsEmployment).length &&
          Object.values(comp).map((data, i) => {
            const key = Object.keys(comp)[i];
            return (
              <AbsoDecade
                lastWidth={this.props.lastWidth}
                color={
                  key === "Mining and logging"
                    ? "purple"
                    : key === "Utilities"
                    ? "rgb(30,150,250)"
                    : key === "Financial activities"
                    ? "orange"
                    : key === "Manufacturing"
                    ? "rgb(40,230,30)"
                    : key === "Leisure and hospitality"
                    ? "red"
                    : key === "Education and health services"
                    ? "black"
                    : [
                        "Government",
                        "Federal government",
                        "State government",
                        "Local government"
                      ].includes(key)
                    ? "grey"
                    : key === "Construction"
                    ? "white"
                    : "rgb(0,0,0)"
                }
                highest={highest}
                lowest={lowest}
                key={key}
                all={all}
                data={data}
                comp={comp}
              />
            );
          })}
      </div>
    );
  }
}
export default BLS;
