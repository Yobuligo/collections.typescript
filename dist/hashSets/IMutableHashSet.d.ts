import { IMutableCollection } from "../collections/IMutableCollection";
import { IHashSet } from "./IHashSet";
export interface IMutableHashSet<T> extends IHashSet<T>, IMutableCollection<T> {
}
