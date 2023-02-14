import { ICollectionExtension } from "./ICollectionExtension";
import { TIndex } from "./Type";
export interface ICollection<T> extends ICollectionExtension<T> {
    readonly size: number;
    readonly lastIndex: number;
    contains(element: T): boolean;
    containsAll(...elements: T[]): boolean;
    elementAt(index: TIndex): T;
    elementAtOrNull(index: TIndex): T | undefined;
    filter(block: (element: T) => boolean): ICollection<T>;
    find(block: (element: T) => boolean): T | undefined;
    first(): T;
    firstOrNull(): T | undefined;
    forEach(block: (element: T) => any | undefined): T | undefined;
    indexOf(element: T): TIndex;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    last(): T;
    lastOrNull(): T | undefined;
    map<R>(block: (element: T) => R): ICollection<R>;
}
