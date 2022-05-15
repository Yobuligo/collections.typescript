import { ICollection } from "./ICollection";
import { TIndex } from "./Type";

export interface IMutableCollection<T> extends ICollection<T> {
  add(element: T): void;
  addAll(...elements: T[]): void;
  remove(element: T): void;
  removeAt(index: TIndex): void;
  removeAll(): void;
  removeFirst(): void;
  removeLast(): void;
}
