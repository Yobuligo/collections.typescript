import { Pair } from "@yobuligo/core.typescript";
import { IList } from "../lists/IList";
import { IMapExtension } from "./IMapExtension";
export interface IMap<K, V> extends IList<Pair<K, V>>, IMapExtension<K, V> {
}
