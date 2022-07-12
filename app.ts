import { listOf, mapOf, pair } from "./src/main/Functions";
import { Pair } from "./src/main/Pair";

let myList = mapOf(new Pair("",""), new Pair("123","123"))
const myMutableMap = myList.toMutableMap()
myMutableMap.add(pair("abc","edf"))

const myDefaultList = myMutableMap.toList()

const myDefaultMutableList = myMutableMap.toMutableList()

console.log(myMutableMap)

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
