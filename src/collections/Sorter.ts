import { ISorter } from "./ISorter";
import { SortDirection } from "./SortDirection";

class SorterDefault implements ISorter {
  sort<T, K extends keyof T>(
    elements: T[],
    sortDirection: SortDirection,
    selector?: (() => K) | undefined
  ): T[] {
    const sortedList = [...elements];
    const sortProp = selector?.();
    if (sortProp) {
      sortedList.sort((left, right) => {
        const leftPropValue = left[sortProp];
        const rightPropValue = right[sortProp];
        if (leftPropValue === rightPropValue) {
          return 0;
        }

        if (sortDirection === SortDirection.ASC) {
          if (leftPropValue < rightPropValue) {
            return -1;
          }
        } else {
          if (rightPropValue < leftPropValue) {
            return -1;
          }
        }

        return 1;
      });
    } else {
      if (sortDirection === SortDirection.ASC) {
        sortedList.sort();
      } else {
        sortedList.sort((left, right) => {
          if (right === left) {
            return 0;
          }

          if (right < left) {
            return -1;
          }

          return 1;
        });
      }
    }
    return sortedList;
  }
}

export const Sorter = new SorterDefault();
