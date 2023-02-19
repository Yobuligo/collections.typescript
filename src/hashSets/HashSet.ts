import { List } from "../lists/List";
import { IHashSet } from "./IHashSet";

export class HashSet<T> extends List<T> implements IHashSet<T> {
  private hashIndex: number = 0;
  private hashKeys: Map<T, number> = new Map();

  constructor(...elements: T[]) {
    super();
    this.addElements(elements);
  }

  contains(element: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    const hashKey = this.findHashKey(element);
    if (hashKey === undefined || this.elements[hashKey] === undefined) {
      return false;
    }

    return true;
  }

  protected addElement(element: T) {
    this.elements[this.fetchHashKey(element)] = element;
    this._size++;
  }

  private addElements(elements: T[]) {
    for (const element of elements) {
      this.addElement(element);
    }
  }

  private fetchHashKey(element: T): number {
    return this.findHashKey(element) ?? this.createHashKey(element);
  }

  private findHashKey(element: T): number | undefined {
    return this.hashKeys.get(element);
  }

  private createHashKey(element: T): number {
    this.hashIndex++;
    this.hashKeys.set(element, this.hashIndex);
    return this.hashIndex;
  }
}
