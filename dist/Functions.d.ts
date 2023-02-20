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
 * Creates a readonly list for elements of type {@link T}.
 * The contained elements are passed in via parameter {@link elements}.
 */
export declare const listOf: <T>(...elements: T[]) => IList<T>;
/**
 * Creates a list for elements of type {@link T} whose content is changeable.
 * The list elements can be initialized by parameter {@link elements}.
 */
export declare const mutableListOf: <T>(...elements: T[]) => IMutableList<T>;
/**
 * Creates a readonly mapping list for elements of type {@link T}.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the first property to the second property.
 * The contained elements are passed in via parameter {@link elements}.
 */
export declare const mapOf: <K, V>(...elements: Pair<K, V>[]) => IMap<K, V>;
/**
 * Creates a mapping list for elements of type {@link T} whose content is changeable.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the first property to the second property.
 * The mapping list elements can be initialized by parameter {@link elements}.
 */
export declare const mutableMapOf: <K, V>(...elements: Pair<K, V>[]) => IMutableMap<K, V>;
/**
 * Creates a readonly hash set list for elements of type {@link T}.
 * The access to the elements is faster but on the other hand the list is not sorted and needs more memory.
 * The contained elements are passed in via parameter {@link elements}.
 */
export declare const hashSetOf: <T>(...elements: T[]) => IHashSet<T>;
/**
 * Creates a hash set list for elements of type {@link T} whose content is changeable.
 * The access to the elements is faster but on the other hand the list is not sorted and needs more memory.
 * The hash set list elements can be initialized by parameter {@link elements}.
 */
export declare const mutableHashSetOf: <T>(...elements: T[]) => IMutableHashSet<T>;
/**
 * Creates a readonly hash map list for elements of type {@link T}.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the first property to the second property.
 * The access to the elements is faster but on the other hand the list is not sorted and needs more memory.
 * The contained elements are passed in via parameter {@link elements}.
 */
export declare const hashMapOf: <K, V>(...elements: Pair<K, V>[]) => IHashMap<K, V>;
/**
 * Creates a hash map list for elements of type {@link T} whose content is changeable.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the first property to the second property.
 * The access to the elements is faster but on the other hand the list is not sorted and needs more memory.
 * The hash map list elements can be initialized by parameter {@link elements}.
 */
export declare const mutableHashMapOf: <K, V>(...elements: Pair<K, V>[]) => IMutableHashMap<K, V>;
