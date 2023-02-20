import { Pair } from "@yobuligo/core.typescript";
import { HashMap } from "./hashMaps/HashMap";
import { IHashMap } from "./hashMaps/IHashMap";
import { IMutableHashMap } from "./hashMaps/IMutableHashMap";
import { MutableHashMap } from "./hashMaps/MutableHashMap";
import { HashSet } from "./hashSets/HashSet";
import { IHashSet } from "./hashSets/IHashSet";
import { IMutableHashSet } from "./hashSets/IMutableHashSet";
import { MutableHashSet } from "./hashSets/MutableHashSet";
import { IList } from "./lists/IList";
import { IMutableList } from "./lists/IMutableList";
import { List } from "./lists/List";
import { MutableList } from "./lists/MutableList";
import { IMap } from "./maps/IMap";
import { IMutableMap } from "./maps/IMutableMap";
import { Map } from "./maps/Map";
import { MutableMap } from "./maps/MutableMap";

/**
 * A function to create a readonly list.
 * The contained elements are passed in via parameter {@link elements}.
 * @param elements contains the elements of the list.
 * @returns
 */
export const listOf = <T>(...elements: T[]): IList<T> => {
  return new List(...elements);
};

/**
 * A function to create a list whose content is changeable.
 * The list elements can be initialized by parameter {@link elements}.
 * @param elements
 * @returns
 */
export const mutableListOf = <T>(...elements: T[]): IMutableList<T> => {
  return new MutableList(...elements);
};

/**
 * A function to create a readonly mapping list.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping of the first property to the second property.
 * The contained elements are passed in via parameter {@link elements}.
 */
export const mapOf = <K, V>(...elements: Pair<K, V>[]): IMap<K, V> => {
  return new Map(...elements);
};

/**
 * A function to create a mapping list whose content is changeable.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping of the first property to the second property.
 * The mapping list elements can be initialized by parameter {@link elements}.
 */
export const mutableMapOf = <K, V>(
  ...elements: Pair<K, V>[]
): IMutableMap<K, V> => {
  return new MutableMap(...elements);
};

/**
 * A function to create a readonly hash set list.
 * The access to the elements happens by key, which provides a faster access. On the other side the list is not sorted and needs more memory.
 * The contained elements are passed in via parameter {@link elements}.
 */
export const hashSetOf = <T>(...elements: T[]): IHashSet<T> => {
  return new HashSet(...elements);
};

/**
 * A function to create a hash set list whose content is changeable.
 * The access to the elements happens by key, which provides a faster access. On the other side the list is not sorted and needs more memory.
 * The hash set list elements can be initialized by parameter {@link elements}.
 */
export const mutableHashSetOf = <T>(...elements: T[]): IMutableHashSet<T> => {
  return new MutableHashSet(...elements);
};

/**
 * A function to create a readonly hash map list.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping of the first property to the second property.
 * The access to the elements happens by key, which provides a faster access. On the other side the list is not sorted and needs more memory.
 * The contained elements are passed in via parameter {@link elements}.
 */
export const hashMapOf = <K, V>(...elements: Pair<K, V>[]): IHashMap<K, V> => {
  return new HashMap(...elements);
};

/**
 * A function to create a hash map list whose content is changeable.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping of the first property to the second property.
 * The access to the elements happens by key, which provides a faster access. On the other side the list is not sorted and needs more memory.
 * The hash map list elements can be initialized by parameter {@link elements}.
 */
export const mutableHashMapOf = <K, V>(
  ...elements: Pair<K, V>[]
): IMutableHashMap<K, V> => {
  return new MutableHashMap(...elements);
};
