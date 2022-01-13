import React from "react";
import { shortNumber } from "./Covid";
const startup = {
  "2013-01-01": {
    structuresResidential: 374.9,
    structuresCommercial: 479.5,
    family: 170.8,
    improvements: 162.8,
    commissionBonusTitle: 124.6,
    offices: 34.6,
    battery: 54.4,
    shaftsMiningWells: 155.6,
    multi: 31.5,
    factory: 49.9,
    gas: 144,
    warehouse: 8.8,
    lodging: 16.1,
    windSolar: 26.9,
    commissionSale: 15.1,
    hospitals: 21.6,
    networking: 17.6,
    vocational: 15.4,
    recreation: 8.3,
    transportation: 11,
    miscellaneousCommercial: 9.7,
    medicalBldgs: 7.9,
    modular: 6,
    marts: 16.7,
    mining: 11.6,
    restaurants: 6.6,
    farm: 9.5,
    specCare: 3.9,
    dorms: 3.9,
    religious: 3.6,
    used: 2.7,
    miscellaneous: 1.5
  },
  "2014-01-01": {
    structuresResidential: 423.5,
    structuresCommercial: 562.2,
    family: 193.6,
    improvements: 178.3,
    commissionBonusTitle: 126.1,
    offices: 44.7,
    battery: 70,
    shaftsMiningWells: 188.3,
    multi: 41.6,
    factory: 58.1,
    gas: 177.7,
    warehouse: 13.7,
    lodging: 20.2,
    windSolar: 28.2,
    commissionSale: 17.4,
    hospitals: 19.9,
    networking: 17.1,
    vocational: 15.4,
    recreation: 9.3,
    transportation: 12.2,
    miscellaneousCommercial: 9.8,
    medicalBldgs: 8.1,
    modular: 6.5,
    marts: 19.5,
    mining: 10.6,
    restaurants: 7.2,
    farm: 11,
    specCare: 4.5,
    dorms: 3.6,
    religious: 3.4,
    used: 2.8,
    miscellaneous: 1.6
  },
  "2015-01-01": {
    structuresResidential: 481.8,
    structuresCommercial: 566.5,
    family: 221.1,
    improvements: 196.9,
    commissionBonusTitle: 140.7,
    offices: 55,
    battery: 75.2,
    shaftsMiningWells: 137.1,
    multi: 52.5,
    factory: 79.6,
    gas: 127.2,
    warehouse: 16.9,
    lodging: 26.5,
    windSolar: 24.4,
    commissionSale: 20.1,
    hospitals: 22.1,
    networking: 21.5,
    vocational: 16.3,
    recreation: 12,
    transportation: 13.6,
    miscellaneousCommercial: 11.4,
    medicalBldgs: 7.9,
    modular: 7.4,
    marts: 20,
    mining: 10,
    restaurants: 7.3,
    farm: 9.3,
    specCare: 4.7,
    dorms: 3.9,
    religious: 3.6,
    used: 2.6,
    miscellaneous: 1.9
  },
  "2016-01-01": {
    structuresResidential: 535.3,
    structuresCommercial: 541.1,
    family: 242.5,
    improvements: 217.4,
    commissionBonusTitle: 152.1,
    offices: 68.7,
    battery: 81.9,
    shaftsMiningWells: 75.8,
    multi: 61.9,
    factory: 76.3,
    gas: 70,
    warehouse: 22.6,
    lodging: 33,
    windSolar: 20.4,
    commissionSale: 21.7,
    hospitals: 22.3,
    networking: 22,
    vocational: 18.3,
    recreation: 15.1,
    transportation: 13.1,
    miscellaneousCommercial: 14.3,
    medicalBldgs: 9,
    modular: 8.9,
    marts: 22.4,
    mining: 5.8,
    restaurants: 8.3,
    farm: 8.3,
    specCare: 4.5,
    dorms: 4.6,
    religious: 3.8,
    used: 2.5,
    miscellaneous: 1.1
  },
  "2017-01-01": {
    structuresResidential: 584.9,
    structuresCommercial: 580.4,
    family: 270.2,
    improvements: 237.3,
    commissionBonusTitle: 161.7,
    offices: 68.9,
    battery: 73.1,
    shaftsMiningWells: 108.5,
    multi: 62.5,
    factory: 67.6,
    gas: 101.4,
    warehouse: 29.1,
    lodging: 34.7,
    windSolar: 24.6,
    commissionSale: 21.5,
    hospitals: 22.7,
    networking: 23.6,
    vocational: 19.8,
    recreation: 17.4,
    transportation: 14.8,
    miscellaneousCommercial: 13.8,
    medicalBldgs: 10.4,
    modular: 10.3,
    marts: 24,
    mining: 7.1,
    restaurants: 8.2,
    farm: 9.9,
    specCare: 4.6,
    dorms: 4.5,
    religious: 3.6,
    used: 1.3,
    miscellaneous: 1
  },
  "2018-01-01": {
    structuresResidential: 623.9,
    structuresCommercial: 613.5,
    family: 289.6,
    improvements: 252.6,
    commissionBonusTitle: 162.2,
    offices: 76.8,
    battery: 70.4,
    shaftsMiningWells: 126.6,
    multi: 65.5,
    factory: 69.6,
    gas: 119.2,
    warehouse: 33.1,
    lodging: 37.7,
    windSolar: 23.9,
    commissionSale: 22.5,
    hospitals: 23.4,
    networking: 24.3,
    vocational: 21.1,
    recreation: 18.9,
    transportation: 17.9,
    miscellaneousCommercial: 13.6,
    medicalBldgs: 10.9,
    modular: 11.7,
    marts: 20.8,
    mining: 7.4,
    restaurants: 8.7,
    farm: 7,
    specCare: 4,
    dorms: 4.5,
    religious: 3.5,
    used: 3.2,
    miscellaneous: 1.5
  },
  "2019-01-01": {
    structuresResidential: 632.2,
    structuresCommercial: 651.1,
    family: 280,
    improvements: 266.2,
    commissionBonusTitle: 169.4,
    offices: 89.1,
    battery: 78.7,
    shaftsMiningWells: 127.3,
    multi: 69.4,
    factory: 77.9,
    gas: 117.6,
    warehouse: 34.8,
    lodging: 40,
    windSolar: 31.7,
    commissionSale: 24.2,
    hospitals: 23.6,
    networking: 22.1,
    vocational: 20.2,
    recreation: 18.9,
    transportation: 17.2,
    miscellaneousCommercial: 14,
    medicalBldgs: 12.6,
    modular: 12,
    marts: 14.6,
    mining: 9.7,
    restaurants: 9.3,
    farm: 8,
    specCare: 5.2,
    dorms: 4.6,
    religious: 3.7,
    used: 3.5,
    miscellaneous: 2.2
  },
  "2020-01-01": {
    structuresResidential: 689.6,
    structuresCommercial: 576.8,
    family: 309.4,
    improvements: 290.9,
    commissionBonusTitle: 193.4,
    offices: 86.5,
    battery: 82.8,
    shaftsMiningWells: 75.6,
    multi: 72.5,
    factory: 69.4,
    gas: 66,
    warehouse: 41.2,
    lodging: 34.6,
    windSolar: 25.1,
    commissionSale: 23.2,
    hospitals: 22.9,
    networking: 22.4,
    vocational: 16.8,
    recreation: 16,
    transportation: 15.9,
    miscellaneousCommercial: 14.6,
    medicalBldgs: 14.1,
    modular: 12.6,
    marts: 10.7,
    mining: 9.7,
    restaurants: 8.6,
    farm: 8.1,
    specCare: 6.1,
    dorms: 4.2,
    religious: 3.5,
    used: 2.4,
    miscellaneous: 1.8
  }
};
class Startup extends React.Component {
  constructor(props) {
    super(props);
    let date = [];
    let noData = [];
    var structuresResidential = [];
    var structuresResidentialData = [];
    var structuresCommercial = [];
    var structuresCommercialData = [];
    var family = [];
    var familyData = [];
    var improvements = [];
    var improvementsData = [];
    var commissionBonusTitle = [];
    var commissionBonusTitleData = [];
    var offices = [];
    var officesData = [];
    var battery = [];
    var batteryData = [];
    var shaftsMiningWells = [];
    var shaftsMiningWellsData = [];
    var multi = [];
    var multiData = [];
    var factory = [];
    var factoryData = [];
    var gas = [];
    var gasData = [];
    var warehouse = [];
    var warehouseData = [];
    var lodging = [];
    var lodgingData = [];
    var windSolar = [];
    var windsolarData = [];
    var commissionSale = [];
    var commissionSaleData = [];
    var hospitals = [];
    var hospitalsData = [];
    Object.keys(startup).forEach((yr, i) => {
      const year = new Date(yr).getTime();
      noData.push([year, 0]);
      date.push(year);
      const moto = Object.values(startup)[i].structuresResidential;
      structuresResidential.push(moto);
      structuresResidentialData.push([year, moto]);
      const furns = Object.values(startup)[i].structuresCommercial;
      structuresCommercial.push(furns);
      structuresCommercialData.push([year, furns]);
      const recs = Object.values(startup)[i].family;
      family.push(recs);
      familyData.push([year, recs]);
      const miscellDurable = Object.values(startup)[i].improvements;
      improvements.push(miscellDurable);
      improvementsData.push([year, miscellDurable]);
      const foobev = Object.values(startup)[i].commissionBonusTitle;
      commissionBonusTitle.push(foobev);
      commissionBonusTitleData.push([year, foobev]);
      const cloth = Object.values(startup)[i].offices;
      offices.push(cloth);
      officesData.push([year, cloth]);
      const gaz = Object.values(startup)[i].battery;
      battery.push(gaz);
      batteryData.push([year, gaz]);
      const miscellMaterial = Object.values(startup)[i].shaftsMiningWells;
      shaftsMiningWells.push(miscellMaterial);
      shaftsMiningWellsData.push([year, miscellMaterial]);
      const rentU = Object.values(startup)[i].multi;
      multi.push(rentU);
      multiData.push([year, rentU]);
      const healthcar = Object.values(startup)[i].factory;
      factory.push(healthcar);
      factoryData.push([year, healthcar]);
      const transpo = Object.values(startup)[i].gas;
      gas.push(transpo);
      gasData.push([year, transpo]);
      const recreationServe = Object.values(startup)[i].warehouse;
      warehouse.push(recreationServe);
      warehouseData.push([year, recreationServe]);
      const fooserv = Object.values(startup)[i].lodging;
      lodging.push(fooserv);
      lodgingData.push([year, fooserv]);
      const fin = Object.values(startup)[i].windSolar;
      windSolar.push(fin);
      windsolarData.push([year, fin]);
      const miscellServices = Object.values(startup)[i].commissionSale;
      commissionSale.push(miscellServices);
      commissionSaleData.push([year, miscellServices]);
      const nonpro = Object.values(startup)[i].hospitals;
      hospitals.push(nonpro);
      hospitalsData.push([year, nonpro]);
    });
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    const all = [
      ...structuresResidential,
      ...structuresCommercial,
      ...family,
      ...improvements,
      ...commissionBonusTitle,
      ...offices,
      ...battery,
      ...shaftsMiningWells,
      ...multi,
      ...factory,
      ...gas,
      ...warehouse,
      ...lodging,
      ...windSolar,
      ...commissionSale,
      ...hospitals
    ];
    var lowpop = Math.min(...all);
    var highpop = Math.max(...all);
    noData.sort((a, b) => a[0] - b[0]);
    structuresResidentialData.sort((a, b) => a[0] - b[0]);
    var state = {
      date,
      structuresResidentialData,
      structuresCommercialData,
      familyData,
      improvementsData,
      commissionBonusTitleData,
      officesData,
      batteryData,
      shaftsMiningWellsData,
      multiData,
      factoryData,
      gasData,
      warehouseData,
      lodgingData,
      windsolarData,
      commissionSaleData,
      hospitalsData,
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
    const structuresResidentialData = this.state.structuresResidentialData.map(
      ([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9,
        ((y - 0) / this.state.yAxis) * 150
      ]
    );
    const structuresCommercialData = this.state.structuresCommercialData.map(
      ([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9,
        ((y - 0) / this.state.yAxis) * 150
      ]
    );
    const familyData = this.state.familyData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const improvementsData = this.state.improvementsData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const commissionBonusTitleData = this.state.commissionBonusTitleData.map(
      ([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9,
        ((y - 0) / this.state.yAxis) * 150
      ]
    );
    const officesData = this.state.officesData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const batteryData = this.state.batteryData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const shaftsMiningWellsData = this.state.shaftsMiningWellsData.map(
      ([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          this.props.lastWidth *
          0.9,
        ((y - 0) / this.state.yAxis) * 150
      ]
    );
    const multiData = this.state.multiData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const factoryData = this.state.factoryData.map(([x, y]) => [
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
    const warehouseData = this.state.warehouseData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const lodgingData = this.state.lodgingData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const windsolarData = this.state.windsolarData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const commissionSaleData = this.state.commissionSaleData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        this.props.lastWidth *
        0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    const hospitalsData = this.state.hospitalsData.map(([x, y]) => [
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
            right: "0px",
            maxWidth: "50%",
            top: "0px",
            height: "min-content",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            zIndex: "9",
            backgroundColor: "rgba(250,250,250,.6)"
          }}
        >
          Startup -&nbsp;
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
        <div
          style={{
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
        <svg
          className="all"
          style={{ ...linecss, height: "200px", position: "relative" }}
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
          {multiData.map(
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
          {factoryData.map(
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
          {shaftsMiningWellsData.map(
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
          {commissionSaleData.map(
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
          {windsolarData.map(
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
          {commissionBonusTitleData.map(
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
          {lodgingData.map(
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
          {structuresResidentialData.map(
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
          {familyData.map(
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
          {warehouseData.map(
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
          {hospitalsData.map(
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
          {officesData.map(
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
          {structuresCommercialData.map(
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
          {gasData.map(
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
          {batteryData.map(
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
          {improvementsData.map(
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
            width: "100%"
          }}
        >
          {[
            "structuresResidential",
            "structuresCommercial",
            "family",
            "improvements",
            "commissionBonusTitle",
            "offices",
            "battery",
            "shaftsMiningWells",
            "multi",
            "factory",
            "gas",
            "warehouse",
            "lodging",
            "windSolar",
            "comissionSale",
            "hospitals"
          ].map((year) => {
            return <div>{year}</div>;
          })}
        </div>
      </div>
    );
  }
}
export default Startup;
