import { ICollection } from "./ICollection";
export interface IMutableCollection<T> extends ICollection<T> {
    remove(element: T): boolean;
    removeAt(index: number): boolean;
    removeAll(): void;
    removeFirst(): boolean;
    removeLast(): boolean;
}
