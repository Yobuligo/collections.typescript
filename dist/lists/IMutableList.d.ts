import { IMutableCollection } from "../collections/IMutableCollection";
import { IList } from "./IList";
export interface IMutableList<T> extends IMutableCollection<T> {
    add(element: T): void;
    add(element: T, index: number): void;
    addAll(elements: IList<T>): void;
    addAll(elements: IList<T>, index: number): void;
    addArray(elements: T[]): void;
    addArray(elements: T[], index: number): void;
}
