import { hashGenerator } from "../Functions";
import { List } from "../lists/List";
import { IHashable } from "./IHashable";
import { IHashSet } from "./IHashSet";

export class HashSet<T> extends List<T> implements IHashSet<T> {
  constructor(...elements: T[]) {
    super();
    this.addElements(elements);
  }

  contains(element: T): boolean {
    if (this.isEmpty() || this.elements[this.getKey(element)] === undefined) {
      return false;
    } else {
      return true;
    }
  }

  protected addElement(element: T) {
    this.elements[this.getKey(element)] = element;
    this._size++;
  }

  protected getKey(element: T): string {
    if (typeof element == "object") {
      if (!IHashable.is(element)) {
        let anyRef = element as any;
        anyRef.hash = hashGenerator.generate();
        return anyRef.hash;
      } else {
        return element.hash;
      }
    } else {
      return element.toString();
    }
  }

  private addElements(elements: T[]) {
    for (const element of elements) {
      this.addElement(element);
    }
  }
}
