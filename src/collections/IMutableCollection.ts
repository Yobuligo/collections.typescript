import { TIndex } from "../Types";
import { ICollection } from "./ICollection";

export interface IMutableCollection<T> extends ICollection<T> {
  add(element: T): void;
  addAll(elements: T[]): void;
  remove(element: T): void;
  removeAt(index: TIndex): void;
  removeAll(): void;
  removeFirst(): void;
  removeLast(): void;
}
