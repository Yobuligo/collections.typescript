import { SortDirection } from "./SortDirection";

export interface ISorter {
  sort<T, K extends keyof T>(
    elements: T[],
    sortDirection: SortDirection,
    selector?: () => K
  ): T[];
}
