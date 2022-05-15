import { MutableHashSet } from "../hashSets/MutableHashSet";
import { Pair } from "../Pair";
import { IMutableHashMap } from "./IMutableHashMap";

export class MutableHashMap<K, V>
  extends MutableHashSet<Pair<K, V>>
  implements IMutableHashMap<K, V> {}
