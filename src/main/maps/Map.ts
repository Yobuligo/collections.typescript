import { List } from "../lists/List";
import { Pair } from "../Pair";
import { IMap } from "./IMap";

export class Map<K, V> extends List<Pair<K, V>> implements IMap<K, V> {}
