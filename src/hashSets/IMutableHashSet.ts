import { IMutableCollection } from "../collections/IMutableCollection";
import { IList } from "../lists/IList";
import { IHashSet } from "./IHashSet";

export interface IMutableHashSet<T> extends IHashSet<T>, IMutableCollection<T> {
  add(element: T): boolean;
  addAll(elements: IList<T>): boolean;
  addArray(elements: T[]): boolean;
}
