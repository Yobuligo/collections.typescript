"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeasureTimeMillis_1 = require("./src/main/core/MeasureTimeMillis");
var Println_1 = require("./src/main/core/Println");
var Repeat_1 = require("./src/main/core/Repeat");
var Functions_1 = require("./src/main/Functions");
var times = 10000;
var mutableList = (0, Functions_1.mutableListOf)();
var mutableHashSet = (0, Functions_1.mutableHashSetOf)();
(0, Repeat_1.repeat)(1000000, function (index) {
    mutableList.add(index.toString());
    mutableHashSet.add(index.toString());
});
(0, Println_1.println)((0, MeasureTimeMillis_1.measureTimeMillis)(function () {
    (0, Repeat_1.repeat)(times, function () {
        mutableList.contains("1999999");
    });
}));
(0, Println_1.println)((0, MeasureTimeMillis_1.measureTimeMillis)(function () {
    (0, Repeat_1.repeat)(times, function () {
        mutableHashSet.contains("1999999");
    });
}));
//# sourceMappingURL=app.js.map