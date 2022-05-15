import { println } from "./src/main/core/Println";
import { hashSetOf } from "./src/main/Functions";

const hashSet = hashSetOf(1, 2, 3, 4, 5);
println(hashSet.isEmpty());
