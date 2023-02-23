import { ifNotNull } from "@yobuligo/core.typescript";
import { IList } from "../lists/IList";
import { HashSet } from "./HashSet";
import { IMutableHashSet } from "./IMutableHashSet";

export class MutableHashSet<T>
  extends HashSet<T>
  implements IMutableHashSet<T>
{
  add(element: T): boolean {
    return this.addElement(element);
  }

  addAll(elements: IList<T>): boolean {
    let success = true;
    elements.forEach((element) => {
      if (this.add(element) === false) {
        success = false;
      }
    });
    return success;
  }

  addArray(elements: T[]): boolean {
    return this.addElements(elements);
  }

  remove(element: T): boolean {
    const cursor = this.elements.get(element);
    if (cursor !== undefined) {
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
    let passed = false;
    ifNotNull(this.firstOrNull(), (value) => {
      passed = this.remove(value);
    });
    return passed;
  }

  removeLast(): boolean {
    let passed = false;
    ifNotNull(this.lastOrNull(), (value) => {
      passed = this.remove(value);
    });
    return passed;
  }
}
