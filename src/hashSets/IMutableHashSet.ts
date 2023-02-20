import { IMutableCollection } from "../collections/IMutableCollection";
import { IList } from "../lists/IList";
import { IHashSet } from "./IHashSet";

export interface IMutableHashSet<T> extends IHashSet<T>, IMutableCollection<T> {
  add(element: T): void;
  addAll(elements: IList<T>): void;
  addArray(elements: T[]): void;
}
