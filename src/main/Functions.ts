import { HashGenerator } from "./hashSets/HashGenerator";
import { HashSet } from "./hashSets/HashSet";
import { IHashSet } from "./hashSets/IHashSet";
import { IList } from "./lists/IList";
import { IMutableList } from "./lists/IMutableList";
import { List } from "./lists/List";
import { MutableList } from "./lists/MutableList";
import { IMap } from "./maps/IMap";
import { IMutableMap } from "./maps/IMutableMap";
import { Map } from "./maps/Map";
import { MutableMap } from "./maps/MutableMap";
import { Pair } from "./Pair";

export const hashGenerator = new HashGenerator();

export function listOf<T>(...elements: T[]): IList<T> {
  return new List(...elements);
}

export function mutableListOf<T>(...elements: T[]): IMutableList<T> {
  return new MutableList(...elements);
}

export function mapOf<K, V>(...elements: Pair<K, V>[]): IMap<K, V> {
  return new Map(...elements);
}

export function mutableMapOf<K, V>(
  ...elements: Pair<K, V>[]
): IMutableMap<K, V> {
  return new MutableMap(...elements);
}

export function hashSetOf<T>(...elements: T[]): IHashSet<T> {
  return new HashSet(...elements);
}
