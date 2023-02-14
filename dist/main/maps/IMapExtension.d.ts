import { IHashMap } from "../hashMaps/IHashMap";
import { IMutableHashMap } from "../hashMaps/IMutableHashMap";
import { IMap } from "./IMap";
import { IMutableMap } from "./IMutableMap";
export interface IMapExtension<K, V> {
    toHashMap(): IHashMap<K, V>;
    toMap(): IMap<K, V>;
    toMutableHashMap(): IMutableHashMap<K, V>;
    toMutableMap(): IMutableMap<K, V>;
}
