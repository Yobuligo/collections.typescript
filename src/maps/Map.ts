import { Pair } from "@yobuligo/core.typescript";
import { hashMapOf, mapOf, mutableHashMapOf, mutableMapOf } from "../Functions";
import { IHashMap } from "../hashMaps/IHashMap";
import { IMutableHashMap } from "../hashMaps/IMutableHashMap";
import { List } from "../lists/List";
import { IMap } from "./IMap";
import { IMutableMap } from "./IMutableMap";

export class Map<K, V> extends List<Pair<K, V>> implements IMap<K, V> {
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
