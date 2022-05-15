import { IMutableList } from "../lists/IMutableList";
import { IHashSet } from "./IHashSet";

export interface IMutableHashSet<T> extends IHashSet<T>, IMutableList<T> {}
