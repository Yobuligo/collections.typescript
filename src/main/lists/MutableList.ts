import { MutableCollection } from "../collections/MutableCollection";
import { IMutableList } from "./IMutableList";

export class MutableList<T>
  extends MutableCollection<T>
  implements IMutableList<T> {}
