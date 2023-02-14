import { IHashSet } from "../hashSets/IHashSet";
import { IMapExtension } from "../maps/IMapExtension";
import { Pair } from "../Pair";
export interface IHashMap<K, V> extends IHashSet<Pair<K, V>>, IMapExtension<K, V> {
}
