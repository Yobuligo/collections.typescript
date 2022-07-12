import { IList } from "../lists/IList";
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
