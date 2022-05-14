import { MutableList } from "../lists/MutableList";
import { Pair } from "../Pair";
import { IMutableMap } from "./IMutableMap";

export class MutableMap<K, V>
  extends MutableList<Pair<K, V>>
  implements IMutableMap<K, V> {}
