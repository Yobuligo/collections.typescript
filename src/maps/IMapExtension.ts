import { IHashMap } from "../hashMaps/IHashMap";
import { IMutableHashMap } from "../hashMaps/IMutableHashMap";
import { IMap } from "./IMap";
import { IMutableMap } from "./IMutableMap";

/**
 * An implementation of this interface provides extension functions for maps.
 */
export interface IMapExtension<K, V> {
  containsKey(key: K): boolean;
  containsNotKey(key: K): boolean;
  get(key: K): V;
  getOrNull(key: K): V | undefined;

  /**
   * Returns a hash map, which contains all elements, except for duplicates, of that list.
   */
  toHashMap(): IHashMap<K, V>;

  /**
   * Returns a map, which contains all elements of that list.
   */
  toMap(): IMap<K, V>;

  /**
   * Returns a mutable hash map, which contains all elements, except for duplicates, of that list.
   */
  toMutableHashMap(): IMutableHashMap<K, V>;

  /**
   * Returns a mutable map, which contains all elements of that list.
   */
  toMutableMap(): IMutableMap<K, V>;
}
