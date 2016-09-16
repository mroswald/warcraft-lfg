"use strict";

module.exports.getData = function() {
	var data = {
		"140812": [77, 754, 788, 873, 1040, 1125, 1230],
		"140813": [72, 749, 784, 868, 1281, 1036, 1099, 1121],
		"140827": [75, 752, 786, 870, 1038, 1101, 1123],
		"140810": [79, 751, 790, 1042, 1095, 1127, 1232],
		"141515": [82, 787, 872, 1039, 1229, 1124, 753],
		"138227": [74, 750, 785, 869, 1037, 1100, 1122],
		"139269": [81, 755, 789, 875, 1041, 1126, 1231],
		"142056": [72, 749, 784, 868, 1281, 1036, 1099, 1121],
		"137547": [83, 756, 791, 874, 1034, 1128, 1233],
		"137473": [82, 787, 872, 1039, 1229, 1124, 753],
		"137490": [757, 871, 1035, 1129, 84, 1234, 792],
		"137420": [72, 749, 784, 868, 1281, 1036, 1099, 1121],
		"133768": [81, 755, 789, 875, 1041, 1126, 1231],
		"137303": [79, 751, 790, 1042, 1095, 1127, 1232],
		"137379": [74, 750, 785, 869, 1037, 1100, 1122],
		"141259": [81, 755, 789, 875, 1041, 1126, 1231],
		"141266": [77, 754, 788, 873, 1040, 1125, 1230],
		"141272": [83, 756, 791, 874, 1034, 1128, 1233],
		"141292": [82, 787, 872, 1039, 1229, 1124, 753],
		"136691": [75, 752, 786, 870, 1038, 1101, 1123],
		"131731": [82, 787, 872, 1039, 1229, 1124, 753],
		"140424": [82, 787, 872, 1039, 1229, 1124, 753],
		"140412": [79, 751, 790, 1042, 1095, 1127, 1232],
		"135565": [82, 787, 872, 1039, 1229, 1124, 753],
		"140423": [75, 752, 786, 870, 1038, 1101, 1123],
		"133052": [75, 752, 786, 870, 1038, 1101, 1123],
		"132346": [82, 787, 872, 1039, 1229, 1124, 753],
		"133137": [82, 787, 872, 1039, 1229, 1124, 753],
		"132845": [74, 750, 785, 869, 1037, 1100, 1122],
		"132825": [72, 749, 784, 868, 1281, 1036, 1099, 1121],
		"132810": [75, 752, 786, 870, 1038, 1101, 1123],
		"132799": [757, 871, 1035, 1129, 84, 1234, 792],
		"132787": [77, 754, 788, 873, 1040, 1125, 1230],
		"132776": [82, 787, 872, 1039, 1229, 1124, 753],
		"132335": [72, 749, 784, 868, 1281, 1036, 1099, 1121],
		"132316": [79, 751, 790, 1042, 1095, 1127, 1232],
		"132305": [74, 750, 785, 869, 1037, 1100, 1122],
		"132282": [81, 755, 789, 875, 1041, 1126, 1231],
		"132984": [82, 787, 872, 1039, 1229, 1124, 753],
		"132995": [79, 751, 790, 1042, 1095, 1127, 1232],
		"133126": [79, 751, 790, 1042, 1095, 1127, 1232],
		"133115": [75, 752, 786, 870, 1038, 1101, 1123],
		"133104": [81, 755, 789, 875, 1041, 1126, 1231],
		"133093": [77, 754, 788, 873, 1040, 1125, 1230],
		"133081": [83, 756, 791, 874, 1034, 1128, 1233],
		"133070": [72, 749, 784, 868, 1281, 1036, 1099, 1121],
		"133041": [83, 756, 791, 874, 1034, 1128, 1233],
		"133030": [77, 754, 788, 873, 1040, 1125, 1230],
		"133019": [72, 749, 784, 868, 1281, 1036, 1099, 1121],
		"133007": [74, 750, 785, 869, 1037, 1100, 1122],
		"132281": [75, 752, 786, 870, 1038, 1101, 1123],
		"140819": [318, 265, 328, 276, 777, 919, 952, 1064, 100, 1074, 1147, 1166],
		"140818": [313, 157, 324, 273, 772, 916, 949, 1060, 1071, 1144, 1162, 96],
		"140820": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"141523": [319, 266, 330, 277, 778, 920, 953, 1065, 101, 1075, 1149, 1168],
		"139260": [98, 314, 158, 325, 274, 773, 917, 1061, 1072, 955, 1145, 1163],
		"139257": [102, 320, 331, 278, 776, 921, 954, 1067, 1076, 1119, 1150, 1167],
		"139254": [315, 264, 327, 1013, 275, 774, 918, 951, 1063, 99, 1073, 1164, 1146],
		"142057": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"133687": [313, 157, 324, 273, 772, 916, 949, 1060, 1071, 1144, 1162, 96],
		"136718": [319, 266, 330, 277, 778, 920, 953, 1065, 101, 1075, 1149, 1168],
		"137302": [105, 316, 262, 326, 279, 335, 771, 922, 950, 1062, 1148, 1160, 1077],
		"137350": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"137412": [318, 265, 328, 276, 777, 919, 952, 1064, 100, 1074, 1147, 1166],
		"137465": [315, 264, 327, 1013, 275, 774, 918, 951, 1063, 99, 1073, 1164, 1146],
		"137471": [106, 317, 267, 329, 280, 775, 923, 956, 1066, 1078, 1151, 1165],
		"137544": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"137363": [102, 320, 331, 278, 776, 921, 954, 1067, 1076, 1119, 1150, 1167],
		"141287": [315, 264, 327, 1013, 275, 774, 918, 951, 1063, 99, 1073, 1164, 1146],
		"141283": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"141280": [318, 265, 328, 276, 777, 919, 952, 1064, 100, 1074, 1147, 1166],
		"141264": [105, 316, 262, 326, 279, 335, 771, 922, 950, 1062, 1148, 1160, 1077],
		"136683": [98, 314, 158, 325, 274, 773, 917, 1061, 1072, 955, 1145, 1163],
		"135568": [313, 157, 324, 273, 772, 916, 949, 1060, 1071, 1144, 1162, 96],
		"140425": [318, 265, 328, 276, 777, 919, 952, 1064, 100, 1074, 1147, 1166],
		"140413": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"140426": [319, 266, 330, 277, 778, 920, 953, 1065, 101, 1075, 1149, 1168],
		"132336": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"132788": [318, 265, 328, 276, 777, 919, 952, 1064, 100, 1074, 1147, 1166],
		"132347": [315, 264, 327, 1013, 275, 774, 918, 951, 1063, 99, 1073, 1164, 1146],
		"133042": [105, 316, 262, 326, 279, 335, 771, 922, 950, 1062, 1148, 1160, 1077],
		"132317": [102, 320, 331, 278, 776, 921, 954, 1067, 1076, 1119, 1150, 1167],
		"132306": [313, 157, 324, 273, 772, 916, 949, 1060, 1071, 1144, 1162, 96],
		"132777": [315, 264, 327, 1013, 275, 774, 918, 951, 1063, 99, 1073, 1164, 1146],
		"132284": [319, 266, 330, 277, 778, 920, 953, 1065, 101, 1075, 1149, 1168],
		"132800": [106, 317, 267, 329, 280, 775, 923, 956, 1066, 1078, 1151, 1165],
		"132811": [98, 314, 158, 325, 274, 773, 917, 1061, 1072, 955, 1145, 1163],
		"132826": [313, 157, 324, 273, 772, 916, 949, 1060, 1071, 1144, 1162, 96],
		"133053": [98, 314, 158, 325, 274, 773, 917, 1061, 1072, 955, 1145, 1163],
		"133071": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"133031": [319, 266, 330, 277, 778, 920, 953, 1065, 101, 1075, 1149, 1168],
		"133094": [318, 265, 328, 276, 777, 919, 952, 1064, 100, 1074, 1147, 1166],
		"133105": [319, 266, 330, 277, 778, 920, 953, 1065, 101, 1075, 1149, 1168],
		"133116": [315, 264, 327, 1013, 275, 774, 918, 951, 1063, 99, 1073, 1164, 1146],
		"133127": [102, 320, 331, 278, 776, 921, 954, 1067, 1076, 1119, 1150, 1167],
		"133138": [318, 265, 328, 276, 777, 919, 952, 1064, 100, 1074, 1147, 1166],
		"133020": [95, 312, 156, 323, 272, 767, 915, 948, 1070, 1143, 1161, 1059],
		"133008": [313, 157, 324, 273, 772, 916, 949, 1060, 1071, 1144, 1162, 96],
		"132996": [102, 320, 331, 278, 776, 921, 954, 1067, 1076, 1119, 1150, 1167],
		"132985": [315, 264, 327, 1013, 275, 774, 918, 951, 1063, 99, 1073, 1164, 1146],
		"133082": [105, 316, 262, 326, 279, 335, 771, 922, 950, 1062, 1148, 1160, 1077],
		"132846": [98, 314, 158, 325, 274, 773, 917, 1061, 1072, 955, 1145, 1163],
		"132283": [98, 314, 158, 325, 274, 773, 917, 1061, 1072, 955, 1145, 1163],
		"140826": [804, 852, 1000, 1099, 1171],
		"140824": [805, 853, 1001, 1100, 1172],
		"140825": [807, 855, 1003, 1229, 1174],
		"141520": [806, 854, 1002, 1101, 1173],
		"139253": [808, 856, 1004, 1175, 1230],
		"139267": [810, 858, 1008, 1177, 1232],
		"142058": [804, 852, 1000, 1099, 1171],
		"137476": [807, 855, 1003, 1229, 1174],
		"137491": [808, 856, 1004, 1175, 1230],
		"137351": [806, 854, 1002, 1101, 1173],
		"137407": [805, 853, 1001, 1100, 1172],
		"137542": [804, 852, 1000, 1099, 1171],
		"136721": [810, 858, 1008, 1177, 1232],
		"133764": [809, 857, 1006, 1176, 1231],
		"141289": [806, 854, 1002, 1101, 1173],
		"141281": [809, 857, 1006, 1176, 1231],
		"141277": [805, 853, 1001, 1100, 1172],
		"141255": [812, 860, 1007, 1179, 1234],
		"136687": [806, 854, 1002, 1101, 1173],
		"140428": [811, 859, 1005, 1178, 1233],
		"140427": [810, 858, 1008, 1177, 1232],
		"135569": [804, 852, 1000, 1099, 1171],
		"140414": [808, 856, 1004, 1175, 1230],
		"132778": [807, 855, 1003, 1229, 1174],
		"133054": [806, 854, 1002, 1101, 1173],
		"133139": [809, 857, 1006, 1176, 1231],
		"133128": [810, 858, 1008, 1177, 1232],
		"132827": [806, 854, 1002, 1101, 1173],
		"132812": [806, 854, 1002, 1101, 1173],
		"132801": [812, 860, 1007, 1179, 1234],
		"132789": [808, 856, 1004, 1175, 1230],
		"132348": [807, 855, 1003, 1229, 1174],
		"132337": [804, 852, 1000, 1099, 1171],
		"132318": [810, 858, 1008, 1177, 1232],
		"132307": [805, 853, 1001, 1100, 1172],
		"132286": [809, 857, 1006, 1176, 1231],
		"132847": [807, 855, 1003, 1229, 1174],
		"132986": [807, 855, 1003, 1229, 1174],
		"132997": [810, 858, 1008, 1177, 1232],
		"133117": [808, 856, 1004, 1175, 1230],
		"133106": [809, 857, 1006, 1176, 1231],
		"133095": [808, 856, 1004, 1175, 1230],
		"133083": [811, 859, 1005, 1178, 1233],
		"133072": [804, 852, 1000, 1099, 1171],
		"133043": [811, 859, 1005, 1178, 1233],
		"133032": [810, 858, 1008, 1177, 1232],
		"133021": [804, 852, 1000, 1099, 1171],
		"133009": [805, 853, 1001, 1100, 1172],
		"132285": [806, 854, 1002, 1101, 1173],
		"140836": [42, 157, 750, 805, 906, 949, 1172, 96, 989],
		"140835": [43, 98, 158, 752, 806, 908, 990, 955, 1173],
		"140834": [52, 102, 751, 810, 907, 954, 996, 1119, 1177],
		"140837": [51, 266, 755, 809, 913, 953, 995, 101, 1176],
		"141522": [50, 265, 754, 808, 912, 952, 992, 100, 1175],
		"139256": [41, 95, 156, 749, 804, 948, 988, 1171, 905],
		"139266": [53, 264, 807, 910, 951, 991, 99, 753, 1174],
		"142059": [41, 95, 156, 749, 804, 948, 988, 1171, 905],
		"133686": [50, 265, 754, 808, 912, 952, 992, 100, 1175],
		"136769": [47, 106, 267, 757, 812, 909, 956, 994, 1179],
		"137316": [53, 264, 807, 910, 951, 991, 99, 753, 1174],
		"137375": [44, 105, 262, 756, 811, 911, 950, 993, 1178],
		"137470": [41, 95, 156, 749, 804, 948, 988, 1171, 905],
		"137492": [51, 266, 755, 809, 913, 953, 995, 101, 1176],
		"137546": [43, 98, 158, 752, 806, 908, 990, 955, 1173],
		"137358": [52, 102, 751, 810, 907, 954, 996, 1119, 1177],
		"141293": [51, 266, 755, 809, 913, 953, 995, 101, 1176],
		"141279": [41, 95, 156, 749, 804, 948, 988, 1171, 905],
		"141265": [43, 98, 158, 752, 806, 908, 990, 955, 1173],
		"141261": [52, 102, 751, 810, 907, 954, 996, 1119, 1177],
		"134077": [44, 105, 262, 756, 811, 911, 950, 993, 1178],
		"136686": [43, 98, 158, 752, 806, 908, 990, 955, 1173],
		"140415": [42, 157, 750, 805, 906, 949, 1172, 96, 989],
		"140430": [51, 266, 755, 809, 913, 953, 995, 101, 1176],
		"140429": [50, 265, 754, 808, 912, 952, 992, 100, 1175],
		"135571": [44, 105, 262, 756, 811, 911, 950, 993, 1178],
		"132338": [41, 95, 156, 749, 804, 948, 988, 1171, 905],
		"132790": [50, 265, 754, 808, 912, 952, 992, 100, 1175],
		"132349": [53, 264, 807, 910, 951, 991, 99, 753, 1174],
		"132319": [52, 102, 751, 810, 907, 954, 996, 1119, 1177],
		"132308": [42, 157, 750, 805, 906, 949, 1172, 96, 989],
		"132288": [51, 266, 755, 809, 913, 953, 995, 101, 1176],
		"132779": [53, 264, 807, 910, 951, 991, 99, 753, 1174],
		"132287": [43, 98, 158, 752, 806, 908, 990, 955, 1173],
		"132802": [47, 106, 267, 757, 812, 909, 956, 994, 1179],
		"132813": [43, 98, 158, 752, 806, 908, 990, 955, 1173],
		"132828": [53, 264, 807, 910, 951, 991, 99, 753, 1174],
		"133044": [44, 105, 262, 756, 811, 911, 950, 993, 1178],
		"133055": [43, 98, 158, 752, 806, 908, 990, 955, 1173],
		"133073": [41, 95, 156, 749, 804, 948, 988, 1171, 905],
		"133022": [41, 95, 156, 749, 804, 948, 988, 1171, 905],
		"133096": [50, 265, 754, 808, 912, 952, 992, 100, 1175],
		"133107": [51, 266, 755, 809, 913, 953, 995, 101, 1176],
		"133118": [51, 266, 755, 809, 913, 953, 995, 101, 1176],
		"133129": [52, 102, 751, 810, 907, 954, 996, 1119, 1177],
		"133140": [43, 98, 158, 752, 806, 908, 990, 955, 1173],
		"133010": [42, 157, 750, 805, 906, 949, 1172, 96, 989],
		"132998": [52, 102, 751, 810, 907, 954, 996, 1119, 1177],
		"132987": [53, 264, 807, 910, 951, 991, 99, 753, 1174],
		"133084": [44, 105, 262, 756, 811, 911, 950, 993, 1178],
		"132848": [50, 265, 754, 808, 912, 952, 992, 100, 1175],
		"133033": [44, 105, 262, 756, 811, 911, 950, 993, 1178],
		"140832": [74, 110, 131, 299, 785, 940, 1104, 1162],
		"140831": [81, 114, 135, 304, 789, 944, 1108, 1168],
		"140833": [82, 117, 133, 301, 787, 942, 1106, 1164],
		"141517": [79, 111, 136, 306, 790, 946, 1109, 1167],
		"139250": [77, 113, 134, 303, 788, 943, 1107, 1166],
		"139259": [75, 109, 132, 300, 786, 941, 1105, 1163],
		"142060": [72, 108, 130, 298, 784, 938, 1103, 1161],
		"133683": [72, 108, 130, 298, 784, 938, 1103, 1161],
		"137272": [75, 109, 132, 300, 786, 941, 1105, 1163],
		"137308": [74, 110, 131, 299, 785, 940, 1104, 1162],
		"137370": [82, 117, 133, 301, 787, 942, 1106, 1164],
		"137380": [81, 114, 135, 304, 789, 944, 1108, 1168],
		"137403": [137, 83, 115, 302, 791, 939, 1110, 1160],
		"137466": [79, 111, 136, 306, 790, 946, 1109, 1167],
		"137545": [140, 305, 945, 1090, 1111, 1165, 84, 792],
		"137340": [77, 113, 134, 303, 788, 943, 1107, 1166],
		"141284": [77, 113, 134, 303, 788, 943, 1107, 1166],
		"141274": [72, 108, 130, 298, 784, 938, 1103, 1161],
		"141267": [79, 111, 136, 306, 790, 946, 1109, 1167],
		"141257": [74, 110, 131, 299, 785, 940, 1104, 1162],
		"134076": [77, 113, 134, 303, 788, 943, 1107, 1166],
		"136692": [75, 109, 132, 300, 786, 941, 1105, 1163],
		"140432": [79, 111, 136, 306, 790, 946, 1109, 1167],
		"140431": [82, 117, 133, 301, 787, 942, 1106, 1164],
		"140416": [74, 110, 131, 299, 785, 940, 1104, 1162],
		"135570": [77, 113, 134, 303, 788, 943, 1107, 1166],
		"132339": [72, 108, 130, 298, 784, 938, 1103, 1161],
		"132791": [77, 113, 134, 303, 788, 943, 1107, 1166],
		"132350": [82, 117, 133, 301, 787, 942, 1106, 1164],
		"133034": [140, 305, 945, 1090, 1111, 1165, 84, 792],
		"132320": [79, 111, 136, 306, 790, 946, 1109, 1167],
		"132309": [74, 110, 131, 299, 785, 940, 1104, 1162],
		"132780": [82, 117, 133, 301, 787, 942, 1106, 1164],
		"132290": [81, 114, 135, 304, 789, 944, 1108, 1168],
		"132803": [140, 305, 945, 1090, 1111, 1165, 84, 792],
		"132814": [75, 109, 132, 300, 786, 941, 1105, 1163],
		"132829": [77, 113, 134, 303, 788, 943, 1107, 1166],
		"133045": [75, 109, 132, 300, 786, 941, 1105, 1163],
		"133056": [75, 109, 132, 300, 786, 941, 1105, 1163],
		"133074": [72, 108, 130, 298, 784, 938, 1103, 1161],
		"133023": [72, 108, 130, 298, 784, 938, 1103, 1161],
		"133097": [77, 113, 134, 303, 788, 943, 1107, 1166],
		"133108": [81, 114, 135, 304, 789, 944, 1108, 1168],
		"133119": [79, 111, 136, 306, 790, 946, 1109, 1167],
		"133130": [79, 111, 136, 306, 790, 946, 1109, 1167],
		"133141": [137, 83, 115, 302, 791, 939, 1110, 1160],
		"133011": [74, 110, 131, 299, 785, 940, 1104, 1162],
		"132999": [79, 111, 136, 306, 790, 946, 1109, 1167],
		"132988": [82, 117, 133, 301, 787, 942, 1106, 1164],
		"133085": [137, 83, 115, 302, 791, 939, 1110, 1160],
		"132849": [81, 114, 135, 304, 789, 944, 1108, 1168],
		"132289": [75, 109, 132, 300, 786, 941, 1105, 1163],
		"140845": [50, 846, 893, 977, 1125],
		"140843": [53, 844, 892, 976, 1124],
		"140844": [41, 849, 888, 970, 1121],
		"141519": [51, 847, 894, 975, 1126],
		"139252": [43, 843, 891, 972, 1123],
		"139258": [52, 848, 895, 1186, 1127],
		"139265": [42, 842, 890, 971, 1122],
		"142055": [41, 849, 888, 970, 1121],
		"136717": [53, 844, 892, 976, 1124],
		"137474": [41, 849, 888, 970, 1121],
		"136771": [43, 843, 891, 972, 1123],
		"137346": [51, 847, 894, 975, 1126],
		"137366": [42, 842, 890, 971, 1122],
		"137402": [47, 841, 974, 1129, 896],
		"137495": [50, 846, 893, 977, 1125],
		"137548": [44, 838, 889, 969, 1128],
		"133685": [52, 848, 895, 1186, 1127],
		"141286": [47, 841, 974, 1129, 896],
		"141276": [43, 843, 891, 972, 1123],
		"141271": [50, 846, 893, 977, 1125],
		"141260": [53, 844, 892, 976, 1124],
		"136685": [43, 843, 891, 972, 1123],
		"135572": [51, 847, 894, 975, 1126],
		"140434": [47, 841, 974, 1129, 896],
		"140411": [43, 843, 891, 972, 1123],
		"140433": [52, 848, 895, 1186, 1127],
		"133092": [50, 846, 893, 977, 1125],
		"132844": [52, 848, 895, 1186, 1127],
		"132824": [51, 847, 894, 975, 1126],
		"132775": [53, 844, 892, 976, 1124],
		"132786": [50, 846, 893, 977, 1125],
		"132345": [53, 844, 892, 976, 1124],
		"132334": [41, 849, 888, 970, 1121],
		"132280": [51, 847, 894, 975, 1126],
		"132279": [43, 843, 891, 972, 1123],
		"133136": [47, 841, 974, 1129, 896],
		"132983": [53, 844, 892, 976, 1124],
		"133051": [43, 843, 891, 972, 1123],
		"133125": [52, 848, 895, 1186, 1127],
		"133040": [44, 838, 889, 969, 1128],
		"133029": [41, 849, 888, 970, 1121],
		"133018": [41, 849, 888, 970, 1121],
		"133006": [42, 842, 890, 971, 1122],
		"133103": [51, 847, 894, 975, 1126],
		"133114": [44, 838, 889, 969, 1128],
		"132994": [52, 848, 895, 1186, 1127],
		"140816": [324, 273, 820, 869, 906, 1060, 1071, 1100, 1122, 1144, 1279, 96, 989],
		"140815": [330, 277, 825, 875, 913, 995, 1065, 101, 1075, 1126, 1149, 1231, 1283],
		"140817": [98, 325, 274, 870, 908, 990, 1061, 1072, 1101, 1123, 1145, 1280, 821],
		"141521": [327, 1013, 275, 822, 872, 910, 991, 1063, 99, 1073, 1229, 1124, 1281, 1036, 1146],
		"139255": [324, 273, 820, 869, 906, 1060, 1071, 1100, 1122, 1144, 1279, 96, 989],
		"139261": [328, 276, 824, 873, 912, 992, 1064, 100, 1074, 1125, 1147, 1230, 1282],
		"142061": [95, 323, 272, 800, 868, 988, 1070, 1099, 1121, 1143, 1278, 905, 1059],
		"133763": [328, 276, 824, 873, 912, 992, 1064, 100, 1074, 1125, 1147, 1230, 1282],
		"136778": [105, 326, 279, 935, 801, 874, 911, 993, 1062, 1128, 1148, 1233, 1285, 1077],
		"137326": [105, 326, 279, 935, 801, 874, 911, 993, 1062, 1128, 1148, 1233, 1285, 1077],
		"137371": [106, 329, 280, 829, 871, 909, 994, 1066, 1078, 1129, 1151, 1234, 1286],
		"137408": [95, 323, 272, 800, 868, 988, 1070, 1099, 1121, 1143, 1278, 905, 1059],
		"137469": [102, 331, 278, 1094, 907, 996, 1067, 1076, 1095, 1127, 1150, 1232, 1284],
		"137472": [98, 325, 274, 870, 908, 990, 1061, 1072, 1101, 1123, 1145, 1280, 821],
		"137543": [330, 277, 825, 875, 913, 995, 1065, 101, 1075, 1126, 1149, 1231, 1283],
		"137359": [324, 273, 820, 869, 906, 1060, 1071, 1100, 1122, 1144, 1279, 96, 989],
		"141288": [324, 273, 820, 869, 906, 1060, 1071, 1100, 1122, 1144, 1279, 96, 989],
		"141268": [95, 323, 272, 800, 868, 988, 1070, 1099, 1121, 1143, 1278, 905, 1059],
		"141263": [328, 276, 824, 873, 912, 992, 1064, 100, 1074, 1125, 1147, 1230, 1282],
		"141262": [330, 277, 825, 875, 913, 995, 1065, 101, 1075, 1126, 1149, 1231, 1283],
		"134081": [102, 331, 278, 1094, 907, 996, 1067, 1076, 1095, 1127, 1150, 1232, 1284],
		"136684": [98, 325, 274, 870, 908, 990, 1061, 1072, 1101, 1123, 1145, 1280, 821],
		"140436": [105, 326, 279, 935, 801, 874, 911, 993, 1062, 1128, 1148, 1233, 1285, 1077],
		"140435": [330, 277, 825, 875, 913, 995, 1065, 101, 1075, 1126, 1149, 1231, 1283],
		"140417": [98, 325, 274, 870, 908, 990, 1061, 1072, 1101, 1123, 1145, 1280, 821],
		"135573": [102, 331, 278, 1094, 907, 996, 1067, 1076, 1095, 1127, 1150, 1232, 1284],
		"132340": [95, 323, 272, 800, 868, 988, 1070, 1099, 1121, 1143, 1278, 905, 1059],
		"132792": [328, 276, 824, 873, 912, 992, 1064, 100, 1074, 1125, 1147, 1230, 1282],
		"132351": [327, 1013, 275, 822, 872, 910, 991, 1063, 99, 1073, 1229, 1124, 1281, 1036, 1146],
		"133035": [324, 273, 820, 869, 906, 1060, 1071, 1100, 1122, 1144, 1279, 96, 989],
		"132321": [102, 331, 278, 1094, 907, 996, 1067, 1076, 1095, 1127, 1150, 1232, 1284],
		"132310": [324, 273, 820, 869, 906, 1060, 1071, 1100, 1122, 1144, 1279, 96, 989],
		"132781": [327, 1013, 275, 822, 872, 910, 991, 1063, 99, 1073, 1229, 1124, 1281, 1036, 1146],
		"132295": [330, 277, 825, 875, 913, 995, 1065, 101, 1075, 1126, 1149, 1231, 1283],
		"132804": [106, 329, 280, 829, 871, 909, 994, 1066, 1078, 1129, 1151, 1234, 1286],
		"132815": [98, 325, 274, 870, 908, 990, 1061, 1072, 1101, 1123, 1145, 1280, 821],
		"132830": [102, 331, 278, 1094, 907, 996, 1067, 1076, 1095, 1127, 1150, 1232, 1284],
		"133046": [105, 326, 279, 935, 801, 874, 911, 993, 1062, 1128, 1148, 1233, 1285, 1077],
		"133057": [98, 325, 274, 870, 908, 990, 1061, 1072, 1101, 1123, 1145, 1280, 821],
		"133075": [95, 323, 272, 800, 868, 988, 1070, 1099, 1121, 1143, 1278, 905, 1059],
		"133024": [95, 323, 272, 800, 868, 988, 1070, 1099, 1121, 1143, 1278, 905, 1059],
		"133098": [328, 276, 824, 873, 912, 992, 1064, 100, 1074, 1125, 1147, 1230, 1282],
		"133109": [330, 277, 825, 875, 913, 995, 1065, 101, 1075, 1126, 1149, 1231, 1283],
		"133120": [106, 329, 280, 829, 871, 909, 994, 1066, 1078, 1129, 1151, 1234, 1286],
		"133131": [102, 331, 278, 1094, 907, 996, 1067, 1076, 1095, 1127, 1150, 1232, 1284],
		"133142": [95, 323, 272, 800, 868, 988, 1070, 1099, 1121, 1143, 1278, 905, 1059],
		"133012": [324, 273, 820, 869, 906, 1060, 1071, 1100, 1122, 1144, 1279, 96, 989],
		"133000": [102, 331, 278, 1094, 907, 996, 1067, 1076, 1095, 1127, 1150, 1232, 1284],
		"132989": [327, 1013, 275, 822, 872, 910, 991, 1063, 99, 1073, 1229, 1124, 1281, 1036, 1146],
		"133086": [105, 326, 279, 935, 801, 874, 911, 993, 1062, 1128, 1148, 1233, 1285, 1077],
		"132850": [105, 326, 279, 935, 801, 874, 911, 993, 1062, 1128, 1148, 1233, 1285, 1077],
		"132294": [98, 325, 274, 870, 908, 990, 1061, 1072, 1101, 1123, 1145, 1280, 821],
		"140839": [136, 320, 848, 946, 954, 1186, 1042, 1109, 1167, 1284],
		"140838": [132, 314, 843, 941, 972, 1038, 1105, 955, 1163, 1280],
		"141516": [131, 313, 842, 940, 971, 949, 1037, 1104, 1162, 1279],
		"138228": [130, 312, 849, 938, 970, 948, 1281, 1036, 1103, 1161, 1278],
		"139263": [134, 318, 846, 943, 977, 952, 1040, 1107, 1166, 1282],
		"139249": [135, 319, 847, 944, 975, 953, 1041, 1108, 1168, 1283],
		"142062": [130, 312, 849, 938, 970, 948, 1281, 1036, 1103, 1161, 1278],
		"137381": [135, 319, 847, 944, 975, 953, 1041, 1108, 1168, 1283],
		"137339": [140, 317, 841, 945, 974, 956, 1035, 1111, 1165, 1286],
		"137327": [134, 318, 846, 943, 977, 952, 1040, 1107, 1166, 1282],
		"137411": [132, 314, 843, 941, 972, 1038, 1105, 955, 1163, 1280],
		"137478": [133, 315, 844, 942, 976, 951, 1039, 1106, 1164, 1281, 1036],
		"137307": [130, 312, 849, 938, 970, 948, 1281, 1036, 1103, 1161, 1278],
		"136973": [137, 316, 838, 939, 969, 950, 1034, 1110, 1160, 1285],
		"136720": [131, 313, 842, 940, 971, 949, 1037, 1104, 1162, 1279],
		"141269": [133, 315, 844, 942, 976, 951, 1039, 1106, 1164, 1281, 1036],
		"141290": [135, 319, 847, 944, 975, 953, 1041, 1108, 1168, 1283],
		"141256": [136, 320, 848, 946, 954, 1186, 1042, 1109, 1167, 1284],
		"141275": [140, 317, 841, 945, 974, 956, 1035, 1111, 1165, 1286],
		"136693": [132, 314, 843, 941, 972, 1038, 1105, 955, 1163, 1280],
		"134079": [140, 317, 841, 945, 974, 956, 1035, 1111, 1165, 1286],
		"140418": [131, 313, 842, 940, 971, 949, 1037, 1104, 1162, 1279],
		"140437": [134, 318, 846, 943, 977, 952, 1040, 1107, 1166, 1282],
		"140438": [140, 317, 841, 945, 974, 956, 1035, 1111, 1165, 1286],
		"135574": [140, 317, 841, 945, 974, 956, 1035, 1111, 1165, 1286],
		"133076": [130, 312, 849, 938, 970, 948, 1281, 1036, 1103, 1161, 1278],
		"132782": [133, 315, 844, 942, 976, 951, 1039, 1106, 1164, 1281, 1036],
		"133143": [131, 313, 842, 940, 971, 949, 1037, 1104, 1162, 1279],
		"132851": [140, 317, 841, 945, 974, 956, 1035, 1111, 1165, 1286],
		"132831": [137, 316, 838, 939, 969, 950, 1034, 1110, 1160, 1285],
		"132816": [132, 314, 843, 941, 972, 1038, 1105, 955, 1163, 1280],
		"132805": [140, 317, 841, 945, 974, 956, 1035, 1111, 1165, 1286],
		"132793": [134, 318, 846, 943, 977, 952, 1040, 1107, 1166, 1282],
		"132352": [133, 315, 844, 942, 976, 951, 1039, 1106, 1164, 1281, 1036],
		"132341": [130, 312, 849, 938, 970, 948, 1281, 1036, 1103, 1161, 1278],
		"132322": [136, 320, 848, 946, 954, 1186, 1042, 1109, 1167, 1284],
		"132311": [131, 313, 842, 940, 971, 949, 1037, 1104, 1162, 1279],
		"132297": [135, 319, 847, 944, 975, 953, 1041, 1108, 1168, 1283],
		"132990": [133, 315, 844, 942, 976, 951, 1039, 1106, 1164, 1281, 1036],
		"133001": [136, 320, 848, 946, 954, 1186, 1042, 1109, 1167, 1284],
		"133132": [136, 320, 848, 946, 954, 1186, 1042, 1109, 1167, 1284],
		"133121": [130, 312, 849, 938, 970, 948, 1281, 1036, 1103, 1161, 1278],
		"133110": [135, 319, 847, 944, 975, 953, 1041, 1108, 1168, 1283],
		"133099": [134, 318, 846, 943, 977, 952, 1040, 1107, 1166, 1282],
		"133087": [137, 316, 838, 939, 969, 950, 1034, 1110, 1160, 1285],
		"133058": [132, 314, 843, 941, 972, 1038, 1105, 955, 1163, 1280],
		"133047": [137, 316, 838, 939, 969, 950, 1034, 1110, 1160, 1285],
		"133036": [132, 314, 843, 941, 972, 1038, 1105, 955, 1163, 1280],
		"133025": [130, 312, 849, 938, 970, 948, 1281, 1036, 1103, 1161, 1278],
		"133013": [131, 313, 842, 940, 971, 949, 1037, 1104, 1162, 1279],
		"132296": [132, 314, 843, 941, 972, 1038, 1105, 955, 1163, 1280],
		"140822": [114, 266, 330, 277, 778, 857, 894, 920, 1006, 1149, 1176],
		"140821": [108, 156, 323, 272, 767, 852, 888, 915, 1000, 1143, 1171],
		"140823": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"141518": [110, 157, 324, 273, 772, 853, 890, 916, 1001, 1144, 1172],
		"139268": [113, 265, 328, 276, 777, 856, 893, 919, 1004, 1147, 1175],
		"139251": [110, 157, 324, 273, 772, 853, 890, 916, 1001, 1144, 1172],
		"138226": [117, 264, 327, 1013, 275, 774, 855, 892, 918, 1003, 1174, 1146],
		"142063": [108, 156, 323, 272, 767, 852, 888, 915, 1000, 1143, 1171],
		"133684": [110, 157, 324, 273, 772, 853, 890, 916, 1001, 1144, 1172],
		"136719": [267, 329, 280, 775, 860, 923, 1007, 1090, 1151, 1179, 896],
		"137317": [117, 264, 327, 1013, 275, 774, 855, 892, 918, 1003, 1174, 1146],
		"137377": [111, 331, 278, 776, 858, 895, 921, 1008, 1119, 1150, 1177],
		"137399": [113, 265, 328, 276, 777, 856, 893, 919, 1004, 1147, 1175],
		"137463": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"137464": [115, 262, 326, 279, 335, 771, 859, 889, 922, 1005, 1148, 1178],
		"137549": [114, 266, 330, 277, 778, 857, 894, 920, 1006, 1149, 1176],
		"137347": [108, 156, 323, 272, 767, 852, 888, 915, 1000, 1143, 1171],
		"141291": [267, 329, 280, 775, 860, 923, 1007, 1090, 1151, 1179, 896],
		"141282": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"141273": [110, 157, 324, 273, 772, 853, 890, 916, 1001, 1144, 1172],
		"141254": [117, 264, 327, 1013, 275, 774, 855, 892, 918, 1003, 1174, 1146],
		"136689": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"134078": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"135576": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"140440": [117, 264, 327, 1013, 275, 774, 855, 892, 918, 1003, 1174, 1146],
		"140419": [108, 156, 323, 272, 767, 852, 888, 915, 1000, 1143, 1171],
		"140441": [115, 262, 326, 279, 335, 771, 859, 889, 922, 1005, 1148, 1178],
		"132342": [108, 156, 323, 272, 767, 852, 888, 915, 1000, 1143, 1171],
		"132794": [113, 265, 328, 276, 777, 856, 893, 919, 1004, 1147, 1175],
		"132353": [117, 264, 327, 1013, 275, 774, 855, 892, 918, 1003, 1174, 1146],
		"133048": [115, 262, 326, 279, 335, 771, 859, 889, 922, 1005, 1148, 1178],
		"132323": [111, 331, 278, 776, 858, 895, 921, 1008, 1119, 1150, 1177],
		"132312": [110, 157, 324, 273, 772, 853, 890, 916, 1001, 1144, 1172],
		"132783": [117, 264, 327, 1013, 275, 774, 855, 892, 918, 1003, 1174, 1146],
		"132299": [114, 266, 330, 277, 778, 857, 894, 920, 1006, 1149, 1176],
		"132806": [267, 329, 280, 775, 860, 923, 1007, 1090, 1151, 1179, 896],
		"132817": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"132832": [267, 329, 280, 775, 860, 923, 1007, 1090, 1151, 1179, 896],
		"133059": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"133077": [108, 156, 323, 272, 767, 852, 888, 915, 1000, 1143, 1171],
		"133037": [117, 264, 327, 1013, 275, 774, 855, 892, 918, 1003, 1174, 1146],
		"133100": [113, 265, 328, 276, 777, 856, 893, 919, 1004, 1147, 1175],
		"133111": [114, 266, 330, 277, 778, 857, 894, 920, 1006, 1149, 1176],
		"133122": [110, 157, 324, 273, 772, 853, 890, 916, 1001, 1144, 1172],
		"133133": [111, 331, 278, 776, 858, 895, 921, 1008, 1119, 1150, 1177],
		"133144": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"133026": [108, 156, 323, 272, 767, 852, 888, 915, 1000, 1143, 1171],
		"133014": [110, 157, 324, 273, 772, 853, 890, 916, 1001, 1144, 1172],
		"133002": [111, 331, 278, 776, 858, 895, 921, 1008, 1119, 1150, 1177],
		"133088": [115, 262, 326, 279, 335, 771, 859, 889, 922, 1005, 1148, 1178],
		"132991": [117, 264, 327, 1013, 275, 774, 855, 892, 918, 1003, 1174, 1146],
		"132852": [108, 156, 323, 272, 767, 852, 888, 915, 1000, 1143, 1171],
		"132298": [109, 158, 325, 274, 773, 854, 891, 917, 1002, 1145, 1173],
		"140841": [319, 304, 825, 875, 913, 944, 995, 1065, 1075, 1283],
		"140840": [313, 299, 820, 869, 906, 940, 1060, 1071, 1279, 989],
		"140842": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"141514": [318, 303, 824, 873, 912, 943, 992, 1064, 1074, 1282],
		"139264": [315, 301, 822, 872, 910, 942, 991, 1063, 1073, 1281, 1036],
		"139262": [314, 300, 870, 908, 941, 990, 1061, 1072, 1280, 821],
		"137008": [320, 306, 1094, 907, 946, 996, 1067, 1076, 1095, 1284],
		"138229": [319, 304, 825, 875, 913, 944, 995, 1065, 1075, 1283],
		"142064": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"133682": [315, 301, 822, 872, 910, 942, 991, 1063, 1073, 1281, 1036],
		"136974": [317, 305, 829, 871, 909, 945, 994, 1066, 1078, 1286],
		"137270": [313, 299, 820, 869, 906, 940, 1060, 1071, 1279, 989],
		"137365": [314, 300, 870, 908, 941, 990, 1061, 1072, 1280, 821],
		"137421": [320, 306, 1094, 907, 946, 996, 1067, 1076, 1095, 1284],
		"137468": [316, 302, 935, 801, 874, 911, 939, 993, 1062, 1285, 1077],
		"137493": [318, 303, 824, 873, 912, 943, 992, 1064, 1074, 1282],
		"137550": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"137313": [319, 304, 825, 875, 913, 944, 995, 1065, 1075, 1283],
		"141285": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"141278": [314, 300, 870, 908, 941, 990, 1061, 1072, 1280, 821],
		"141270": [316, 302, 935, 801, 874, 911, 939, 993, 1062, 1285, 1077],
		"141258": [320, 306, 1094, 907, 946, 996, 1067, 1076, 1095, 1284],
		"136688": [314, 300, 870, 908, 941, 990, 1061, 1072, 1280, 821],
		"135578": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"140442": [315, 301, 822, 872, 910, 942, 991, 1063, 1073, 1281, 1036],
		"140420": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"140443": [319, 304, 825, 875, 913, 944, 995, 1065, 1075, 1283],
		"132344": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"132796": [318, 303, 824, 873, 912, 943, 992, 1064, 1074, 1282],
		"132355": [315, 301, 822, 872, 910, 942, 991, 1063, 1073, 1281, 1036],
		"133061": [314, 300, 870, 908, 941, 990, 1061, 1072, 1280, 821],
		"132325": [320, 306, 1094, 907, 946, 996, 1067, 1076, 1095, 1284],
		"132314": [313, 299, 820, 869, 906, 940, 1060, 1071, 1279, 989],
		"132785": [315, 301, 822, 872, 910, 942, 991, 1063, 1073, 1281, 1036],
		"132303": [319, 304, 825, 875, 913, 944, 995, 1065, 1075, 1283],
		"132808": [317, 305, 829, 871, 909, 945, 994, 1066, 1078, 1286],
		"132819": [314, 300, 870, 908, 941, 990, 1061, 1072, 1280, 821],
		"132834": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"133079": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"133050": [316, 302, 935, 801, 874, 911, 939, 993, 1062, 1285, 1077],
		"133102": [318, 303, 824, 873, 912, 943, 992, 1064, 1074, 1282],
		"133113": [319, 304, 825, 875, 913, 944, 995, 1065, 1075, 1283],
		"133124": [314, 300, 870, 908, 941, 990, 1061, 1072, 1280, 821],
		"133135": [320, 306, 1094, 907, 946, 996, 1067, 1076, 1095, 1284],
		"133146": [315, 301, 822, 872, 910, 942, 991, 1063, 1073, 1281, 1036],
		"133039": [318, 303, 824, 873, 912, 943, 992, 1064, 1074, 1282],
		"133028": [312, 298, 800, 868, 938, 988, 1070, 1278, 905, 1059],
		"133016": [313, 299, 820, 869, 906, 940, 1060, 1071, 1279, 989],
		"133004": [320, 306, 1094, 907, 946, 996, 1067, 1076, 1095, 1284],
		"133090": [316, 302, 935, 801, 874, 911, 939, 993, 1062, 1285, 1077],
		"132993": [315, 301, 822, 872, 910, 942, 991, 1063, 1073, 1281, 1036],
		"132854": [313, 299, 820, 869, 906, 940, 1060, 1071, 1279, 989],
		"132302": [314, 300, 870, 908, 941, 990, 1061, 1072, 1280, 821]
	};

	return data;
}