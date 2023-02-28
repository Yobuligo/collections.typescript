import { Pair } from "@yobuligo/core.typescript";
import { IList } from "../lists/IList";
import { IMapExtension } from "./IMapExtension";
/**
 * An implementation of this interface represents a map which only handles elements of type *{@link Pair}*.
 */
export interface IMap<K, V> extends IList<Pair<K, V>>, IMapExtension<K, V> {
}
