import { Pair } from "@yobuligo/core.typescript";
import { IMutableHashSet } from "../hashSets/IMutableHashSet";
import { IMapExtension } from "../maps/IMapExtension";

export interface IMutableHashMap<K, V>
  extends IMutableHashSet<Pair<K, V>>,
    IMapExtension<K, V> {}
