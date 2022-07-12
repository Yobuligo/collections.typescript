import { hashMapOf, mapOf, mutableHashMapOf, mutableMapOf } from "../Functions";
import { IHashMap } from "../hashMaps/IHashMap";
import { IMutableHashMap } from "../hashMaps/IMutableHashMap";
import { MutableList } from "../lists/MutableList";
import { Pair } from "../Pair";
import { IMap } from "./IMap";
import { IMutableMap } from "./IMutableMap";

export class MutableMap<K, V>
  extends MutableList<Pair<K, V>>
  implements IMutableMap<K, V>
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
