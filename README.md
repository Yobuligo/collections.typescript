# collections.typescript

Collection for lists, maps, hashsets and hashmaps inspired by Kotlin syntax.

## Installation

Install the library via:

```
npm install --save @yobuligo/collections.typescript
```

## List types

There are 2 basic types, the general list and the hash set.  
While the general list can have redundant elements, the hash set can contain each element only once, as a hash is generated for each element, which is used as key to add the element to the list. That allows a much faster access especially for lists with many elements.

Each basic type has a specialization to handle any type of data or map specific data, which means key value pairs. Therefore special sub types where introduced.

Last but not least these types are split into an immutable and a mutable variant. Finally there are the following list types and its creation functions:

| **type**    | **immutable** | **mutable**        |
| ----------- | ------------- | ------------------ |
| **list**    | listOf()      | mutableListOf()    |
| **map**     | mapOf()       | mutableMapOf()     |
| **hashSet** | hashSetOf()   | mutableHashSetOf() |
| **hashMap** | hashMapOf()   | mutableHashMapOf() |

Each list type has the same basic set of methods to request information about the list elements, like contains, distinct, filter, isEmpty, etc.  
In addition, a list can have more specific methods depending on the list type. E.g. mutable lists have methods to add and remove elements, hash lists have no method to add an element at a given index and map lists can be converted to other map types.

## Instantiation

A list can be created by giving the list type followed by the word _Of_. To initialize the list while creating it, it is possible to hand over elements.
```
const variant1 = listOf(1, 2, 3);

const variant2 = listOf(...["First", "Second", "Third"]);

const initialElements = [{ firstname: "Stacey" }, { firstname: "Jimmy" }];
const variant3 = mutableListOf(initialElements);
```

## list

The list is the simplest

## map

## hashSet

## hashMap

### General functions

```
contains
elementAt
...
```

```
const list = listOf(1, 2, 3);
```

```
const mutableList = mutableListOf(1, 2, 3);
mutableList.add(4);
```

```
const hashSet = hashSetOf(1, 2, 3);
```

```
const mutableHashList = mutableHashSetOf(1, 2, 3);
mutableHashList.add(4);
```

```
const map = mapOf(pair(1, 1));
```

```
const mutableMap = mutableMapOf(pair(1, 1));
mutableMap.add(pair(2, 2));
```

```
const hashMap = hashMapOf(pair(1, 1));
```

```
const mutableHashMap = mutableHashMapOf(pair(1, 1));
mutableHashMap.add(pair(2, 2));
```

## Immutable and Mutable functions

```
readonly size: number;
readonly lastIndex: number;
contains(element: T): boolean;
containsAll(...elements: T[]): boolean;
containsNot(element: T): boolean;
elementAt(index: number): T;
elementAtOrNull(index: number): T | undefined;
filter(block: (element: T) => boolean): IList<T>;
find(block: (element: T) => boolean): T | undefined;
first(): T;
firstOrNull(): T | undefined;
forEach<R>(
  block: (element: T, index: number) => R | undefined
): R | undefined;
indexOf(element: T): number;
isEmpty(): boolean;
isNotEmpty(): boolean;
last(): T;
lastOrNull(): T | undefined;
map<R>(block: (element: T) => R): IList<R>;
```

## Mutable Functions

```
  add(element: T): void;
  addAll(elements: IList<T>): void;
  addArray(elements: T[]): void;
  remove(element: T): boolean;
  removeAt(index: number): boolean;
  removeAll(): void;
  removeFirst(): boolean;
  removeLast(): boolean;
```
