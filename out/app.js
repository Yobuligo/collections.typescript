"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Functions_1 = require("./src/main/Functions");
var Pair_1 = require("./src/main/Pair");
var myList = (0, Functions_1.mapOf)(new Pair_1.Pair("", ""), new Pair_1.Pair("123", "123"));
var myMutableMap = myList.toMutableMap();
myMutableMap.add((0, Functions_1.pair)("abc", "edf"));
var myDefaultList = myMutableMap.toList();
console.log(myMutableMap);
// import { measureTimeMillis } from "./src/main/core/MeasureTimeMillis";
// import { println } from "./src/main/core/Println";
// import { repeat } from "./src/main/core/Repeat";
// import {
//   mutableHashMapOf,
//   mutableHashSetOf,
//   mutableListOf,
// } from "./src/main/Functions";
// import { Pair } from "./src/main/Pair";
// const times = 10000;
// const mutableList = mutableListOf<string>();
// const mutableHashSet = mutableHashSetOf<string>();
// const mutableHashMap = mutableHashMapOf<string, string>();
// repeat(1000000, (index) => {
//   mutableList.add(index.toString());
//   mutableHashSet.add(index.toString());
//   mutableHashMap.add(new Pair(index.toString(), index.toString()));
// });
// println(
//   measureTimeMillis(() => {
//     repeat(times, () => {
//       mutableList.contains("1999999");
//     });
//   })
// );
// println(`Size of mutableList: ${mutableList.size}`);
// println(
//   measureTimeMillis(() => {
//     repeat(times, () => {
//       mutableHashSet.contains("1999999");
//     });
//   })
// );
// println(`Size of mutableHashSet: ${mutableHashSet.size}`);
// const lastPair = mutableHashMap.last();
// println(
//   measureTimeMillis(() => {
//     repeat(times, () => {
//       mutableHashMap.contains(lastPair);
//     });
//   })
// );
// println(`Size of mutableHashMap: ${mutableHashMap.size}`);
//# sourceMappingURL=app.js.map