import { measureTimeMillis } from "./src/main/core/MeasureTimeMillis";
import { println } from "./src/main/core/Println";
import { repeat } from "./src/main/core/Repeat";
import { mutableHashSetOf } from "./src/main/Functions";

const mutableHashSet = mutableHashSetOf<string>();
repeat(1000000, (index) => {
  mutableHashSet.add(index.toString());
});

println(
  measureTimeMillis(() => {
    repeat(10000, () => {
      mutableHashSet.contains("1999999");
    });
  })
);
