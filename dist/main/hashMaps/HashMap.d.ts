import { HashSet } from "../hashSets/HashSet";
import { IMap } from "../maps/IMap";
import { IMutableMap } from "../maps/IMutableMap";
import { Pair } from "../Pair";
import { IHashMap } from "./IHashMap";
import { IMutableHashMap } from "./IMutableHashMap";
export declare class HashMap<K, V> extends HashSet<Pair<K, V>> implements IHashMap<K, V> {
    toHashMap(): IHashMap<K, V>;
    toMap(): IMap<K, V>;
    toMutableHashMap(): IMutableHashMap<K, V>;
    toMutableMap(): IMutableMap<K, V>;
}
