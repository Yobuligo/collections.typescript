import { IList } from "../lists/IList";
import { Pair } from "../Pair";

export interface IMap<K, V> extends IList<Pair<K, V>> {}
