import React from "react";
import { Line } from "react-svg-curve";

class TotalPrivate extends React.Component {
  render() {
    var all = "ALL EMPLOYEES, THOUSANDS";
    const { totalPrivate, chosenTurn } = this.props;
    var allYears = [];
    totalPrivate.map((year, i) =>
      Object.values(year[Object.keys(year)]).map(
        (value) => !isNaN(Number(value)) && allYears.push(Number(value))
      )
    );
    var lowest = Math.min(...allYears);
    var highest = Math.max(...allYears);
    if (chosenTurn === "change") {
    } else if (chosenTurn === "absolute") {
      lowest = 0;
      highest = this.props.highest;
    } else if (chosenTurn === "income") {
      lowest = 0;
      highest = this.props.highest;
    } else if (chosenTurn === "incomePerPerson") {
      lowest = 0;
      highest = this.props.highest;
    }
    return (
      <svg
        style={{
          bottom: "0px",
          display: "flex",
          position: "absolute",
          width: "100%",
          height: "200px"
        }}
        xmlns="https://www.w3.org/2000/svg"
      >
        {all}
        <Line
          pointElement={([x, y], i) => (
            <rect
              x={x}
              y={y}
              width="1px"
              height="1px"
              stroke="rgb(30,230,230)"
              fill="red"
              strokeWidth="4"
              key={i}
            />
          )}
          data={allYears.map((x, i) => [
            `calc(((${i} - ${0}) / ${allYears.length}) * 90vw)`,
            `calc(((${x} - ${lowest}) / ${highest}) * ${"150px"})`
          ])}
        />
      </svg>
    );
  }
}

export default TotalPrivate;
