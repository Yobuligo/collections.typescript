import { MutableCollection } from "../collections/MutableCollection";
import { IList } from "./IList";
import { IMutableList } from "./IMutableList";
export declare class MutableList<T> extends MutableCollection<T> implements IMutableList<T> {
    add(element: T): void;
    add(index: number, element: T): void;
    addAll(elements: IList<T>): void;
    addAll(index: number, elements: IList<T>): void;
    addArray(...elements: T[]): void;
    addArray(index: number, ...elements: T[]): void;
}
