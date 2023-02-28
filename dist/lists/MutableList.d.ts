import { MutableCollection } from "../collections/MutableCollection";
import { IList } from "./IList";
import { IMutableList } from "./IMutableList";
export declare class MutableList<T> extends MutableCollection<T> implements IMutableList<T> {
    add(element: T): boolean;
    add(element: T, index: number): boolean;
    addAll(elements: IList<T>): boolean;
    addAll(elements: IList<T>, index: number): boolean;
    addArray(elements: T[]): boolean;
    addArray(elements: T[], index: number): boolean;
}
