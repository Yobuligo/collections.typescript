import { ICollection } from "./ICollection";

export interface IMutableCollection<T, TIndex> extends ICollection<T, TIndex> {
  add(element: T): void;
  addAll(elements: T[]): void;
  remove(element: T): void;
  removeAt(index: TIndex): void;
  removeAll(): void;
  removeFirst(): void;
  removeLast(): void;
}
