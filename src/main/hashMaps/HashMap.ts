import { HashSet } from "../hashSets/HashSet";
import { Pair } from "../Pair";
import { IHashMap } from "./IHashMap";

export class HashMap<K, V>
  extends HashSet<Pair<K, V>>
  implements IHashMap<K, V> {}
