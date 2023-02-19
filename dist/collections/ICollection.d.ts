import { IList } from "./../lists/IList";
import { ICollectionExtension } from "./ICollectionExtension";
export interface ICollection<T> extends ICollectionExtension<T> {
    readonly size: number;
    readonly lastIndex: number;
    contains(element: T): boolean;
    containsAll(...elements: T[]): boolean;
    containsNot(element: T): boolean;
    elementAt(index: number): T;
    elementAtOrNull(index: number): T | undefined;
    filter(block: (element: T) => boolean): IList<T>;
    find(block: (element: T) => boolean): T | undefined;
    first(): T;
    firstOrNull(): T | undefined;
    forEach<R>(block: (element: T, index: number) => R | undefined): R | undefined;
    indexOf(element: T): number;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    last(): T;
    lastOrNull(): T | undefined;
    map<R>(block: (element: T) => R): IList<R>;
}
