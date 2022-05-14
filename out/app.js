"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Println_1 = require("./core/functions/Println");
var Functions_1 = require("./src/main/Functions");
var Pair_1 = require("./src/main/Pair");
var myMap = (0, Functions_1.mutableMapOf)(new Pair_1.Pair("12", "123"), new Pair_1.Pair("45", "456"), new Pair_1.Pair("89", "890"));
myMap.add(new Pair_1.Pair("1jhlk123", "12312"));
(0, Println_1.println)(myMap.first().first);
(0, Println_1.println)(myMap.first().second);
(0, Println_1.println)(myMap.last().first);
(0, Println_1.println)(myMap.last().second);
(0, Println_1.println)(myMap.size);
//# sourceMappingURL=app.js.map