import { IList } from "../lists/IList";
/**
 * An implementation of this interface represents a hash set.
 * A list whose elements are organized by hash, which provides a much faster access but with more memory consumption and without sorting.
 */
export interface IHashSet<T> extends IList<T> {
}
