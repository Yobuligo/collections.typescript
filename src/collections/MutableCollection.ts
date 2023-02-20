import { TODO } from "@yobuligo/core.typescript";
import { Collection } from "./Collection";
import { IMutableCollection } from "./IMutableCollection";

export abstract class MutableCollection<T>
  extends Collection<T>
  implements IMutableCollection<T>
{
  remove(element: T): boolean {
    if (this.containsNot(element)) {
      return false;
    }
    this.elements.splice(this.elements.indexOf(element), 1);
    this._size--;
    return true;
  }

  removeAt(index: number): boolean {
    if (this.isEmpty() || this.elements[index] === undefined) {
      return false;
    }
    const indexInternal = this.elements.indexOf(this.elements[index]);
    this.elements.splice(indexInternal, 1);
    this._size--;
    return true;
  }

  removeAll(): void {
    this.elements.splice(0);
    this._size = 0;
  }

  removeFirst(): boolean {
    // ifNotNull(this.firstOrNull(), (element)=>{
    //   return this.remove()
    // })

    // return false
    TODO();
  }

  removeLast(): boolean {
    // ifNotNull(this.lastOrNull(), (element)=>{
    //   return this.remove()
    // })

    // return false
    TODO();
  }
}
