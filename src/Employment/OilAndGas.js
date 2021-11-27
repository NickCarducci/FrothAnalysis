import React from "react";

const oilAndGas = [
  {
    "1972": {
      Jan: 141.2,
      Feb: 140.9,
      Mar: 140.8,
      Apr: 140.2,
      May: 139.6,
      Jun: 139.5,
      Jul: 139,
      Aug: 138.4,
      Sep: 137.3,
      Oct: "137.5",
      Nov: "137.0",
      Dec: 137.7
    }
  },
  {
    "1973": {
      Jan: 136.3,
      Feb: 136.3,
      Mar: 136.1,
      Apr: 135.8,
      May: 135.6,
      Jun: 135,
      Jul: 134.8,
      Aug: 133.8,
      Sep: 134.6,
      Oct: "134.3",
      Nov: "135.2",
      Dec: 135.5
    }
  },
  {
    "1974": {
      Jan: 136.3,
      Feb: 136.6,
      Mar: 137.1,
      Apr: 137.8,
      May: 138.7,
      Jun: 138.9,
      Jul: 140.5,
      Aug: 141.8,
      Sep: 142.6,
      Oct: "144.1",
      Nov: "144.8",
      Dec: 145.7
    }
  },
  {
    "1975": {
      Jan: 146.8,
      Feb: 146.5,
      Mar: 148.1,
      Apr: 149.4,
      May: 150.2,
      Jun: 150.6,
      Jul: 151.4,
      Aug: 151.8,
      Sep: 152.8,
      Oct: "153.3",
      Nov: "153.5",
      Dec: 154.2
    }
  },
  {
    "1976": {
      Jan: 154.9,
      Feb: 155.5,
      Mar: 155.5,
      Apr: 155.4,
      May: 155.6,
      Jun: 156.6,
      Jul: 156.8,
      Aug: 157,
      Sep: 157,
      Oct: "157.2",
      Nov: "157.8",
      Dec: 158.8
    }
  },
  {
    "1977": {
      Jan: 159,
      Feb: 159.6,
      Mar: 160.8,
      Apr: 162.1,
      May: 163.3,
      Jun: 164,
      Jul: 165.3,
      Aug: 166.5,
      Sep: 167.9,
      Oct: "169.2",
      Nov: "170.5",
      Dec: 171.3
    }
  },
  {
    "1978": {
      Jan: 172.3,
      Feb: 173.2,
      Mar: 174.5,
      Apr: 175,
      May: 174.6,
      Jun: 176.8,
      Jul: 177.1,
      Aug: 178.2,
      Sep: 179.2,
      Oct: "179.9",
      Nov: "181.0",
      Dec: 181.7
    }
  },
  {
    "1979": {
      Jan: 183.5,
      Feb: 185.4,
      Mar: 186.4,
      Apr: 187.9,
      May: 189,
      Jun: 191.4,
      Jul: 192.5,
      Aug: 194.1,
      Sep: 195.5,
      Oct: "197.4",
      Nov: "199.4",
      Dec: 201.4
    }
  },
  {
    "1980": {
      Jan: 203.4,
      Feb: 204.5,
      Mar: 206.8,
      Apr: 211.1,
      May: 214.4,
      Jun: 217.2,
      Jul: 220.5,
      Aug: 223.2,
      Sep: 225.9,
      Oct: "229.5",
      Nov: "231.5",
      Dec: 234.4
    }
  },
  {
    "1981": {
      Jan: 237.5,
      Feb: 241,
      Mar: 243.6,
      Apr: 246.6,
      May: 248.4,
      Jun: 253.6,
      Jul: 257.3,
      Aug: 259.1,
      Sep: 260.1,
      Oct: "261.6",
      Nov: "263.5",
      Dec: 265.1
    }
  },
  {
    "1982": {
      Jan: 266,
      Feb: 266.3,
      Mar: 267,
      Apr: 265.8,
      May: 265.5,
      Jun: 264.9,
      Jul: 265,
      Aug: 264.8,
      Sep: 263.9,
      Oct: "262.8",
      Nov: "262.0",
      Dec: 261.3
    }
  },
  {
    "1983": {
      Jan: 260.1,
      Feb: 258,
      Mar: 256.4,
      Apr: 256.3,
      May: 255.7,
      Jun: 254.7,
      Jul: 254.9,
      Aug: 254.7,
      Sep: 254.7,
      Oct: "254.4",
      Nov: "254.5",
      Dec: 253.7
    }
  },
  {
    "1984": {
      Jan: 252.9,
      Feb: 253.5,
      Mar: 253.3,
      Apr: 253.5,
      May: 253.7,
      Jun: 253.4,
      Jul: 252.1,
      Aug: 251,
      Sep: 250.6,
      Oct: "250.7",
      Nov: "249.9",
      Dec: 249
    }
  },
  {
    "1985": {
      Jan: 248.5,
      Feb: 247.7,
      Mar: 247,
      Apr: 246.6,
      May: 245.7,
      Jun: 245.7,
      Jul: 245,
      Aug: 244.9,
      Sep: 243.7,
      Oct: "241.9",
      Nov: "240.3",
      Dec: 239.9
    }
  },
  {
    "1986": {
      Jan: 236.7,
      Feb: 233.4,
      Mar: 230.8,
      Apr: 225.5,
      May: 219.8,
      Jun: 216.5,
      Jul: 215.4,
      Aug: 209.4,
      Sep: 204.2,
      Oct: "204.3",
      Nov: "203.0",
      Dec: 200.1
    }
  },
  {
    "1987": {
      Jan: 199.3,
      Feb: 198.3,
      Mar: 197.6,
      Apr: 197.3,
      May: 197.3,
      Jun: 196.3,
      Jul: 197.2,
      Aug: 197.2,
      Sep: 198.2,
      Oct: "198.9",
      Nov: "198.7",
      Dec: 199.6
    }
  },
  {
    "1988": {
      Jan: 196.8,
      Feb: 196.4,
      Mar: 196.3,
      Apr: 195.6,
      May: 195.1,
      Jun: 193.7,
      Jul: 194,
      Aug: 193.9,
      Sep: 193.2,
      Oct: "193.1",
      Nov: "193.1",
      Dec: 192.9
    }
  },
  {
    "1989": {
      Jan: 192.5,
      Feb: 191.7,
      Mar: 191.6,
      Apr: 191.8,
      May: 191.3,
      Jun: 191.7,
      Jul: 190.9,
      Aug: 190.7,
      Sep: 190.2,
      Oct: "189.6",
      Nov: "189.3",
      Dec: 190.2
    }
  },
  {
    "1990": {
      Jan: 191.3,
      Feb: 191.9,
      Mar: 191,
      Apr: 190.8,
      May: 190.8,
      Jun: 190.3,
      Jul: 190.8,
      Aug: 190.4,
      Sep: 190.5,
      Oct: "188.4",
      Nov: "188.1",
      Dec: 189
    }
  },
  {
    "1991": {
      Jan: 190.6,
      Feb: 191,
      Mar: 190.3,
      Apr: 190.1,
      May: 190.7,
      Jun: 192,
      Jul: 192.2,
      Aug: 192.6,
      Sep: 191.9,
      Oct: "191.3",
      Nov: "190.2",
      Dec: 189.1
    }
  },
  {
    "1992": {
      Jan: 188.3,
      Feb: 188.3,
      Mar: 188.4,
      Apr: 187.6,
      May: 186.9,
      Jun: 183.7,
      Jul: 182,
      Aug: 178.8,
      Sep: 173.8,
      Oct: "175.8",
      Nov: "175.8",
      Dec: 175.6
    }
  },
  {
    "1993": {
      Jan: 175.2,
      Feb: 173.5,
      Mar: 172.8,
      Apr: 172.2,
      May: 171.5,
      Jun: 171,
      Jul: 169.4,
      Aug: 169.9,
      Sep: 169.3,
      Oct: "168.8",
      Nov: "169.2",
      Dec: 167
    }
  },
  {
    "1994": {
      Jan: 166.3,
      Feb: 164.7,
      Mar: 164.2,
      Apr: 163,
      May: 162.7,
      Jun: 161.7,
      Jul: 161.2,
      Aug: 162.1,
      Sep: 163.7,
      Oct: "161.3",
      Nov: "159.8",
      Dec: 158.4
    }
  },
  {
    "1995": {
      Jan: 156.3,
      Feb: 154.8,
      Mar: 153.8,
      Apr: 153.2,
      May: 152.5,
      Jun: 151.8,
      Jul: 150.8,
      Aug: 150.4,
      Sep: 150.2,
      Oct: "150.0",
      Nov: "148.9",
      Dec: 148.4
    }
  },
  {
    "1996": {
      Jan: 147.9,
      Feb: 148.1,
      Mar: 147.9,
      Apr: 148.5,
      May: 148.8,
      Jun: 147.9,
      Jul: 147.6,
      Aug: 146.7,
      Sep: 144.9,
      Oct: "145.1",
      Nov: "145.4",
      Dec: 145
    }
  },
  {
    "1997": {
      Jan: 145.8,
      Feb: 146.6,
      Mar: 145,
      Apr: 144.4,
      May: 143.9,
      Jun: 143.6,
      Jul: 144,
      Aug: 143.3,
      Sep: 142.9,
      Oct: "142.9",
      Nov: "143.3",
      Dec: 143.1
    }
  },
  {
    "1998": {
      Jan: 141.8,
      Feb: 141.8,
      Mar: 141.8,
      Apr: 141.2,
      May: 140.3,
      Jun: 141.3,
      Jul: 140.7,
      Aug: 140.9,
      Sep: 140.5,
      Oct: "139.8",
      Nov: "139.2",
      Dec: 139.5
    }
  },
  {
    "1999": {
      Jan: 138.2,
      Feb: 137,
      Mar: 136.8,
      Apr: 133.8,
      May: 131,
      Jun: 128.2,
      Jul: 129.6,
      Aug: 129.7,
      Sep: 128.4,
      Oct: "128.2",
      Nov: "127.5",
      Dec: 126.4
    }
  },
  {
    "2000": {
      Jan: 126.1,
      Feb: 126.8,
      Mar: 125.4,
      Apr: 125.6,
      May: 125.7,
      Jun: 125.6,
      Jul: 124.5,
      Aug: 123.8,
      Sep: 124.3,
      Oct: "124.6",
      Nov: "123.6",
      Dec: 122.9
    }
  },
  {
    "2001": {
      Jan: 123.5,
      Feb: 122.9,
      Mar: 123.4,
      Apr: 123.5,
      May: 123.8,
      Jun: 123.4,
      Jul: 124.3,
      Aug: 124.2,
      Sep: 124.7,
      Oct: "123.0",
      Nov: "123.9",
      Dec: 124.7
    }
  },
  {
    "2002": {
      Jan: 124.6,
      Feb: 125.5,
      Mar: 123.5,
      Apr: 121.9,
      May: 121.9,
      Jun: 121.7,
      Jul: 120.9,
      Aug: 121.1,
      Sep: 120.1,
      Oct: "120.6",
      Nov: "121.0",
      Dec: 120.7
    }
  },
  {
    "2003": {
      Jan: 120.9,
      Feb: 120.5,
      Mar: 120.9,
      Apr: 121.1,
      May: 121.1,
      Jun: 121.2,
      Jul: 120.4,
      Aug: 119.6,
      Sep: 119.4,
      Oct: "119.2",
      Nov: "118.6",
      Dec: 118.4
    }
  },
  {
    "2004": {
      Jan: 119.8,
      Feb: 121.2,
      Mar: 121.4,
      Apr: 122.9,
      May: 124.2,
      Jun: 123.6,
      Jul: 123.5,
      Aug: 124.3,
      Sep: 125,
      Oct: "124.3",
      Nov: "124.7",
      Dec: 124.7
    }
  },
  {
    "2005": {
      Jan: 124.1,
      Feb: 123.1,
      Mar: 124.6,
      Apr: 124.6,
      May: 125.2,
      Jun: 125,
      Jul: 125.7,
      Aug: 126,
      Sep: 126.8,
      Oct: "127.3",
      Nov: "128.4",
      Dec: 128.1
    }
  },
  {
    "2006": {
      Jan: 128.8,
      Feb: 130,
      Mar: 131.2,
      Apr: 132.8,
      May: 133.1,
      Jun: 134.7,
      Jul: 135.1,
      Aug: 136.8,
      Sep: 136.7,
      Oct: "138.3",
      Nov: "138.3",
      Dec: 139.4
    }
  },
  {
    "2007": {
      Jan: 140.7,
      Feb: 141.7,
      Mar: 142.8,
      Apr: 143.8,
      May: 144,
      Jun: 145.3,
      Jul: 146.5,
      Aug: 147,
      Sep: 147.2,
      Oct: "149.3",
      Nov: "151.9",
      Dec: 153.5
    }
  },
  {
    "2008": {
      Jan: 154.8,
      Feb: 155,
      Mar: 156.2,
      Apr: 154,
      May: 158.8,
      Jun: 159.9,
      Jul: 161.6,
      Aug: 163.3,
      Sep: 164.4,
      Oct: "164.3",
      Nov: "165.3",
      Dec: 167.1
    }
  },
  {
    "2009": {
      Jan: 165.1,
      Feb: 164.4,
      Mar: 162.6,
      Apr: 160.8,
      May: 160.5,
      Jun: 160.6,
      Jul: 159.6,
      Aug: 158,
      Sep: 157.7,
      Oct: "157.4",
      Nov: "156.9",
      Dec: 155.3
    }
  },
  {
    "2010": {
      Jan: 156.5,
      Feb: 156.4,
      Mar: 156.7,
      Apr: 157.6,
      May: 158.7,
      Jun: 158.1,
      Jul: 158.4,
      Aug: 159.7,
      Sep: 160.2,
      Oct: "161.5",
      Nov: "161.4",
      Dec: 161
    }
  },
  {
    "2011": {
      Jan: 162.7,
      Feb: 164.2,
      Mar: 166.7,
      Apr: 169.6,
      May: 170.4,
      Jun: 171.2,
      Jul: 172.7,
      Aug: 173.9,
      Sep: 176.5,
      Oct: "178.0",
      Nov: "178.7",
      Dec: 180.3
    }
  },
  {
    "2012": {
      Jan: 181.3,
      Feb: 182.4,
      Mar: 184.8,
      Apr: 185.5,
      May: 186.6,
      Jun: 188.2,
      Jul: 188.7,
      Aug: 189.3,
      Sep: 189.3,
      Oct: "189.1",
      Nov: "189.7",
      Dec: 191.6
    }
  },
  {
    "2013": {
      Jan: 193.2,
      Feb: 194.5,
      Mar: 193.7,
      Apr: 194.3,
      May: 193.5,
      Jun: 192.9,
      Jul: 193.1,
      Aug: 193.5,
      Sep: 193.3,
      Oct: "192.6",
      Nov: "193.5",
      Dec: 193.2
    }
  },
  {
    "2014": {
      Jan: 193.9,
      Feb: 195.5,
      Mar: 193.3,
      Apr: 195.2,
      May: 196.7,
      Jun: 198.1,
      Jul: 198.5,
      Aug: 198.1,
      Sep: 198.8,
      Oct: "200.8",
      Nov: "200.7",
      Dec: 200.6
    }
  },
  {
    "2015": {
      Jan: 198.8,
      Feb: 197.3,
      Mar: 196.5,
      Apr: 194.7,
      May: 194.2,
      Jun: 193.9,
      Jul: 194.5,
      Aug: 193.5,
      Sep: 192.5,
      Oct: "189.9",
      Nov: "188.7",
      Dec: 187.7
    }
  },
  {
    "2016": {
      Jan: 187,
      Feb: 185,
      Mar: 182.3,
      Apr: 178.3,
      May: 174.5,
      Jun: 169.7,
      Jul: 166.5,
      Aug: 164.6,
      Sep: 161,
      Oct: "158.5",
      Nov: "157.1",
      Dec: 153.1
    }
  },
  {
    "2017": {
      Jan: 149.6,
      Feb: 148.1,
      Mar: 144.5,
      Apr: 144.9,
      May: 143.8,
      Jun: 143,
      Jul: 142.2,
      Aug: 141.9,
      Sep: 143.6,
      Oct: "142.2",
      Nov: "141.5",
      Dec: 139.9
    }
  },
  {
    "2018": {
      Jan: 141.3,
      Feb: 140.9,
      Mar: 142.8,
      Apr: 142.8,
      May: 142.9,
      Jun: 143.2,
      Jul: 142.9,
      Aug: 142.4,
      Sep: 141.3,
      Oct: "141.3",
      Nov: "141.8",
      Dec: 141.4
    }
  },
  {
    "2019": {
      Jan: 142.4,
      Feb: 143.6,
      Mar: 143.9,
      Apr: 146.1,
      May: 147.8,
      Jun: 149.6,
      Jul: 149.9,
      Aug: 152.3,
      Sep: 154.3,
      Oct: "155.8",
      Nov: "155.9",
      Dec: 157.9
    }
  },
  {
    "2020": {
      Jan: 155.8,
      Feb: 156.6,
      Mar: 156.4,
      Apr: 155.4,
      May: 153.5,
      Jun: 153.6,
      Jul: 155.2,
      Aug: 156,
      Sep: 157.9,
      Oct: "159.1(P)",
      Nov: "159.6(P)",
      Dec: null
    }
  }
];
class OilAndGas extends React.Component {
  render() {
    const { lastWidth } = this.props;
    var allYears = [];
    oilAndGas.map((year, i) =>
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
                width="1px"
                height="1px"
                stroke="rgb(30,150,250)"
                fill="red"
                strokeWidth="4"
                key={i}
              />
            )
          );
        })}
      </svg>
    );
  }
}

export default OilAndGas;
