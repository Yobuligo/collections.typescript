import { Collection } from "./Collection";
import { IMutableCollection } from "./IMutableCollection";
export declare abstract class MutableCollection<T> extends Collection<T> implements IMutableCollection<T> {
    remove(element: T): boolean;
    removeAt(index: number): boolean;
    removeAll(): void;
    removeFirst(): boolean;
    removeLast(): boolean;
}
