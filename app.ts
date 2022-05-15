import { println } from "./src/main/core/Println";
import { repeat } from "./src/main/core/Repeat";
import { hashSetOf } from "./src/main/Functions";

const values: string[] = [];
repeat(100000, (index) => {
  values.push(index.toString());
});

const hashSet = hashSetOf(...values);
// println(hashSet.elementAt("500"));
