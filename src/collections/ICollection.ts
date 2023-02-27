import { NoSuchElementException } from "@yobuligo/core.typescript";
import { IList } from "./../lists/IList";
import { ICollectionExtension } from "./ICollectionExtension";

/**
 * An implementation of this interface represents a list that keeps list elements of a specific type.
 */
export interface ICollection<T> extends ICollectionExtension<T> {
  /**
   * Returns the number of elements in that list.
   */
  readonly size: number;

  /**
   * Returns the index of the last element in that list.
   */
  readonly lastIndex: number;

  /**
   * Returns *true* if the passed in *{@link element}* is part of the list. Otherwise it returns *false*.
   */
  contains(element: T): boolean;

  /**
   * Returns *true* if all passed in *{@link elements}* are part of the list. Otherwise it returns *false*.
   */
  containsAll(...elements: T[]): boolean;

  /**
   * Returns *true* if the passed in *{@link element}* is not part of the list. Otherwise it returns *false*.
   */
  containsNot(element: T): boolean;

  /**
   * Returns a newly created list, which contains all elements of the origin list except for duplicates.
   * Duplicates are identified by comparing the line type *{@link T}*, no matter if it is a scalar type or a reference type.
   */
  distinct(): IList<T>;

  /**
   * Returns a newly created list, which contains all elements of the origin list except for duplicates.
   * Duplicates are identified by comparing the property key *{@link K}* of the line type *{@link T}*, which is returned by the *{@link selector}*.
   */
  distinctBy<K extends keyof T>(selector: () => K): IList<T>;

  /**
   * Returns the element at position *{@link index}* or throws a *{@link NoSuchElementException}* if *{@link index}* is not assigned.
   */
  elementAt(index: number): T;

  /**
   * Returns the element at position *{@link index}* or returns *undefined* if *{@link index}* is not assigned.
   */
  elementAtOrNull(index: number): T | undefined;

  /**
   * Returns a newly created list, which contains all elements who match the required conditions. The conditions have to be evaluated by function *{@link block}*.
   * For a matching element the function *{@link block}* returns *true* otherwise *false*. If no element matches the filter an empty list is returned.
   */
  filter(block: (element: T) => boolean): IList<T>;

  /**
   * Returns the first element, which matches the required conditions. The conditions have to be evaluated by function *{@link block}*.
   * For a matching element the function *{@link block}* returns *true* otherwise *false*. If no element matches the filter *undefined* is returned.
   */
  find(block: (element: T) => boolean): T | undefined;

  /**
   * Returns the first element of that list or throws a *{@link NoSuchElementException}* if the list is empty.
   */
  first(): T;

  /**
   * Returns the first element of that list or returns *undefined* if the list is empty.
   */
  firstOrNull(): T | undefined;

  /**
   * Iterates over all elements of that list and calls the function *{@link block}* for each element.
   * If *{@link block}* returns a value the iteration is stopped and the value will be returned.
   */
  forEach<R>(
    block: (element: T, index: number) => R | undefined
  ): R | undefined;

  /**
   * Returns the index of the given *{@link element}* or *-1* if the element is not part of the list.
   */
  indexOf(element: T): number;

  /**
   * Returns *true* if the list is empty or *false* if the list contains at least one element.
   */
  isEmpty(): boolean;

  /**
   * Returns *true* if the list contains at least one element or *false* if the list is empty.
   */
  isNotEmpty(): boolean;

  /**
   * Returns the last element of that list or throws a *{@link NoSuchElementException}* if the list is empty.
   */
  last(): T;

  /**
   * Returns the last element of that list or returns *undefined* if the list is empty.
   */
  lastOrNull(): T | undefined;

  /**
   * Returns a newly created list, which contains elements of type *{@link R}*, which were mapped by calling function *{@link block}* for each list element and returning an element of type *{@link R}* instead.
   * If the list is empty an empty list is returned.
   */
  map<R>(block: (element: T) => R): IList<R>;

  /**
   * Returns a random element from the list or throws a *{@link NoSuchElementException}* if the list is empty.
   */
  random(): T;

  /**
   * Returns a random element from the list or returns *undefined* if the list is empty.
   */
  randomOrNull(): T | undefined;

  /**
   * Returns a newly created list, which contains all elements in a reversed order.
   * If the list is empty an empty list is returned.
   */
  reversed(): IList<T>;

  /**
   * Returns a newly created, ascendingly sorted list. The sort criteria, which must be a key *{@link K}* of the line type *{@link T}*, can be provided via function *{@link selector}*.
   * If no sort criteria was specified the list element itself is used as sort criteria.
   */
  sortedBy<K extends keyof T>(selector?: () => K): IList<T>;

  /**
   * Returns a newly created, descendingly sorted list. The sort criteria, which must be a key *{@link K}* of the line type *{@link T}*, can be provided via function *{@link selector}*.
   * If no sort criteria was specified the list element itself is used as sort criteria.
   */
  sortedByDescending<K extends keyof T>(selector?: () => K): IList<T>;
}
