import { MutableHashSet } from "../hashSets/MutableHashSet";
import { IMap } from "../maps/IMap";
import { IMutableMap } from "../maps/IMutableMap";
import { Pair } from "../Pair";
import { IHashMap } from "./IHashMap";
import { IMutableHashMap } from "./IMutableHashMap";
export declare class MutableHashMap<K, V> extends MutableHashSet<Pair<K, V>> implements IMutableHashMap<K, V> {
    toHashMap(): IHashMap<K, V>;
    toMap(): IMap<K, V>;
    toMutableHashMap(): IMutableHashMap<K, V>;
    toMutableMap(): IMutableMap<K, V>;
}
