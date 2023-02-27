import { ICollection } from "./ICollection";

/**
 * An implementation of this interface represents a mutable collection.
 */
export interface IMutableCollection<T> extends ICollection<T> {
  /**
   * Removes the given *{@link element}* from the list and returns *true*. Returns *false* if the given element is not part of the list.
   */
  remove(element: T): boolean;

  /**
   * Removes the element at the given *{@link index}* from the list and returns *true*. Returns *false* if the element at *{@link index}* doesn't exist.
   */
  removeAt(index: number): boolean;
  removeAll(): void;
  removeFirst(): boolean;
  removeLast(): boolean;
}
