import { IHashMap } from "../hashMaps/IHashMap";
import { IMutableHashMap } from "../hashMaps/IMutableHashMap";
import { List } from "../lists/List";
import { Pair } from "../Pair";
import { IMap } from "./IMap";
import { IMutableMap } from "./IMutableMap";
export declare class Map<K, V> extends List<Pair<K, V>> implements IMap<K, V> {
    toHashMap(): IHashMap<K, V>;
    toMap(): IMap<K, V>;
    toMutableHashMap(): IMutableHashMap<K, V>;
    toMutableMap(): IMutableMap<K, V>;
}
