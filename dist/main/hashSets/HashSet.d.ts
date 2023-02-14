import { List } from "../lists/List";
import { IHashSet } from "./IHashSet";
export declare class HashSet<T> extends List<T> implements IHashSet<T> {
    constructor(...elements: T[]);
    contains(element: T): boolean;
    protected addElement(element: T): void;
    protected getKey(element: T): number;
    private addElements;
}
