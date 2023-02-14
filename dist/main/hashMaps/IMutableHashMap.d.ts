import { IMutableHashSet } from "../hashSets/IMutableHashSet";
import { IMapExtension } from "../maps/IMapExtension";
import { Pair } from "../Pair";
export interface IMutableHashMap<K, V> extends IMutableHashSet<Pair<K, V>>, IMapExtension<K, V> {
}
