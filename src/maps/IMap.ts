import { IList } from "../lists/IList";
import { Pair } from "../Pair";
import { IMapExtension } from "./IMapExtension";

export interface IMap<K, V> extends IList<Pair<K, V>>, IMapExtension<K, V> {}
