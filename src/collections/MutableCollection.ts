import { Collection } from "./Collection";
import { IMutableCollection } from "./IMutableCollection";

export class MutableCollection<T>
  extends Collection<T>
  implements IMutableCollection<T>
{
  add(element: T): void {
    this.elements.push(element);
    this._size++;
  }

  addAll(elements: T[]): void {
    this.elements.push(...elements);
    this._size += elements.length;
  }

  remove(element: T): void {
    if (this.isEmpty()) {
      return;
    }
    this.elements.splice(this.indexOf(element), 1);
    this._size--;
  }

  removeAt(index: number): void {
    if (this.isEmpty()) {
      return;
    }
    this.elements.splice(index, 1);
    this._size--;
  }

  removeAll(): void {
    throw new Error("Method not implemented.");
  }

  removeFirst(): void {
    throw new Error("Method not implemented.");
  }

  removeLast(): void {
    throw new Error("Method not implemented.");
  }
}
