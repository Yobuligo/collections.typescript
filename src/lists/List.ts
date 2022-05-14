import { Collection } from "../collections/Collection";
import { IList } from "./IList";

export class List<T> extends Collection<T> implements IList<T> {}
