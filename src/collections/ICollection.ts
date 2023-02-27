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
   * Returns *true* if the passed in *{@link element}* is part of the list. Otherwise it returns false.
   */
  contains(element: T): boolean;

  /**
   * Returns *true* if all passed in *{@link elements}* are part of the list. Otherwise it returns false.
   */
  containsAll(...elements: T[]): boolean;

  /**
   * Returns *true* if the passed in *{@link element}* is not part of the list. Otherwise it returns true.
   */
  containsNot(element: T): boolean;

  /**
   * Returns a new created list, which contains all elements of the origin list beside duplicates, no matter if *{@link T}* is a scalar type or a reference type.
   */
  distinct(): IList<T>;

  /**
   * Returns a new created list, which contains all elements of the origin list beside duplicates. Duplicates are identified by comparing the property key of *{@link T}*, which is returned by the *{@link selector}*.
   */
  distinctBy<K extends keyof T>(selector: () => K): IList<T>;

  /**
   * Returns the element at position *{@link index}* or throws a *{@link NoSuchElementException}* exception if *{@link index}* is not assigned.
   */
  elementAt(index: number): T;

  /**
   * Returns the element at position *{@link index}* or returns *undefined* if *{@link index}* is not assigned.
   */
  elementAtOrNull(index: number): T | undefined;

  /**
   * Returns a new created list, which contains all elements who match the filter provided by function *{@link block}*. If no element matches the filter an empty list is returned.
   */
  filter(block: (element: T) => boolean): IList<T>;

  /**
   * Returns the first element, which matches the filter provided by function *{@link block}*. If no element matches the filter *undefined* is returned.
   */
  find(block: (element: T) => boolean): T | undefined;
  first(): T;
  firstOrNull(): T | undefined;
  forEach<R>(
    block: (element: T, index: number) => R | undefined
  ): R | undefined;
  indexOf(element: T): number;
  isEmpty(): boolean;
  isNotEmpty(): boolean;
  last(): T;
  lastOrNull(): T | undefined;
  map<R>(block: (element: T) => R): IList<R>;
  random(): T;
  randomOrNull(): T | undefined;
  reversed(): IList<T>;
  sortedBy<K extends keyof T>(selector?: () => K): IList<T>;
  sortedByDescending<K extends keyof T>(selector?: () => K): IList<T>;
}
