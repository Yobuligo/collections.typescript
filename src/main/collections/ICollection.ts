import { TIndex } from "./Type";

export interface ICollection<T> {
  readonly size: number;
  readonly lastIndex: number;
  contains(element: T): boolean;
  containsAll(...elements: T[]): boolean;
  elementAt(index: TIndex): T;
  elementAtOrNull(index: TIndex): T | null;
  filter(block: (element: T) => boolean): ICollection<T>;
  find(block: (element: T) => boolean): T | null;
  first(): T;
  firstOrNull(): T | null;
  forEach(block: (element: T) => any | null): T | null;
  indexOf(element: T): TIndex;
  isEmpty(): boolean;
  isNotEmpty(): boolean;
  last(): T;
  lastOrNull(): T | null;
  map<R>(block: (element: T) => R): ICollection<R>;
}
