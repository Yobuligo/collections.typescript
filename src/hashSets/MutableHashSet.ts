import { IList } from "../lists/IList";
import { HashSet } from "./HashSet";
import { IMutableHashSet } from "./IMutableHashSet";

export class MutableHashSet<T>
  extends HashSet<T>
  implements IMutableHashSet<T>
{
  add(element: T): void {
    this.addElement(element);
  }

  addAll(elements: IList<T>): void {
    elements.forEach((element) => {
      this.add(element);
    });
  }

  addArray(elements: T[]): void {
    this.addElements(elements);
  }

  remove(element: T): boolean {
    const cursor = this.elements.get(element);
    if (cursor) {
      this.elements.delete(element);
      this.keys.splice(cursor, 1);
      return true;
    }
    return false;
  }

  removeAt(index: number): boolean {
    const element = this.keys[index];
    if (element) {
      this.elements.delete(element);
      this.keys.splice(index, 1);
      return true;
    }
    return false;
  }

  removeAll(): void {
    this.elements = new Map();
    this.keys = [];
  }

  removeFirst(): boolean {
    return this.remove(this.first());
  }

  removeLast(): boolean {
    return this.remove(this.last());
  }
}
