import { NoSuchElementException } from "@yobuligo/core.typescript";
import {
  hashSetOf,
  listOf,
  mutableHashSetOf,
  mutableListOf,
} from "../Functions";
import { IHashSet } from "../hashSets/IHashSet";
import { IMutableHashSet } from "../hashSets/IMutableHashSet";
import { IList } from "../lists/IList";
import { IMutableList } from "../lists/IMutableList";
import { List } from "../lists/List";
import { ICollection } from "./ICollection";

export abstract class Collection<T> implements ICollection<T> {
  protected _size: number;
  protected elements: T[] = [];
  readonly lastIndex: number = 0;

  constructor(...elements: T[]) {
    this.elements = elements;
    this._size = this.elements.length;
  }

  public get size(): number {
    return this._size;
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

  elementAt(index: number): T {
    if (this.isEmpty() || this.elements[index] === undefined) {
      throw new NoSuchElementException(
        `Empty list does not contain element at index ${index}`
      );
    }
    return this.elements[index];
  }

  elementAtOrNull(index: number): T | undefined {
    if (this.isEmpty() || this.elements[index] === undefined) {
      return undefined;
    }
    return this.elements[index];
  }

  filter(block: (element: T) => boolean): IList<T> {
    const resultList: T[] = [];
    for (const element of this.elements) {
      if (block(element)) {
        resultList.push(element);
      }
    }
    return new List(...resultList);
  }

  find(block: (element: T) => boolean): T | undefined {
    for (const element of this.elements) {
      if (block(element)) {
        return element;
      }
    }
    return undefined;
  }

  first(): T {
    if (this.isEmpty()) {
      throw new NoSuchElementException("List is empty");
    }
    return this.elements[0];
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
      if (result != null) {
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

  last(): T {
    if (this.isEmpty()) {
      throw new NoSuchElementException("List is empty");
    }
    return this.elements[this.elements.length - 1];
  }

  lastOrNull(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements[this.elements.length - 1];
  }

  map<R>(block: (element: T) => R): ICollection<R> {
    const mappedElements = [];
    for (const element of this.elements) {
      const mappedElement = block(element);
      mappedElements.push(mappedElement);
    }
    return new List(...mappedElements);
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
