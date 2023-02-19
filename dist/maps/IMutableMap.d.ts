import { Pair } from "@yobuligo/core.typescript";
import { IMutableList } from "../lists/IMutableList";
import { IMapExtension } from "./IMapExtension";
export interface IMutableMap<K, V> extends IMutableList<Pair<K, V>>, IMapExtension<K, V> {
}
