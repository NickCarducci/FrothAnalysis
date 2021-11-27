import React from "react";

const mining = [
  {
    "1939": {
      Jan: 882,
      Feb: 884,
      Mar: 883,
      Apr: 624,
      May: 737,
      Jun: 868,
      Jul: 852,
      Aug: 859,
      Sep: 885,
      Oct: "925",
      Nov: "939",
      Dec: 930
    }
  },
  {
    "1940": {
      Jan: 925,
      Feb: 929,
      Mar: 926,
      Apr: 920,
      May: 930,
      Jun: 918,
      Jul: 920,
      Aug: 923,
      Sep: 928,
      Oct: "932",
      Nov: "936",
      Dec: 939
    }
  },
  {
    "1941": {
      Jan: 945,
      Feb: 951,
      Mar: 961,
      Apr: 681,
      May: 979,
      Jun: 990,
      Jul: 1001,
      Aug: 1013,
      Sep: 1020,
      Oct: "1022",
      Nov: "1021",
      Dec: 1024
    }
  },
  {
    "1942": {
      Jan: 1029,
      Feb: 1021,
      Mar: 1014,
      Apr: 1022,
      May: 1025,
      Jun: 1019,
      Jul: 1018,
      Aug: 1011,
      Sep: 1002,
      Oct: "994",
      Nov: "989",
      Dec: 984
    }
  },
  {
    "1943": {
      Jan: 974,
      Feb: 978,
      Mar: 973,
      Apr: 968,
      May: 958,
      Jun: 957,
      Jul: 954,
      Aug: 947,
      Sep: 950,
      Oct: "950",
      Nov: "943",
      Dec: 950
    }
  },
  {
    "1944": {
      Jan: 947,
      Feb: 948,
      Mar: 942,
      Apr: 940,
      May: 938,
      Jun: 934,
      Jul: 925,
      Aug: 922,
      Sep: 914,
      Oct: "906",
      Nov: "901",
      Dec: 894
    }
  },
  {
    "1945": {
      Jan: 893,
      Feb: 892,
      Mar: 890,
      Apr: 855,
      May: 820,
      Jun: 878,
      Jul: 868,
      Aug: 863,
      Sep: 857,
      Oct: "795",
      Nov: "871",
      Dec: 880
    }
  },
  {
    "1946": {
      Jan: 891,
      Feb: 885,
      Mar: 891,
      Apr: 600,
      May: 807,
      Jun: 911,
      Jul: 929,
      Aug: 939,
      Sep: 941,
      Oct: "945",
      Nov: "946",
      Dec: 932
    }
  },
  {
    "1947": {
      Jan: 958,
      Feb: 962,
      Mar: 965,
      Apr: 946,
      May: 972,
      Jun: 977,
      Jul: 953,
      Aug: 985,
      Sep: 989,
      Oct: "997",
      Nov: "1002",
      Dec: 1005
    }
  },
  {
    "1948": {
      Jan: 1008,
      Feb: 1003,
      Mar: 1017,
      Apr: 917,
      May: 1028,
      Jun: 1035,
      Jul: 1006,
      Aug: 1033,
      Sep: 1036,
      Oct: "1030",
      Nov: "1027",
      Dec: 1025
    }
  },
  {
    "1949": {
      Jan: 1011,
      Feb: 1010,
      Mar: 1003,
      Apr: 1003,
      May: 991,
      Jun: 976,
      Jul: 953,
      Aug: 961,
      Sep: 955,
      Oct: "630",
      Nov: "929",
      Dec: 948
    }
  },
  {
    "1950": {
      Jan: 878,
      Feb: 638,
      Mar: 951,
      Apr: 954,
      May: 955,
      Jun: 957,
      Jul: 938,
      Aug: 965,
      Sep: 967,
      Oct: "966",
      Nov: "962",
      Dec: 959
    }
  },
  {
    "1951": {
      Jan: 959,
      Feb: 962,
      Mar: 959,
      Apr: 948,
      May: 954,
      Jun: 958,
      Jul: 945,
      Aug: 959,
      Sep: 952,
      Oct: "958",
      Nov: "958",
      Dec: 957
    }
  },
  {
    "1952": {
      Jan: 958,
      Feb: 954,
      Mar: 957,
      Apr: 956,
      May: 954,
      Jun: 874,
      Jul: 848,
      Aug: 931,
      Sep: 930,
      Oct: "927",
      Nov: "923",
      Dec: 923
    }
  },
  {
    "1953": {
      Jan: 926,
      Feb: 919,
      Mar: 911,
      Apr: 908,
      May: 905,
      Jun: 903,
      Jul: 900,
      Aug: 899,
      Sep: 895,
      Oct: "890",
      Nov: "886",
      Dec: 879
    }
  },
  {
    "1954": {
      Jan: 872,
      Feb: 864,
      Mar: 848,
      Apr: 836,
      May: 822,
      Jun: 821,
      Jul: 817,
      Aug: 813,
      Sep: 795,
      Oct: "803",
      Nov: "805",
      Dec: 805
    }
  },
  {
    "1955": {
      Jan: 806,
      Feb: 809,
      Mar: 817,
      Apr: 821,
      May: 827,
      Jun: 830,
      Jul: 830,
      Aug: 831,
      Sep: 838,
      Oct: "841",
      Nov: "843",
      Dec: 846
    }
  },
  {
    "1956": {
      Jan: 850,
      Feb: 856,
      Mar: 863,
      Apr: 869,
      May: 859,
      Jun: 868,
      Jul: 805,
      Aug: 869,
      Sep: 868,
      Oct: "868",
      Nov: "865",
      Dec: 863
    }
  },
  {
    "1957": {
      Jan: 867,
      Feb: 870,
      Mar: 869,
      Apr: 869,
      May: 868,
      Jun: 869,
      Jul: 870,
      Aug: 875,
      Sep: 864,
      Oct: "857",
      Nov: "849",
      Dec: 844
    }
  },
  {
    "1958": {
      Jan: 847,
      Feb: 829,
      Mar: 812,
      Apr: 791,
      May: 779,
      Jun: 780,
      Jul: 781,
      Aug: 790,
      Sep: 799,
      Oct: "798",
      Nov: "801",
      Dec: 805
    }
  },
  {
    "1959": {
      Jan: 805,
      Feb: 795,
      Mar: 797,
      Apr: 799,
      May: 804,
      Jun: 808,
      Jul: 819,
      Aug: 762,
      Sep: 747,
      Oct: "751",
      Nov: "783",
      Dec: 794
    }
  },
  {
    "1960": {
      Jan: 783,
      Feb: 787,
      Mar: 785,
      Apr: 788,
      May: 778,
      Jun: 775,
      Jul: 755,
      Aug: 772,
      Sep: 768,
      Oct: "765",
      Nov: "751",
      Dec: 739
    }
  },
  {
    "1961": {
      Jan: 736,
      Feb: 729,
      Mar: 726,
      Apr: 724,
      May: 725,
      Jun: 730,
      Jul: 728,
      Aug: 730,
      Sep: 732,
      Oct: "727",
      Nov: "727",
      Dec: 721
    }
  },
  {
    "1962": {
      Jan: 722,
      Feb: 723,
      Mar: 717,
      Apr: 716,
      May: 715,
      Jun: 708,
      Jul: 701,
      Aug: 707,
      Sep: 704,
      Oct: "701",
      Nov: "695",
      Dec: 691
    }
  },
  {
    "1963": {
      Jan: 691,
      Feb: 689,
      Mar: 690,
      Apr: 695,
      May: 697,
      Jun: 687,
      Jul: 689,
      Aug: 694,
      Sep: 699,
      Oct: "699",
      Nov: "698",
      Dec: 699
    }
  },
  {
    "1964": {
      Jan: 695,
      Feb: 696,
      Mar: 692,
      Apr: 695,
      May: 693,
      Jun: 696,
      Jul: 696,
      Aug: 696,
      Sep: 699,
      Oct: "702",
      Nov: "704",
      Dec: 702
    }
  },
  {
    "1965": {
      Jan: 697,
      Feb: 700,
      Mar: 698,
      Apr: 699,
      May: 698,
      Jun: 689,
      Jul: 693,
      Aug: 691,
      Sep: 686,
      Oct: "691",
      Nov: "694",
      Dec: 694
    }
  },
  {
    "1966": {
      Jan: 692,
      Feb: 691,
      Mar: 694,
      Apr: 657,
      May: 690,
      Jun: 691,
      Jul: 692,
      Aug: 696,
      Sep: 695,
      Oct: "695",
      Nov: "693",
      Dec: 692
    }
  },
  {
    "1967": {
      Jan: 695,
      Feb: 692,
      Mar: 689,
      Apr: 687,
      May: 685,
      Jun: 685,
      Jul: 685,
      Aug: 670,
      Sep: 667,
      Oct: "666",
      Nov: "667",
      Dec: 667
    }
  },
  {
    "1968": {
      Jan: 666,
      Feb: 666,
      Mar: 664,
      Apr: 675,
      May: 675,
      Jun: 673,
      Jul: 678,
      Aug: 679,
      Sep: 681,
      Oct: "636",
      Nov: "680",
      Dec: 681
    }
  },
  {
    "1969": {
      Jan: 678,
      Feb: 678,
      Mar: 676,
      Apr: 671,
      May: 676,
      Jun: 677,
      Jul: 684,
      Aug: 690,
      Sep: 692,
      Oct: "691",
      Nov: "690",
      Dec: 692
    }
  },
  {
    "1970": {
      Jan: 687,
      Feb: 683,
      Mar: 681,
      Apr: 676,
      May: 673,
      Jun: 675,
      Jul: 673,
      Aug: 677,
      Sep: 678,
      Oct: "678",
      Nov: "678",
      Dec: 676
    }
  },
  {
    "1971": {
      Jan: 671,
      Feb: 665,
      Mar: 663,
      Apr: 668,
      May: 670,
      Jun: 670,
      Jul: 652,
      Aug: 669,
      Sep: 676,
      Oct: "611",
      Nov: "615",
      Dec: 672
    }
  },
  {
    "1972": {
      Jan: 670,
      Feb: 666,
      Mar: 668,
      Apr: 660,
      May: 663,
      Jun: 672,
      Jul: 667,
      Aug: 676,
      Sep: 682,
      Oct: "682",
      Nov: "681",
      Dec: 677
    }
  },
  {
    "1973": {
      Jan: 675,
      Feb: 679,
      Mar: 680,
      Apr: 680,
      May: 681,
      Jun: 686,
      Jul: 692,
      Aug: 697,
      Sep: 702,
      Oct: "707",
      Nov: "714",
      Dec: 720
    }
  },
  {
    "1974": {
      Jan: 725,
      Feb: 732,
      Mar: 732,
      Apr: 743,
      May: 749,
      Jun: 755,
      Jul: 761,
      Aug: 767,
      Sep: 773,
      Oct: "782",
      Nov: "785",
      Dec: 750
    }
  },
  {
    "1975": {
      Jan: 789,
      Feb: 790,
      Mar: 793,
      Apr: 785,
      May: 799,
      Jun: 802,
      Jul: 802,
      Aug: 805,
      Sep: 807,
      Oct: "813",
      Nov: "813",
      Dec: 821
    }
  },
  {
    "1976": {
      Jan: 824,
      Feb: 822,
      Mar: 825,
      Apr: 825,
      May: 826,
      Jun: 829,
      Jul: 837,
      Aug: 810,
      Sep: 843,
      Oct: "844",
      Nov: "847",
      Dec: 854
    }
  },
  {
    "1977": {
      Jan: 857,
      Feb: 860,
      Mar: 872,
      Apr: 879,
      May: 882,
      Jun: 892,
      Jul: 866,
      Aug: 853,
      Sep: 887,
      Oct: "889",
      Nov: "894",
      Dec: 753
    }
  },
  {
    "1978": {
      Jan: 752,
      Feb: 756,
      Mar: 772,
      Apr: 928,
      May: 932,
      Jun: 940,
      Jul: 946,
      Aug: 948,
      Sep: 952,
      Oct: "959",
      Nov: "968",
      Dec: 974
    }
  },
  {
    "1979": {
      Jan: 979,
      Feb: 986,
      Mar: 993,
      Apr: 992,
      May: 997,
      Jun: 1004,
      Jul: 1011,
      Aug: 1019,
      Sep: 1021,
      Oct: "1028",
      Nov: "1031",
      Dec: 1039
    }
  },
  {
    "1980": {
      Jan: 1042,
      Feb: 1050,
      Mar: 1053,
      Apr: 1061,
      May: 1074,
      Jun: 1083,
      Jul: 1071,
      Aug: 1069,
      Sep: 1085,
      Oct: "1095",
      Nov: "1113",
      Dec: 1127
    }
  },
  {
    "1981": {
      Jan: 1139,
      Feb: 1148,
      Mar: 1160,
      Apr: 1026,
      May: 1039,
      Jun: 1190,
      Jul: 1218,
      Aug: 1232,
      Sep: 1244,
      Oct: "1247",
      Nov: "1257",
      Dec: 1256
    }
  },
  {
    "1982": {
      Jan: 1246,
      Feb: 1249,
      Mar: 1249,
      Apr: 1230,
      May: 1204,
      Jun: 1183,
      Jul: 1155,
      Aug: 1131,
      Sep: 1110,
      Oct: "1086",
      Nov: "1067",
      Dec: 1050
    }
  },
  {
    "1983": {
      Jan: 1031,
      Feb: 1006,
      Mar: 996,
      Apr: 987,
      May: 984,
      Jun: 983,
      Jul: 989,
      Aug: 989,
      Sep: 988,
      Oct: "1001",
      Nov: "1002",
      Dec: 1004
    }
  },
  {
    "1984": {
      Jan: 1007,
      Feb: 1008,
      Mar: 1010,
      Apr: 1010,
      May: 1017,
      Jun: 1023,
      Jul: 1024,
      Aug: 1027,
      Sep: 1022,
      Oct: "1012",
      Nov: "1006",
      Dec: 998
    }
  },
  {
    "1985": {
      Jan: 995,
      Feb: 993,
      Mar: 992,
      Apr: 994,
      May: 990,
      Jun: 984,
      Jul: 974,
      Aug: 967,
      Sep: 958,
      Oct: "953",
      Nov: "944",
      Dec: 938
    }
  },
  {
    "1986": {
      Jan: 936,
      Feb: 918,
      Mar: 890,
      Apr: 861,
      May: 832,
      Jun: 816,
      Jul: 808,
      Aug: 793,
      Sep: 779,
      Oct: "777",
      Nov: "772",
      Dec: 766
    }
  },
  {
    "1987": {
      Jan: 760,
      Feb: 759,
      Mar: 761,
      Apr: 764,
      May: 768,
      Jun: 767,
      Jul: 770,
      Aug: 774,
      Sep: 779,
      Oct: "784",
      Nov: "784",
      Dec: 783
    }
  },
  {
    "1988": {
      Jan: 784,
      Feb: 784,
      Mar: 779,
      Apr: 779,
      May: 776,
      Jun: 774,
      Jul: 770,
      Aug: 767,
      Sep: 758,
      Oct: "759",
      Nov: "754",
      Dec: 752
    }
  },
  {
    "1989": {
      Jan: 751,
      Feb: 747,
      Mar: 749,
      Apr: 750,
      May: 750,
      Jun: 741,
      Jul: 730,
      Aug: 754,
      Sep: 755,
      Oct: "755",
      Nov: "759",
      Dec: 759
    }
  },
  {
    "1990": {
      Jan: 763,
      Feb: 762,
      Mar: 763,
      Apr: 766,
      May: 770,
      Jun: 770,
      Jul: 768,
      Aug: 765,
      Sep: 765,
      Oct: "762",
      Nov: "760",
      Dec: 761
    }
  },
  {
    "1991": {
      Jan: 759,
      Feb: 760,
      Mar: 758,
      Apr: 752,
      May: 748,
      Jun: 745,
      Jul: 740,
      Aug: 735,
      Sep: 728,
      Oct: "721",
      Nov: "715",
      Dec: 711
    }
  },
  {
    "1992": {
      Jan: 707,
      Feb: 701,
      Mar: 701,
      Apr: 698,
      May: 695,
      Jun: 687,
      Jul: 685,
      Aug: 681,
      Sep: 675,
      Oct: "678",
      Nov: "678",
      Dec: 677
    }
  },
  {
    "1993": {
      Jan: 678,
      Feb: 669,
      Mar: 671,
      Apr: 669,
      May: 670,
      Jun: 663,
      Jul: 661,
      Aug: 656,
      Sep: 660,
      Oct: "660",
      Nov: "660",
      Dec: 673
    }
  },
  {
    "1994": {
      Jan: 670,
      Feb: 666,
      Mar: 663,
      Apr: 661,
      May: 658,
      Jun: 657,
      Jul: 656,
      Aug: 656,
      Sep: 658,
      Oct: "653",
      Nov: "654",
      Dec: 652
    }
  },
  {
    "1995": {
      Jan: 651,
      Feb: 646,
      Mar: 646,
      Apr: 644,
      May: 641,
      Jun: 640,
      Jul: 639,
      Aug: 638,
      Sep: 637,
      Oct: "637",
      Nov: "633",
      Dec: 634
    }
  },
  {
    "1996": {
      Jan: 633,
      Feb: 636,
      Mar: 637,
      Apr: 638,
      May: 638,
      Jun: 639,
      Jul: 638,
      Aug: 638,
      Sep: 635,
      Oct: "635",
      Nov: "639",
      Dec: 639
    }
  },
  {
    "1997": {
      Jan: 646,
      Feb: 648,
      Mar: 648,
      Apr: 652,
      May: 654,
      Jun: 654,
      Jul: 656,
      Aug: 654,
      Sep: 657,
      Oct: "657",
      Nov: "657",
      Dec: 658
    }
  },
  {
    "1998": {
      Jan: 660,
      Feb: 659,
      Mar: 658,
      Apr: 654,
      May: 650,
      Jun: 649,
      Jul: 644,
      Aug: 642,
      Sep: 637,
      Oct: "632",
      Nov: "628",
      Dec: 627
    }
  },
  {
    "1999": {
      Jan: 617,
      Feb: 610,
      Mar: 608,
      Apr: 601,
      May: 596,
      Jun: 592,
      Jul: 595,
      Aug: 594,
      Sep: 591,
      Oct: "593",
      Nov: "592",
      Dec: 593
    }
  },
  {
    "2000": {
      Jan: 592,
      Feb: 594,
      Mar: 592,
      Apr: 596,
      May: 598,
      Jun: 598,
      Jul: 601,
      Aug: 600,
      Sep: 605,
      Oct: "607",
      Nov: "604",
      Dec: 602
    }
  },
  {
    "2001": {
      Jan: 605,
      Feb: 605,
      Mar: 609,
      Apr: 608,
      May: 609,
      Jun: 610,
      Jul: 610,
      Aug: 608,
      Sep: 607,
      Oct: "602",
      Nov: "600",
      Dec: 598
    }
  },
  {
    "2002": {
      Jan: 599,
      Feb: 595,
      Mar: 588,
      Apr: 587,
      May: 583,
      Jun: 579,
      Jul: 577,
      Aug: 577,
      Sep: 576,
      Oct: "576",
      Nov: "577",
      Dec: 577
    }
  },
  {
    "2003": {
      Jan: 576,
      Feb: 575,
      Mar: 570,
      Apr: 566,
      May: 569,
      Jun: 572,
      Jul: 571,
      Aug: 570,
      Sep: 570,
      Oct: "573",
      Nov: "576",
      Dec: 576
    }
  },
  {
    "2004": {
      Jan: 577,
      Feb: 576,
      Mar: 584,
      Apr: 586,
      May: 591,
      Jun: 591,
      Jul: 593,
      Aug: 596,
      Sep: 597,
      Oct: "595",
      Nov: "599",
      Dec: 601
    }
  },
  {
    "2005": {
      Jan: 606,
      Feb: 610,
      Mar: 616,
      Apr: 620,
      May: 622,
      Jun: 625,
      Jul: 626,
      Aug: 631,
      Sep: 636,
      Oct: "640",
      Nov: "646",
      Dec: 650
    }
  },
  {
    "2006": {
      Jan: 656,
      Feb: 662,
      Mar: 669,
      Apr: 679,
      May: 681,
      Jun: 686,
      Jul: 690,
      Aug: 693,
      Sep: 694,
      Oct: "699",
      Nov: "701",
      Dec: 705
    }
  },
  {
    "2007": {
      Jan: 706,
      Feb: 711,
      Mar: 715,
      Apr: 719,
      May: 721,
      Jun: 725,
      Jul: 728,
      Aug: 727,
      Sep: 726,
      Oct: "727",
      Nov: "735",
      Dec: 740
    }
  },
  {
    "2008": {
      Jan: 746,
      Feb: 748,
      Mar: 755,
      Apr: 755,
      May: 761,
      Jun: 766,
      Jul: 770,
      Aug: 778,
      Sep: 782,
      Oct: "781",
      Nov: "776",
      Dec: 771
    }
  },
  {
    "2009": {
      Jan: 761,
      Feb: 749,
      Mar: 728,
      Apr: 710,
      May: 693,
      Jun: 686,
      Jul: 678,
      Aug: 670,
      Sep: 665,
      Oct: "661",
      Nov: "664",
      Dec: 663
    }
  },
  {
    "2010": {
      Jan: 667,
      Feb: 674,
      Mar: 682,
      Apr: 687,
      May: 697,
      Jun: 702,
      Jul: 708,
      Aug: 716,
      Sep: 723,
      Oct: "731",
      Nov: "736",
      Dec: 734
    }
  },
  {
    "2011": {
      Jan: 736,
      Feb: 739,
      Mar: 754,
      Apr: 768,
      May: 778,
      Jun: 790,
      Jul: 801,
      Aug: 804,
      Sep: 814,
      Oct: "820",
      Nov: "824",
      Dec: 831
    }
  },
  {
    "2012": {
      Jan: 840,
      Feb: 845,
      Mar: 849,
      Apr: 850,
      May: 855,
      Jun: 854,
      Jul: 851,
      Aug: 851,
      Sep: 846,
      Oct: "837",
      Nov: "843",
      Dec: 848
    }
  },
  {
    "2013": {
      Jan: 851,
      Feb: 858,
      Mar: 859,
      Apr: 857,
      May: 862,
      Jun: 865,
      Jul: 862,
      Aug: 864,
      Sep: 868,
      Oct: "870",
      Nov: "869",
      Dec: 866
    }
  },
  {
    "2014": {
      Jan: 871,
      Feb: 875,
      Mar: 879,
      Apr: 886,
      May: 887,
      Jun: 892,
      Jul: 897,
      Aug: 898,
      Sep: 903,
      Oct: "901",
      Nov: "900",
      Dec: 896
    }
  },
  {
    "2015": {
      Jan: 888,
      Feb: 875,
      Mar: 859,
      Apr: 843,
      May: 820,
      Jun: 816,
      Jul: 805,
      Aug: 794,
      Sep: 779,
      Oct: "771",
      Nov: "756",
      Dec: 746
    }
  },
  {
    "2016": {
      Jan: 731,
      Feb: 711,
      Mar: 691,
      Apr: 678,
      May: 666,
      Jun: 656,
      Jul: 652,
      Aug: 647,
      Sep: 647,
      Oct: "644",
      Nov: "647",
      Dec: 648
    }
  },
  {
    "2017": {
      Jan: 649,
      Feb: 655,
      Mar: 660,
      Apr: 669,
      May: 673,
      Jun: 677,
      Jul: 679,
      Aug: 684,
      Sep: 687,
      Oct: "687",
      Nov: "693",
      Dec: 692
    }
  },
  {
    "2018": {
      Jan: 699,
      Feb: 706,
      Mar: 714,
      Apr: 722,
      May: 724,
      Jun: 729,
      Jul: 729,
      Aug: 737,
      Sep: 739,
      Oct: "742",
      Nov: "737",
      Dec: 741
    }
  },
  {
    "2019": {
      Jan: 746,
      Feb: 741,
      Mar: 741,
      Apr: 741,
      May: 743,
      Jun: 741,
      Jul: 736,
      Aug: 731,
      Sep: 731,
      Oct: "735",
      Nov: "724",
      Dec: 715
    }
  },
  {
    "2020": {
      Jan: 712,
      Feb: 714,
      Mar: 706,
      Apr: 653,
      May: 633,
      Jun: 626,
      Jul: 620,
      Aug: 619,
      Sep: 621,
      Oct: "623(P)",
      Nov: "624(P)",
      Dec: null
    }
  }
];
class Mining extends React.Component {
  render() {
    const { lastWidth } = this.props;
    var allYears = [];
    mining.map((year, i) =>
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
                stroke="rgb(140,30,230)"
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

export default Mining;
