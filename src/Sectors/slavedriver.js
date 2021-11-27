import React from "react";
import ".././home.css";

class SlaveDriver extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div>
        <iframe
          width={width}
          loading="lazy"
          title={
            "personal income/gdp, population retired/personal income, " +
            "us dollar purchasing power against select assets versus foreign " +
            "global synchronized qualitative easing, and wealth*gini/population, " +
            "all correlated, but on stretched scales so not a causation"
          }
          src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=B9UD&width=${width}&height=680`}
          className="embed-container"
        />
        <div>
          With division you get a ratio, but to add differing variables is not
          ok in calculus, so why do they teach that in economics? /* ok
        </div>
        <br />
      </div>
    );
  }
}
export default SlaveDriver;
