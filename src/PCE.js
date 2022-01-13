import React from "react";
import { shortNumber } from "./Covid";
const pce = {
  "2013-01-01": {
    motor: 417.5,
    furnishings: 263.6,
    recreational: 321.6,
    miscellaneousDurable: 186.7,
    foodBev: 864,
    clothing: 350.5,
    gas: 418.2,
    miscellaneousMaterial: 907.8,
    rentUtil: 2083.5,
    healthcare: 1858.2,
    transportation: 359.9,
    recreationServices: 447.1,
    foodServices: 732.3,
    finance: 869.3,
    miscellaneousServices: 930.7,
    nonprofit: 352.6
  },
  "2014-01-01": {
    motor: 442,
    furnishings: 276.2,
    recreational: 329.9,
    miscellaneousDurable: 194,
    foodBev: 896.9,
    clothing: 360.8,
    gas: 403.3,
    miscellaneousMaterial: 959.9,
    rentUtil: 2151.4,
    healthcare: 1940.5,
    transportation: 383,
    recreationServices: 466.6,
    foodServices: 776.9,
    finance: 922.9,
    miscellaneousServices: 977.7,
    nonprofit: 365.6
  },
  "2015-01-01": {
    motor: 475.3,
    furnishings: 294.2,
    recreational: 336.5,
    miscellaneousDurable: 201.6,
    foodBev: 921,
    clothing: 368.7,
    gas: 309.4,
    miscellaneousMaterial: 1016.3,
    rentUtil: 2206.6,
    healthcare: 2057.3,
    transportation: 398.7,
    recreationServices: 491.7,
    foodServices: 832.9,
    finance: 974.4,
    miscellaneousServices: 1007.3,
    nonprofit: 371.6
  },
  "2016-01-01": {
    motor: 484.3,
    furnishings: 308.5,
    recreational: 349.4,
    miscellaneousDurable: 203,
    foodBev: 940.6,
    clothing: 375.7,
    gas: 275.7,
    miscellaneousMaterial: 1054.6,
    rentUtil: 2280.8,
    healthcare: 2159.4,
    transportation: 419.7,
    recreationServices: 518.6,
    foodServices: 873.2,
    finance: 996.1,
    miscellaneousServices: 1052.1,
    nonprofit: 401.4
  },
  "2017-01-01": {
    motor: 501.3,
    furnishings: 322.7,
    recreational: 366.4,
    miscellaneousDurable: 206.2,
    foodBev: 973.1,
    clothing: 381,
    gas: 309.9,
    miscellaneousMaterial: 1097.9,
    rentUtil: 2363.2,
    healthcare: 2238.8,
    transportation: 440.9,
    recreationServices: 542.3,
    foodServices: 913.5,
    finance: 1069,
    miscellaneousServices: 1095,
    nonprofit: 417.9
  },
  "2018-01-01": {
    motor: 519.5,
    furnishings: 345.5,
    recreational: 391.1,
    miscellaneousDurable: 213.1,
    foodBev: 1000.3,
    clothing: 392,
    gas: 350.4,
    miscellaneousMaterial: 1141.8,
    rentUtil: 2472.1,
    healthcare: 2339.6,
    transportation: 469.4,
    recreationServices: 564.7,
    foodServices: 960.8,
    finance: 1151.9,
    miscellaneousServices: 1156.7,
    nonprofit: 444.7
  },
  "2019-03-01": {
    motor: 500.1,
    furnishings: 351.8,
    recreational: 406.8,
    miscellaneousDurable: 214.6,
    foodBev: 1013.4,
    clothing: 393.4,
    gas: 323.9,
    miscellaneousMaterial: 1178.9,
    rentUtil: 2534.7,
    healthcare: 2408.7,
    transportation: 479.6,
    recreationServices: 573.7,
    foodServices: 986.9,
    finance: 1156.3,
    miscellaneousServices: 1196.7,
    nonprofit: 436.1
  },
  "2019-06-01": {
    motor: 512.6,
    furnishings: 360,
    recreational: 419.5,
    miscellaneousDurable: 217.2,
    foodBev: 1027.4,
    clothing: 398.3,
    gas: 350.1,
    miscellaneousMaterial: 1194.4,
    rentUtil: 2554.1,
    healthcare: 2449.7,
    transportation: 492.2,
    recreationServices: 582.5,
    foodServices: 1006.8,
    finance: 1166.6,
    miscellaneousServices: 1207.2,
    nonprofit: 437.3
  },
  "2019-09-01": {
    motor: 519,
    furnishings: 364.5,
    recreational: 428.6,
    miscellaneousDurable: 219.4,
    foodBev: 1041.3,
    clothing: 400,
    gas: 332.8,
    miscellaneousMaterial: 1207.1,
    rentUtil: 2585.3,
    healthcare: 2469.9,
    transportation: 502.2,
    recreationServices: 582.8,
    foodServices: 1019.4,
    finance: 1177,
    miscellaneousServices: 1234.9,
    nonprofit: 445.3
  },
  "2019-12-01": {
    motor: 526.6,
    furnishings: 364.5,
    recreational: 428.8,
    miscellaneousDurable: 219.3,
    foodBev: 1041.5,
    clothing: 401,
    gas: 343.7,
    miscellaneousMaterial: 1215.4,
    rentUtil: 2611.8,
    healthcare: 2504.3,
    transportation: 507.3,
    recreationServices: 594,
    foodServices: 1020,
    finance: 1186.5,
    miscellaneousServices: 1248.4,
    nonprofit: 440.9
  },
  "2020-03-01": {
    motor: 482,
    furnishings: 365.7,
    recreational: 428.7,
    miscellaneousDurable: 208.5,
    foodBev: 1125.1,
    clothing: 366.3,
    gas: 305.2,
    miscellaneousMaterial: 1249.5,
    rentUtil: 2622.6,
    healthcare: 2406.9,
    transportation: 467.3,
    recreationServices: 541.7,
    foodServices: 933.6,
    finance: 1193.9,
    miscellaneousServices: 1221.7,
    nonprofit: 520.5
  },
  "2020-06-01": {
    motor: 485.2,
    furnishings: 361.2,
    recreational: 458,
    miscellaneousDurable: 163.9,
    foodBev: 1152.1,
    clothing: 293.6,
    gas: 188.5,
    miscellaneousMaterial: 1247.4,
    rentUtil: 2667.7,
    healthcare: 2000.3,
    transportation: 291.2,
    recreationServices: 303.7,
    foodServices: 616.8,
    finance: 1168.7,
    miscellaneousServices: 1014.4,
    nonprofit: 577
  },
  "2020-09-01": {
    motor: 595.8,
    furnishings: 419.3,
    recreational: 509.5,
    miscellaneousDurable: 228.8,
    foodBev: 1159.5,
    clothing: 394.2,
    gas: 245.4,
    miscellaneousMaterial: 1314.7,
    rentUtil: 2682.6,
    healthcare: 2369.2,
    transportation: 342.5,
    recreationServices: 405.7,
    foodServices: 829.8,
    finance: 1200.5,
    miscellaneousServices: 1102,
    nonprofit: 494.6
  },
  "2020-12-01": {
    motor: 602.1,
    furnishings: 415.4,
    recreational: 508.7,
    miscellaneousDurable: 233.1,
    foodBev: 1150,
    clothing: 395.6,
    gas: 247.9,
    miscellaneousMaterial: 1314.6,
    rentUtil: 2699.7,
    healthcare: 2457.2,
    transportation: 352.8,
    recreationServices: 415,
    foodServices: 826.1,
    finance: 1222,
    miscellaneousServices: 1136.1,
    nonprofit: 491.4
  },
  "2021-03-01": {
    motor: 674.9,
    furnishings: 461.9,
    recreational: 559.4,
    miscellaneousDurable: 261.7,
    foodBev: 1201.5,
    clothing: 436.8,
    gas: 300.3,
    miscellaneousMaterial: 1348.5,
    rentUtil: 2727.2,
    healthcare: 2464.2,
    transportation: 356.8,
    recreationServices: 442.5,
    foodServices: 888.3,
    finance: 1244.9,
    miscellaneousServices: 1157.8,
    nonprofit: 478.7
  },
  "2021-06-01": {
    motor: 758.1,
    furnishings: 473.7,
    recreational: 580.8,
    miscellaneousDurable: 279.6,
    foodBev: 1223.4,
    clothing: 477,
    gas: 345.5,
    miscellaneousMaterial: 1391.9,
    rentUtil: 2753.4,
    healthcare: 2534.4,
    transportation: 417.3,
    recreationServices: 490.5,
    foodServices: 1028.7,
    finance: 1256.4,
    miscellaneousServices: 1204,
    nonprofit: 467.1
  },
  "2021-09-01": {
    motor: 667.9,
    furnishings: 468.7,
    recreational: 575,
    miscellaneousDurable: 283.6,
    foodBev: 1245.3,
    clothing: 479.7,
    gas: 376.2,
    miscellaneousMaterial: 1403.7,
    rentUtil: 2792.6,
    healthcare: 2574.5,
    transportation: 467.8,
    recreationServices: 525.9,
    foodServices: 1083.1,
    finance: 1276.3,
    miscellaneousServices: 1264.1,
    nonprofit: 480.4
  }
};
class PCE extends React.Component {
  constructor(props) {
    super(props);
    let date = [];
    let noData = [];
    var motor = [];
    var motorData = [];
    var furnishings = [];
    var furnishingsData = [];
    var recreational = [];
    var recreationalData = [];
    var miscellaneousDurable = [];
    var miscellaneousDurableData = [];
    var foodBev = [];
    var foodBevData = [];
    var clothing = [];
    var clothingData = [];
    var gas = [];
    var gasData = [];
    var miscellaneousMaterial = [];
    var miscellaneousMaterialData = [];
    var rentUtil = [];
    var rentUtilData = [];
    var healthcare = [];
    var healthcareData = [];
    var transportation = [];
    var transportationData = [];
    var recreationServices = [];
    var recreationServicesData = [];
    var foodServices = [];
    var foodServicesData = [];
    var finance = [];
    var financeData = [];
    var miscellaneousServices = [];
    var miscellaneousServicesData = [];
    var nonprofit = [];
    var nonprofitData = [];
    Object.keys(pce).forEach((yr, i) => {
      const year = new Date(yr).getTime();
      noData.push([year, 0]);
      date.push(year);
      const moto = Object.values(pce)[i].motor;
      motor.push(moto);
      motorData.push([year, moto]);
      const furns = Object.values(pce)[i].furnishings;
      furnishings.push(furns);
      furnishingsData.push([year, furns]);
      const recs = Object.values(pce)[i].recreational;
      recreational.push(recs);
      recreationalData.push([year, recs]);
      const miscellDurable = Object.values(pce)[i].miscellaneousDurable;
      miscellaneousDurable.push(miscellDurable);
      miscellaneousDurableData.push([year, miscellDurable]);
      const foobev = Object.values(pce)[i].foodBev;
      foodBev.push(foobev);
      foodBevData.push([year, foobev]);
      const cloth = Object.values(pce)[i].clothing;
      clothing.push(cloth);
      clothingData.push([year, cloth]);
      const gaz = Object.values(pce)[i].gas;
      gas.push(gaz);
      gasData.push([year, gaz]);
      const miscellMaterial = Object.values(pce)[i].miscellaneousMaterial;
      miscellaneousMaterial.push(miscellMaterial);
      miscellaneousMaterialData.push([year, miscellMaterial]);
      const rentU = Object.values(pce)[i].rentUtil;
      rentUtil.push(rentU);
      rentUtilData.push([year, rentU]);
      const healthcar = Object.values(pce)[i].healthcare;
      healthcare.push(healthcar);
      healthcareData.push([year, healthcar]);
      const transpo = Object.values(pce)[i].transportation;
      transportation.push(transpo);
      transportationData.push([year, transpo]);
      const recreationServe = Object.values(pce)[i].recreationServices;
      recreationServices.push(recreationServe);
      recreationServicesData.push([year, recreationServe]);
      const fooserv = Object.values(pce)[i].foodServices;
      foodServices.push(fooserv);
      foodServicesData.push([year, fooserv]);
      const fin = Object.values(pce)[i].finance;
      finance.push(fin);
      financeData.push([year, fin]);
      const miscellServices = Object.values(pce)[i].miscellaneousServices;
      miscellaneousServices.push(miscellServices);
      miscellaneousServicesData.push([year, miscellServices]);
      const nonpro = Object.values(pce)[i].nonprofit;
      nonprofit.push(nonpro);
      nonprofitData.push([year, nonpro]);
    });
    var lowDate = Math.min(...date);
    console.log(lowDate);
    var highDate = Math.max(...date);
    const all = [
      ...motor,
      ...furnishings,
      ...recreational,
      ...miscellaneousDurable,
      ...foodBev,
      ...clothing,
      ...gas,
      ...miscellaneousMaterial,
      ...rentUtil,
      ...healthcare,
      ...transportation,
      ...recreationServices,
      ...foodServices,
      ...finance,
      ...miscellaneousServices,
      ...nonprofit
    ];
    var lowpop = Math.min(...all);
    var highpop = Math.max(...all);
    noData.sort((a, b) => a[0] - b[0]);
    motorData.sort((a, b) => a[0] - b[0]);
    var state = {
      date,
      motorData,
      furnishingsData,
      recreationalData,
      miscellaneousDurableData,
      foodBevData,
      clothingData,
      gasData,
      miscellaneousMaterialData,
      rentUtilData,
      healthcareData,
      transportationData,
      recreationServicesData,
      foodServicesData,
      financeData,
      miscellaneousServicesData,
      nonprofitData,
      noData,
      yAxis: highpop - lowpop,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      highpop,
      lowpop
    };
    this.state = state;
  }

  render() {
    const { linecss } = this.props;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.props.lastWidth) * 0.9,
      "0"
    ]);
    const motorData = this.state.motorData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const furnishingsData = this.state.furnishingsData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const recreationalData = this.state.recreationalData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const miscellaneousDurableData = this.state.miscellaneousDurableData.map(
      ([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9,
        ((y - 0) / this.state.yAxis) * 150
      ]
    );
    const foodBevData = this.state.foodBevData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const clothingData = this.state.clothingData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const gasData = this.state.gasData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const miscellaneousMaterialData = this.state.miscellaneousMaterialData.map(
      ([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9,
        ((y - 0) / this.state.yAxis) * 150
      ]
    );
    const rentUtilData = this.state.rentUtilData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const healthcareData = this.state.healthcareData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const transportationData = this.state.transportationData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const recreationServicesData = this.state.recreationServicesData.map(
      ([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9,
        ((y - 0) / this.state.yAxis) * 150
      ]
    );
    const foodServicesData = this.state.foodServicesData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const financeData = this.state.financeData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const miscellaneousServicesData = this.state.miscellaneousServicesData.map(
      ([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9,
        ((y - 0) / this.state.yAxis) * 150
      ]
    );
    const nonprofitData = this.state.nonprofitData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const formattedDate = this.state.date.map((x) => {
      const year = new Date(x).getFullYear();
      return year;
    });
    const formattedDates = [...new Set(formattedDate)];
    return (
      <div
        style={{
          ...this.props.countblock,
          left: "0px",
          position: "relative"
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            display: "flex",
            bottom: "0px",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          {formattedDates.map((year) => {
            return <div>{year}</div>;
          })}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex"
          }}
        >
          <div
            style={{
              left: "0px",
              maxWidth: "50%",
              bottom: "0px",
              height: "min-content",
              display: "flex",
              position: "absolute",
              flexDirection: "column",
              zIndex: "9",
              backgroundColor: "rgba(250,250,250,.6)"
            }}
          >
            PCE -&nbsp;
            <br />
            <div
              style={{
                top: "0px",
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {new Date(this.state.lowDate).toLocaleDateString()}&nbsp;
              {new Date(this.state.highDate).toLocaleDateString()}
            </div>
            <br />
            max: {shortNumber(this.state.highpop * 1000000000)}
          </div>
          <svg
            className="all"
            style={{
              ...linecss,
              maxWidth: "400px",
              height: "200px",
              position: "relative"
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {rentUtilData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="brown"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {healthcareData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="gold"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {miscellaneousMaterialData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="yellow"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {miscellaneousServicesData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="purple"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {financeData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {foodBevData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="blue"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {foodServicesData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="blue"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {motorData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="purple"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {recreationalData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="green"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {recreationServicesData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="grey"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {nonprofitData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="red"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {clothingData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="pink"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {furnishingsData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="red"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {transportationData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="navy"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {gasData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="black"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
            {miscellaneousDurableData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="orange"
                    fill="transparent"
                    strokeWidth=""
                    key={i}
                  />
                )
            )}
          </svg>
          <div
            style={{
              //transform: "translateY(200px)",
              width: "150px"
            }}
          >
            {[
              "rentUtil",
              "healthcare",
              "miscellaneousMaterial",
              "miscellaneousServices",
              "finance",
              "foodBev",
              "foodServices",
              "motor",
              "recreational",
              "recreationServices",
              "nonprofit",
              "clothing",
              "furnishings",
              "transportation",
              "gas",
              "miscellaneousDurable"
            ].map((year) => {
              return <div>{year}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default PCE;
