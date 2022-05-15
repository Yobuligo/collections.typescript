import { TIndex } from "../collections/Type";
import { HashSet } from "./HashSet";
import { IMutableHashSet } from "./IMutableHashSet";

export class MutableHashSet<T>
  extends HashSet<T>
  implements IMutableHashSet<T>
{
  add(element: T): void {
    this.addElement(element);
  }

  addAll(...elements: T[]): void {
    for (const element of elements) {
      this.addElement(element);
    }
  }

  remove(element: T): void {
    if (!this.contains(element)) {
      return;
    }
    this.elements.splice(this.elements.indexOf(element), 1);
    this._size--;
  }

  removeAt(index: TIndex): void {
    if (this.isEmpty() || this.elements[index] === undefined) {
      return;
    }
    const indexInternal = this.elements.indexOf(this.elements[index]);
    this.elements.splice(indexInternal, 1);
    this._size--;
  }

  removeAll(): void {
    this.elements.splice(0);
    this._size = 0;
  }

  removeFirst(): void {
    this.remove(this.first());
  }

  removeLast(): void {
    this.remove(this.last());
  }
}
