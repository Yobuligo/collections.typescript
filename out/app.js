"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Println_1 = require("./core/functions/Println");
var Map_1 = require("./src/main/maps/Map");
var Pair_1 = require("./src/main/Pair");
var myMap = new Map_1.Map(new Pair_1.Pair("12", "123"), new Pair_1.Pair("45", "456"), new Pair_1.Pair("89", "890"));
(0, Println_1.println)(myMap.first().first);
(0, Println_1.println)(myMap.first().second);
(0, Println_1.println)(myMap.last().first);
(0, Println_1.println)(myMap.last().second);
(0, Println_1.println)(myMap.size);
//# sourceMappingURL=app.js.map