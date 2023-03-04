import { error, NoSuchElementException, Pair } from "@yobuligo/core.typescript";
import { hashMapOf, mapOf, mutableHashMapOf, mutableMapOf } from "../Functions";
import { HashSet } from "../hashSets/HashSet";
import { IMap } from "../maps/IMap";
import { IMutableMap } from "../maps/IMutableMap";
import { IHashMap } from "./IHashMap";
import { IMutableHashMap } from "./IMutableHashMap";

export class HashMap<K, V>
  extends HashSet<Pair<K, V>>
  implements IHashMap<K, V>
{
  containsKey(key: K): boolean {
    throw new Error("Method not implemented.");
  }

  containsNotKey(key: K): boolean {
    throw new Error("Method not implemented.");
  }

  get(key: K): V {
    return (
      this.getOrNull(key) ??
      error(
        new NoSuchElementException(
          "Error when getting element by key. Key is unknown."
        )
      )
    );
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
