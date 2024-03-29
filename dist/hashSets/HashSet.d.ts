import { IList } from "../lists/IList";
import { IMutableList } from "../lists/IMutableList";
import { IHashSet } from "./IHashSet";
import { IMutableHashSet } from "./IMutableHashSet";
export declare class HashSet<T> implements IHashSet<T> {
    protected elements: Map<T, number>;
    protected keys: T[];
    private nextCursor;
    get size(): number;
    get lastIndex(): number;
    constructor(...elements: T[]);
    contains(element: T): boolean;
    containsAll(...elements: T[]): boolean;
    containsNot(element: T): boolean;
    distinct(): IList<T>;
    distinctBy<K extends keyof T>(selector: () => K): IList<T>;
    elementAt(index: number): T;
    elementAtOrNull(index: number): T | undefined;
    filter(predicate: (element: T) => boolean): IList<T>;
    find(predicate: (element: T) => boolean): T | undefined;
    first(): T;
    firstOrNull(): T | undefined;
    forEach<R>(block: (element: T, index: number) => R | undefined): R | undefined;
    indexOf(element: T): number;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    last(): T;
    lastOrNull(): T | undefined;
    map<R>(block: (element: T) => R): IList<R>;
    random(): T;
    randomOrNull(): T | undefined;
    reversed(): IList<T>;
    sortedBy<K extends keyof T>(selector?: () => K): IList<T>;
    sortedByDescending<K extends keyof T>(selector: () => K): IList<T>;
    toArray(): T[];
    toHashSet(): IHashSet<T>;
    toList(): IList<T>;
    toMutableHashSet(): IMutableHashSet<T>;
    toMutableList(): IMutableList<T>;
    protected addElements(elements: T[]): boolean;
    protected addElement(element: T): boolean;
}
