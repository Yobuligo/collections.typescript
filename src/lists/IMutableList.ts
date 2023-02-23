import { IMutableCollection } from "../collections/IMutableCollection";
import { IList } from "./IList";

export interface IMutableList<T> extends IMutableCollection<T> {
  add(element: T): boolean;
  add(element: T, index: number): boolean;
  addAll(elements: IList<T>): boolean;
  addAll(elements: IList<T>, index: number): boolean;
  addArray(elements: T[]): boolean;
  addArray(elements: T[], index: number): boolean;
}
