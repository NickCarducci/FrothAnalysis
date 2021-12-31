import React from "react";
import { shortNumber } from ".";

/*const mortalagenj = {
  "1960-1969": [
    {
      age: "0",
      dx: 2260
    },
    {
      age: "1-4",
      dx: 321
    },
    {
      age: "5-9",
      dx: 198
    },
    {
      age: "10-14",
      dx: 172
    },
    {
      age: "15-19",
      dx: 376
    },
    {
      age: "20-24",
      dx: 518
    },
    {
      age: "25-29",
      dx: 555
    },
    {
      age: "30-34",
      dx: 693
    },
    {
      age: "35-39",
      dx: 1037
    },
    {
      age: "40-44",
      dx: 1609
    },
    {
      age: "45-49",
      dx: 2571
    },
    {
      age: "50-54",
      dx: 4056
    },
    {
      age: "55-59",
      dx: 5868
    },
    {
      age: "60-64",
      dx: 8259
    },
    {
      age: "65-69",
      dx: 10924
    },
    {
      age: "70-74",
      dx: 13510
    },
    {
      age: "75-79",
      dx: 14832
    },
    {
      age: "80-84",
      dx: 14149
    },
    {
      age: "85-89",
      dx: 10651
    },
    {
      age: "90-94",
      dx: 5435
    },
    {
      age: "95-99",
      dx: 1692
    },
    {
      age: "100-104",
      dx: 289
    },
    {
      age: "105-109",
      dx: 25
    },
    {
      age: "110",
      dx: 1
    }
  ],
  "1970-1979": [
    {
      age: "0",
      dx: 1581
    },
    {
      age: "1-4",
      dx: 255
    },
    {
      age: "5-9",
      dx: 163
    },
    {
      age: "10-14",
      dx: 150
    },
    {
      age: "15-19",
      dx: 404
    },
    {
      age: "20-24",
      dx: 591
    },
    {
      age: "25-29",
      dx: 549
    },
    {
      age: "30-34",
      dx: 644
    },
    {
      age: "35-39",
      dx: 901
    },
    {
      age: "40-44",
      dx: 1413
    },
    {
      age: "45-49",
      dx: 2265
    },
    {
      age: "50-54",
      dx: 3409
    },
    {
      age: "55-59",
      dx: 5056
    },
    {
      age: "60-64",
      dx: 7279
    },
    {
      age: "65-69",
      dx: 9754
    },
    {
      age: "70-74",
      dx: 12478
    },
    {
      age: "75-79",
      dx: 14802
    },
    {
      age: "80-84",
      dx: 15102
    },
    {
      age: "85-89",
      dx: 12459
    },
    {
      age: "90-94",
      dx: 7346
    },
    {
      age: "95-99",
      dx: 2760
    },
    {
      age: "100-104",
      dx: 574
    },
    {
      age: "105-109",
      dx: 61
    },
    {
      age: "110",
      dx: 3
    }
  ],
  "1980-1989": [
    {
      age: "0",
      dx: 1074
    },
    {
      age: "1-4",
      dx: 196
    },
    {
      age: "5-9",
      dx: 123
    },
    {
      age: "10-14",
      dx: 119
    },
    {
      age: "15-19",
      dx: 326
    },
    {
      age: "20-24",
      dx: 470
    },
    {
      age: "25-29",
      dx: 577
    },
    {
      age: "30-34",
      dx: 740
    },
    {
      age: "35-39",
      dx: 898
    },
    {
      age: "40-44",
      dx: 1180
    },
    {
      age: "45-49",
      dx: 1847
    },
    {
      age: "50-54",
      dx: 2893
    },
    {
      age: "55-59",
      dx: 4406
    },
    {
      age: "60-64",
      dx: 6471
    },
    {
      age: "65-69",
      dx: 8849
    },
    {
      age: "70-74",
      dx: 11846
    },
    {
      age: "75-79",
      dx: 13961
    },
    {
      age: "80-84",
      dx: 15834
    },
    {
      age: "85-89",
      dx: 14161
    },
    {
      age: "90-94",
      dx: 9304
    },
    {
      age: "95-99",
      dx: 3784
    },
    {
      age: "100-104",
      dx: 843
    },
    {
      age: "105-109",
      dx: 92
    },
    {
      age: "110",
      dx: 5
    }
  ],
  "1990-1999": [
    {
      age: "0",
      dx: 810
    },
    {
      age: "1-4",
      dx: 142
    },
    {
      age: "5-9",
      dx: 85
    },
    {
      age: "10-14",
      dx: 91
    },
    {
      age: "15-19",
      dx: 270
    },
    {
      age: "20-24",
      dx: 410
    },
    {
      age: "25-29",
      dx: 509
    },
    {
      age: "30-34",
      dx: 732
    },
    {
      age: "35-39",
      dx: 1004
    },
    {
      age: "40-44",
      dx: 1296
    },
    {
      age: "45-49",
      dx: 1684
    },
    {
      age: "50-54",
      dx: 2406
    },
    {
      age: "55-59",
      dx: 3659
    },
    {
      age: "60-64",
      dx: 5479
    },
    {
      age: "65-69",
      dx: 7896
    },
    {
      age: "70-74",
      dx: 10672
    },
    {
      age: "75-79",
      dx: 13367
    },
    {
      age: "80-84",
      dx: 16097
    },
    {
      age: "85-89",
      dx: 15615
    },
    {
      age: "90-94",
      dx: 11382
    },
    {
      age: "95-99",
      dx: 5057
    },
    {
      age: "100-104",
      dx: 1198
    },
    {
      age: "105-109",
      dx: 132
    },
    {
      age: "110",
      dx: 7
    }
  ],
  "2000-2009": [
    {
      age: "0",
      dx: 584
    },
    {
      age: "1-4",
      dx: 82
    },
    {
      age: "5-9",
      dx: 50
    },
    {
      age: "10-14",
      dx: 67
    },
    {
      age: "15-19",
      dx: 230
    },
    {
      age: "20-24",
      dx: 434
    },
    {
      age: "25-29",
      dx: 436
    },
    {
      age: "30-34",
      dx: 485
    },
    {
      age: "35-39",
      dx: 651
    },
    {
      age: "40-44",
      dx: 983
    },
    {
      age: "45-49",
      dx: 1453
    },
    {
      age: "50-54",
      dx: 2112
    },
    {
      age: "55-59",
      dx: 3017
    },
    {
      age: "60-64",
      dx: 4456
    },
    {
      age: "65-69",
      dx: 6472
    },
    {
      age: "70-74",
      dx: 9317
    },
    {
      age: "75-79",
      dx: 12825
    },
    {
      age: "80-84",
      dx: 16653
    },
    {
      age: "85-89",
      dx: 18103
    },
    {
      age: "90-94",
      dx: 13818
    },
    {
      age: "95-99",
      dx: 6249
    },
    {
      age: "100-104",
      dx: 1388
    },
    {
      age: "105-109",
      dx: 132
    },
    {
      age: "110",
      dx: 5
    }
  ],
  "2010-2018": [
    {
      age: "0",
      dx: 446
    },
    {
      age: "1-4",
      dx: 72
    },
    {
      age: "5-9",
      dx: 46
    },
    {
      age: "10-14",
      dx: 53
    },
    {
      age: "15-19",
      dx: 170
    },
    {
      age: "20-24",
      dx: 426
    },
    {
      age: "25-29",
      dx: 523
    },
    {
      age: "30-34",
      dx: 561
    },
    {
      age: "35-39",
      dx: 627
    },
    {
      age: "40-44",
      dx: 810
    },
    {
      age: "45-49",
      dx: 1245
    },
    {
      age: "50-54",
      dx: 1896
    },
    {
      age: "55-59",
      dx: 2752
    },
    {
      age: "60-64",
      dx: 3891
    },
    {
      age: "65-69",
      dx: 5482
    },
    {
      age: "70-74",
      dx: 7953
    },
    {
      age: "75-79",
      dx: 11284
    },
    {
      age: "80-84",
      dx: 15415
    },
    {
      age: "85-89",
      dx: 18582
    },
    {
      age: "90-94",
      dx: 16492
    },
    {
      age: "95-99",
      dx: 8723
    },
    {
      age: "100-104",
      dx: 2288
    },
    {
      age: "105-109",
      dx: 252
    },
    {
      age: "110",
      dx: 11
    }
  ]
};*/

const usmortality = {
  "1965": [
    {
      age: "0",
      dx: 2519,
      pop: 3947
    },
    {
      age: "1-4",
      dx: 394,
      pop: 16218
    },
    {
      age: "5-9",
      dx: 221,
      pop: 20236
    },
    {
      age: "10-14",
      dx: 205,
      pop: 18547
    },
    {
      age: "15-19",
      dx: 440,
      pop: 16155
    },
    {
      age: "20-24",
      dx: 593,
      pop: 12941
    },
    {
      age: "25-29",
      dx: 621,
      pop: 11051
    },
    {
      age: "30-34",
      dx: 769,
      pop: 11144
    },
    {
      age: "35-39",
      dx: 1110,
      pop: 12133
    },
    {
      age: "40-44",
      dx: 1687,
      pop: 12330
    },
    {
      age: "45-49",
      dx: 2625,
      pop: 11232
    },
    {
      age: "50-54",
      dx: 4027,
      pop: 10324
    },
    {
      age: "55-59",
      dx: 5670,
      pop: 9324
    },
    {
      age: "60-64",
      dx: 7826,
      pop: 7433
    },
    {
      age: "65-69",
      dx: 10338,
      pop: 6492
    },
    {
      age: "70-74",
      dx: 12787,
      pop: 5267
    },
    {
      age: "75-79",
      dx: 14321,
      pop: 3429
    },
    {
      age: "80-84",
      dx: 14658,
      pop: 1899
    },
    {
      age: "85-89",
      dx: 11292,
      pop: 300
    }, //1040
    {
      age: "90-94",
      dx: 5758,
      pop: 250
    },
    {
      age: "95-99",
      dx: 1808,
      pop: 200
    },
    {
      age: "100-104",
      dx: 304,
      pop: 150
    },
    {
      age: "105-109",
      dx: 25,
      pop: 75
    },
    {
      age: "110",
      dx: 1,
      pop: 25
    }
  ],
  "1970": [
    {
      age: "0",
      dx: 2250,
      pop: 3413
    },
    {
      age: "1-4",
      dx: 360,
      pop: 13963
    },
    {
      age: "5-9",
      dx: 213,
      pop: 20243
    },
    {
      age: "10-14",
      dx: 200,
      pop: 20641
    },
    {
      age: "15-19",
      dx: 513,
      pop: 18622
    },
    {
      age: "20-24",
      dx: 651,
      pop: 15767
    },
    {
      age: "25-29",
      dx: 666,
      pop: 13119
    },
    {
      age: "30-34",
      dx: 811,
      pop: 11287
    },
    {
      age: "35-39",
      dx: 1149,
      pop: 11155
    },
    {
      age: "40-44",
      dx: 1748,
      pop: 12088
    },
    {
      age: "45-49",
      dx: 2629,
      pop: 12053
    },
    {
      age: "50-54",
      dx: 3970,
      pop: 10966
    },
    {
      age: "55-59",
      dx: 5658,
      pop: 9922
    },
    {
      age: "60-64",
      dx: 7736,
      pop: 8467
    },
    {
      age: "65-69",
      dx: 10139,
      pop: 6880
    },
    {
      age: "70-74",
      dx: 12599,
      pop: 5421
    },
    {
      age: "75-79",
      dx: 14368,
      pop: 3844
    },
    {
      age: "80-84",
      dx: 14424,
      pop: 2228
    },
    {
      age: "85-89",
      dx: 11441,
      pop: 400
    }, //1307
    {
      age: "90-94",
      dx: 6108,
      pop: 325
    },
    {
      age: "95-99",
      dx: 1984,
      pop: 275
    },
    {
      age: "100-104",
      dx: 351,
      pop: 200
    },
    {
      age: "105-109",
      dx: 31,
      pop: 75
    },
    {
      age: "110",
      dx: 1,
      pop: 25
    }
  ],
  "1975": [
    {
      age: "0",
      dx: 1848,
      pop: 3065
    },
    {
      age: "1-4",
      dx: 314,
      pop: 13421
    },
    {
      age: "5-9",
      dx: 200,
      pop: 17805
    },
    {
      age: "10-14",
      dx: 195,
      pop: 20911
    },
    {
      age: "15-19",
      dx: 534,
      pop: 20978
    },
    {
      age: "20-24",
      dx: 694,
      pop: 18758
    },
    {
      age: "25-29",
      dx: 674,
      pop: 16428
    },
    {
      age: "30-34",
      dx: 790,
      pop: 13644
    },
    {
      age: "35-39",
      dx: 1111,
      pop: 11400
    },
    {
      age: "40-44",
      dx: 1674,
      pop: 11355
    },
    {
      age: "45-49",
      dx: 2569,
      pop: 11842
    },
    {
      age: "50-54",
      dx: 3728,
      pop: 11958
    },
    {
      age: "55-59",
      dx: 5388,
      pop: 10386
    },
    {
      age: "60-64",
      dx: 7496,
      pop: 9327
    },
    {
      age: "65-69",
      dx: 9675,
      pop: 7864
    },
    {
      age: "70-74",
      dx: 12202,
      pop: 5710
    },
    {
      age: "75-79",
      dx: 14259,
      pop: 4126
    },
    {
      age: "80-84",
      dx: 14539,
      pop: 2655
    },
    {
      age: "85-89",
      dx: 12081,
      pop: 500
    }, //1706
    {
      age: "90-94",
      dx: 6983,
      pop: 425
    },
    {
      age: "95-99",
      dx: 2496,
      pop: 350
    },
    {
      age: "100-104",
      dx: 496,
      pop: 275
    },
    {
      age: "105-109",
      dx: 50,
      pop: 125
    },
    {
      age: "110",
      dx: 2,
      pop: 25
    }
  ],
  "1980": [
    {
      age: "0",
      dx: 1465,
      pop: 3426
    },
    {
      age: "1-4",
      dx: 265,
      pop: 12637
    },
    {
      age: "5-9",
      dx: 164,
      pop: 16947
    },
    {
      age: "10-14",
      dx: 165,
      pop: 18445
    },
    {
      age: "15-19",
      dx: 482,
      pop: 21348
    },
    {
      age: "20-24",
      dx: 640,
      pop: 21096
    },
    {
      age: "25-29",
      dx: 623,
      pop: 19077
    },
    {
      age: "30-34",
      dx: 674,
      pop: 16961
    },
    {
      age: "35-39",
      dx: 930,
      pop: 13592
    },
    {
      age: "40-44",
      dx: 1428,
      pop: 11522
    },
    {
      age: "45-49",
      dx: 2224,
      pop: 11212
    },
    {
      age: "50-54",
      dx: 3368,
      pop: 11724
    },
    {
      age: "55-59",
      dx: 4859,
      pop: 11582
    },
    {
      age: "60-64",
      dx: 6885,
      pop: 9866
    },
    {
      age: "65-69",
      dx: 9064,
      pop: 8745
    },
    {
      age: "70-74",
      dx: 11478,
      pop: 6593
    },
    {
      age: "75-79",
      dx: 13740,
      pop: 4724
    },
    {
      age: "80-84",
      dx: 15019,
      pop: 2875
    },
    {
      age: "85-89",
      dx: 13342,
      pop: 600
    }, //2197
    {
      age: "90-94",
      dx: 8672,
      pop: 500
    },
    {
      age: "95-99",
      dx: 3572,
      pop: 400
    },
    {
      age: "100-104",
      dx: 835,
      pop: 300
    },
    {
      age: "105-109",
      dx: 99,
      pop: 200
    },
    {
      age: "110",
      dx: 6,
      pop: 100
    }
  ],
  "1985": [
    {
      age: "0",
      dx: 1161,
      pop: 3572
    },
    {
      age: "1-4",
      dx: 228,
      pop: 14123
    },
    {
      age: "5-9",
      dx: 137,
      pop: 16338
    },
    {
      age: "10-14",
      dx: 142,
      pop: 17450
    },
    {
      age: "15-19",
      dx: 423,
      pop: 18931
    },
    {
      age: "20-24",
      dx: 575,
      pop: 21529
    },
    {
      age: "25-29",
      dx: 588,
      pop: 21459
    },
    {
      age: "30-34",
      dx: 646,
      pop: 19503
    },
    {
      age: "35-39",
      dx: 831,
      pop: 16867
    },
    {
      age: "40-44",
      dx: 1244,
      pop: 13636
    },
    {
      age: "45-49",
      dx: 1973,
      pop: 11429
    },
    {
      age: "50-54",
      dx: 3073,
      pop: 10957
    },
    {
      age: "55-59",
      dx: 4583,
      pop: 11352
    },
    {
      age: "60-64",
      dx: 6522,
      pop: 10803
    },
    {
      age: "65-69",
      dx: 8803,
      pop: 9214
    },
    {
      age: "70-74",
      dx: 11415,
      pop: 7412
    },
    {
      age: "75-79",
      dx: 13604,
      pop: 5374
    },
    {
      age: "80-84",
      dx: 15344,
      pop: 3282
    },
    {
      age: "85-89",
      dx: 13995,
      pop: 700
    }, //2595
    {
      age: "90-94",
      dx: 9466,
      pop: 600
    },
    {
      age: "95-99",
      dx: 4107,
      pop: 525
    },
    {
      age: "100-104",
      dx: 1006,
      pop: 350
    },
    {
      age: "105-109",
      dx: 125,
      pop: 275
    },
    {
      age: "110",
      dx: 8,
      pop: 150
    }
  ],
  "1990": [
    {
      age: "0",
      dx: 1040,
      pop: 3858
    },
    {
      age: "1-4",
      dx: 204,
      pop: 14650
    },
    {
      age: "5-9",
      dx: 121,
      pop: 17917
    },
    {
      age: "10-14",
      dx: 136,
      pop: 16797
    },
    {
      age: "15-19",
      dx: 413,
      pop: 18133
    },
    {
      age: "20-24",
      dx: 542,
      pop: 19258
    },
    {
      age: "25-29",
      dx: 589,
      pop: 21560
    },
    {
      age: "30-34",
      dx: 715,
      pop: 21676
    },
    {
      age: "35-39",
      dx: 893,
      pop: 19455
    },
    {
      age: "40-44",
      dx: 1202,
      pop: 16960
    },
    {
      age: "45-49",
      dx: 1818,
      pop: 13421
    },
    {
      age: "50-54",
      dx: 2854,
      pop: 11212
    },
    {
      age: "55-59",
      dx: 4314,
      pop: 10534
    },
    {
      age: "60-64",
      dx: 6299,
      pop: 10707
    },
    {
      age: "65-69",
      dx: 8492,
      pop: 9962
    },
    {
      age: "70-74",
      dx: 11236,
      pop: 7902
    },
    {
      age: "75-79",
      dx: 13561,
      pop: 6027
    },
    {
      age: "80-84",
      dx: 15480,
      pop: 3823
    },
    {
      age: "85-89",
      dx: 14506,
      pop: 750
    }, //2968
    {
      age: "90-94",
      dx: 10052,
      pop: 650
    },
    {
      age: "95-99",
      dx: 4369,
      pop: 550
    },
    {
      age: "100-104",
      dx: 1038,
      pop: 450
    },
    {
      age: "105-109",
      dx: 120,
      pop: 350
    },
    {
      age: "110",
      dx: 7,
      pop: 250
    }
  ],
  "1995": [
    {
      age: "0",
      dx: 890,
      pop: 3870
    },
    {
      age: "1-4",
      dx: 178,
      pop: 15774
    },
    {
      age: "5-9",
      dx: 104,
      pop: 18859
    },
    {
      age: "10-14",
      dx: 126,
      pop: 18753
    },
    {
      age: "15-19",
      dx: 423,
      pop: 17616
    },
    {
      age: "20-24",
      dx: 530,
      pop: 18326
    },
    {
      age: "25-29",
      dx: 587,
      pop: 19176
    },
    {
      age: "30-34",
      dx: 751,
      pop: 22177
    },
    {
      age: "35-39",
      dx: 966,
      pop: 21961
    },
    {
      age: "40-44",
      dx: 1247,
      pop: 19699
    },
    {
      age: "45-49",
      dx: 1751,
      pop: 16679
    },
    {
      age: "50-54",
      dx: 2615,
      pop: 13191
    },
    {
      age: "55-59",
      dx: 3984,
      pop: 10936
    },
    {
      age: "60-64",
      dx: 5869,
      pop: 10082
    },
    {
      age: "65-69",
      dx: 8089,
      pop: 9970
    },
    {
      age: "70-74",
      dx: 10658,
      pop: 8741
    },
    {
      age: "75-79",
      dx: 13158,
      pop: 6574
    },
    {
      age: "80-84",
      dx: 15630,
      pop: 4351
    },
    {
      age: "85-89",
      dx: 15052,
      pop: 900
    }, //3522
    {
      age: "90-94",
      dx: 10972,
      pop: 800
    },
    {
      age: "95-99",
      dx: 5010,
      pop: 600
    },
    {
      age: "100-104",
      dx: 1251,
      pop: 500
    },
    {
      age: "105-109",
      dx: 151,
      pop: 400
    },
    {
      age: "110",
      dx: 9,
      pop: 300
    }
  ],
  "2000": [
    {
      age: "0",
      dx: 751,
      pop: 3797
    },
    {
      age: "1-4",
      dx: 146,
      pop: 15353
    },
    {
      age: "5-9",
      dx: 90,
      pop: 19738
    },
    {
      age: "10-14",
      dx: 112,
      pop: 19040
    },
    {
      age: "15-19",
      dx: 367,
      pop: 19068
    },
    {
      age: "20-24",
      dx: 475,
      pop: 17512
    },
    {
      age: "25-29",
      dx: 487,
      pop: 18869
    },
    {
      age: "30-34",
      dx: 630,
      pop: 20741
    },
    {
      age: "35-39",
      dx: 854,
      pop: 22625
    },
    {
      age: "40-44",
      dx: 1195,
      pop: 21373
    },
    {
      age: "45-49",
      dx: 1672,
      pop: 18470
    },
    {
      age: "50-54",
      dx: 2431,
      pop: 15163
    },
    {
      age: "55-59",
      dx: 3698,
      pop: 11757
    },
    {
      age: "60-64",
      dx: 5555,
      pop: 10056
    },
    {
      age: "65-69",
      dx: 7739,
      pop: 9762
    },
    {
      age: "70-74",
      dx: 10509,
      pop: 8736
    },
    {
      age: "75-79",
      dx: 13217,
      pop: 7063
    },
    {
      age: "80-84",
      dx: 16221,
      pop: 4642
    },
    {
      age: "85-89",
      dx: 15971,
      pop: 900
    }, //3871
    {
      age: "90-94",
      dx: 11539,
      pop: 800
    },
    {
      age: "95-99",
      dx: 5060,
      pop: 700
    },
    {
      age: "100-104",
      dx: 1153,
      pop: 600
    },
    {
      age: "105-109",
      dx: 121,
      pop: 500
    },
    {
      age: "110",
      dx: 6,
      pop: 400
    }
  ],
  "2005": [
    {
      age: "0",
      dx: 703,
      pop: 4000
    },
    {
      age: "1-4",
      dx: 126,
      pop: 15940
    },
    {
      age: "5-9",
      dx: 75,
      pop: 19636
    },
    {
      age: "10-14",
      dx: 96,
      pop: 21176
    },
    {
      age: "15-19",
      dx: 327,
      pop: 20313
    },
    {
      age: "20-24",
      dx: 468,
      pop: 20313
    },
    {
      age: "25-29",
      dx: 469,
      pop: 20339
    },
    {
      age: "30-34",
      dx: 546,
      pop: 19008
    },
    {
      age: "35-39",
      dx: 773,
      pop: 21786
    },
    {
      age: "40-44",
      dx: 1152,
      pop: 21787
    },
    {
      age: "45-49",
      dx: 1689,
      pop: 20534
    },
    {
      age: "50-54",
      dx: 2375,
      pop: 20534
    },
    {
      age: "55-59",
      dx: 3447,
      pop: 14187
    },
    {
      age: "60-64",
      dx: 5096,
      pop: 14188
    },
    {
      age: "65-69",
      dx: 7194,
      pop: 9119
    },
    {
      age: "70-74",
      dx: 9910,
      pop: 9119
    },
    {
      age: "75-79",
      dx: 13031,
      pop: 6425
    },
    {
      age: "80-84",
      dx: 16468,
      pop: 6425
    },
    {
      age: "85-89",
      dx: 17004,
      pop: 1370
    }, //3571
    {
      age: "90-94",
      dx: 12491,
      pop: 900
    },
    {
      age: "95-99",
      dx: 5327,
      pop: 700
    },
    {
      age: "100-104",
      dx: 1126,
      pop: 300
    },
    {
      age: "105-109",
      dx: 103,
      pop: 200
    },
    {
      age: "110",
      dx: 4,
      pop: 100
    }
  ],
  "2010": [
    {
      age: "0",
      dx: 687,
      pop: 5000
    },
    {
      age: "1-4",
      dx: 115,
      pop: 15201
    },
    {
      age: "5-9",
      dx: 67,
      pop: 20349
    },
    {
      age: "10-14",
      dx: 80,
      pop: 20677
    },
    {
      age: "15-19",
      dx: 292,
      pop: 22040
    },
    {
      age: "20-24",
      dx: 472,
      pop: 21586
    },
    {
      age: "25-29",
      dx: 494,
      pop: 21102
    },
    {
      age: "30-34",
      dx: 549,
      pop: 19962
    },
    {
      age: "35-39",
      dx: 713,
      pop: 20180
    },
    {
      age: "40-44",
      dx: 1075,
      pop: 20891
    },
    {
      age: "45-49",
      dx: 1629,
      pop: 22709
    },
    {
      age: "50-54",
      dx: 2370,
      pop: 22298
    },
    {
      age: "55-59",
      dx: 3252,
      pop: 19665
    },
    {
      age: "60-64",
      dx: 4634,
      pop: 16818
    },
    {
      age: "65-69",
      dx: 6483,
      pop: 12435
    },
    {
      age: "70-74",
      dx: 9048,
      pop: 9278
    },
    {
      age: "75-79",
      dx: 12248,
      pop: 7318
    },
    {
      age: "80-84",
      dx: 15912,
      pop: 5743
    },
    {
      age: "85-89",
      dx: 17644,
      pop: 3620
    },
    {
      age: "90-94",
      dx: 14105,
      pop: 1448
    },
    {
      age: "95-99",
      dx: 6496,
      pop: 371
    },
    {
      age: "100-104",
      dx: 1487,
      pop: 33
    },
    {
      age: "105-109",
      dx: 145,
      pop: 20
    },
    {
      age: "110",
      dx: 6,
      pop: 10
    }
  ],
  "2015": [
    {
      age: "0",
      dx: 598,
      pop: 4000
    },
    {
      age: "1-4",
      dx: 103,
      pop: 15865
    },
    {
      age: "5-9",
      dx: 58,
      pop: 20522
    },
    {
      age: "10-14",
      dx: 70,
      pop: 20642
    },
    {
      age: "15-19",
      dx: 232,
      pop: 20807
    },
    {
      age: "20-24",
      dx: 420,
      pop: 22278
    },
    {
      age: "25-29",
      dx: 480,
      pop: 21474
    },
    {
      age: "30-34",
      dx: 557,
      pop: 20974
    },
    {
      age: "35-39",
      dx: 686,
      pop: 19407
    },
    {
      age: "40-44",
      dx: 968,
      pop: 20382
    },
    {
      age: "45-49",
      dx: 1507,
      pop: 20668
    },
    {
      age: "50-54",
      dx: 2301,
      pop: 22355
    },
    {
      age: "55-59",
      dx: 3268,
      pop: 21109
    },
    {
      age: "60-64",
      dx: 4439,
      pop: 18440
    },
    {
      age: "65-69",
      dx: 6093,
      pop: 14986
    },
    {
      age: "70-74",
      dx: 8523,
      pop: 10805
    },
    {
      age: "75-79",
      dx: 11708,
      pop: 7804
    },
    {
      age: "80-84",
      dx: 15248,
      pop: 5627
    },
    {
      age: "85-89",
      dx: 17845,
      pop: 1800
    }, //5255
    {
      age: "90-94",
      dx: 15306,
      pop: 1200
    },
    {
      age: "95-99",
      dx: 7539,
      pop: 1000
    },
    {
      age: "100-104",
      dx: 1855,
      pop: 600
    },
    {
      age: "105-109",
      dx: 192,
      pop: 400
    },
    {
      age: "110",
      dx: 8,
      pop: 200
    }
  ],
  /*"2015-2018": [
    {
      age: "0",
      dx: 575,
      pop: 5000
    },
    {
      age: "1-4",
      dx: 98,
      pop: 14580
    },
    {
      age: "5-9",
      dx: 58,
      pop: 20290
    },
    {
      age: "10-14",
      dx: 74,
      pop: 20800
    },
    {
      age: "15-19",
      dx: 248,
      pop: 21060
    },
    {
      age: "20-24",
      dx: 460,
      pop: 21630
    },
    {
      age: "25-29",
      dx: 570,
      pop: 13500
    },
    {
      age: "30-34",
      dx: 678,
      pop: 22430
    },
    {
      age: "35-39",
      dx: 818,
      pop: 21730
    },
    {
      age: "40-44",
      dx: 1027,
      pop: 19920
    },
    {
      age: "45-49",
      dx: 1482,
      pop: 20400
    },
    {
      age: "50-54",
      dx: 2267,
      pop: 20480
    },
    {
      age: "55-59",
      dx: 3322,
      pop: 21870
    },
    {
      age: "60-64",
      dx: 4541,
      pop: 20570
    },
    {
      age: "65-69",
      dx: 5980,
      pop: 17460
    },
    {
      age: "70-74",
      dx: 8290,
      pop: 14030
    },
    {
      age: "75-79",
      dx: 11368,
      pop: 9650
    },
    {
      age: "80-84",
      dx: 14775,
      pop: 6320
    },
    {
      age: "85-89",
      dx: 17261,
      pop: 2200
    }, //6610
    {
      age: "90-94",
      dx: 15555,
      pop: 1800
    },
    {
      age: "95-99",
      dx: 8114,
      pop: 1200
    },
    {
      age: "100-104",
      dx: 2178,
      pop: 800
    },
    {
      age: "105-109",
      dx: 251,
      pop: 400
    },
    {
      age: "110",
      dx: 12,
      pop: 200
    }
  ],*/
  "2020": [
    {
      age: "0",
      dx: 897,
      pop: 5000
    },
    {
      age: "1-4",
      dx: 160,
      pop: 14580
    },
    {
      age: "5-9",
      dx: 95,
      pop: 20430
    },
    {
      age: "10-14",
      dx: 123,
      pop: 21827
    },
    {
      age: "15-19",
      dx: 467,
      pop: 21628
    },
    {
      age: "20-24",
      dx: 618,
      pop: 21537
    },
    {
      age: "25-29",
      dx: 571,
      pop: 22964
    },
    {
      age: "30-34",
      dx: 696,
      pop: 22902
    },
    {
      age: "35-39",
      dx: 1004,
      pop: 22292
    },
    {
      age: "40-44",
      dx: 1425,
      pop: 20643
    },
    {
      age: "45-49",
      dx: 1888,
      pop: 20510
    },
    {
      age: "50-54",
      dx: 2475,
      pop: 20846
    },
    {
      age: "55-59",
      dx: 3727,
      pop: 22187
    },
    {
      age: "60-64",
      dx: 5709,
      pop: 21072
    },
    {
      age: "65-69",
      dx: 9176,
      pop: 17962
    },
    {
      age: "70-74",
      dx: 13175,
      pop: 14493
    },
    {
      age: "75-79",
      dx: 18031,
      pop: 9643
    },
    {
      age: "80-84",
      dx: 24959,
      pop: 6142
    },
    {
      age: "85-89",
      dx: 35907,
      pop: 2000
    }, //6063
    {
      age: "90-94",
      dx: 36585,
      pop: 1700
    },
    {
      age: "95-99",
      dx: 25859,
      pop: 1120
    },
    {
      age: "100-104",
      dx: 11800,
      pop: 720
    },
    {
      age: "105-109",
      dx: 3793,
      pop: 310
    },
    {
      age: "110",
      dx: 771 + 82,
      pop: 196
    }
  ]
};

const frequency = (chosenfrequency, a, range) => {
  var frequency = null;
  if (!chosenfrequency && range) {
    if (a === 0) {
      frequency = ["0"];
    } else if (a === 1) {
      frequency = ["1-49"];
    } else if (a === 2) {
      frequency = ["50-64"];
    } else if (a === 3) {
      frequency = ["65-74"];
    } else if (a === 4) {
      frequency = ["75-84"];
    } else if (a === 5) {
      frequency = ["85-94"];
    } else if (a === 6) {
      frequency = ["95-110"];
    }
  } else if (chosenfrequency || range) {
    //high
    if (a === 0) {
      frequency = ["75-79"];
    } else if (a === 1) {
      frequency = ["80-84"];
    } else if (a === 2) {
      frequency = ["85-89"];
    } else if (a === 3) {
      frequency = ["90-94"];
    } else if (a === 4) {
      frequency = ["95-99"];
    } else if (a === 5) {
      frequency = ["100-104"];
    } else if (a === 6) {
      frequency = ["105-109"];
    }
  } else {
    //cohort
    if (a === 0) {
      frequency = ["0"];
    } else if (a === 1) {
      frequency = [
        "1-4",
        "5-9",
        "10-14",
        "15-19",
        "20-24",
        "25-29",
        "30-34",
        "35-39",
        "40-44",
        "45-49"
      ];
    } else if (a === 2) {
      frequency = ["50-54", "55-59", "60-64"];
    } else if (a === 3) {
      frequency = ["65-69", "70-74"];
    } else if (a === 4) {
      frequency = ["75-79", "80-84"];
    } else if (a === 5) {
      frequency = ["85-89", "90-94"];
    } else if (a === 6) {
      frequency = ["95-99", "100-104", "105-109", "110"];
    }
  }
  return frequency;
};
class Mortal extends React.Component {
  constructor(props) {
    super(props);

    let date = [];
    let noData = [];
    var averageLifetimeData = [];
    var averageLifetime = [];
    let mortalZeroNJData = [];
    var mortalZeroNJ = [];
    let mortalEightyFiveNJDataAge = [];
    let mortalEightyFiveNJAge = [];
    let mortalSixtyFiveNJDataAge = [];
    let mortalSixtyFiveNJAge = [];
    let mortalSeventyFiveNJDataAge = [];
    let mortalSeventyFiveNJAge = [];
    let mortalFiftyNJDataAge = [];
    let mortalFiftyNJAge = [];
    let mortalZeroNJDataAge = [];
    let mortalZeroNJAge = [];
    let mortalFiftyNJData = [];
    let mortalFiftyNJ = [];
    let mortalSeventyFiveNJData = [];
    let mortalSeventyFiveNJ = [];
    let mortalSixtyFiveNJData = [];
    let mortalSixtyFiveNJ = [];
    let mortalEightyFiveNJData = [];
    let mortalEightyFiveNJ = [];
    let mortalNinetyFiveNJData = [];
    let mortalNinetyFiveNJ = [];
    let mortalOneTenNJData = [];
    let mortalOneTenNJ = [];
    let mZeroNJData = [];
    let mEightyFiveNJDataAge = [];
    let mSixtyFiveNJDataAge = [];
    let mSeventyFiveNJDataAge = [];
    let mFiftyNJDataAge = [];
    let mZeroNJDataAge = [];
    let mFiftyNJData = [];
    let mSixtyFiveNJData = [];
    let mSeventyFiveNJData = [];
    let mEightyFiveNJData = [];
    let mNinetyFiveNJData = [];
    let mOneTenNJData = [];
    let avgLifetime = {};
    Object.keys(usmortality).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);

      const val = (d, p = 1000) => Math.round((d / 100000) * p * 1000);
      Object.values(usmortality)[i].forEach((x) => {
        if (!avgLifetime[x.age])
          avgLifetime[x.age] = { total: 0, length: 0, year };
        //console.log(x);
        const state = {
          year,
          length: avgLifetime[x.age].length + 1,
          total:
            (avgLifetime[x.age].total + val(x.dx, x.pop)) /
            avgLifetime[x.age].total
        };
        avgLifetime[x.age] = state;
      });
    });
    //console.log(avgLifetime);
    Object.keys(avgLifetime).forEach((y, i) => {
      const x = Object.values(avgLifetime)[i];
      averageLifetime.push(x.total / x.length);
      averageLifetimeData.push([x.year, x.total / x.length]);
    });
    Object.keys(usmortality).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      date.push(year);
      /*const thisdecade = popdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      const val = (d, p = 1000) => Math.round((d / 100000) * p * 1000);
      Object.values(usmortality)[i].forEach((x) => {
        if (x.age === "0") {
          mZeroNJData.push([year, val(x.dx, x.pop)]);
          mZeroNJDataAge.push([year, x.pop * 1000]);
        } else if (
          x.age === "1-4" ||
          x.age === "5-9" ||
          x.age === "10-14" ||
          x.age === "15-19" ||
          x.age === "20-24" ||
          x.age === "25-29" ||
          x.age === "30-34" ||
          x.age === "35-39" ||
          x.age === "40-44" ||
          x.age === "45-49"
        ) {
          mFiftyNJData.push([year, val(x.dx, x.pop)]);
          mFiftyNJDataAge.push([year, x.pop * 1000]);
        } else if (
          x.age === "50-54" ||
          x.age === "55-59" ||
          x.age === "60-64"
        ) {
          mSixtyFiveNJData.push([year, val(x.dx, x.pop)]);
          mSixtyFiveNJDataAge.push([year, x.pop * 1000]);
        } else if (x.age === "65-69" || x.age === "70-74") {
          mSeventyFiveNJData.push([year, val(x.dx, x.pop)]);
          mSeventyFiveNJDataAge.push([year, x.pop * 1000]);
        } else if (x.age === "75-79" || x.age === "80-84") {
          mEightyFiveNJData.push([year, val(x.dx, x.pop)]);
          mEightyFiveNJDataAge.push([year, x.pop * 1000]);
        } else if (x.age === "85-89" || x.age === "90-94") {
          mNinetyFiveNJData.push([year, val(x.dx, x.pop)]);
        } else if (
          x.age === "95-99" ||
          x.age === "100-104" ||
          x.age === "105-109" ||
          x.age === "110"
        ) {
          mOneTenNJData.push([year, val(x.dx, x.pop)]);
        }
      });
    });
    date.forEach((x) => {
      let totmO = 0;
      mOneTenNJData.forEach((obj) => {
        if (obj[0] === x) totmO = totmO + obj[1];
      });
      mortalOneTenNJ.push(totmO);
      mortalOneTenNJData.push([x, totmO]);

      let totmN = 0;
      mNinetyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmN = totmN + obj[1];
      });
      mortalNinetyFiveNJ.push(totmN);
      mortalNinetyFiveNJData.push([x, totmN]);
      let totmE = 0;
      mEightyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmE = totmE + obj[1];
      });
      mortalEightyFiveNJ.push(totmE);
      mortalEightyFiveNJData.push([x, totmE]);
      let totmSe = 0;
      mSeventyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmSe = totmSe + obj[1];
      });
      mortalSeventyFiveNJ.push(totmSe);
      mortalSeventyFiveNJData.push([x, totmSe]);
      let totmS = 0;
      mSixtyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmS = totmS + obj[1];
      });
      mortalSixtyFiveNJ.push(totmS);
      mortalSixtyFiveNJData.push([x, totmS]);
      let totmF = 0;
      mFiftyNJData.forEach((obj) => {
        if (obj[0] === x) totmF = totmF + obj[1];
      });
      mortalFiftyNJ.push(totmF);
      mortalFiftyNJData.push([x, totmF]);
      let totmEFA = 0;
      mEightyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmEFA = totmEFA + obj[1];
      });
      mortalEightyFiveNJAge.push(totmEFA);
      mortalEightyFiveNJDataAge.push([x, totmEFA]);
      let totmSeA = 0;
      mSeventyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmSeA = totmSeA + obj[1];
      });
      mortalSeventyFiveNJAge.push(totmSeA);
      mortalSeventyFiveNJDataAge.push([x, totmSeA]);
      let totmSA = 0;
      mSixtyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmSA = totmSA + obj[1];
      });
      mortalSixtyFiveNJAge.push(totmSA);
      mortalSixtyFiveNJDataAge.push([x, totmSA]);
      let totmFA = 0;
      mFiftyNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmFA = totmFA + obj[1];
      });
      mortalFiftyNJAge.push(totmFA);
      mortalFiftyNJDataAge.push([x, totmFA]);
      let totmZA = 0;
      mZeroNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmZA = totmZA + obj[1];
      });
      mortalZeroNJAge.push(totmZA);
      mortalZeroNJDataAge.push([x, totmZA]);
      let totmZ = 0;
      mZeroNJData.forEach((obj) => {
        if (obj[0] === x) totmZ = totmZ + obj[1];
      });
      mortalZeroNJ.push(totmZ);
      mortalZeroNJData.push([x, totmZ]);
    });
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDeaths = 0; //Math.min(...mortalZeroNJ);
    const all = [
      ...mortalZeroNJ,
      ...mortalFiftyNJ,
      ...mortalSixtyFiveNJ,
      ...mortalSeventyFiveNJ,
      ...mortalEightyFiveNJ,
      ...mortalNinetyFiveNJ,
      ...mortalOneTenNJ
    ];
    var highlifetime = Math.max(...averageLifetime);
    var highDeaths = Math.max(...all);
    var cappop = Math.max(
      ...mortalZeroNJAge,
      ...mortalFiftyNJAge,
      ...mortalSixtyFiveNJAge,
      ...mortalSeventyFiveNJAge,
      ...mortalEightyFiveNJAge
    );
    noData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
    var state = {
      cappop,
      highlifetime,
      averageLifetimeData,
      date,
      mortalZeroNJData,
      mortalZeroNJDataAge,
      mortalFiftyNJDataAge,
      mortalSixtyFiveNJDataAge,
      mortalSeventyFiveNJDataAge,
      mortalEightyFiveNJDataAge,
      mortalFiftyNJData,
      mortalSixtyFiveNJData,
      mortalSeventyFiveNJData,
      mortalEightyFiveNJData,
      mortalNinetyFiveNJData,
      mortalOneTenNJData,
      noData,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDeaths,
      highDeaths,
      chosenRate: true
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    const { chosenRate, chosenfrequency } = this.state;
    if (
      chosenRate !== this.state.lastChosenRate ||
      this.state.lastchosenfrequency !== chosenfrequency
    )
      this.setState(
        {
          lastchosenfrequency: chosenfrequency,
          lastChosenRate: chosenRate
        },
        () => {
          let date = [];
          let noData = [];
          let mortalZeroNJData = [];
          var mortalZeroNJ = [];
          let mortalZeroNJDataAge = [];
          let mortalZeroNJAge = [];
          let mortalFiftyNJDataAge = [];
          let mortalFiftyNJAge = [];
          let mortalSixtyFiveNJDataAge = [];
          let mortalSixtyFiveNJAge = [];
          let mortalSeventyFiveNJDataAge = [];
          let mortalSeventyFiveNJAge = [];
          let mortalEightyFiveNJDataAge = [];
          let mortalEightyFiveNJAge = [];
          let mortalFiftyNJData = [];
          let mortalFiftyNJ = [];
          let mortalSixtyFiveNJData = [];
          let mortalSixtyFiveNJ = [];
          let mortalSeventyFiveNJData = [];
          let mortalSeventyFiveNJ = [];
          let mortalEightyFiveNJData = [];
          let mortalEightyFiveNJ = [];
          let mortalNinetyFiveNJData = [];
          let mortalNinetyFiveNJ = [];
          let mortalOneTenNJData = [];
          let mortalOneTenNJ = [];
          let mZeroNJData = [];
          let mZeroNJDataAge = [];
          let mFiftyNJDataAge = [];
          let mSixtyFiveNJDataAge = [];
          let mSeventyFiveNJDataAge = [];
          let mEightyFiveNJDataAge = [];
          let mFiftyNJData = [];
          let mSixtyFiveNJData = [];
          let mSeventyFiveNJData = [];
          let mEightyFiveNJData = [];
          let mNinetyFiveNJData = [];
          let mOneTenNJData = [];
          Object.keys(usmortality).forEach((yearSet, i) => {
            const year = yearSet; //Number(yearSet.split("-")[1]);
            noData.push([year, 0]);
            date.push(year);
            /*const thisdecade = popdata.find(
          (x) => x.year - year < 5 && x.year - year > -5
        );*/
            const val = (d, p = 1000) => Math.round((d / 100000) * p * 1000);
            Object.values(usmortality)[i].forEach((x) => {
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJDataAge.push([
                  year,
                  chosenRate ? x.pop * 1000 : x.pop * 1000
                ]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJDataAge.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 10 : x.pop * 1000
                ]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJDataAge.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 3 : x.pop * 1000
                ]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJDataAge.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : x.pop * 1000
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJDataAge.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : x.pop * 1000
                ]);
              }
              if (frequency(chosenfrequency, 0).includes(x.age)) {
                mZeroNJData.push([
                  year,
                  chosenRate ? x.pop * 1000 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 1).includes(x.age)) {
                mFiftyNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 10 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 2).includes(x.age)) {
                mSixtyFiveNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 3 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 3).includes(x.age)) {
                mSeventyFiveNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 4).includes(x.age)) {
                mEightyFiveNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 5).includes(x.age)) {
                mNinetyFiveNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 2 : val(x.dx, x.pop)
                ]);
              } else if (frequency(chosenfrequency, 6).includes(x.age)) {
                mOneTenNJData.push([
                  year,
                  chosenRate ? (x.pop * 1000) / 4 : val(x.dx, x.pop)
                ]);
              }
            });
          });
          date.forEach((x) => {
            let totmO = 0;
            mOneTenNJData.forEach((obj) => {
              if (obj[0] === x) totmO = totmO + obj[1];
            });
            mortalOneTenNJ.push(totmO);
            mortalOneTenNJData.push([x, totmO]);

            let totmN = 0;
            mNinetyFiveNJData.forEach((obj) => {
              if (obj[0] === x) totmN = totmN + obj[1];
            });
            mortalNinetyFiveNJ.push(totmN);
            mortalNinetyFiveNJData.push([x, totmN]);
            let totmE = 0;
            mEightyFiveNJData.forEach((obj) => {
              if (obj[0] === x) totmE = totmE + obj[1];
            });
            mortalEightyFiveNJ.push(totmE);
            mortalEightyFiveNJData.push([x, totmE]);
            let totmSe = 0;
            mSeventyFiveNJData.forEach((obj) => {
              if (obj[0] === x) totmSe = totmSe + obj[1];
            });
            mortalSeventyFiveNJ.push(totmSe);
            mortalSeventyFiveNJData.push([x, totmSe]);
            let totmS = 0;
            mSixtyFiveNJData.forEach((obj) => {
              if (obj[0] === x) totmS = totmS + obj[1];
            });
            mortalSixtyFiveNJ.push(totmS);
            mortalSixtyFiveNJData.push([x, totmS]);
            let totmF = 0;
            mFiftyNJData.forEach((obj) => {
              if (obj[0] === x) totmF = totmF + obj[1];
            });
            mortalFiftyNJ.push(totmF);
            mortalFiftyNJData.push([x, totmF]);
            let totmEFA = 0;
            mEightyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmEFA = totmEFA + obj[1];
            });
            mortalEightyFiveNJAge.push(totmEFA);
            mortalEightyFiveNJDataAge.push([x, totmEFA]);
            let totmSeA = 0;
            mSeventyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmSeA = totmSeA + obj[1];
            });
            mortalSeventyFiveNJAge.push(totmSeA);
            mortalSeventyFiveNJDataAge.push([x, totmSeA]);
            let totmSA = 0;
            mSixtyFiveNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmSA = totmSA + obj[1];
            });
            mortalSixtyFiveNJAge.push(totmSA);
            mortalSixtyFiveNJDataAge.push([x, totmSA]);
            let totmFA = 0;
            mFiftyNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmFA = totmFA + obj[1];
            });
            mortalFiftyNJAge.push(totmFA);
            mortalFiftyNJDataAge.push([x, totmFA]);
            let totmZA = 0;
            mZeroNJDataAge.forEach((obj) => {
              if (obj[0] === x) totmZA = totmZA + obj[1];
            });
            mortalZeroNJAge.push(totmZA);
            mortalZeroNJDataAge.push([x, totmZA]);
            let totmZ = 0;
            mZeroNJData.forEach((obj) => {
              if (obj[0] === x) totmZ = totmZ + obj[1];
            });
            mortalZeroNJ.push(totmZ);
            mortalZeroNJData.push([x, totmZ]);
          });

          var lowDate = Math.min(...date);
          var highDate = Math.max(...date);
          var lowDeaths = 0; //Math.min(...mortalZeroNJ);
          const all = [
            ...mortalZeroNJ,
            ...mortalFiftyNJ,
            ...mortalSixtyFiveNJ,
            ...mortalSeventyFiveNJ,
            ...mortalEightyFiveNJ,
            ...mortalNinetyFiveNJ,
            ...mortalOneTenNJ
          ];
          var highDeaths = Math.max(...all);
          var cappop = Math.max(
            ...mortalZeroNJAge,
            ...mortalFiftyNJAge,
            ...mortalSixtyFiveNJAge,
            ...mortalSeventyFiveNJAge,
            ...mortalEightyFiveNJAge
          );
          noData.sort((a, b) => a[0] - b[0]);
          mortalZeroNJData.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
          mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
          mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
          mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
          this.setState({
            date,
            cappop,
            mortalZeroNJData,
            mortalFiftyNJDataAge,
            mortalSixtyFiveNJDataAge,
            mortalSeventyFiveNJDataAge,
            mortalEightyFiveNJDataAge,
            mortalFiftyNJData,
            mortalSixtyFiveNJData,
            mortalSeventyFiveNJData,
            mortalEightyFiveNJData,
            mortalNinetyFiveNJData,
            mortalOneTenNJData,
            noData,
            yAxis: highDeaths - lowDeaths,
            xAxis: highDate - lowDate,
            lowDate,
            highDate,
            lowDeaths,
            highDeaths
          });
        }
      );
  };
  render() {
    const { linecss } = this.props;
    const yaxis = this.state.yaxis ? this.state.yAxis : this.state.cappop;
    const { chosenRate, lowDate } = this.state;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      0
    ]);
    const mortalZeroNJData = this.state.mortalZeroNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const mortalZeroNJDataAge = this.state.mortalZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const mortalFiftyNJDataAge = this.state.mortalFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalSixtyFiveNJDataAge = this.state.mortalSixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalSeventyFiveNJDataAge = this.state.mortalSeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalEightyFiveNJDataAge = this.state.mortalEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalFiftyNJData = this.state.mortalFiftyNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const mortalSixtyFiveNJData = this.state.mortalSixtyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalSeventyFiveNJData = this.state.mortalSeventyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalEightyFiveNJData = this.state.mortalEightyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalNinetyFiveNJData = this.state.mortalNinetyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalOneTenNJData = this.state.mortalOneTenNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const averageLifetimeData = this.state.averageLifetimeData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - 0) / this.state.highlifetime) * 150
    ]);
    const ite = { border: "1px grey dashed", width: "max-content" };
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    return (
      <div
        style={{
          transform: "translate(0,0)",
          backgroundColor: "rgb(190,150,180)"
        }}
      >
        {/*<div
          style={{
            position: "relative",
            top: "0px",
            height: "min-content",
            flexWrap: "wrap",
            display: "flex"
          }}
        >
          {["New Jersey"].map((x, i) => {
            return (
              <div
                key={i}
                onMouseEnter={() =>
                  this.setState({}, () => {
                    clearTimeout(this.unHover);
                    this.unHover = setTimeout(
                      () => this.setState({ hoveredBtn: x }),
                      200
                    );
                  })
                }
                style={{
                  transition: ".3s ease-in",
                  boxShadow: `inset 0px 0px ${
                    this.state.hoveredBtn === x ? 7 : 0
                  }px  ${this.state.hoveredBtn === x ? 2 : 0.5}px black`,
                  alignItems: "center",
                  padding: "4px 7px",
                  border: this.state.chosenState === x ? "1px solid black" : {1},
                  display: "flex"
                }}
              >
                <div onClick={() => this.setState({ chosenState: x })}>{x}</div>
                &nbsp;
                {this.state.chosenState === x && (
                  <button onClick={() => this.setState({ chosenState: null })}>
                    &times;
                  </button>
                )}
              </div>
            );
          })}
        </div>*/}
        <button
          style={{ position: "absolute", right: "0px", zIndex: "9999" }}
          onClick={(e) => {
            e.stopPropagation();
            this.setState({
              yaxis: !this.state.yaxis
            });
          }}
        >
          {!this.state.yaxis ? "pop" : "deaths"}
        </button>
        <div
          style={{ width: "100%", height: "200px", zIndex: "9999" }}
          onClick={() =>
            this.setState(
              this.state.chosenRate && this.state.chosenfrequency
                ? { chosenRate: false, chosenfrequency: false }
                : !this.state.chosenfrequency
                ? { chosenfrequency: true }
                : { chosenRate: true }
            )
          }
        >
          <div style={labelstyle}>
            {chosenRate
              ? "population per 5yr cohort"
              : `highest accu yearly mortality ${
                  this.state.chosenfrequency ? "high" : "cohort"
                }`}{" "}
            -&nbsp;
            <br />
            {shortNumber(Math.round(this.state.highDeaths / 5))}
            <div
              style={{
                top: "0px",
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {lowDate}&nbsp;
              {this.state.highDate}
            </div>
            <br />
            {/* <div
              style={{
                textAlign: "right",
                top: "0px",
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {this.state.highlifetime} average
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
              {this.state.lowDeaths}
            </div>*/}
          </div>
          <svg
            className="all"
            style={linecss}
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
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalZeroNJData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="white"
                    fill="transparent"
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {/*<BasisCurve
              showPoints={false}
              strokeWidth={4}
              stroke="purple"
              data={mortalZeroNJData}
            />*/}
            {mortalZeroNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="white"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {mortalFiftyNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="purple"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {mortalSixtyFiveNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="blue"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {mortalSeventyFiveNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="green"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {mortalEightyFiveNJDataAge.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={8}
                    height={1}
                    stroke="orange"
                    fill="transparent"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {mortalFiftyNJData.map(
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
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalSixtyFiveNJData.map(
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
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalSeventyFiveNJData.map(
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
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalEightyFiveNJData.map(
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
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalNinetyFiveNJData.map(
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
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {mortalOneTenNJData.map(
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
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
            {averageLifetimeData.map(
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
                    strokeWidth={3}
                    key={i}
                  />
                )
            )}
          </svg>
          <div style={labelstyle}>
            <div
              style={{
                display: "flex",
                position: "absolute",
                width: "max-content"
              }}
            >
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "white"
                  }}
                />
                {frequency(this.state.chosenfrequency, 0, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "purple"
                  }}
                />
                {frequency(this.state.chosenfrequency, 1, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "blue"
                  }}
                />
                {frequency(this.state.chosenfrequency, 2, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "green"
                  }}
                />
                {frequency(this.state.chosenfrequency, 3, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "orange"
                  }}
                />
                {frequency(this.state.chosenfrequency, 4, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "red"
                  }}
                />
                {frequency(this.state.chosenfrequency, 5, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "black"
                  }}
                />
                {
                  frequency(this.state.chosenfrequency, 6, true) //chosenfrequency, index, range defaults cohort
                }
                &nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between"
          }}
        >
          {this.state.date.map((x) => (
            <div key={x} style={{ width: "max-content", wordBreak: "none" }}>
              {x}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Mortal;
