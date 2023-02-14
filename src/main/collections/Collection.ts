import { IndexOutOfBoundsException } from "../exceptions/IndexOutOfBoundsException";
import { NoSuchElementException } from "../exceptions/NoSuchElementException";
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
import { ICollection } from "./ICollection";
import { TIndex } from "./Type";

export class Collection<T> implements ICollection<T> {
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
    if (this.isEmpty() || this.elements.indexOf(element) == -1) {
      return false;
    } else {
      return true;
    }
  }

  containsAll(...elements: T[]): boolean {
    if (this.isEmpty()) {
      return false;
    }

    for (const element of elements) {
      if (!this.contains(element)) {
        return false;
      }
    }
    return true;
  }

  elementAt(index: TIndex): T {
    if (this.isEmpty() || this.elements[index] === undefined) {
      throw new IndexOutOfBoundsException(
        `Empty list does not contain element at index ${index}`
      );
    }
    return this.elements[index];
  }

  elementAtOrNull(index: TIndex): T | undefined {
    if (this.isEmpty() || this.elements[index] === undefined) {
      return undefined;
    }
    return this.elements[index];
  }

  filter(block: (element: T) => boolean): ICollection<T> {
    let resultList: T[] = [];
    for (const object of this.elements) {
      if (block(object)) {
        resultList.push(object);
      }
    }
    return new Collection(...resultList);
  }

  find(block: (element: T) => boolean): T | undefined{
    for (const object of this.elements) {
      if (block(object)) {
        return object;
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
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.elements[0];
    }
  }

  forEach(block: (element: T) => any | undefined): T | undefined{
    for (const element of this.elements) {
      const result = block(element);
      if (result != null) {
        return result;
      }
    }
    return undefined;
  }

  indexOf(element: T): TIndex {
    return this.elements.indexOf(element);
  }

  isEmpty(): boolean {
    if (this._size == 0) {
      return true;
    } else {
      return false;
    }
  }

  isNotEmpty(): boolean {
    if (this.isEmpty()) {
      return false;
    } else {
      return true;
    }
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
    let mappedElements = [];
    for (const object of this.elements) {
      const mappedElement = block(object);
      mappedElements.push(mappedElement);
    }
    return new Collection(...mappedElements);
  }

  toArray(): T[] {
    const arrayList: T[] = [];
    for (const element of this.elements) {
      arrayList.push(element);
    }
    return arrayList;
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
