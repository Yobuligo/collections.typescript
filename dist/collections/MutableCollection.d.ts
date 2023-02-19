import { Collection } from "./Collection";
import { IMutableCollection } from "./IMutableCollection";
export declare class MutableCollection<T> extends Collection<T> implements IMutableCollection<T> {
    remove(element: T): void;
    removeAt(index: number): void;
    removeAll(): void;
    removeFirst(): void;
    removeLast(): void;
}
