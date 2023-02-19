import { Pair } from "@yobuligo/core.typescript";
import { IHashSet } from "../hashSets/IHashSet";
import { IMapExtension } from "../maps/IMapExtension";

export interface IHashMap<K, V>
  extends IHashSet<Pair<K, V>>,
    IMapExtension<K, V> {}
