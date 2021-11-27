import React from "react";
import { shortNumber } from ".";
//import { zeroPad } from "./Covid";

export const lifeexpdata = [
  { year: 1790, lifeexp: 39.4 },
  { year: 1791, lifeexp: 39.4 },
  { year: 1792, lifeexp: 39.4 },
  { year: 1793, lifeexp: 39.4 },
  { year: 1794, lifeexp: 39.4 },
  { year: 1795, lifeexp: 39.4 },
  { year: 1796, lifeexp: 39.4 },
  { year: 1797, lifeexp: 39.4 },
  { year: 1798, lifeexp: 39.4 },
  { year: 1799, lifeexp: 39.4 },
  { year: 1800, lifeexp: 39.4 },
  { year: 1801, lifeexp: 39.4 },
  { year: 1802, lifeexp: 39.4 },
  { year: 1803, lifeexp: 39.4 },
  { year: 1804, lifeexp: 39.4 },
  { year: 1805, lifeexp: 39.4 },
  { year: 1806, lifeexp: 39.4 },
  { year: 1807, lifeexp: 39.4 },
  { year: 1808, lifeexp: 39.4 },
  { year: 1809, lifeexp: 39.4 },
  { year: 1810, lifeexp: 39.4 },
  { year: 1811, lifeexp: 39.4 },
  { year: 1812, lifeexp: 39.4 },
  { year: 1813, lifeexp: 39.4 },
  { year: 1814, lifeexp: 39.4 },
  { year: 1815, lifeexp: 39.4 },
  { year: 1816, lifeexp: 39.4 },
  { year: 1817, lifeexp: 39.4 },
  { year: 1818, lifeexp: 39.4 },
  { year: 1819, lifeexp: 39.4 },
  { year: 1820, lifeexp: 39.4 },
  { year: 1821, lifeexp: 39.4 },
  { year: 1822, lifeexp: 39.4 },
  { year: 1823, lifeexp: 39.4 },
  { year: 1824, lifeexp: 39.4 },
  { year: 1825, lifeexp: 39.4 },
  { year: 1826, lifeexp: 39.4 },
  { year: 1827, lifeexp: 39.4 },
  { year: 1828, lifeexp: 39.4 },
  { year: 1829, lifeexp: 39.4 },
  { year: 1830, lifeexp: 39.4 },
  { year: 1831, lifeexp: 39.4 },
  { year: 1832, lifeexp: 39.4 },
  { year: 1833, lifeexp: 39.4 },
  { year: 1834, lifeexp: 39.4 },
  { year: 1835, lifeexp: 39.4 },
  { year: 1836, lifeexp: 39.4 },
  { year: 1837, lifeexp: 39.4 },
  { year: 1838, lifeexp: 39.4 },
  { year: 1839, lifeexp: 39.4 },
  { year: 1840, lifeexp: 39.4 },
  { year: 1841, lifeexp: 39.4 },
  { year: 1842, lifeexp: 39.4 },
  { year: 1843, lifeexp: 39.4 },
  { year: 1844, lifeexp: 39.4 },
  { year: 1845, lifeexp: 39.4 },
  { year: 1846, lifeexp: 39.4 },
  { year: 1847, lifeexp: 39.4 },
  { year: 1848, lifeexp: 39.4 },
  { year: 1849, lifeexp: 39.4 },
  { year: 1850, lifeexp: 39.4 },
  { year: 1851, lifeexp: 39.4 },
  { year: 1852, lifeexp: 39.4 },
  { year: 1853, lifeexp: 39.4 },
  { year: 1854, lifeexp: 39.4 },
  { year: 1855, lifeexp: 39.4 },
  { year: 1856, lifeexp: 39.4 },
  { year: 1857, lifeexp: 39.4 },
  { year: 1858, lifeexp: 39.4 },
  { year: 1859, lifeexp: 39.4 },
  { year: 1860, lifeexp: 39.4 },
  { year: 1861, lifeexp: 38 },
  { year: 1862, lifeexp: 34.5 },
  { year: 1863, lifeexp: 34 },
  { year: 1864, lifeexp: 31 },
  { year: 1865, lifeexp: 38 },
  { year: 1866, lifeexp: 39.4 },
  { year: 1867, lifeexp: 39.4 },
  { year: 1868, lifeexp: 39.4 },
  { year: 1869, lifeexp: 39.4 },
  { year: 1870, lifeexp: 39.4 },
  { year: 1871, lifeexp: 39.4 },
  { year: 1872, lifeexp: 39.4 },
  { year: 1873, lifeexp: 39.4 },
  { year: 1874, lifeexp: 39.4 },
  { year: 1875, lifeexp: 39.4 },
  { year: 1876, lifeexp: 39.4 },
  { year: 1877, lifeexp: 39.4 },
  { year: 1878, lifeexp: 39.4 },
  { year: 1879, lifeexp: 39.4 },
  { year: 1880, lifeexp: 39.4 },
  { year: 1881, lifeexp: 40 },
  { year: 1882, lifeexp: 40.6 },
  { year: 1883, lifeexp: 41.1 },
  { year: 1884, lifeexp: 41.7 },
  { year: 1885, lifeexp: 42.3 },
  { year: 1886, lifeexp: 42.9 },
  { year: 1887, lifeexp: 43.5 },
  { year: 1888, lifeexp: 44 },
  { year: 1889, lifeexp: 44.6 },
  { year: 1890, lifeexp: 45.2 },
  { year: 1891, lifeexp: 45.6 },
  { year: 1892, lifeexp: 45.9 },
  { year: 1893, lifeexp: 46.3 },
  { year: 1894, lifeexp: 46.7 },
  { year: 1895, lifeexp: 47.1 },
  { year: 1896, lifeexp: 47.4 },
  { year: 1897, lifeexp: 47.8 },
  { year: 1898, lifeexp: 48.2 },
  { year: 1899, lifeexp: 48.5 },
  { year: 1900, lifeexp: 48.9 },
  { year: 1901, lifeexp: 49.3 },
  { year: 1902, lifeexp: 50.5 },
  { year: 1903, lifeexp: 50.6 },
  { year: 1904, lifeexp: 49.6 },
  { year: 1905, lifeexp: 50.3 },
  { year: 1906, lifeexp: 50.1 },
  { year: 1907, lifeexp: 50.2 },
  { year: 1908, lifeexp: 51.9 },
  { year: 1909, lifeexp: 52.8 },
  { year: 1910, lifeexp: 51.8 },
  { year: 1911, lifeexp: 53.4 },
  { year: 1912, lifeexp: 54.1 },
  { year: 1913, lifeexp: 53.5 },
  { year: 1914, lifeexp: 54.6 },
  { year: 1915, lifeexp: 55.1 },
  { year: 1916, lifeexp: 54.2 },
  { year: 1917, lifeexp: 54 },
  { year: 1918, lifeexp: 47.2 },
  { year: 1919, lifeexp: 55.3 },
  { year: 1920, lifeexp: 55.4 },
  { year: 1921, lifeexp: 58.2 },
  { year: 1922, lifeexp: 58.1 },
  { year: 1923, lifeexp: 57.5 },
  { year: 1924, lifeexp: 58.5 },
  { year: 1925, lifeexp: 58.5 },
  { year: 1926, lifeexp: 57.9 },
  { year: 1927, lifeexp: 59.4 },
  { year: 1928, lifeexp: 58.3 },
  { year: 1929, lifeexp: 58.5 },
  { year: 1930, lifeexp: 59.6 },
  { year: 1931, lifeexp: 60.3 },
  { year: 1932, lifeexp: 61 },
  { year: 1933, lifeexp: 60.9 },
  { year: 1934, lifeexp: 60.3 },
  { year: 1935, lifeexp: 60.9 },
  { year: 1936, lifeexp: 60.4 },
  { year: 1937, lifeexp: 61.1 },
  { year: 1938, lifeexp: 62.4 },
  { year: 1939, lifeexp: 63.1 },
  { year: 1940, lifeexp: 63.2 },
  { year: 1941, lifeexp: 63.8 },
  { year: 1942, lifeexp: 64.6 },
  { year: 1943, lifeexp: 64.3 },
  { year: 1944, lifeexp: 65.1 },
  { year: 1945, lifeexp: 65.6 },
  { year: 1946, lifeexp: 66.3 },
  { year: 1947, lifeexp: 66.7 },
  { year: 1948, lifeexp: 67.3 },
  { year: 1949, lifeexp: 67.6 },
  { year: 1950, lifeexp: 68.1 },
  { year: 1951, lifeexp: 68.2 },
  { year: 1952, lifeexp: 68.4 },
  { year: 1953, lifeexp: 68.7 },
  { year: 1954, lifeexp: 69.5 },
  { year: 1955, lifeexp: 69.6 },
  { year: 1956, lifeexp: 69.7 },
  { year: 1957, lifeexp: 69.4 },
  { year: 1958, lifeexp: 69.7 },
  { year: 1959, lifeexp: 69.9 },
  { year: 1960, lifeexp: 69.9 },
  { year: 1961, lifeexp: 70.3 },
  { year: 1962, lifeexp: 70.2 },
  { year: 1963, lifeexp: 70 },
  { year: 1964, lifeexp: 70.3 },
  { year: 1965, lifeexp: 70.3 },
  { year: 1966, lifeexp: 70.4 },
  { year: 1967, lifeexp: 70.7 },
  { year: 1968, lifeexp: 70.4 },
  { year: 1969, lifeexp: 70.6 },
  { year: 1970, lifeexp: 70.9 },
  { year: 1971, lifeexp: 71.1 },
  { year: 1972, lifeexp: 71.3 },
  { year: 1973, lifeexp: 71.6 },
  { year: 1974, lifeexp: 72 },
  { year: 1975, lifeexp: 72.4 },
  { year: 1976, lifeexp: 72.8 },
  { year: 1977, lifeexp: 73.2 },
  { year: 1978, lifeexp: 73.5 },
  { year: 1979, lifeexp: 73.7 },
  { year: 1980, lifeexp: 73.9 },
  { year: 1981, lifeexp: 74.2 },
  { year: 1982, lifeexp: 74.4 },
  { year: 1983, lifeexp: 74.5 },
  { year: 1984, lifeexp: 74.6 },
  { year: 1985, lifeexp: 74.7 },
  { year: 1986, lifeexp: 74.8 },
  { year: 1987, lifeexp: 74.9 },
  { year: 1988, lifeexp: 75 },
  { year: 1989, lifeexp: 75.2 },
  { year: 1990, lifeexp: 75.4 },
  { year: 1991, lifeexp: 75.5 },
  { year: 1992, lifeexp: 75.7 },
  { year: 1993, lifeexp: 75.7 },
  { year: 1994, lifeexp: 75.8 },
  { year: 1995, lifeexp: 75.9 },
  { year: 1996, lifeexp: 76.2 },
  { year: 1997, lifeexp: 76.6 },
  { year: 1998, lifeexp: 76.7 },
  { year: 1999, lifeexp: 76.8 },
  { year: 2000, lifeexp: 76.9 },
  { year: 2001, lifeexp: 77 },
  { year: 2002, lifeexp: 77.1 },
  { year: 2003, lifeexp: 77.3 },
  { year: 2004, lifeexp: 77.5 },
  { year: 2005, lifeexp: 77.7 },
  { year: 2006, lifeexp: 77.9 },
  { year: 2007, lifeexp: 78.1 },
  { year: 2008, lifeexp: 78.3 },
  { year: 2009, lifeexp: 78.6 },
  { year: 2010, lifeexp: 78.7 },
  { year: 2011, lifeexp: 78.8 },
  { year: 2012, lifeexp: 78.9 },
  { year: 2013, lifeexp: 78.9 },
  { year: 2014, lifeexp: 78.9 },
  { year: 2015, lifeexp: 78.8 },
  { year: 2016, lifeexp: 78.8 },
  { year: 2017, lifeexp: 79 },
  { year: 2018, lifeexp: 79.1 },
  { year: 2019, lifeexp: 78.8 },
  { year: 2020, lifeexp: 77.8 }
];
//7,858 deaths from smallpox—down from 18,447 deaths in the last decade before vaccination (1791-1800).
//https://www.persee.fr/doc/adh_0066-2062_1981_num_1981_1_1488
const antivaxxers = [
  {
    year: 1800,
    deaths: 6.5 //(100000 / 16000000) * 1000
  },
  {
    year: 2020,
    deaths: 515.151515152 //(170000000/330000000) * 1000
  }
];
const childmortality = [
  {
    year: 1575,
    deaths: 350.25 //200.5 //690.5
  },
  {
    year: 1625,
    deaths: 358 //216 //484.5
  },
  {
    year: 1675,
    deaths: 350.25 //240 //940
  },
  {
    year: 1725,
    deaths: 378.5 //257 //566
  },
  {
    year: 1800,
    deaths: 462.89
  },
  {
    year: 1810,
    deaths: 461.35
  },
  {
    year: 1820,
    deaths: 456.65
  },
  {
    year: 1830,
    deaths: 447.87
  },
  {
    year: 1840,
    deaths: 430.12
  },
  {
    year: 1850,
    deaths: 399.27
  },
  {
    year: 1860,
    deaths: 343.53
  },
  {
    year: 1870,
    deaths: 316.5
  },
  {
    year: 1880,
    deaths: 347.49
  },
  {
    year: 1890,
    deaths: 281.68
  },
  {
    year: 1900,
    deaths: 238.76
  },
  {
    year: 1910,
    deaths: 206.92
  },
  {
    year: 1920,
    deaths: 184.93
  },
  {
    year: 1930,
    deaths: 102.86
  },
  {
    year: 1940,
    deaths: 66.35
  },
  {
    year: 1950,
    deaths: 40.11
  },
  {
    year: 1960,
    deaths: 31
  },
  {
    year: 1970,
    deaths: 26
  },
  {
    year: 1980,
    deaths: 17
  },
  {
    year: 1990,
    deaths: 12
  },
  {
    year: 2000,
    deaths: 9
  },
  {
    year: 2010,
    deaths: 8
  },
  {
    year: 2020,
    deaths: 7
  }
];
export const popdata = [
  {
    year: 1790,
    pop: 3929214
  },
  {
    year: 1800,
    pop: 5308483
  },
  {
    year: 1810,
    pop: 7239881
  },
  {
    year: 1820,
    pop: 9638453
  },
  {
    year: 1830,
    pop: 12860702
  },
  {
    year: 1840,
    pop: 17063353
  },
  {
    year: 1850,
    pop: 23191876
  },
  {
    year: 1860,
    pop: 31443321
  },
  {
    year: 1870,
    pop: 38558371
  },
  {
    year: 1880,
    pop: 50189209
  },
  {
    year: 1890,
    pop: 62979766
  },
  {
    year: 1900,
    pop: 76212168
  },
  {
    year: 1910,
    pop: 92228496
  },
  {
    year: 1920,
    pop: 106021537
  },
  {
    year: 1930,
    pop: 123202624
  },
  {
    year: 1940,
    pop: 142164569
  },
  {
    year: 1950,
    pop: 161325798
  },
  {
    year: 1960,
    pop: 189323175
  },
  {
    year: 1970,
    pop: 213302031
  },
  {
    year: 1980,
    pop: 236542199
  },
  {
    year: 1990,
    pop: 258709873
  },
  {
    year: 2000,
    pop: 291421906
  },
  {
    year: 2010,
    pop: 308745538
  },
  {
    year: 2020,
    pop: 333005258
  },
  {
    year: 2030,
    pop: 349655258
  },
  {
    year: 2040,
    pop: 366305258
  }
];
/*const deathsdata = [
  { year: 1900, deaths: 343217 },
  { year: 1901, deaths: 332203 },
  { year: 1902, deaths: 318636 },
  { year: 1903, deaths: 327295 },
  { year: 1904, deaths: 349855 },
  { year: 1905, deaths: 345863 },
  { year: 1906, deaths: 531005 },
  { year: 1907, deaths: 550245 },
  { year: 1908, deaths: 567245 },
  { year: 1909, deaths: 630057 },
  { year: 1910, deaths: 696856 },
  { year: 1911, deaths: 749918 },
  { year: 1912, deaths: 745771 },
  { year: 1913, deaths: 802909 },
  { year: 1914, deaths: 810914 },
  { year: 1915, deaths: 815500 },
  { year: 1916, deaths: 924971 },
  { year: 1917, deaths: 981239 },
  { year: 1918, deaths: 1430079 },
  { year: 1919, deaths: 1072263 },
  { year: 1920, deaths: 1118070 },
  { year: 1921, deaths: 1009673 },
  { year: 1922, deaths: 1083952 },
  { year: 1923, deaths: 1174065 },
  { year: 1924, deaths: 1151076 },
  { year: 1925, deaths: 1191809 },
  { year: 1926, deaths: 1257256 },
  { year: 1927, deaths: 1211627 },
  { year: 1928, deaths: 1361987 },
  { year: 1929, deaths: 1369757 },
  { year: 1930, deaths: 1327240 },
  { year: 1931, deaths: 1307273 },
  { year: 1932, deaths: 1293269 },
  { year: 1933, deaths: 1342106 },
  { year: 1934, deaths: 1396903 },
  { year: 1935, deaths: 1392752 },
  { year: 1936, deaths: 1479228 },
  { year: 1937, deaths: 1450427 },
  { year: 1938, deaths: 1381391 },
  { year: 1939, deaths: 1387897 }
];*/
const newimmigrantsdata = [
  { year: 1825, immigrants: 128502 },
  { year: 1835, immigrants: 538381 },
  { year: 1845, immigrants: 1427337 },
  { year: 1855, immigrants: 2814554 },
  { year: 1865, immigrants: 2081261 },
  { year: 1875, immigrants: 2742137 },
  { year: 1885, immigrants: 5248568 },
  { year: 1895, immigrants: 3694294 },
  { year: 1905, immigrants: 8202388 },
  { year: 1915, immigrants: 6347380 },
  { year: 1925, immigrants: 4295510 },
  { year: 1935, immigrants: 699375 },
  { year: 1945, immigrants: 856608 },
  { year: 1955, immigrants: 2499268 },
  { year: 1965, immigrants: 3213749 },
  { year: 1975, immigrants: 4248203 },
  { year: 1985, immigrants: 624379 },
  { year: 1995, immigrants: 9775398 },
  { year: 2005, immigrants: 10299430 }
];
const immigrantsdata = [
  { year: 1900, immigrants: 10300000 },
  { year: 1910, immigrants: 12300000 },
  { year: 1920, immigrants: 13300000 },
  { year: 1930, immigrants: 13300000 },
  { year: 1940, immigrants: 11300000 },
  { year: 1950, immigrants: 10300000 },
  { year: 1960, immigrants: 9300000 },
  { year: 1970, immigrants: 10300000 },
  { year: 1980, immigrants: 14300000 },
  { year: 1990, immigrants: 20300000 },
  { year: 2000, immigrants: 30300000 },
  { year: 2010, immigrants: 40300000 },
  { year: 2020, immigrants: 46300000 }
];
const birthing = [
  { year: 1800, births: 48.33 },
  { year: 1810, births: 47.91 },
  { year: 1820, births: 47.72 },
  { year: 1830, births: 53.84 },
  { year: 1840, births: 52.14 },
  { year: 1850, births: 48.8 },
  { year: 1860, births: 45.05 },
  { year: 1870, births: 42.5 },
  { year: 1880, births: 40.25 },
  { year: 1890, births: 36.8 },
  { year: 1900, births: 33.05 },
  { year: 1910, births: 30.33 },
  { year: 1920, births: 27.92 },
  { year: 1930, births: 22.48 },
  { year: 1940, births: 19.02 },
  { year: 1950, births: 24.76 },
  { year: 1960, births: 23.8 },
  { year: 1970, births: 19.6 },
  { year: 1980, births: 14.8 },
  { year: 1990, births: 15.7 },
  { year: 2000, births: 14.3 },
  { year: 2010, births: 13.8 },
  { year: 2020, births: 12 }
];
export const mortality = [
  { year: 1950, deaths: 7898, dr: 9.6, births: 19911 },
  { year: 1955, deaths: 8431, dr: 9.4, births: 21341 },
  { year: 1960, deaths: 9123, dr: 9.4, births: 20301 },
  { year: 1965, deaths: 9816, dr: 9.6, births: 18039 },
  { year: 1970, deaths: 10070, dr: 9.4, births: 16749 },
  { year: 1975, deaths: 9923, dr: 8.8, births: 16548 },
  { year: 1980, deaths: 10373, dr: 8.8, births: 18014 },
  { year: 1985, deaths: 11025, dr: 9, births: 19278 },
  { year: 1990, deaths: 11402, dr: 8.8, births: 19982 },
  { year: 1995, deaths: 11838, dr: 8.7, births: 19526 },
  { year: 2000, deaths: 12285, dr: 8.5, births: 20232 },
  { year: 2005, deaths: 12267, dr: 8.1, births: 20856 },
  { year: 2010, deaths: 12849, dr: 8.2, births: 19754 },
  { year: 2015, deaths: 14153, dr: 8.7, births: 19504 },
  { year: 2020, deaths: 14153, dr: 8.287, births: 19504 }
];
class CE extends React.Component {
  constructor(props) {
    super(props);

    let newimmigrants = [];
    let immigrants = [];
    let thought = [];
    let thoughtData = [];
    let births = [];
    let childmort = [];
    let mort = [];
    let actData = [];
    let exp = [];
    let noData = [];
    let date = [];
    var pop = [];
    var life = [];
    var test = [];
    var popData = [];
    var antivaxx = [];
    const { chosenDecade } = props;
    const mortData = mortality
      .filter((x) => x.year < chosenDecade + 1)
      .map((y) => {
        var x = { ...y };
        var b4Idx = null;
        var thisdecade = popdata
          .sort((a, b) => a - b)
          .find((p, i) => {
            b4Idx = i;
            return x.year - p.year < 6 && x.year - p.year > -1;
          });
        var b4pop = popdata[b4Idx - 1] ? popdata[b4Idx - 1].pop : 0;
        var b4year = popdata[b4Idx - 1] ? popdata[b4Idx - 1].year : 0;
        var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
        const pop = thisdecade.pop + addi;
        const val = (d) => Math.round((d / 1000) * pop);
        mort.push(val(x.dr));
        test.push([thisdecade.pop, x.dr]);
        return [x.year, val(x.dr)];
      });
    const childMortData = childmortality.map((y) => {
      var x = { ...y };
      childmort.push(x.deaths);
      return [x.year, x.deaths];
    });
    const antivaxxData = antivaxxers.map((y) => {
      var x = { ...y };
      antivaxx.push(1000 - x.deaths);
      return [x.year, 1000 - x.deaths];
    });
    //used to be population[i-lifeExpectancy].../lifeExpectancy?
    const expData = birthing
      .filter((x) => x.year < chosenDecade + 1)
      .map((x) => {
        var b4Idx = null;
        var thisdecade = popdata
          .sort((a, b) => a - b)
          .find((p, i) => {
            b4Idx = i;
            return x.year - p.year < 10 && x.year - p.year > -1;
          });
        var b4pop = popdata[b4Idx]
          ? popdata[b4Idx].pop
          : popdata[b4Idx - 1].pop;
        var b4year = popdata[b4Idx]
          ? popdata[b4Idx].year
          : popdata[b4Idx - 1].year;
        var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
        const pop = thisdecade.pop + addi;
        const val = (d) => Math.round((d / 1000) * pop);
        const thischildmort = childMortData.find((c) => c[0] === x.year);
        const sol = Math.round(val(x.births) * (1 - thischildmort[1] / 1000));
        exp.push(sol);
        return [x.year, sol];
      });
    const lifeData = lifeexpdata
      .filter((x) => x.year < chosenDecade + 1)
      .map((x, i) => {
        //var b4Idx = null;
        var thisdecade = popdata
          .sort((a, b) => a - b)
          .find((p, i) => {
            //b4Idx = i;
            return x.year === p.year; //< 10 && x.year - p.year > -1;
          });
        /*var b4pop = popdata[b4Idx + 1]
          ? popdata[b4Idx + 1].pop
          : popdata[b4Idx - 1].pop;
        var b4year = popdata[b4Idx + 1]
          ? popdata[b4Idx + 1].year
          : popdata[b4Idx - 1].year;
        var addi =
          Math.abs(thisdecade.pop - b4pop) * (Math.abs(x.year - b4year) / 10);
        const popp = thisdecade.pop - addi;*/

        date.push(x.year);
        noData.push([x.year, 0]);

        const deaths = mortData
          .filter((x) => x[0] < chosenDecade + 1)
          .find((m) => x.year - m[0] < 10 && x.year - m[0] > -1);
        if (deaths) {
          let expx = 0;
          expData.forEach((y) => {
            if (x.year - y[0] < x.lifeexp && x.year - y[0] > 0)
              expx = expx + y[1] - deaths[1];
          });

          thought.push(expx);
          thoughtData.push([x.year, expx]);
        }
        /*const actualDeaths = deathsdata.find((d) => d.year === x.year);
      if (actualDeaths) {//1920
        act.push(actualDeaths.deaths);
        actData.push([x.year, actualDeaths.deaths]);
      }*/
        if (thisdecade) {
          const birthd = births
            .sort((a, b) => a - b)
            .find((p) => p.year - x[0] < 10 && p.year - x.year > -1);
          const val = Math.round(
            ((birthd ? birthd.births : 0) / 100000) * thisdecade.pop
          );

          pop.push(thisdecade.pop - val);
          popData.push([
            x.year,
            thisdecade.pop - (birthd ? birthd.births * 1000 : 0)
          ]);
        }

        life.push(x.lifeexp);
        return [x.year, x.lifeexp];
      });
    const prefubb = [1575, 1625, 1675, 1725];
    prefubb.map((x) => {
      date.push(x);
      return noData.push([x, 0]);
    });
    const birthsData = birthing
      .filter((x) => x.year < chosenDecade + 1)
      .map((y) => {
        let b4Idx = null;
        var x = { ...y };
        var thisdecade = popdata
          .sort((a, b) => a - b)
          .find((p, i) => {
            b4Idx = i;
            return x.year - p.year < 10 && x.year - p.year > -1;
          });
        var b4pop = popdata[b4Idx]
          ? popdata[b4Idx].pop
          : popdata[b4Idx - 1].pop;
        var b4year = popdata[b4Idx]
          ? popdata[b4Idx].year
          : popdata[b4Idx - 1].year;
        var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
        const pop = thisdecade.pop + addi;
        const val = (d) => Math.round((d / 1000) * pop);
        births.push(val(x.births));
        return [x.year, val(x.births)];
      });
    const immigrantData = immigrantsdata
      .filter((x) => x.year < chosenDecade + 1)
      .map((x) => {
        immigrants.push(x.immigrants);
        return [x.year, x.immigrants];
      });
    const newimmigrantsData = newimmigrantsdata
      .filter((x) => x.year < chosenDecade + 1)
      .map((x) => {
        newimmigrants.push(x.immigrants / 10);
        return [x.year, x.immigrants / 10];
      });
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var highBirths = Math.max(...births);
    var lowExp = Math.min(...exp);
    var highExp = Math.max(...exp);
    var highMort = Math.max(...mort);
    var highImmi = Math.max(...immigrants);
    var highImmiNew = Math.max(...newimmigrants);
    var highCumu = Math.max(...thought);
    var maxLife = Math.max(...life);
    var highPop = Math.max(...pop);
    noData.sort((a, b) => a[0] - b[0]);
    popData.sort((a, b) => a[0] - b[0]);
    expData.sort((a, b) => a[0] - b[0]);

    var state = {
      highImmiNew,
      newimmigrantsData,
      highImmi,
      immigrantData,
      highCumu,
      thoughtData,
      highBirths,
      birthsData,
      antivaxxData,
      childMortData,
      lifeData,
      maxLife,
      mortData,
      actData,
      highPop,
      expData,
      popData,
      noData,
      yAxis: highPop - lowExp,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowExp,
      highExp,
      highMort
    };
    this.state = state;
  }

  componentDidUpdate = (prevProps) => {
    const { chosenDecade } = this.props;
    if (chosenDecade !== prevProps.chosenDecade) {
      let newimmigrants = [];
      let immigrants = [];
      let thought = [];
      let thoughtData = [];
      let births = [];
      let childmort = [];
      let mort = [];
      let actData = [];
      let exp = [];
      let noData = [];
      let date = [];
      var pop = [];
      var life = [];
      var test = [];
      var popData = [];
      var antivaxx = [];
      const mortData = mortality
        .filter((x) => x.year < chosenDecade + 1)
        .map((y) => {
          var x = { ...y };
          var b4Idx = null;
          var thisdecade = popdata
            .sort((a, b) => a - b)
            .find((p, i) => {
              b4Idx = i;
              return x.year - p.year < 6 && x.year - p.year > -1;
            });
          var b4pop = popdata[b4Idx - 1] ? popdata[b4Idx - 1].pop : 0;
          var b4year = popdata[b4Idx - 1] ? popdata[b4Idx - 1].year : 0;
          var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
          const pop = thisdecade.pop + addi;
          const val = (d) => Math.round((d / 1000) * pop);
          mort.push(val(x.dr));
          test.push([thisdecade.pop, x.dr]);
          return [x.year, val(x.dr)];
        });
      const childMortData = childmortality.map((y) => {
        var x = { ...y };
        childmort.push(x.deaths);
        return [x.year, x.deaths];
      });
      const antivaxxData = antivaxxers.map((y) => {
        var x = { ...y };
        antivaxx.push(1000 - x.deaths);
        return [x.year, 1000 - x.deaths];
      });
      //used to be population[i-lifeExpectancy].../lifeExpectancy?
      const expData = birthing
        .filter((x) => x.year < chosenDecade + 1)
        .map((x) => {
          var b4Idx = null;
          var thisdecade = popdata
            .sort((a, b) => a - b)
            .find((p, i) => {
              b4Idx = i;
              return x.year - p.year < 10 && x.year - p.year > -1;
            });
          var b4pop = popdata[b4Idx]
            ? popdata[b4Idx].pop
            : popdata[b4Idx - 1].pop;
          var b4year = popdata[b4Idx]
            ? popdata[b4Idx].year
            : popdata[b4Idx - 1].year;
          var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
          const pop = thisdecade.pop + addi;
          const val = (d) => Math.round((d / 1000) * pop);
          const thischildmort = childMortData.find((c) => c[0] === x.year);
          const sol = Math.round(val(x.births) * (1 - thischildmort[1] / 1000));
          exp.push(sol);
          return [x.year, sol];
        });
      const lifeData = lifeexpdata
        .filter((x) => x.year < chosenDecade + 1)
        .map((x, i) => {
          //var b4Idx = null;
          var thisdecade = popdata
            .sort((a, b) => a - b)
            .find((p, i) => {
              //b4Idx = i;
              return x.year === p.year; //< 10 && x.year - p.year > -1;
            });
          /*var b4pop = popdata[b4Idx + 1]
          ? popdata[b4Idx + 1].pop
          : popdata[b4Idx - 1].pop;
        var b4year = popdata[b4Idx + 1]
          ? popdata[b4Idx + 1].year
          : popdata[b4Idx - 1].year;
        var addi =
          Math.abs(thisdecade.pop - b4pop) * (Math.abs(x.year - b4year) / 10);
        const popp = thisdecade.pop - addi;*/

          date.push(x.year);
          noData.push([x.year, 0]);

          const deaths = mortData
            .filter((x) => x[0] < chosenDecade + 1)
            .find((m) => x.year - m[0] < 10 && x.year - m[0] > -1);
          if (deaths) {
            let expx = 0;
            expData.forEach((y) => {
              if (x.year - y[0] < x.lifeexp && x.year - y[0] > 0)
                expx = expx + y[1] - deaths[1];
            });

            thought.push(expx);
            thoughtData.push([x.year, expx]);
          }
          /*const actualDeaths = deathsdata.find((d) => d.year === x.year);
      if (actualDeaths) {//1920
        act.push(actualDeaths.deaths);
        actData.push([x.year, actualDeaths.deaths]);
      }*/
          if (thisdecade) {
            const birthd = births
              .sort((a, b) => a - b)
              .find((p) => p.year - x[0] < 10 && p.year - x.year > -1);
            const val = Math.round(
              ((birthd ? birthd.births : 0) / 100000) * thisdecade.pop
            );

            pop.push(thisdecade.pop - val);
            popData.push([
              x.year,
              thisdecade.pop - (birthd ? birthd.births * 1000 : 0)
            ]);
          }

          life.push(x.lifeexp);
          return [x.year, x.lifeexp];
        });
      const prefubb = [1575, 1625, 1675, 1725];
      prefubb.map((x) => {
        date.push(x);
        return noData.push([x, 0]);
      });
      const birthsData = birthing
        .filter((x) => x.year < chosenDecade + 1)
        .map((y) => {
          let b4Idx = null;
          var x = { ...y };
          var thisdecade = popdata
            .sort((a, b) => a - b)
            .find((p, i) => {
              b4Idx = i;
              return x.year - p.year < 10 && x.year - p.year > -1;
            });
          var b4pop = popdata[b4Idx]
            ? popdata[b4Idx].pop
            : popdata[b4Idx - 1].pop;
          var b4year = popdata[b4Idx]
            ? popdata[b4Idx].year
            : popdata[b4Idx - 1].year;
          var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
          const pop = thisdecade.pop + addi;
          const val = (d) => Math.round((d / 1000) * pop);
          births.push(val(x.births));
          return [x.year, val(x.births)];
        });
      const immigrantData = immigrantsdata
        .filter((x) => x.year < chosenDecade + 1)
        .map((x) => {
          immigrants.push(x.immigrants);
          return [x.year, x.immigrants];
        });
      const newimmigrantsData = newimmigrantsdata
        .filter((x) => x.year < chosenDecade + 1)
        .map((x) => {
          newimmigrants.push(x.immigrants / 10);
          return [x.year, x.immigrants / 10];
        });
      var lowDate = Math.min(...date);
      var highDate = Math.max(...date);
      var highBirths = Math.max(...births);
      var lowExp = Math.min(...exp);
      var highExp = Math.max(...exp);
      var highMort = Math.max(...mort);
      var highImmi = Math.max(...immigrants);
      var highImmiNew = Math.max(...newimmigrants);
      var highCumu = Math.max(...thought);
      var maxLife = Math.max(...life);
      var highPop = Math.max(...pop);
      noData.sort((a, b) => a[0] - b[0]);
      popData.sort((a, b) => a[0] - b[0]);
      expData.sort((a, b) => a[0] - b[0]);

      this.setState({
        highImmiNew,
        newimmigrantsData,
        highImmi,
        immigrantData,
        highCumu,
        thoughtData,
        highBirths,
        birthsData,
        antivaxxData,
        childMortData,
        lifeData,
        maxLife,
        mortData,
        actData,
        highPop,
        expData,
        popData,
        noData,
        yAxis: highPop - lowExp,
        xAxis: highDate - lowDate,
        lowDate,
        highDate,
        lowExp,
        highExp,
        highMort
      });
    }
  };
  render() {
    const { chosenDecade, linecss } = this.props;
    const expData = this.state.expData.filter((x) => x[0] < chosenDecade + 1);
    const popData = this.state.popData.filter((x) => x[0] < chosenDecade + 1);
    const actData = this.state.actData.filter((x) => x[0] < chosenDecade + 1);
    const lifeData = this.state.lifeData.filter((x) => x[0] < chosenDecade + 1);
    const mortData = this.state.mortData.filter((x) => x[0] < chosenDecade + 1);
    const newimmigrantsData = this.state.newimmigrantsData.filter(
      (x) => x[0] < chosenDecade + 1
    );
    const immigrantData = this.state.immigrantData.filter(
      (x) => x[0] < chosenDecade + 1
    );
    const thoughtData = this.state.thoughtData.filter(
      (x) => x[0] < chosenDecade + 1
    );

    const birthsData = this.state.birthsData.filter(
      (x) => x[0] < chosenDecade + 1
    );
    const childMortData = this.state.childMortData.filter(
      (x) => x[0] < chosenDecade + 1
    );
    const antivaxxData = this.state.antivaxxData.filter(
      (x) => x[0] < chosenDecade + 1
    );
    const noData = this.state.noData.filter((x) => x[0] < chosenDecade + 1);
    const noDat = noData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    const popDat = popData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    const expDat = expData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    const actDat = actData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    const mortDat = mortData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    const lifeDat = lifeData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - 0) / this.state.maxLife) * 150)}`
    ]);
    const childMortDat = childMortData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round((y / 1000) * 150)}`
    ]);
    const antivaxxDat = antivaxxData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round((y / 1000) * 150)}`
    ]);
    const thoughtDat = thoughtData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    const birthDat = birthsData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    const immigrantDat = immigrantData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    const newimmigrantsDat = newimmigrantsData.map(([x, y]) => [
      `${Math.round(
        ((x - this.state.lowDate) / this.state.xAxis) * this.props.lastWidth -
          20
      )}`,
      `${Math.round(((y - this.state.lowExp) / this.state.yAxis) * 150)}`
    ]);
    return (
      <div style={{ ...this.props.countblock, height: "200px" }}>
        <div
          style={{
            top: "0px",
            height: "min-content",
            display: "flex",
            position: "absolute",
            right: "20px",
            flexDirection: "column",
            zIndex: "9",
            backgroundColor: "rgba(250,250,250,.6)"
          }}
        >
          <span style={{ color: "orange" }}>population&nbsp;-&nbsp;</span>
          {shortNumber(this.state.highPop)}
          <br />
          <span>cum. exp -&nbsp;</span>
          {shortNumber(this.state.highCumu)}
          <br />
          <span>expectation -&nbsp;</span>
          {shortNumber(this.state.highExp)}
          <br />
          <span style={{ color: "red" }}>actual deaths/yr -&nbsp;</span>
          {shortNumber(this.state.highMort)}
          <br />
          <span style={{ color: "green" }}>births/yr -&nbsp;</span>
          {shortNumber(this.state.highBirths)}
          <br />
          <span style={{ color: "pink" }}>immigrants -&nbsp;</span>
          {shortNumber(this.state.highImmi)}
          <br />
          <span style={{ color: "rgb(230,100,150)" }}>
            immigrants/yr -&nbsp;
          </span>
          {shortNumber(this.state.highImmiNew)}
          <div
            style={{
              top: "0px",
              height: "min-content",
              display: "flex",
              position: "relative",
              right: "0px"
            }}
          >
            {this.state.lowDate}&nbsp;
            {this.state.highDate}
          </div>
          {/*<div
              style={{
                top: "200px",
                height: "min-content",
                display: "flex",
                position: "absolute",
                right: "0px",
                flexDirection: "column"
              }}
            >
              {this.state.lowExp}
            </div>*/}
        </div>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {noDat.map(
            ([x, y], i) =>
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width=".1"
                  height="100%"
                  stroke="rgb(230,230,230)"
                  fill="black"
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {popDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {expDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {actDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {mortDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {lifeDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {childMortDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {antivaxxDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {thoughtDat.map(
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
                  strokeWidth="1"
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {birthDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {immigrantDat.map(
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
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {newimmigrantsDat.map(
            ([x, y], i) =>
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width={2}
                  height={2}
                  stroke="rgb(230,100,150)"
                  fill="transparent"
                  strokeWidth={1}
                  key={i}
                />
              )
          )}
        </svg>
        <div
          style={{
            backgroundColor: "rgba(250,250,250,0.6)",
            top: "10px",
            height: "60px",
            display: "flex",
            position: "relative",
            width: "400px",
            maxWidth: "100%",
            left: "2px",
            zIndex: "0",
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <div
            style={{
              height: "60px",
              wordBreak: "normal",
              display: "flex",
              position: "absolute",
              width: "min-content"
            }}
          >
            <div style={{ width: "min-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "orange"
                }}
              />
              pop&nbsp;&nbsp;
            </div>
            <div style={{ width: "min-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "black"
                }}
              />
              exp&nbsp;&nbsp;
            </div>
            <div style={{ width: "min-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "red"
                }}
              />
              act&nbsp;&nbsp;
            </div>
            <div style={{ width: "min-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "purple"
                }}
              />
              cohort-lifetimes&nbsp;&nbsp;
            </div>
            <div style={{ width: "max-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "blue"
                }}
              />
              (...0-4/1000),&nbsp;&nbsp;
              <br />
              mortality
            </div>
            <div style={{ width: "min-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "green"
                }}
              />
              births&nbsp;&nbsp;
            </div>
            <div style={{ width: "min-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "pink"
                }}
              />
              immigrants&nbsp;&nbsp;
            </div>
            <div style={{ width: "min-content" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "rgb(230,100,150)"
                }}
              />
              new immigrants
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CaseExpected extends React.Component {
  state = {
    chosenDecade: 2020,
    chosenDecadeInx: popdata.length
  };
  render() {
    const { lastWidth, linecss } = this.props;
    const { chosenDecade } = this.state;
    return (
      <div
        style={{
          top: "0px",
          display: "inline-block",
          position: "relative",
          width: "100%",
          height: "min-content",
          flexDirection: "column"
        }}
      >
        <CE
          linecss={linecss}
          crime={true}
          chosenDecade={chosenDecade}
          lastWidth={lastWidth}
          countblock={this.props.countblock}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <div>1575</div>
          <div>{Math.round(1575 + (chosenDecade - 1575) / 3)}</div>
          <div>{Math.round(1575 + (chosenDecade - 1575) / 2)}</div>
          <div>{Math.round(1575 + (chosenDecade - 1575) * (2 / 3))}</div>
          <div>{chosenDecade}</div>
        </div>
        <div
          style={{
            margin: "10px 50px",
            display: "flex",
            width: "70%",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{ border: "1px solid", padding: "10px", userSelect: "none" }}
            onClick={() => {
              if (this.state.chosenDecadeInx > 0)
                this.setState(
                  { chosenDecadeInx: this.state.chosenDecadeInx - 1 },
                  () => {
                    this.setState({
                      chosenDecade: popdata[this.state.chosenDecadeInx].year
                    });
                  }
                );
            }}
          >
            {"<"}
          </div>
          {1575 + (chosenDecade - 1575) / 2}
          <div
            style={{ border: "1px solid", padding: "10px", userSelect: "none" }}
            onClick={() => {
              if (this.state.chosenDecadeInx < popdata.length - 1)
                this.setState(
                  { chosenDecadeInx: this.state.chosenDecadeInx + 1 },
                  () => {
                    this.setState({
                      chosenDecade: popdata[this.state.chosenDecadeInx].year
                    });
                  }
                );
            }}
          >
            {">"}
          </div>
        </div>
      </div>
    );
  }
}
export default CaseExpected;
