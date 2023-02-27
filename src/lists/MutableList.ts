import { IllegalArgumentException } from "@yobuligo/core.typescript";
import { MutableCollection } from "../collections/MutableCollection";
import { IList } from "./IList";
import { IMutableList } from "./IMutableList";

export class MutableList<T>
  extends MutableCollection<T>
  implements IMutableList<T>
{
  add(element: T): boolean;
  add(element: T, index: number): boolean;
  add(element: unknown, index?: unknown): boolean {
    if (index !== undefined) {
      return this.addArray([element as T], index as number);
    } else {
      return this.addArray([element as T]);
    }
  }

  addAll(elements: IList<T>): boolean;
  addAll(elements: IList<T>, index: number): boolean;
  addAll(elements: unknown, index?: unknown): boolean {
    if (index !== undefined) {
      return this.addArray((elements as IList<T>).toArray(), index as number);
    } else {
      return this.addArray((elements as IList<T>).toArray());
    }
  }

  addArray(elements: T[]): boolean;
  addArray(elements: T[], index: number): boolean;
  addArray(elements: unknown, index?: unknown): boolean {
    if (index !== undefined && index !== null) {
      if (index > this.lastIndex + 1) {
        throw new IllegalArgumentException(
          `Error when adding elements. The index is out of bounce. The index must be smaller than ${
            this.lastIndex + 1
          }`
        );
      }
      const cursor = index as number;
      const leftList = this.elements.slice(0, cursor);
      const rightList = this.elements.slice(cursor, this.elements.length);
      this.elements = [...leftList, ...(elements as T[]), ...rightList];
    } else {
      this.elements.push(...(elements as T[]));
    }
    this._size = this.elements.length;
    return true;
  }
}
