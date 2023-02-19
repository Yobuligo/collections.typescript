import { Collection } from "./Collection";
import { IMutableCollection } from "./IMutableCollection";

export abstract class MutableCollection<T>
  extends Collection<T>
  implements IMutableCollection<T>
{
  remove(element: T): void {
    if (this.containsNot(element)) {
      return;
    }
    this.elements.splice(this.elements.indexOf(element), 1);
    this._size--;
  }

  removeAt(index: number): void {
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
