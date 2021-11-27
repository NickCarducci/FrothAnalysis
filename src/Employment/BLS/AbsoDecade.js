import React from "react";

class AbsoDecade extends React.Component {
  state = {};
  render() {
    const { data, highest, lowest, color } = this.props;
    /*console.log(
      label.map(([x, y], i) => [
        `${Math.round(((i - 0) / label.length) * this.props.lastWidth * 0.9)}`,
        `${Math.round(((x - lowest) / highest) * 150)}`
      ])
    );*/
    const dat = data.map(([x, y], i) => [
      ((i - 0) / data.length) * this.props.lastWidth * 0.9,
      ((x - lowest) / highest) * 150
    ]);
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
        {dat.map(
          ([x, y], i) =>
            !isNaN(x) &&
            !isNaN(y) && (
              <rect
                x={x}
                y={i}
                width="1px"
                height="1px"
                stroke={color}
                fill="red"
                strokeWidth="4"
                key={i}
              />
            )
        )}
      </svg>
    );
  }
}
export default AbsoDecade;
