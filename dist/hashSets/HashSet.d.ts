import { List } from "../lists/List";
import { IHashSet } from "./IHashSet";
export declare class HashSet<T> extends List<T> implements IHashSet<T> {
    private hashIndex;
    private hashKeys;
    constructor(...elements: T[]);
    contains(element: T): boolean;
    protected addElement(element: T): void;
    private addElements;
    private fetchHashKey;
    private findHashKey;
    private createHashKey;
}
