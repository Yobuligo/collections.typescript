import {
  listOf,
  mutableListOf,
  mutableMapOf,
  pair,
} from "./src/main/Functions";

const mutableList = mutableListOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
mutableList.addAll(listOf(55, 56, 57));
console.log(mutableList);

const mutableMap = mutableMapOf(pair("1", "1"), pair("2", "2"), pair("3", "3"));
// mutableMap.add(pair("4", "4"));
mutableMap.addAll(2, mutableMapOf(pair("4", "4")))
console.log(mutableMap);

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
