import { IMutableCollection } from "../collections/IMutableCollection";
import { IList } from "./../lists/IList";
import { IHashSet } from "./IHashSet";
/**
 * An implementation of this interface represents a mutable hash set.
 * A list whose elements are organized by hash, which provides a much faster access but with more memory consumption and without sorting.
 */
export interface IMutableHashSet<T> extends IHashSet<T>, IMutableCollection<T> {
    /**
     * Adds the given *{@link element}* to the list and returns *true*. Returns *false* if the element couldn't be added.
     */
    add(element: T): boolean;
    /**
     * Adds all given *{@link elements}* of *{@link IList}* to the current list and returns *true*. Returns *false* if at least one element couldn't be added.
     */
    addAll(elements: IList<T>): boolean;
    /**
     * Adds all given *{@link elements}* of the array to the current list and returns *true*. Returns *false* if at least one element couldn't be added.
     */
    addArray(elements: T[]): boolean;
}
