import { IMutableCollection } from "../collections/IMutableCollection";
import { IList } from "./IList";

export interface IMutableList<T> extends IMutableCollection<T> {
  /**
   * Adds the given *{@link element}* to the list and returns *true*. Returns *false* if the element couldn't added (e.g. in case of hash sets).
   */
  add(element: T): boolean;

  /**
   * Adds the given *{@link element}* at position to the list and returns *true*. Returns *false* if the element couldn't added (e.g. in case of hash sets).
   */  
  add(element: T, index: number): boolean;

  /**
   * Adds all given *{@link elements}* of *{@link IList}* to the current list and returns *true*. Returns *false* if at least one element couldn't added (e.g. in case of hash sets).
   */
  addAll(elements: IList<T>): boolean;
  addAll(elements: IList<T>, index: number): boolean;

  /**
   * Adds all given *{@link elements}* of the array to the current list and returns *true*. Returns *false* if at least one element couldn't added (e.g. in case of hash sets).
   */
  addArray(elements: T[]): boolean;
  addArray(elements: T[], index: number): boolean;
}
