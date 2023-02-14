import { IHashSet } from "../hashSets/IHashSet";
import { IMutableHashSet } from "../hashSets/IMutableHashSet";
import { IList } from "../lists/IList";
import { IMutableList } from "../lists/IMutableList";
export interface ICollectionExtension<T> {
    toArray(): T[];
    toHashSet(): IHashSet<T>;
    toList(): IList<T>;
    toMutableHashSet(): IMutableHashSet<T>;
    toMutableList(): IMutableList<T>;
}
