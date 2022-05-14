
import { println } from "./src/main/core/Println";
import { mutableMapOf } from "./src/main/Functions";
import { Pair } from "./src/main/Pair";

const myMap = mutableMapOf<string, string>(
  new Pair("12", "123"),
  new Pair("45", "456"),
  new Pair("89", "890")
);

myMap.add(new Pair("1jhlk123", "12312"));
println(myMap.first().first);
println(myMap.first().second);
println(myMap.last().first);
println(myMap.last().second);
println(myMap.size);
