# collections.typescript

Collection for lists, maps, hashsets and hashmaps inspired by Kotlin syntax.

## Installation

Install the library via:

```
npm install --save @yobuligo/collections.typescript
```

## List types

There are 2 basic types, the general list and the hash set.  
While the general list can have duplicated elements, the hash set can contain each element only once, as a hash is generated for each element, which is used as key to add the element to the list. That allows a much faster access especially for lists with many elements.

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
const variant3 = listOf(initialElements);
```

## Basic functions

Basic functions are those functions, which are provided by each list.  
**Available for: All list types**

### contains

Returns _true_ if the passed in _element_ is part of the list. Otherwise it returns _false_.

```
contains(element: T): boolean
```

### containsAll

Returns _true_ if all passed in _elements_ are part of the list. Otherwise it returns _false_.

```
containsAll(...elements: T[]): boolean
```

### containsNot
Returns *true* if the passed in *{@link element}* is not part of the list. Otherwise it returns *false*.
```
containsNot(element: T): boolean
```

### distinct
Returns a newly created list, which contains all elements of the origin list except for duplicates.  
Duplicates are identified by comparing the line type *{@link T}*, no matter if it is a scalar type or a reference type.
```
distinct(): IList<T>
```

### distinctBy
Returns a newly created list, which contains all elements of the origin list except for duplicates.  
Duplicates are identified by comparing the property key *{@link K}* of the line type *{@link T}*, which is returned by the *{@link selector}*.
```
distinctBy<K extends keyof T>(selector: () => K): IList<T>
```

### elementAt
```
```

### elementAtOrNull
```
```

### filter
```
```

### find
```
```

### first
```
```

### firstOrNull
```
```

### forEach
```
```

### indexOf
```
```

### isEmpty
```
```

### isNotEmpty
```
```

### last
```
```

### lastOrNull
```
```

### lastIndex
```
```

### map
```
```

### random
```
```

### randomOrNull
```
```

### reversed
```
```

### size
```
```

### sortedBy
```
```

### sortedByDescending
```
```

## Basic Mutable functions

Basic mutable functions are those functions, which are provided by each mutable list.  
**Available for: mutableListOf(), mutableMapOf(), mutableHashSetOf(), mutableHashMapOf()**

## Mutable List functions

Mutable list functions are specific for the general list which can have duplicates.  
**Available for: mutableListOf(), mutableMapOf()**

## Mutable HashSet functions

Mutable hash set functions are specific for hash list which can't have duplicates.  
**Available for: mutableHashSetOf(), mutableHashMapOf()**

## Map functions

Map functions are specific for each map list type.  
**Available for: mapOf(), mutableMapOf(), hashMapOf(), mutableHashMapOf()**
