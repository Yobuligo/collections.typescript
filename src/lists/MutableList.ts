import { MutableCollection } from "../collections/MutableCollection";
import { IList } from "./IList";
import { IMutableList } from "./IMutableList";

export class MutableList<T>
  extends MutableCollection<T>
  implements IMutableList<T>
{
  add(element: T): void;
  add(element: T, index: number): void;
  add(element: unknown, index?: unknown): void {
    if (index !== undefined) {
      this.addArray([element as T], index as number);
    } else {
      this.addArray([element as T]);
    }
  }

  addAll(elements: IList<T>): void;
  addAll(elements: IList<T>, index: number): void;
  addAll(elements: unknown, index?: unknown): void {
    if (index !== undefined) {
      this.addArray((elements as IList<T>).toArray(), index as number);
    } else {
      this.addArray((elements as IList<T>).toArray());
    }
  }

  addArray(elements: T[]): void;
  addArray(elements: T[], index: number): void;
  addArray(elements: unknown, index?: unknown): void {
    if (index !== undefined) {
      const cursor = index as number;
      const leftList = this.elements.slice(0, cursor);
      const rightList = this.elements.slice(cursor, this.elements.length);
      this.elements = [...leftList, ...(elements as T[]), ...rightList];
    } else {
      this.elements.push(...(elements as T[]));
    }
    this._size = this.elements.length;
  }
}
