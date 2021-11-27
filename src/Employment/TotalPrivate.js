import React from "react";

class TotalPrivate extends React.Component {
  //componentDidMount = () => {
  //  const { totalPrivate, lastWidth } = this.props; //chosenTurn
  /* totalPrivate.map((year, i) =>
      Object.values(year[Object.keys(year)]).map(
        (value) => !isNaN(Number(value)) && allYears.push(Number(value))
      )
    );*/
  /*var lowest = null;
    var highest = null;
    if (chosenTurn === "change") {
      lowest = Math.min(...allYears);
      highest = Math.max(...allYears);
    } else if (chosenTurn === "absolute") {
      lowest = 0;
      highest = this.props.highest;
    } else if (chosenTurn === "income") {
      lowest = 0;
      highest = this.props.highest;
    } else if (chosenTurn === "incomePerPerson") {
      lowest = 0;
      highest = this.props.highest;
    }*/
  /**
     * <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="red"
          d="M 10,30
            A 20,20 0,0,1 50,30
            A 20,20 0,0,1 90,30
            Q 90,60 50,90
            Q 10,60 10,30 z" />
      </svg>
      MoveTo: M, m
      LineTo: L, l, H, h, V, v
      Cubic Bézier Curve: C, c, S, s
      Quadratic Bézier Curve: Q, q, T, t
      Elliptical Arc Curve: A, a
      ClosePath: Z, z
     */

  render() {
    const { lastWidth, totalPrivate } = this.props;
    //var all = "ALL EMPLOYEES, THOUSANDS";
    var allYears = [];
    totalPrivate.map((year, i) =>
      Object.values(year[Object.keys(year)]).map(
        (value) => !isNaN(Number(value)) && allYears.push(Number(value))
      )
    );
    const lowest = Math.min(...allYears);
    const highest = Math.max(...allYears);
    const data = allYears.map((x, i) => [
      (i / allYears.length) * lastWidth * 0.9,
      ((x - lowest) / highest) * 150
    ]);
    return (
      <svg
        style={{
          top: "0px",
          display: "flex",
          position: "absolute",
          width: "100%",
          height: "200px"
        }}
        xmlns="https://www.w3.org/2000/svg"
      >
        {data.map(([x, y], i) => {
          return (
            !isNaN(x) &&
            !isNaN(y) && (
              <rect
                x={x}
                y={y}
                width={1}
                height={1}
                stroke="rgb(30,230,230)"
                fill="red"
                strokeWidth={4}
                key={i}
              />
            )
          );
        })}
      </svg>
    );
  }
}

export default TotalPrivate;
