import { ISorter } from "./ISorter";
import { SortDirection } from "./SortDirection";
declare class SorterDefault implements ISorter {
    sort<T, K extends keyof T>(elements: T[], sortDirection: SortDirection, selector?: (() => K) | undefined): T[];
}
export declare const Sorter: SorterDefault;
export {};
