import { IllegalArgumentException } from "@yobuligo/core.typescript";
import { IMutableCollection } from "../collections/IMutableCollection";
import { IList } from "./IList";

/**
 * An implementation of this interface represents a mutable list.
 */
export interface IMutableList<T> extends IMutableCollection<T> {
  /**
   * Adds the given *{@link element}* to the list and returns *true*. Returns *false* if the element couldn't added (e.g. in case of hash sets).
   */
  add(element: T): boolean;

  /**
   * Adds the given *{@link element}* at position *{@link index}* to the list and returns *true*. Returns *false* if the element couldn't added (e.g. in case of hash sets).
   * Throws an *{@link IllegalArgumentException}* if the index is out of bounce (greater than lastIndex + 1).
   */
  add(element: T, index: number): boolean;

  /**
   * Adds all given *{@link elements}* of *{@link IList}* to the current list and returns *true*. Returns *false* if at least one element couldn't added (e.g. in case of hash sets).
   */
  addAll(elements: IList<T>): boolean;

  /**
   * Adds all given *{@link elements}* of *{@link IList}* at position *{@link index}* to the current list and returns *true*. Returns *false* if at least one element couldn't added (e.g. in case of hash sets).
   * Throws an *{@link IllegalArgumentException}* if the index is out of bounce (greater than lastIndex + 1).
   */
  addAll(elements: IList<T>, index: number): boolean;

  /**
   * Adds all given *{@link elements}* of the array to the current list and returns *true*. Returns *false* if at least one element couldn't added (e.g. in case of hash sets).
   */
  addArray(elements: T[]): boolean;

  /**
   * Adds all given *{@link elements}* of the array at position *{@link index}* to the current list and returns *true*. Returns *false* if at least one element couldn't added (e.g. in case of hash sets).
   * Throws an *{@link IllegalArgumentException}* if the index is out of bounce (greater than lastIndex + 1).
   */
  addArray(elements: T[], index: number): boolean;
}
