import { IMutableList } from "../lists/IMutableList";
import { Pair } from "../Pair";
import { IMapExtension } from "./IMapExtension";
export interface IMutableMap<K, V> extends IMutableList<Pair<K, V>>, IMapExtension<K, V> {
}
