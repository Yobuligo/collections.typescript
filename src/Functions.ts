import { IList } from "./lists/IList";
import { List } from "./lists/List";

export function listOf<T>(...elements: T[]): IList<T> {
  return new List(...elements);
}
