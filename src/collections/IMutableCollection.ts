import { ICollection } from "./ICollection";

export interface IMutableCollection<T> extends ICollection<T> {
  remove(element: T): void;
  removeAt(index: number): void;
  removeAll(): void;
  removeFirst(): void;
  removeLast(): void;
}
