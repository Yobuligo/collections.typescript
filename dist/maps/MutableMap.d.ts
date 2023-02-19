import { Pair } from "@yobuligo/core.typescript";
import { IHashMap } from "../hashMaps/IHashMap";
import { IMutableHashMap } from "../hashMaps/IMutableHashMap";
import { MutableList } from "../lists/MutableList";
import { IMap } from "./IMap";
import { IMutableMap } from "./IMutableMap";
export declare class MutableMap<K, V> extends MutableList<Pair<K, V>> implements IMutableMap<K, V> {
    toHashMap(): IHashMap<K, V>;
    toMap(): IMap<K, V>;
    toMutableHashMap(): IMutableHashMap<K, V>;
    toMutableMap(): IMutableMap<K, V>;
}
