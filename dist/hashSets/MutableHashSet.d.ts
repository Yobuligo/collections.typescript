import { IList } from "../lists/IList";
import { HashSet } from "./HashSet";
import { IMutableHashSet } from "./IMutableHashSet";
export declare class MutableHashSet<T> extends HashSet<T> implements IMutableHashSet<T> {
    add(element: T): boolean;
    addAll(elements: IList<T>): boolean;
    addArray(elements: T[]): boolean;
    remove(element: T): boolean;
    removeAt(index: number): boolean;
    removeAll(): void;
    removeFirst(): boolean;
    removeLast(): boolean;
}
