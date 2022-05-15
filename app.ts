import { repeat } from "./src/main/core/Repeat";
import { mutableHashSetOf } from "./src/main/Functions";

const mutableHashSet = mutableHashSetOf<string>();
repeat(1000000, (index) => {
  mutableHashSet.add(index.toString());
});
