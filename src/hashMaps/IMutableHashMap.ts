import { Pair } from "@yobuligo/core.typescript";
import { IMutableHashSet } from "../hashSets/IMutableHashSet";
import { IHashMap } from "./IHashMap";

/**
 * An implementation of this interface represents a mutable hash map which only handles elements of type *{@link Pair}*.
 */
export interface IMutableHashMap<K, V>
  extends IMutableHashSet<Pair<K, V>>,
    IHashMap<K, V> {}
