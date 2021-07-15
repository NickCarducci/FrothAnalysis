import React from "react";
import { Line } from "react-svg-curve";

class AbsoDecade extends React.Component {
  state = {};
  render() {
    const { label, highest, lowest, color } = this.props;
    return (
      <svg
        style={{
          transform: "scale(1,-1)",
          bottom: "0px",
          display: "flex",
          position: "absolute",
          width: "100%",
          height: "200px"
        }}
        xmlns="https://www.w3.org/2000/svg"
      >
        <Line
          pointElement={([x, y], i) => (
            <rect
              x={x}
              y={y}
              width="1px"
              height="1px"
              stroke={color}
              fill="red"
              strokeWidth="4"
              key={i}
            />
          )}
          data={label.map((x, i) => [
            `calc(((${i} - ${0}) / ${label.length}) * 90vw)`,
            `calc(((${x} - ${lowest}) / ${highest}) * ${"150px"})`
          ])}
        />
      </svg>
    );
  }
}
export default AbsoDecade;
