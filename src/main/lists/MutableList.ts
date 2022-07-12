import { MutableCollection } from "../collections/MutableCollection";
import { IList } from "./IList";
import { IMutableList } from "./IMutableList";

export class MutableList<T>
  extends MutableCollection<T>
  implements IMutableList<T>
{
  add(element: T): void;
  add(index: number, element: T): void;
  add(index: unknown, element?: unknown): void {
    const elementsTemp: T[] = [];
    if (element === undefined) {
      const elementTemp = index as T;
      elementsTemp.push(elementTemp);
      this.addArray(...elementsTemp);
    } else {
      const indexTemp = index as number;
      const elementTemp = element as T;
      elementsTemp.push(elementTemp);
      this.addArray(indexTemp, ...elementsTemp);
    }
  }

  addAll(elements: IList<T>): void;
  addAll(index: number, elements: IList<T>): void;
  addAll(index: unknown, elements?: unknown): void {
    if (elements === undefined) {
      const elementsTemp = index as IList<T>;
      this.addArray(...elementsTemp.toArray());
    } else {
      const indexTemp = index as number;
      const elementsTemp = elements as IList<T>;
      this.addArray(indexTemp, ...elementsTemp.toArray());
    }
  }

  addArray(...elements: T[]): void;
  addArray(index: number, ...elements: T[]): void;
  addArray(index?: unknown, ...elements: T[]): void {
    if (elements === undefined) {
      const elementsTemp = index as T[];
      this.elements.push(...elementsTemp);
      this._size += elementsTemp.length;
    } else {
      const indexTemp = index as number;
      const elementsTemp = elements as T[];
      const elementsResult = this.elements.slice(0, indexTemp as number);
      elementsResult.push(...elementsTemp);
      elementsResult.push(
        ...this.elements.slice(indexTemp as number, this.elements.length)
      );
      this.elements = elementsResult;
      this._size = this.elements.length;
    }
  }
}
