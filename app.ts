import { measureTimeMillis } from "./src/main/core/MeasureTimeMillis";
import { println } from "./src/main/core/Println";
import { repeat } from "./src/main/core/Repeat";
import { mutableHashSetOf, mutableListOf } from "./src/main/Functions";

const times = 10000;
const mutableList = mutableListOf<string>();
const mutableHashSet = mutableHashSetOf<string>();
repeat(1000000, (index) => {
  mutableList.add(index.toString());
  mutableHashSet.add(index.toString());
});

println(
  measureTimeMillis(() => {
    repeat(times, () => {
      mutableList.contains("1999999");
    });
  })
);

println(
  measureTimeMillis(() => {
    repeat(times, () => {
      mutableHashSet.contains("1999999");
    });
  })
);
