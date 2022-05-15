import { IMutableHashSet } from "../hashSets/IMutableHashSet";
import { Pair } from "../Pair";

export interface IMutableHashMap<K, V> extends IMutableHashSet<Pair<K, V>> {}
