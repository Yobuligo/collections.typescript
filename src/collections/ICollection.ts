import { IList } from "./../lists/IList";
import { ICollectionExtension } from "./ICollectionExtension";

/**
 * An implementation of this interface represents a list that keeps list elements of a specific type.
 */
export interface ICollection<T> extends ICollectionExtension<T> {
  /**
   * Returns the number of elements within that list.
   */
  readonly size: number;
  readonly lastIndex: number;
  contains(element: T): boolean;
  containsAll(...elements: T[]): boolean;
  containsNot(element: T): boolean;
  distinct(): IList<T>;
  distinctBy<K extends keyof T>(selector: () => K): IList<T>;
  elementAt(index: number): T;
  elementAtOrNull(index: number): T | undefined;
  filter(block: (element: T) => boolean): IList<T>;
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
  // sortedBy<K extends keyof T>(selector: () => K): IList<T>;
  // sortedByDescending<K extends keyof T>(selector: () => K): IList<T>;
}
