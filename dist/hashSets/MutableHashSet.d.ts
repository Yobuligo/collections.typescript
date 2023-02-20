import { IList } from "../lists/IList";
import { HashSet } from "./HashSet";
import { IMutableHashSet } from "./IMutableHashSet";
export declare class MutableHashSet<T> extends HashSet<T> implements IMutableHashSet<T> {
    add(element: T): void;
    addAll(elements: IList<T>): void;
    addArray(...elements: T[]): void;
    remove(element: T): boolean;
    removeAt(index: number): boolean;
    removeAll(): void;
    removeFirst(): boolean;
    removeLast(): boolean;
}
