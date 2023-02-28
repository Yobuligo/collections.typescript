import { IHashSet } from "../hashSets/IHashSet";
import { IMutableHashSet } from "../hashSets/IMutableHashSet";
import { IList } from "../lists/IList";
import { IMutableList } from "../lists/IMutableList";
/**
 * An implementation of this interface provides extension functions.
 */
export interface ICollectionExtension<T> {
    /**
     * Returns an array, which contains all elements of that list.
     */
    toArray(): T[];
    /**
     * Returns a hash set, which contains all elements, except for duplicates, of that list.
     */
    toHashSet(): IHashSet<T>;
    /**
     * Returns a list, which contains all elements of that list.
     */
    toList(): IList<T>;
    /**
     * Returns a mutable hash set, which contains all elements, except for duplicates, of that list.
     */
    toMutableHashSet(): IMutableHashSet<T>;
    /**
     * Returns a mutable list, which contains all elements of that list.
     */
    toMutableList(): IMutableList<T>;
}
