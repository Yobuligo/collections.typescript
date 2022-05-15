"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeasureTimeMillis_1 = require("./src/main/core/MeasureTimeMillis");
var Println_1 = require("./src/main/core/Println");
var Repeat_1 = require("./src/main/core/Repeat");
var Functions_1 = require("./src/main/Functions");
var Pair_1 = require("./src/main/Pair");
var times = 10000;
var mutableList = (0, Functions_1.mutableListOf)();
var mutableHashSet = (0, Functions_1.mutableHashSetOf)();
var mutableHashMap = (0, Functions_1.mutableHashMapOf)();
(0, Repeat_1.repeat)(1000000, function (index) {
    mutableList.add(index.toString());
    mutableHashSet.add(index.toString());
    mutableHashMap.add(new Pair_1.Pair(index.toString(), index.toString()));
});
(0, Println_1.println)((0, MeasureTimeMillis_1.measureTimeMillis)(function () {
    (0, Repeat_1.repeat)(times, function () {
        mutableList.contains("1999999");
    });
}));
(0, Println_1.println)("Size of mutableList: ".concat(mutableList.size));
(0, Println_1.println)((0, MeasureTimeMillis_1.measureTimeMillis)(function () {
    (0, Repeat_1.repeat)(times, function () {
        mutableHashSet.contains("1999999");
    });
}));
(0, Println_1.println)("Size of mutableHashSet: ".concat(mutableHashSet.size));
var lastPair = mutableHashMap.last();
(0, Println_1.println)((0, MeasureTimeMillis_1.measureTimeMillis)(function () {
    (0, Repeat_1.repeat)(times, function () {
        mutableHashMap.contains(lastPair);
    });
}));
(0, Println_1.println)("Size of mutableHashMap: ".concat(mutableHashMap.size));
//# sourceMappingURL=app.js.map