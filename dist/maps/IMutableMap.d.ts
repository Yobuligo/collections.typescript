import { Pair } from "@yobuligo/core.typescript";
import { IMutableList } from "../lists/IMutableList";
import { IMapExtension } from "./IMapExtension";
/**
 * An implementation of this interface represents a mutable map which only handles elements of type *{@link Pair}*.
 */
export interface IMutableMap<K, V> extends IMutableList<Pair<K, V>>, IMapExtension<K, V> {
}
