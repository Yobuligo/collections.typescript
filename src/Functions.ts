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
 * Creates a readonly list for elements of type *{@link T}*.
 * The contained elements are passed in via parameter *{@link elements}*.
 */
export const listOf = <T>(...elements: T[]): IList<T> => {
  return new List(...elements);
};

/**
 * Creates a list for elements of type *{@link T}*, whose content is changeable.
 * The list elements can be initialized by parameter *{@link elements}*.
 */
export const mutableListOf = <T>(...elements: T[]): IMutableList<T> => {
  return new MutableList(...elements);
};

/**
 * Creates a readonly mapping list.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the key *{@link K}* property to the value *{@link V}* property.
 * The contained elements are passed in via parameter *{@link elements}*.
 */
export const mapOf = <K, V>(...elements: Pair<K, V>[]): IMap<K, V> => {
  return new Map(...elements);
};

/**
 * Creates a mapping list for elements, whose content is changeable.
 * The elements are of type *{@link Pair}*. A *{@link Pair}* is a mapping from the key *{@link K}* property to the value *{@link V}* property.
 * The mapping list elements can be initialized by parameter *{@link elements}*.
 */
export const mutableMapOf = <K, V>(
  ...elements: Pair<K, V>[]
): IMutableMap<K, V> => {
  return new MutableMap(...elements);
};

/**
 * Creates a readonly hash set list for elements of type *{@link T}*.
 * The elements are organized via hash which provides a much faster access, but with more memory consumption and without sorting.
 * The contained elements are passed in via parameter *{@link elements}*.
 */
export const hashSetOf = <T>(...elements: T[]): IHashSet<T> => {
  return new HashSet(...elements);
};

/**
 * Creates a hash set list for elements of type *{@link T}*, whose content is changeable.
 * The elements are organized via hash which provides a much faster access, but with more memory consumption and without sorting.
 * The hash set list elements can be initialized by parameter *{@link elements}*.
 */
export const mutableHashSetOf = <T>(...elements: T[]): IMutableHashSet<T> => {
  return new MutableHashSet(...elements);
};

/**
 * Creates a readonly hash map list.
 * The elements are of type *{@link Pair}*. A *{@link Pair}* is a mapping from the key *{@link K}* property to the value *{@link V}* property.
 * The elements are organized via hash which provides a much faster access, but with more memory consumption and without sorting.
 * The contained elements are passed in via parameter *{@link elements}*.
 */
export const hashMapOf = <K, V>(...elements: Pair<K, V>[]): IHashMap<K, V> => {
  return new HashMap(...elements);
};

/**
 * Creates a hash map list for elements, whose content is changeable.
 * The elements are of type *{@link Pair}*. A *{@link Pair}* is a mapping from the key *{@link K}* property to the value *{@link V}* property.
 * The elements are organized via hash which provides a much faster access, but with more memory consumption and without sorting.
 * The hash map list elements can be initialized by parameter *{@link elements}*.
 */
export const mutableHashMapOf = <K, V>(
  ...elements: Pair<K, V>[]
): IMutableHashMap<K, V> => {
  return new MutableHashMap(...elements);
};
