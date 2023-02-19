import { IMutableCollection } from "../collections/IMutableCollection";
import { IList } from "./IList";
export interface IMutableList<T> extends IMutableCollection<T> {
    add(element: T): void;
    add(index: number, element: T): void;
    addAll(elements: IList<T>): void;
    addAll(index: number, elements: IList<T>): void;
    addArray(...elements: T[]): void;
    addArray(index: number, ...elements: T[]): void;
}
