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
  containsKey(key: K): boolean {
    throw new Error("Method not implemented.");
  }
  
  containsNotKey(key: K): boolean {
    throw new Error("Method not implemented.");
  }

  get(key: K): V {
    throw new Error("Method not implemented.");
  }

  getOrNull(key: K): V | undefined {
    throw new Error("Method not implemented.");
  }

  toHashMap(): IHashMap<K, V> {
    return hashMapOf(...this.toArray());
  }

  toMap(): IMap<K, V> {
    return mapOf(...this.toArray());
  }

  toMutableHashMap(): IMutableHashMap<K, V> {
    return mutableHashMapOf(...this.toArray());
  }

  toMutableMap(): IMutableMap<K, V> {
    return mutableMapOf(...this.toArray());
  }
}
