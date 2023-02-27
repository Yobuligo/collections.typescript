import { ICollection } from "./ICollection";

/**
 * An implementation of this interface represents a mutable collection.
 */
export interface IMutableCollection<T> extends ICollection<T> {
  remove(element: T): boolean;
  removeAt(index: number): boolean;
  removeAll(): void;
  removeFirst(): boolean;
  removeLast(): boolean;
}
