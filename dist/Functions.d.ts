import { Pair } from "@yobuligo/core.typescript";
import { IHashMap } from "./hashMaps/IHashMap";
import { IMutableHashMap } from "./hashMaps/IMutableHashMap";
import { IHashSet } from "./hashSets/IHashSet";
import { IMutableHashSet } from "./hashSets/IMutableHashSet";
import { IList } from "./lists/IList";
import { IMutableList } from "./lists/IMutableList";
import { IMap } from "./maps/IMap";
import { IMutableMap } from "./maps/IMutableMap";
/**
 * Creates a readonly list for elements of type *{@link T}*.
 * The contained elements are passed in via parameter *{@link elements}*.
 */
export declare const listOf: <T>(...elements: T[]) => IList<T>;
/**
 * Creates a list for elements of type *{@link T}*, whose content is changeable.
 * The list elements can be initialized by parameter *{@link elements}*.
 */
export declare const mutableListOf: <T>(...elements: T[]) => IMutableList<T>;
/**
 * Creates a readonly mapping list.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the key *{@link K}* property to the value *{@link V}* property.
 * The contained elements are passed in via parameter *{@link elements}*.
 */
export declare const mapOf: <K, V>(...elements: Pair<K, V>[]) => IMap<K, V>;
/**
 * Creates a mapping list for elements, whose content is changeable.
 * The elements are of type *{@link Pair}*. A *{@link Pair}* is a mapping from the key *{@link K}* property to the value *{@link V}* property.
 * The mapping list elements can be initialized by parameter *{@link elements}*.
 */
export declare const mutableMapOf: <K, V>(...elements: Pair<K, V>[]) => IMutableMap<K, V>;
/**
 * Creates a readonly hash set list for elements of type *{@link T}*.
 * The elements are organized via hash which provides a much faster access, but with more memory consumption and without sorting.
 * The contained elements are passed in via parameter *{@link elements}*.
 */
export declare const hashSetOf: <T>(...elements: T[]) => IHashSet<T>;
/**
 * Creates a hash set list for elements of type *{@link T}*, whose content is changeable.
 * The elements are organized via hash which provides a much faster access, but with more memory consumption and without sorting.
 * The hash set list elements can be initialized by parameter *{@link elements}*.
 */
export declare const mutableHashSetOf: <T>(...elements: T[]) => IMutableHashSet<T>;
/**
 * Creates a readonly hash map list.
 * The elements are of type *{@link Pair}*. A *{@link Pair}* is a mapping from the key *{@link K}* property to the value *{@link V}* property.
 * The elements are organized via hash which provides a much faster access, but with more memory consumption and without sorting.
 * The contained elements are passed in via parameter *{@link elements}*.
 */
export declare const hashMapOf: <K, V>(...elements: Pair<K, V>[]) => IHashMap<K, V>;
/**
 * Creates a hash map list for elements, whose content is changeable.
 * The elements are of type *{@link Pair}*. A *{@link Pair}* is a mapping from the key *{@link K}* property to the value *{@link V}* property.
 * The elements are organized via hash which provides a much faster access, but with more memory consumption and without sorting.
 * The hash map list elements can be initialized by parameter *{@link elements}*.
 */
export declare const mutableHashMapOf: <K, V>(...elements: Pair<K, V>[]) => IMutableHashMap<K, V>;
