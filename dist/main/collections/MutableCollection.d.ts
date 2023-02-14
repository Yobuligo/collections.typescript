import { Collection } from "./Collection";
import { IMutableCollection } from "./IMutableCollection";
import { TIndex } from "./Type";
export declare class MutableCollection<T> extends Collection<T> implements IMutableCollection<T> {
    remove(element: T): void;
    removeAt(index: TIndex): void;
    removeAll(): void;
    removeFirst(): void;
    removeLast(): void;
}
