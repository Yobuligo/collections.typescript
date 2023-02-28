import { ICollection } from "./ICollection";
/**
 * An implementation of this interface represents a mutable collection.
 */
export interface IMutableCollection<T> extends ICollection<T> {
    /**
     * Removes all instances of the given *{@link element}* from the list and returns *true*. Returns *false* if the given element is not part of the list.
     */
    remove(element: T): boolean;
    /**
     * Removes the element at the given *{@link index}* from the list and returns *true*. Returns *false* if the element at *{@link index}* doesn't exist.
     */
    removeAt(index: number): boolean;
    /**
     * Removes all elements from the list.
     */
    removeAll(): void;
    /**
     * Removes the first element from the list and returns *true*. Returns *false* if the list is empty.
     */
    removeFirst(): boolean;
    /**
     * Removes the last element from the list and returns *true*. Returns *false* if the list is empty.
     */
    removeLast(): boolean;
}
