import { IHashSet } from "../hashSets/IHashSet";
import { Pair } from "../Pair";

export interface IHashMap<K, V> extends IHashSet<Pair<K, V>> {}
