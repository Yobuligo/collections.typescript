import { Pair } from "@yobuligo/core.typescript";
import { hashMapOf, mapOf, mutableHashMapOf, mutableMapOf } from "../Functions";
import { MutableHashSet } from "../hashSets/MutableHashSet";
import { IMap } from "../maps/IMap";
import { IMutableMap } from "../maps/IMutableMap";
import { IHashMap } from "./IHashMap";
import { IMutableHashMap } from "./IMutableHashMap";

export class MutableHashMap<K, V>
  extends MutableHashSet<Pair<K, V>>
  implements IMutableHashMap<K, V>
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
