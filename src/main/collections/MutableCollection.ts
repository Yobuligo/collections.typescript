import { Collection } from "./Collection";
import { IMutableCollection } from "./IMutableCollection";
import { TIndex } from "./Type";

export class MutableCollection<T>
  extends Collection<T>
  implements IMutableCollection<T>
{
  add(element: T): void {
    this.elements.push(element);
    this._size++;
  }

  addAll(...elements: T[]): void {
    this.elements.push(...elements);
    this._size += elements.length;
  }

  remove(element: T): void {
    if (this.isEmpty()) {
      return;
    }
    this.elements.splice(this.indexOf(element) as number, 1);
    this._size--;
  }

  removeAt(index: TIndex): void {
    if (this.isEmpty()) {
      return;
    }
    this.elements.splice(index as number, 1);
    this._size--;
  }

  removeAll(): void {
    this.elements.splice(0);
    this._size = 0;
  }

  removeFirst(): void {
    this.removeAt(1);
  }

  removeLast(): void {
    if (this.isEmpty()) {
      return;
    }
    this.removeAt(this.elements.length - 1);
  }
}
