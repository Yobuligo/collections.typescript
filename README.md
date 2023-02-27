# collections.typescript

Collection for lists, maps, hashsets and hashmaps inspired by Kotlin syntax.

## Installation

Install the library via:

```
npm install --save @yobuligo/collections.typescript
```

## Usage

There are 4 basic types of lists and each basic type is split into an immutable and mutable variant. The following table shows the list types and the functions to create each variant.
| **type** | **immutable** | **mutable**  
|-------------|---------------|--------------------
| **list** | listOf() | mutableListOf()  
| **map** | mapOf() | mutableMapOf()  
| **hashSet** | hashSetOf() | mutableHashSetOf()
| **hashMap** | hashMapOf() | mutableHashMapOf()

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
