import { hashMapOf, mapOf, mutableHashMapOf, mutableMapOf } from "../Functions";
import { HashSet } from "../hashSets/HashSet";
import { IMap } from "../maps/IMap";
import { IMutableMap } from "../maps/IMutableMap";
import { Pair } from "../Pair";
import { IHashMap } from "./IHashMap";
import { IMutableHashMap } from "./IMutableHashMap";

export class HashMap<K, V>
  extends HashSet<Pair<K, V>>
  implements IHashMap<K, V>
{
  toHashMap(): IHashMap<K, V> {
    return hashMapOf(...this.elements);
  }

  toMap(): IMap<K, V> {
    return mapOf(...this.elements);
  }

  toMutableHashMap(): IMutableHashMap<K, V> {
    return mutableHashMapOf(...this.elements);
  }

  toMutableMap(): IMutableMap<K, V> {
    return mutableMapOf(...this.elements);
  }
}
