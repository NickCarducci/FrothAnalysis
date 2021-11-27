import React from "react";
class Population extends React.Component {
  state = {};
  componentWillUnmount = () => {
    clearTimeout(this.off);
  };
  render() {
    const { width, ios } = this.props;
    if (ios) {
      return <div>doesn't work on safari</div>;
    } else
      return (
        <div
          onMouseEnter={() => {
            this.setState({ touching: true });
            clearTimeout(this.off);
            this.off = setTimeout(
              () => this.setState({ touching: false }),
              3000
            );
          }}
          style={{
            overflow: "hidden",
            display: "flex",
            position: "relative",
            width: "100%"
          }}
        >
          {!isNaN(width) && (
            <iframe
              width={width}
              loading="lazy"
              title="price inflation never by population except when dead weight by public or private"
              src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=HPPc&width=${width}&height=1300`}
              style={{
                transform: "translate(0%,0%)",
                border: "none",
                position: "relative",
                width: width,
                height: "1370px",
                transition: "0.3s ease-in"
              }}
            />
          )}
          <div
            style={{
              transition: `${this.state.touching ? 1 : 0.3}s ease-in`,
              backgroundColor: "rgba(230,230,230,.7)",
              right: "0px",
              width: "max-content",
              textAlign: "right",
              zIndex: "1",
              position: "absolute",
              opacity: this.state.touching ? 1 : 0.2
            }}
          ></div>
        </div>
      );
  }
}
export default Population;
