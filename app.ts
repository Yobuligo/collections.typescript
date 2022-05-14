import { println } from "./core/functions/Println";
import { Map } from "./src/main/maps/Map";
import { Pair } from "./src/main/Pair";

const myMap = new Map<string, string>(
  new Pair("12", "123"),
  new Pair("45", "456"),
  new Pair("89", "890")
);
println(myMap.first().first);
println(myMap.first().second);
println(myMap.last().first);
println(myMap.last().second);
println(myMap.size);
