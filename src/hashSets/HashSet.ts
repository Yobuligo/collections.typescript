import { error, NoSuchElementException } from "@yobuligo/core.typescript";
import { IList } from "../lists/IList";
import { IMutableList } from "../lists/IMutableList";
import {
  hashSetOf,
  listOf,
  mutableHashSetOf,
  mutableListOf,
} from "./../Functions";
import { List } from "./../lists/List";
import { IHashSet } from "./IHashSet";
import { IMutableHashSet } from "./IMutableHashSet";

export class HashSet<T> implements IHashSet<T> {
  protected elements: Map<T, number> = new Map();
  protected keys: T[] = [];
  private cursor: number = 0;

  public get size(): number {
    return this.elements.size;
  }

  public get lastIndex(): number {
    return this.cursor;
  }

  constructor(...elements: T[]) {
    this.addElements(elements);
  }

  contains(element: T): boolean {
    return this.elements.has(element);
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
    return !this.elements.has(element);
  }

  elementAt(index: number): T {
    return (
      this.elementAtOrNull(index) ??
      error(
        new NoSuchElementException(
          `List does not contain element at index ${index}`
        )
      )
    );
  }

  elementAtOrNull(index: number): T | undefined {
    return this.keys[index];
  }

  filter(block: (element: T) => boolean): IList<T> {
    const resultList: T[] = [];
    this.keys.forEach((element) => {
      if (block(element)) {
        resultList.push(element);
      }
    });
    return new List(...resultList);
  }

  find(block: (element: T) => boolean): T | undefined {
    for (const element of this.keys) {
      if (element !== undefined && block(element)) {
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
    for (const element of this.keys) {
      if (element !== undefined) {
        return element;
      }
    }
    return undefined;
  }

  forEach<R>(
    block: (element: T, index: number) => R | undefined
  ): R | undefined {
    let returnValue = undefined;
    this.elements.forEach((key, element) => {
      const result = block(element, key);
      if (result !== undefined) {
        returnValue = result;
        return returnValue;
      }
    });
    return returnValue;
  }

  indexOf(element: T): number {
    return this.elements.get(element) ?? -1;
  }

  isEmpty(): boolean {
    return this.elements.size === 0;
  }

  isNotEmpty(): boolean {
    return !this.isEmpty();
  }

  last(): T {
    return (
      this.lastOrNull() ?? error(new NoSuchElementException("List is empty"))
    );
  }

  lastOrNull(): T | undefined {
    for (let i = this.cursor; i > 0; i--) {
      if (this.keys[i] !== undefined) {
        return this.keys[i];
      }
    }
    return undefined;
  }

  map<R>(block: (element: T) => R): IList<R> {
    const mappedElements: R[] = [];
    this.keys.forEach((element) => {
      const mappedElement = block(element);
      mappedElements.push(mappedElement);
    });
    return new List(...mappedElements);
  }

  toArray(): T[] {
    const resultList: T[] = [];
    this.keys.forEach((element) => {
      resultList.push(element);
    });
    return resultList;
  }

  toHashSet(): IHashSet<T> {
    return hashSetOf(...this.toArray());
  }

  toList(): IList<T> {
    return listOf(...this.toArray());
  }

  toMutableHashSet(): IMutableHashSet<T> {
    return mutableHashSetOf(...this.toArray());
  }

  toMutableList(): IMutableList<T> {
    return mutableListOf(...this.toArray());
  }

  protected addElements(elements: T[]) {
    for (const element of elements) {
      this.addElement(element);
    }
  }

  protected addElement(element: T) {
    this.elements.set(element, this.cursor);
    this.keys[this.cursor] = element;
    this.cursor++;
  }
}
