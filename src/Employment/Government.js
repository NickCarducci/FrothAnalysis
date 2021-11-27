import React from "react";

const government = [
  {
    "1939": {
      Jan: 3988,
      Feb: 4001,
      Mar: 4002,
      Apr: 4002,
      May: 4006,
      Jun: 4003,
      Jul: 4019,
      Aug: 4046,
      Sep: 4076,
      Oct: "4089",
      Nov: "4109",
      Dec: 4134
    }
  },
  {
    "1940": {
      Jan: 4150,
      Feb: 4150,
      Mar: 4151,
      Apr: 4152,
      May: 4172,
      Jun: 4218,
      Jul: 4261,
      Aug: 4282,
      Sep: 4312,
      Oct: "4353",
      Nov: "4396",
      Dec: 4415
    }
  },
  {
    "1941": {
      Jan: 4468,
      Feb: 4504,
      Mar: 4535,
      Apr: 4585,
      May: 4642,
      Jun: 4701,
      Jul: 4750,
      Aug: 4821,
      Sep: 4891,
      Oct: "4907",
      Nov: "4949",
      Dec: 4971
    }
  },
  {
    "1942": {
      Jan: 5089,
      Feb: 5146,
      Mar: 5257,
      Apr: 5357,
      May: 5431,
      Jun: 5510,
      Jul: 5591,
      Aug: 5814,
      Sep: 5866,
      Oct: "5956",
      Nov: "6026",
      Dec: 6072
    }
  },
  {
    "1943": {
      Jan: 6132,
      Feb: 6223,
      Mar: 6257,
      Apr: 6267,
      May: 6281,
      Jun: 6324,
      Jul: 6257,
      Aug: 6151,
      Sep: 6167,
      Oct: "6170",
      Nov: "6179",
      Dec: 6271
    }
  },
  {
    "1944": {
      Jan: 6162,
      Feb: 6129,
      Mar: 6113,
      Apr: 6112,
      May: 6121,
      Jun: 6147,
      Jul: 6190,
      Aug: 6204,
      Sep: 6216,
      Oct: "6223",
      Nov: "6263",
      Dec: 6375
    }
  },
  {
    "1945": {
      Jan: 6254,
      Feb: 6239,
      Mar: 6216,
      Apr: 6185,
      May: 6159,
      Jun: 6181,
      Jul: 6185,
      Aug: 6135,
      Sep: 5942,
      Oct: "5854",
      Nov: "5830",
      Dec: 5811
    }
  },
  {
    "1946": {
      Jan: 5785,
      Feb: 5778,
      Mar: 5758,
      Apr: 5761,
      May: 5732,
      Jun: 5680,
      Jul: 5682,
      Aug: 5681,
      Sep: 5669,
      Oct: "5664",
      Nov: "5639",
      Dec: 5628
    }
  },
  {
    "1947": {
      Jan: 5619,
      Feb: 5606,
      Mar: 5588,
      Apr: 5558,
      May: 5551,
      Jun: 5524,
      Jul: 5524,
      Aug: 5519,
      Sep: 5539,
      Oct: "5566",
      Nov: "5585",
      Dec: 5605
    }
  },
  {
    "1948": {
      Jan: 5624,
      Feb: 5615,
      Mar: 5623,
      Apr: 5643,
      May: 5681,
      Jun: 5736,
      Jul: 5774,
      Aug: 5791,
      Sep: 5805,
      Oct: "5829",
      Nov: "5869",
      Dec: 5888
    }
  },
  {
    "1949": {
      Jan: 5894,
      Feb: 5893,
      Mar: 5915,
      Apr: 5948,
      May: 5962,
      Jun: 5956,
      Jul: 5962,
      Aug: 5985,
      Sep: 5990,
      Oct: "5970",
      Nov: "5950",
      Dec: 5952
    }
  },
  {
    "1950": {
      Jan: 5934,
      Feb: 5926,
      Mar: 6078,
      Apr: 6094,
      May: 6043,
      Jun: 6022,
      Jul: 6090,
      Aug: 6187,
      Sep: 6228,
      Oct: "6249",
      Nov: "6262",
      Dec: 6314
    }
  },
  {
    "1951": {
      Jan: 6352,
      Feb: 6382,
      Mar: 6410,
      Apr: 6451,
      May: 6417,
      Jun: 6499,
      Jul: 6538,
      Aug: 6519,
      Sep: 6552,
      Oct: "6577",
      Nov: "6626",
      Dec: 6688
    }
  },
  {
    "1952": {
      Jan: 6589,
      Feb: 6650,
      Mar: 6662,
      Apr: 6662,
      May: 6694,
      Jun: 6712,
      Jul: 6737,
      Aug: 6718,
      Sep: 6734,
      Oct: "6816",
      Nov: "6801",
      Dec: 6935
    }
  },
  {
    "1953": {
      Jan: 6794,
      Feb: 6797,
      Mar: 6784,
      Apr: 6770,
      May: 6717,
      Jun: 6734,
      Jul: 6723,
      Aug: 6754,
      Sep: 6749,
      Oct: "6764",
      Nov: "6749",
      Dec: 6743
    }
  },
  {
    "1954": {
      Jan: 6760,
      Feb: 6783,
      Mar: 6796,
      Apr: 6806,
      May: 6829,
      Jun: 6846,
      Jul: 6868,
      Aug: 6892,
      Sep: 6894,
      Oct: "6900",
      Nov: "6964",
      Dec: 6957
    }
  },
  {
    "1955": {
      Jan: 6953,
      Feb: 6923,
      Mar: 6938,
      Apr: 6959,
      May: 6991,
      Jun: 7020,
      Jul: 7049,
      Aug: 7023,
      Sep: 7067,
      Oct: "7118",
      Nov: "7083",
      Dec: 7132
    }
  },
  {
    "1956": {
      Jan: 7167,
      Feb: 7212,
      Mar: 7252,
      Apr: 7276,
      May: 7367,
      Jun: 7367,
      Jul: 7405,
      Aug: 7451,
      Sep: 7481,
      Oct: "7519",
      Nov: "7553",
      Dec: 7584
    }
  },
  {
    "1957": {
      Jan: 7620,
      Feb: 7646,
      Mar: 7672,
      Apr: 7701,
      May: 7713,
      Jun: 7702,
      Jul: 7754,
      Aug: 7757,
      Sep: 7749,
      Oct: "7768",
      Nov: "7769",
      Dec: 7846
    }
  },
  {
    "1958": {
      Jan: 7821,
      Feb: 7832,
      Mar: 7848,
      Apr: 7868,
      May: 7894,
      Jun: 7926,
      Jul: 7972,
      Aug: 8012,
      Sep: 8016,
      Oct: "8031",
      Nov: "8028",
      Dec: 8100
    }
  },
  {
    "1959": {
      Jan: 8105,
      Feb: 8116,
      Mar: 8132,
      Apr: 8142,
      May: 8153,
      Jun: 8143,
      Jul: 8173,
      Aug: 8181,
      Sep: 8239,
      Oct: "8265",
      Nov: "8284",
      Dec: 8368
    }
  },
  {
    "1960": {
      Jan: 8307,
      Feb: 8326,
      Mar: 8525,
      Apr: 8534,
      May: 8432,
      Jun: 8432,
      Jul: 8442,
      Aug: 8472,
      Sep: 8494,
      Oct: "8502",
      Nov: "8516",
      Dec: 8597
    }
  },
  {
    "1961": {
      Jan: 8564,
      Feb: 8587,
      Mar: 8611,
      Apr: 8629,
      May: 8664,
      Jun: 8688,
      Jul: 8724,
      Aug: 8764,
      Sep: 8796,
      Oct: "8805",
      Nov: "8812",
      Dec: 8836
    }
  },
  {
    "1962": {
      Jan: 8851,
      Feb: 8878,
      Mar: 8901,
      Apr: 8922,
      May: 8958,
      Jun: 9000,
      Jul: 9026,
      Aug: 9063,
      Sep: 9089,
      Oct: "9114",
      Nov: "9145",
      Dec: 9126
    }
  },
  {
    "1963": {
      Jan: 9204,
      Feb: 9231,
      Mar: 9245,
      Apr: 9264,
      May: 9288,
      Jun: 9302,
      Jul: 9334,
      Aug: 9368,
      Sep: 9417,
      Oct: "9479",
      Nov: "9484",
      Dec: 9497
    }
  },
  {
    "1964": {
      Jan: 9562,
      Feb: 9581,
      Mar: 9611,
      Apr: 9644,
      May: 9670,
      Jun: 9669,
      Jul: 9677,
      Aug: 9732,
      Sep: 9786,
      Oct: "9845",
      Nov: "9879",
      Dec: 9897
    }
  },
  {
    "1965": {
      Jan: 9937,
      Feb: 9974,
      Mar: 10010,
      Apr: 10051,
      May: 10094,
      Jun: 10128,
      Jul: 10201,
      Aug: 10271,
      Sep: 10338,
      Oct: "10378",
      Nov: "10436",
      Dec: 10499
    }
  },
  {
    "1966": {
      Jan: 10541,
      Feb: 10611,
      Mar: 10692,
      Apr: 10759,
      May: 10821,
      Jun: 10902,
      Jul: 10974,
      Aug: 11006,
      Sep: 11063,
      Oct: "11127",
      Nov: "11203",
      Dec: 11256
    }
  },
  {
    "1967": {
      Jan: 11315,
      Feb: 11353,
      Mar: 11397,
      Apr: 11435,
      May: 11474,
      Jun: 11534,
      Jul: 11544,
      Aug: 11590,
      Sep: 11623,
      Oct: "11642",
      Nov: "11695",
      Dec: 11735
    }
  },
  {
    "1968": {
      Jan: 11794,
      Feb: 11819,
      Mar: 11842,
      Apr: 11878,
      May: 11905,
      Jun: 11987,
      Jul: 12018,
      Aug: 12042,
      Sep: 12067,
      Oct: "12101",
      Nov: "12107",
      Dec: 12145
    }
  },
  {
    "1969": {
      Jan: 12209,
      Feb: 12224,
      Mar: 12229,
      Apr: 12245,
      May: 12284,
      Jun: 12359,
      Jul: 12340,
      Aug: 12373,
      Sep: 12379,
      Oct: "12430",
      Nov: "12448",
      Dec: 12477
    }
  },
  {
    "1970": {
      Jan: 12496,
      Feb: 12518,
      Mar: 12603,
      Apr: 12705,
      May: 12668,
      Jun: 12667,
      Jul: 12697,
      Aug: 12711,
      Sep: 12741,
      Oct: "12793",
      Nov: "12830",
      Dec: 12845
    }
  },
  {
    "1971": {
      Jan: 12878,
      Feb: 12877,
      Mar: 12908,
      Apr: 12945,
      May: 12970,
      Jun: 13008,
      Jul: 13011,
      Aug: 13041,
      Sep: 13068,
      Oct: "13115",
      Nov: "13148",
      Dec: 13190
    }
  },
  {
    "1972": {
      Jan: 13266,
      Feb: 13298,
      Mar: 13329,
      Apr: 13358,
      May: 13416,
      Jun: 13405,
      Jul: 13482,
      Aug: 13530,
      Sep: 13575,
      Oct: "13606",
      Nov: "13643",
      Dec: 13684
    }
  },
  {
    "1973": {
      Jan: 13690,
      Feb: 13711,
      Mar: 13745,
      Apr: 13777,
      May: 13817,
      Jun: 13872,
      Jul: 13865,
      Aug: 13904,
      Sep: 13892,
      Oct: "13977",
      Nov: "14035",
      Dec: 14070
    }
  },
  {
    "1974": {
      Jan: 14090,
      Feb: 14135,
      Mar: 14152,
      Apr: 14191,
      May: 14221,
      Jun: 14239,
      Jul: 14288,
      Aug: 14328,
      Sep: 14422,
      Oct: "14484",
      Nov: "14532",
      Dec: 14559
    }
  },
  {
    "1975": {
      Jan: 14624,
      Feb: 14747,
      Mar: 14754,
      Apr: 14795,
      May: 14827,
      Jun: 14784,
      Jul: 14861,
      Aug: 14870,
      Sep: 14824,
      Oct: "14900",
      Nov: "14903",
      Dec: 14946
    }
  },
  {
    "1976": {
      Jan: 14969,
      Feb: 14981,
      Mar: 14987,
      Apr: 14985,
      May: 14971,
      Jun: 14963,
      Jul: 14993,
      Aug: 15007,
      Sep: 14971,
      Oct: "15028",
      Nov: "15073",
      Dec: 15075
    }
  },
  {
    "1977": {
      Jan: 15056,
      Feb: 15056,
      Mar: 15050,
      Apr: 15075,
      May: 15132,
      Jun: 15207,
      Jul: 15299,
      Aug: 15328,
      Sep: 15403,
      Oct: "15463",
      Nov: "15515",
      Dec: 15538
    }
  },
  {
    "1978": {
      Jan: 15611,
      Feb: 15671,
      Mar: 15731,
      Apr: 15797,
      May: 15834,
      Jun: 15852,
      Jul: 15901,
      Aug: 15891,
      Sep: 15819,
      Oct: "15858",
      Nov: "15894",
      Dec: 15911
    }
  },
  {
    "1979": {
      Jan: 15937,
      Feb: 15947,
      Mar: 15956,
      Apr: 15977,
      May: 15990,
      Jun: 16045,
      Jul: 16150,
      Aug: 16229,
      Sep: 16128,
      Oct: "16136",
      Nov: "16173",
      Dec: 16180
    }
  },
  {
    "1980": {
      Jan: 16201,
      Feb: 16226,
      Mar: 16296,
      Apr: 16583,
      May: 16454,
      Jun: 16441,
      Jul: 16418,
      Aug: 16410,
      Sep: 16330,
      Oct: "16386",
      Nov: "16391",
      Dec: 16373
    }
  },
  {
    "1981": {
      Jan: 16360,
      Feb: 16346,
      Mar: 16292,
      Apr: 16260,
      May: 16198,
      Jun: 16159,
      Jul: 16175,
      Aug: 16110,
      Sep: 16031,
      Oct: "16069",
      Nov: "16078",
      Dec: 16073
    }
  },
  {
    "1982": {
      Jan: 16041,
      Feb: 16011,
      Mar: 16024,
      Apr: 16010,
      May: 16003,
      Jun: 16016,
      Jul: 15890,
      Aug: 15930,
      Sep: 15923,
      Oct: "15956",
      Nov: "15977",
      Dec: 15981
    }
  },
  {
    "1983": {
      Jan: 16023,
      Feb: 16004,
      Mar: 16005,
      Apr: 15990,
      May: 16005,
      Jun: 16020,
      Jul: 16011,
      Aug: 16016,
      Sep: 16042,
      Oct: "15986",
      Nov: "15997",
      Dec: 16008
    }
  },
  {
    "1984": {
      Jan: 16010,
      Feb: 16025,
      Mar: 16030,
      Apr: 16075,
      May: 16103,
      Jun: 16127,
      Jul: 16172,
      Aug: 16224,
      Sep: 16255,
      Oct: "16274",
      Nov: "16311",
      Dec: 16282
    }
  },
  {
    "1985": {
      Jan: 16336,
      Feb: 16349,
      Mar: 16395,
      Apr: 16430,
      May: 16474,
      Jun: 16498,
      Jul: 16620,
      Aug: 16619,
      Sep: 16638,
      Oct: "16654",
      Nov: "16674",
      Dec: 16694
    }
  },
  {
    "1986": {
      Jan: 16715,
      Feb: 16759,
      Mar: 16755,
      Apr: 16765,
      May: 16790,
      Jun: 16779,
      Jul: 16779,
      Aug: 16800,
      Sep: 16910,
      Oct: "16969",
      Nov: "17005",
      Dec: 17021
    }
  },
  {
    "1987": {
      Jan: 17045,
      Feb: 17036,
      Mar: 17064,
      Apr: 17109,
      May: 17112,
      Jun: 17124,
      Jul: 17160,
      Aug: 17172,
      Sep: 17135,
      Oct: "17269",
      Nov: "17299",
      Dec: 17347
    }
  },
  {
    "1988": {
      Jan: 17365,
      Feb: 17389,
      Mar: 17447,
      Apr: 17452,
      May: 17481,
      Jun: 17515,
      Jul: 17494,
      Aug: 17544,
      Sep: 17634,
      Oct: "17670",
      Nov: "17746",
      Dec: 17736
    }
  },
  {
    "1989": {
      Jan: 17774,
      Feb: 17812,
      Mar: 17822,
      Apr: 17840,
      May: 17876,
      Jun: 17912,
      Jul: 17905,
      Aug: 17989,
      Sep: 18027,
      Oct: "18033",
      Nov: "18057",
      Dec: 18075
    }
  },
  {
    "1990": {
      Jan: 18151,
      Feb: 18177,
      Mar: 18294,
      Apr: 18377,
      May: 18599,
      Jun: 18556,
      Jul: 18560,
      Aug: 18457,
      Sep: 18437,
      Oct: "18443",
      Nov: "18450",
      Dec: 18468
    }
  },
  {
    "1991": {
      Jan: 18474,
      Feb: 18482,
      Mar: 18488,
      Apr: 18485,
      May: 18498,
      Jun: 18561,
      Jul: 18598,
      Aug: 18567,
      Sep: 18543,
      Oct: "18593",
      Nov: "18627",
      Dec: 18641
    }
  },
  {
    "1992": {
      Jan: 18688,
      Feb: 18689,
      Mar: 18715,
      Apr: 18739,
      May: 18753,
      Jun: 18762,
      Jul: 18817,
      Aug: 18883,
      Sep: 18829,
      Oct: "18828",
      Nov: "18841",
      Dec: 18878
    }
  },
  {
    "1993": {
      Jan: 18901,
      Feb: 18902,
      Mar: 18907,
      Apr: 18938,
      May: 18951,
      Jun: 18969,
      Jul: 19060,
      Aug: 19028,
      Sep: 19041,
      Oct: "19042",
      Nov: "19068",
      Dec: 19109
    }
  },
  {
    "1994": {
      Jan: 19147,
      Feb: 19150,
      Mar: 19190,
      Apr: 19223,
      May: 19264,
      Jun: 19274,
      Jul: 19301,
      Aug: 19306,
      Sep: 19337,
      Oct: "19344",
      Nov: "19367",
      Dec: 19388
    }
  },
  {
    "1995": {
      Jan: 19397,
      Feb: 19407,
      Mar: 19427,
      Apr: 19434,
      May: 19418,
      Jun: 19445,
      Jul: 19437,
      Aug: 19429,
      Sep: 19430,
      Oct: "19464",
      Nov: "19463",
      Dec: 19466
    }
  },
  {
    "1996": {
      Jan: 19450,
      Feb: 19485,
      Mar: 19532,
      Apr: 19515,
      May: 19529,
      Jun: 19528,
      Jul: 19547,
      Aug: 19504,
      Sep: 19567,
      Oct: "19554",
      Nov: "19565",
      Dec: 19571
    }
  },
  {
    "1997": {
      Jan: 19593,
      Feb: 19598,
      Mar: 19608,
      Apr: 19603,
      May: 19601,
      Jun: 19660,
      Jul: 19686,
      Aug: 19617,
      Sep: 19679,
      Oct: "19738",
      Nov: "19761",
      Dec: 19766
    }
  },
  {
    "1998": {
      Jan: 19770,
      Feb: 19786,
      Mar: 19792,
      Apr: 19816,
      May: 19875,
      Jun: 19879,
      Jul: 19930,
      Aug: 19959,
      Sep: 19985,
      Oct: "20001",
      Nov: "20044",
      Dec: 20079
    }
  },
  {
    "1999": {
      Jan: 20084,
      Feb: 20144,
      Mar: 20168,
      Apr: 20237,
      May: 20229,
      Jun: 20272,
      Jul: 20339,
      Aug: 20375,
      Sep: 20404,
      Oct: "20457",
      Nov: "20496",
      Dec: 20540
    }
  },
  {
    "2000": {
      Jan: 20571,
      Feb: 20599,
      Mar: 20733,
      Apr: 20802,
      May: 21147,
      Jun: 20887,
      Jul: 20867,
      Aug: 20837,
      Sep: 20735,
      Oct: "20743",
      Nov: "20760",
      Dec: 20804
    }
  },
  {
    "2001": {
      Jan: 20835,
      Feb: 20906,
      Mar: 20945,
      Apr: 20992,
      May: 21029,
      Jun: 21137,
      Jul: 21185,
      Aug: 21218,
      Sep: 21242,
      Oct: "21275",
      Nov: "21326",
      Dec: 21355
    }
  },
  {
    "2002": {
      Jan: 21377,
      Feb: 21390,
      Mar: 21431,
      Apr: 21443,
      May: 21514,
      Jun: 21549,
      Jul: 21544,
      Aug: 21589,
      Sep: 21546,
      Oct: "21559",
      Nov: "21581",
      Dec: 21588
    }
  },
  {
    "2003": {
      Jan: 21626,
      Feb: 21624,
      Mar: 21610,
      Apr: 21595,
      May: 21567,
      Jun: 21606,
      Jul: 21633,
      Aug: 21556,
      Sep: 21504,
      Oct: "21558",
      Nov: "21535",
      Dec: 21546
    }
  },
  {
    "2004": {
      Jan: 21538,
      Feb: 21550,
      Mar: 21588,
      Apr: 21614,
      May: 21614,
      Jun: 21601,
      Jul: 21606,
      Aug: 21626,
      Sep: 21635,
      Oct: "21656",
      Nov: "21692",
      Dec: 21693
    }
  },
  {
    "2005": {
      Jan: 21735,
      Feb: 21744,
      Mar: 21740,
      Apr: 21754,
      May: 21781,
      Jun: 21763,
      Jul: 21857,
      Aug: 21863,
      Sep: 21845,
      Oct: "21829",
      Nov: "21859",
      Dec: 21879
    }
  },
  {
    "2006": {
      Jan: 21847,
      Feb: 21878,
      Mar: 21903,
      Apr: 21919,
      May: 21926,
      Jun: 21922,
      Jul: 21973,
      Aug: 22011,
      Sep: 22082,
      Oct: "22068",
      Nov: "22083",
      Dec: 22088
    }
  },
  {
    "2007": {
      Jan: 22095,
      Feb: 22131,
      Mar: 22149,
      Apr: 22175,
      May: 22193,
      Jun: 22207,
      Jul: 22171,
      Aug: 22226,
      Sep: 22279,
      Oct: "22297",
      Nov: "22334",
      Dec: 22376
    }
  },
  {
    "2008": {
      Jan: 22388,
      Feb: 22417,
      Mar: 22443,
      Apr: 22450,
      May: 22483,
      Jun: 22517,
      Jul: 22568,
      Aug: 22567,
      Sep: 22537,
      Oct: "22549",
      Nov: "22560",
      Dec: 22556
    }
  },
  {
    "2009": {
      Jan: 22579,
      Feb: 22576,
      Mar: 22560,
      Apr: 22677,
      May: 22617,
      Jun: 22576,
      Jul: 22521,
      Aug: 22537,
      Sep: 22451,
      Oct: "22524",
      Nov: "22533",
      Dec: 22482
    }
  },
  {
    "2010": {
      Jan: 22491,
      Feb: 22476,
      Mar: 22518,
      Apr: 22569,
      May: 22996,
      Jun: 22740,
      Jul: 22569,
      Aug: 22420,
      Sep: 22247,
      Oct: "22297",
      Nov: "22287",
      Dec: 22266
    }
  },
  {
    "2011": {
      Jan: 22258,
      Feb: 22215,
      Mar: 22192,
      Apr: 22184,
      May: 22129,
      Jun: 22164,
      Jul: 22049,
      Aug: 22017,
      Sep: 21983,
      Oct: "21998",
      Nov: "21971",
      Dec: 21954
    }
  },
  {
    "2012": {
      Jan: 21946,
      Feb: 21947,
      Mar: 21943,
      Apr: 21931,
      May: 21911,
      Jun: 21930,
      Jul: 21913,
      Aug: 21916,
      Sep: 21925,
      Oct: "21903",
      Nov: "21883",
      Dec: 21887
    }
  },
  {
    "2013": {
      Jan: 21869,
      Feb: 21881,
      Mar: 21870,
      Apr: 21869,
      May: 21864,
      Jun: 21840,
      Jul: 21815,
      Aug: 21831,
      Sep: 21835,
      Oct: "21830",
      Nov: "21843",
      Dec: 21820
    }
  },
  {
    "2014": {
      Jan: 21814,
      Feb: 21825,
      Mar: 21833,
      Apr: 21853,
      May: 21832,
      Jun: 21895,
      Jul: 21901,
      Aug: 21855,
      Sep: 21897,
      Oct: "21917",
      Nov: "21932",
      Dec: 21947
    }
  },
  {
    "2015": {
      Jan: 21960,
      Feb: 21978,
      Mar: 21970,
      Apr: 22005,
      May: 22012,
      Jun: 22015,
      Jul: 22050,
      Aug: 22060,
      Sep: 22040,
      Oct: "22056",
      Nov: "22081",
      Dec: 22097
    }
  },
  {
    "2016": {
      Jan: 22118,
      Feb: 22144,
      Mar: 22180,
      Apr: 22186,
      May: 22197,
      Jun: 22184,
      Jul: 22285,
      Aug: 22268,
      Sep: 22303,
      Oct: "22292",
      Nov: "22290",
      Dec: 22308
    }
  },
  {
    "2017": {
      Jan: 22302,
      Feb: 22319,
      Mar: 22325,
      Apr: 22330,
      May: 22332,
      Jun: 22346,
      Jul: 22359,
      Aug: 22357,
      Sep: 22366,
      Oct: "22369",
      Nov: "22393",
      Dec: 22381
    }
  },
  {
    "2018": {
      Jan: 22355,
      Feb: 22406,
      Mar: 22404,
      Apr: 22414,
      May: 22431,
      Jun: 22459,
      Jul: 22462,
      Aug: 22490,
      Sep: 22489,
      Oct: "22485",
      Nov: "22486",
      Dec: 22495
    }
  },
  {
    "2019": {
      Jan: 22506,
      Feb: 22513,
      Mar: 22528,
      Apr: 22553,
      May: 22551,
      Jun: 22553,
      Jul: 22587,
      Aug: 22637,
      Sep: 22650,
      Oct: "22645",
      Nov: "22659",
      Dec: 22679
    }
  },
  {
    "2020": {
      Jan: 22714,
      Feb: 22745,
      Mar: 22728,
      Apr: 21776,
      May: 21265,
      Jun: 21317,
      Jul: 21552,
      Aug: 22017,
      Sep: 21798,
      Oct: "21531(P)",
      Nov: "21432(P)",
      Dec: null
    }
  }
];
class Government extends React.Component {
  render() {
    const { lastWidth } = this.props;
    var allYears = [];
    government.map((year, i) =>
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
                stroke="rgb(160,160,160)"
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

export default Government;
