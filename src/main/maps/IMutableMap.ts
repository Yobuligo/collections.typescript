import { IMutableList } from "../lists/IMutableList";
import { Pair } from "../Pair";

export interface IMutableMap<K, V> extends IMutableList<Pair<K, V>> {}
