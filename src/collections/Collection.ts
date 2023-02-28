import { error, NoSuchElementException } from "@yobuligo/core.typescript";
import { hashSetOf, listOf, mutableHashSetOf } from "../Functions";
import { IHashSet } from "../hashSets/IHashSet";
import { IMutableHashSet } from "../hashSets/IMutableHashSet";
import { IList } from "../lists/IList";
import { IMutableList } from "../lists/IMutableList";
import { List } from "../lists/List";
import { mutableListOf } from "./../Functions";
import { ICollection } from "./ICollection";
import { SortDirection } from "./SortDirection";
import { Sorter } from "./Sorter";

export abstract class Collection<T> implements ICollection<T> {
  protected _size: number;
  protected elements: T[] = [];

  constructor(...elements: T[]) {
    this.elements = elements;
    this._size = this.elements.length;
  }

  contains(element: T): boolean {
    return !this.containsNot(element);
  }

  containsAll(...elements: T[]): boolean {
    if (this.isEmpty()) {
      return false;
    }

    for (const element of elements) {
      if (this.containsNot(element)) {
        return false;
      }
    }
    return true;
  }

  containsNot(element: T): boolean {
    return this.isEmpty() || this.elements.indexOf(element) == -1;
  }

  distinct(): IList<T> {
    const mutableHashSet = mutableHashSetOf<T>();
    mutableHashSet.addArray(this.elements);
    return mutableHashSet.toList();
  }

  distinctBy<K extends keyof T>(selector: () => K): IList<T> {
    const distinctProp = selector();
    const propIndex = mutableHashSetOf<T[K]>();
    const mutableList = mutableListOf<T>();
    for (const element of this.elements) {
      const propValue = element[distinctProp];
      if (propIndex.add(propValue)) {
        mutableList.add(element);
      }
    }
    return mutableList.toList();
  }

  elementAt(index: number): T {
    return (
      this.elementAtOrNull(index) ??
      error(
        new NoSuchElementException(
          `Empty list does not contain element at index ${index}`
        )
      )
    );
  }

  elementAtOrNull(index: number): T | undefined {
    if (this.isEmpty() || this.elements[index] === undefined) {
      return undefined;
    }
    return this.elements[index];
  }

  filter(predicate: (element: T) => boolean): IList<T> {
    const resultList: T[] = [];
    for (const element of this.elements) {
      if (predicate(element)) {
        resultList.push(element);
      }
    }
    return new List(...resultList);
  }

  find(predicate: (element: T) => boolean): T | undefined {
    for (const element of this.elements) {
      if (predicate(element)) {
        return element;
      }
    }
    return undefined;
  }

  first(): T {
    return (
      this.firstOrNull() ?? error(new NoSuchElementException("List is empty"))
    );
  }

  firstOrNull(): T | undefined {
    return this.elements[0];
  }

  forEach<R>(
    block: (element: T, index: number) => R | undefined
  ): R | undefined {
    let index = 0;
    for (const element of this.elements) {
      const result = block(element, index);
      index++;
      if (result !== undefined) {
        return result;
      }
    }
    return undefined;
  }

  indexOf(element: T): number {
    return this.elements.indexOf(element);
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  isNotEmpty(): boolean {
    return !this.isEmpty();
  }

  public get lastIndex(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.elements.length - 1;
  }

  last(): T {
    return (
      this.lastOrNull() ?? error(new NoSuchElementException("List is empty"))
    );
  }

  lastOrNull(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.elements.length - 1];
  }

  map<R>(block: (element: T) => R): IList<R> {
    const mappedElements: R[] = [];
    for (const element of this.elements) {
      const mappedElement = block(element);
      mappedElements.push(mappedElement);
    }
    return new List(...mappedElements);
  }

  random(): T {
    return (
      this.randomOrNull() ?? error(new NoSuchElementException("List is empty"))
    );
  }

  randomOrNull(): T | undefined {
    const index = Math.floor(Math.random() * (this.lastIndex + 1));
    return this.elementAtOrNull(index);
  }

  reversed(): IList<T> {
    const mutableList = mutableListOf<T>();
    for (let index = this.lastIndex; index >= 0; index--) {
      mutableList.add(this.elements[index]);
    }
    return mutableList.toList();
  }

  sortedBy<K extends keyof T>(selector?: () => K): IList<T> {
    return listOf(...Sorter.sort(this.elements, SortDirection.ASC, selector));
  }

  sortedByDescending<K extends keyof T>(selector: () => K): IList<T> {
    return listOf(...Sorter.sort(this.elements, SortDirection.DESC, selector));
  }

  public get size(): number {
    return this._size;
  }

  toArray(): T[] {
    return [...this.elements];
  }

  toHashSet(): IHashSet<T> {
    return hashSetOf(...this.elements);
  }

  toList(): IList<T> {
    return listOf(...this.elements);
  }

  toMutableHashSet(): IMutableHashSet<T> {
    return mutableHashSetOf(...this.elements);
  }

  toMutableList(): IMutableList<T> {
    return mutableListOf(...this.elements);
  }
}
