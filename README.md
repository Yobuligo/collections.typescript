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

Each basic type has a specialization to handle either any type of data or map specific data (key value pairs). Therefore special sub types were introduced.

Additionally these types are split into an immutable and a mutable variant. Finally there are the following list types and their creation functions:

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

const initialElements = [{ firstname: "Stacey" , { firstname: "Jimmy" ];
const variant3 = listOf(initialElements);
```

To initialize elements of map types, an instance of type _Pair_ has to be passed into, which can be created by function _pair()_.

```
const map = mapOf(pair(1, 2), pair(3, 4));

const hashMap = hashMapOf(pair("one", "two"), pair("three", "four"));
```

## Basic functions

Basic functions are those functions, which are provided by every list.  
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

Returns _true_ if the passed in _element_ is not part of the list. Otherwise it returns _false_.

```
containsNot(element: T): boolean
```

### distinct

Returns a newly created list, which contains all elements of the origin list except for duplicates.  
Duplicates are identified by comparing the line type _T_, no matter if it is a scalar type or a reference type.

```
distinct(): IList<T>
```

### distinctBy

Returns a newly created list, which contains all elements of the origin list except for duplicates.  
Duplicates are identified by comparing the property key _K_ of the line type _T_, which is returned by the _selector_.

```
distinctBy<K extends keyof T>(selector: () => K): IList<T>
```

### elementAt

Returns the element at position _index_ or throws a _NoSuchElementException_ if _index_ is not assigned.

```
elementAt(index: number): T
```

### elementAtOrNull

Returns the element at position _index_ or returns _undefined_ if _index_ is not assigned.

```
elementAtOrNull(index: number): T | undefined
```

### filter

Returns a newly created list, which contains all elements who match the required conditions. The conditions have to be evaluated by function _predicate_.  
For a matching element the function _predicate_ returns _true_ otherwise _false_. If no element matches the filter an empty list is returned.

```
filter(predicate: (element: T) => boolean): IList<T>
```

### find

Returns the first element, which matches the required conditions. The conditions have to be evaluated by function _predicate_.  
For a matching element the function _predicate_ returns _true_ otherwise _false_. If no element matches the filter _undefined_ is returned.

```
find(predicate: (element: T) => boolean): T | undefined
```

### first

Returns the first element of that list or throws a _NoSuchElementException_ if the list is empty.

```
first(): T
```

### firstOrNull

Returns the first element of that list or returns _undefined_ if the list is empty.

```
firstOrNull(): T | undefined
```

### forEach

Iterates over all elements of that list and calls the function _block_ for each element.  
If _block_ returns a value the iteration is stopped and the value will be returned.

```
forEach<R>(block: (element: T, index: number) => R | undefined): R | undefined
```

### indexOf

Returns the index of the given _element_ or _-1_ if the element is not part of the list.

```
indexOf(element: T): number
```

### isEmpty

Returns _true_ if the list is empty or _false_ if the list contains at least one element.

```
isEmpty(): boolean
```

### isNotEmpty

Returns _true_ if the list contains at least one element or _false_ if the list is empty.

```
isNotEmpty(): boolean
```

### last

Returns the last element of that list or throws a _NoSuchElementException_ if the list is empty.

```
last(): T
```

### lastOrNull

Returns the last element of that list or returns _undefined_ if the list is empty.

```
lastOrNull(): T | undefined
```

### lastIndex

Returns the index of the last element in that list.

```
readonly lastIndex: number
```

### map

Returns a newly created list, which contains elements of type _R_, which were mapped by calling function _block_ for each list element and returning an element of type _R_ instead.  
If the list is empty an empty list is returned.

```
map<R>(block: (element: T) => R): IList<R>
```

### random

Returns a random element from the list or throws a _NoSuchElementException_ if the list is empty.

```
random(): T
```

### randomOrNull

Returns a random element from the list or returns _undefined_ if the list is empty.

```
randomOrNull(): T | undefined
```

### reversed

Returns a newly created list, which contains all elements in a reversed order.  
If the list is empty an empty list is returned.

```
reversed(): IList<T>
```

### size

Returns the number of elements in that list.

```
readonly size: number
```

### sortedBy

Returns a newly created, ascendingly sorted list. The sort criteria, which must be a key _K_ of the line type _T_, can be provided via function _selector_.  
If no sort criteria was specified the list element itself is used as sort criteria.

```
sortedBy<K extends keyof T>(selector?: () => K): IList<T>
```

### sortedByDescending

Returns a newly created, descendingly sorted list. The sort criteria, which must be a key _K_ of the line type _T_, can be provided via function _selector_.  
If no sort criteria was specified the list element itself is used as sort criteria.

```
sortedByDescending<K extends keyof T>(selector?: () => K): IList<T>
```

### toArray

Returns an array, which contains all elements of that list.

```
toArray(): T[]
```

### toHashSet

Returns a hash set, which contains all elements, except for duplicates, of that list.

```
toHashSet(): IHashSet<T>
```

### toList

Returns a list, which contains all elements of that list.

```
toList(): IList<T>
```

### toMutableHashSet

Returns a mutable hash set, which contains all elements, except for duplicates, of that list.

```
toMutableHashSet(): IMutableHashSet<T>
```

### toMutableList

Returns a mutable list, which contains all elements of that list.

```
toMutableList(): IMutableList<T>
```

## Basic Mutable functions

Basic mutable functions are those functions, which are provided by every mutable list.  
**Available for: mutableListOf(), mutableMapOf(), mutableHashSetOf(), mutableHashMapOf()**

### remove

Removes all instances of the given _element_ from the list and returns _true_. Returns _false_ if the given element is not part of the list.

```
remove(element: T): boolean
```

### removeAt

Removes the element at the given _index_ from the list and returns _true_. Returns _false_ if the element at _index_ doesn't exist.

```
removeAt(index: number): boolean
```

### removeAll

Removes all elements from the list.

```
removeAll(): void
```

### removeFirst

Removes the first element from the list and returns _true_. Returns _false_ if the list is empty.

```
removeFirst(): boolean
```

### removeLast

Removes the last element from the list and returns _true_. Returns _false_ if the list is empty.

```
removeLast(): boolean
```

## Mutable List functions

Mutable list functions are specific for the general list which can have duplicates.  
**Available for: mutableListOf(), mutableMapOf()**

### add

Adds the given _element_ to the list and returns _true_. Returns _false_ if the element couldn't be added.

```
add(element: T): boolean
```

Adds the given _element_ at position _index_ to the list and returns _true_. Returns _false_ if the element couldn't be added.  
Throws an _IllegalArgumentException_ if the index is out of bounce (greater than lastIndex + 1).

```
add(element: T, index: number): boolean
```

### addAll

Adds all given _elements_ of _IList_ to the current list and returns _true_. Returns _false_ if at least one element couldn't be added.

```
addAll(elements: IList<T>): boolean
```

Adds all given _elements_ of _IList_ at position _index_ to the current list and returns _true_. Returns _false_ if at least one element couldn't be added.  
Throws an _IllegalArgumentException_ if the index is out of bounce (greater than lastIndex + 1).

```
addAll(elements: IList<T>, index: number): boolean
```

### addArray

Adds all given _elements_ of the array to the current list and returns _true_. Returns _false_ if at least one element couldn't be added.

```
addArray(elements: T[]): boolean
```

Adds all given _elements_ of the array at position _index_ to the current list and returns _true_. Returns _false_ if at least one element couldn't be added.  
Throws an _IllegalArgumentException_ if the index is out of bounce (greater than lastIndex + 1).

```
addArray(elements: T[], index: number): boolean
```

## Mutable HashSet functions

Mutable hash set functions are specific for hash lists which can't have duplicates.  
**Available for: mutableHashSetOf(), mutableHashMapOf()**

### add

Adds the given _element_ to the list and returns _true_. Returns _false_ if the element couldn't be added.

```
add(element: T): boolean
```

### addAll

Adds all given _elements_ of _IList_ to the current list and returns _true_. Returns _false_ if at least one element couldn't be added.

```
addAll(elements: IList<T>): boolean
```

### addArray

Adds all given _elements_ of the array to the current list and returns _true_. Returns _false_ if at least one element couldn't be added.

```
addArray(elements: T[]): boolean
```

## Map functions

Map functions are specific for every map list type.  
**Available for: mapOf(), mutableMapOf(), hashMapOf(), mutableHashMapOf()**

### toHashMap

Returns a hash map, which contains all elements, except for duplicates, of that list.

```
toHashMap(): IHashMap<K, V>
```

### toMap

Returns a map, which contains all elements of that list.

```
toMap(): IMap<K, V>;
```

### toMutableHashMap

Returns a mutable hash map, which contains all elements, except for duplicates, of that list.

```
toMutableHashMap(): IMutableHashMap<K, V>;
```

### toMutableMap

Returns a mutable map, which contains all elements of that list.

```
toMutableMap(): IMutableMap<K, V>;
```
