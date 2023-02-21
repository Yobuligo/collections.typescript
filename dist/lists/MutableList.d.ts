import { MutableCollection } from "../collections/MutableCollection";
import { IList } from "./IList";
import { IMutableList } from "./IMutableList";
export declare class MutableList<T> extends MutableCollection<T> implements IMutableList<T> {
    add(element: T): void;
    add(element: T, index: number): void;
    addAll(elements: IList<T>): void;
    addAll(elements: IList<T>, index: number): void;
    addArray(elements: T[]): void;
    addArray(elements: T[], index: number): void;
}
