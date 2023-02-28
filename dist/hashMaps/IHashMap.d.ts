import { Pair } from "@yobuligo/core.typescript";
import { IHashSet } from "../hashSets/IHashSet";
import { IMapExtension } from "../maps/IMapExtension";
/**
 * An implementation of this interface represents a hash map which only handles elements of type *{@link Pair}*.
 */
export interface IHashMap<K, V> extends IHashSet<Pair<K, V>>, IMapExtension<K, V> {
}
