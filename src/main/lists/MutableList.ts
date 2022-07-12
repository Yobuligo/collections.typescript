import { MutableCollection } from "../collections/MutableCollection";
import { IList } from "./IList";
import { IMutableList } from "./IMutableList";

export class MutableList<T>
  extends MutableCollection<T>
  implements IMutableList<T>
{
  addAll(elements: IList<T>): void;
  addAll(index: number, elements: IList<T>): void;
  addAll(index: unknown, elements?: unknown): void {
    if (elements === undefined) {
      const elementsTemp = index as IList<T>;
      elementsTemp.forEach((element) => {
        this.add(element);
      });
    } else {
      const indexTemp = index as number;
      const elementsTemp = elements as IList<T>;
      const elementsToIndex = this.elements.slice(0, indexTemp as number);
      const elementsFromIndex = this.elements.slice(
        indexTemp as number,
        this.elements.length
      );
      elementsTemp.forEach((element) => {
        elementsToIndex.push(element);
      });
      elementsToIndex.push(...elementsFromIndex);
      this.elements = elementsToIndex;
      this._size = this.elements.length;
    }
  }

  addArray(...elements: T[]): void;
  addArray(index: number, ...elements: T[]): void;
  addArray(index?: unknown, ...elements: T[]): void {
    if (index === undefined) {
      this.elements.push(...elements);
      this._size += elements.length;
    } else {
      throw new Error();
    }
  }
}
