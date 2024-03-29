import { expect } from "chai";
import { List } from "../../src/lists/List";
import Person from "../Person";
import { listOf } from "./../../src/Functions";
import { CollectionTests } from "./../CollectionTests";

new CollectionTests(
  List,
  (...elements) => {
    return listOf(...elements);
  },

  () => {
    describe("sort", () => {
      it("sorts scalar types and handles duplicates", () => {
        const list = listOf<number>(3, 2, 5, 1, 2).sortedBy();
        expect(list.elementAt(0)).equals(1);
        expect(list.elementAt(1)).equals(2);
        expect(list.elementAt(2)).equals(2);
        expect(list.elementAt(3)).equals(3);
        expect(list.elementAt(4)).equals(5);
      });

      it("sorts objects without prop in the same order as their were added to the origin list and handles duplicates", () => {
        const person1 = new Person("Donald");
        const person2 = new Person("Bertha");
        const person3 = new Person("Stacey");
        const person4 = new Person("Adam");
        const list = listOf(
          person1,
          person2,
          person3,
          person4,
          person2
        ).sortedBy();
        expect(list.elementAt(0)).equals(person1);
        expect(list.elementAt(1)).equals(person2);
        expect(list.elementAt(2)).equals(person3);
        expect(list.elementAt(3)).equals(person4);
        expect(list.elementAt(4)).equals(person2);
      });

      it("sorts objects by property and handles duplicates", () => {
        const person1 = new Person("Donald");
        const person2 = new Person("Bertha");
        const person3 = new Person("Stacey");
        const person4 = new Person("Adam");
        const list = listOf(
          person1,
          person2,
          person3,
          person4,
          person2
        ).sortedBy(() => {
          return "firstname";
        });
        expect(list.elementAt(0)).equals(person4);
        expect(list.elementAt(1)).equals(person2);
        expect(list.elementAt(2)).equals(person2);
        expect(list.elementAt(3)).equals(person1);
        expect(list.elementAt(4)).equals(person3);
      });
    });

    describe("sortByDescending", () => {
      it("sorts scalar types and handles duplicates", () => {
        const list = listOf<number>(3, 2, 5, 1, 2).sortedByDescending();
        expect(list.elementAt(0)).equals(5);
        expect(list.elementAt(1)).equals(3);
        expect(list.elementAt(2)).equals(2);
        expect(list.elementAt(3)).equals(2);
        expect(list.elementAt(4)).equals(1);
      });

      it("sorts objects without prop in the same order as their were added to the origin list and handles duplicates", () => {
        const person1 = new Person("Donald");
        const person2 = new Person("Bertha");
        const person3 = new Person("Stacey");
        const person4 = new Person("Adam");
        const list = listOf(
          person1,
          person2,
          person3,
          person4,
          person2
        ).sortedByDescending();
        expect(list.elementAt(0)).equals(person1);
        expect(list.elementAt(1)).equals(person2);
        expect(list.elementAt(2)).equals(person3);
        expect(list.elementAt(3)).equals(person4);
        expect(list.elementAt(4)).equals(person2);
      });

      it("sorts objects by property and handles duplicates", () => {
        const person1 = new Person("Donald");
        const person2 = new Person("Bertha");
        const person3 = new Person("Stacey");
        const person4 = new Person("Adam");
        const list = listOf(
          person1,
          person2,
          person3,
          person4,
          person2
        ).sortedByDescending(() => {
          return "firstname";
        });
        expect(list.elementAt(0)).equals(person3);
        expect(list.elementAt(1)).equals(person1);
        expect(list.elementAt(2)).equals(person2);
        expect(list.elementAt(3)).equals(person2);
        expect(list.elementAt(4)).equals(person4);
      });
    });
  }
).run();

// class Person {
//   constructor(
//     public firstname: string = "Stacey",
//     public lastname: string = "Starfish"
//   ) {}
// }

// class ListTest {
//   constructor(
//     private type: new () => ICollection<any>,
//     private creator: <T>(...elements: T[]) => IList<T>
//   ) {}

//   runTests() {
//     describe(`${this.type.name}`, () => {
//       describe("contains PETER", () => {
//         it("returns false for empty list", () => {
//           expect(this.creator().contains(1)).true;
//         });

//         it("returns false for unknown element", () => {
//           expect(this.creator(1, 2, 3).contains(4)).false;
//         });
//       });
//     });
//   }
// }

// const listTest = new ListTest(List, (...elements) => {
//   return listOf(...elements);
// });
// listTest.runTests();

// describe("List", () => {
//   describe("contains", () => {
//     it("returns false for empty list", () => {
//       expect(listOf<number>().contains(1)).false;
//     });

//     it("returns false for unknown element", () => {
//       expect(listOf(1, 2, 3).contains(4)).false;
//     });

//     it("returns true for known element", () => {
//       expect(listOf(1, 2, 3).contains(2)).true;
//     });
//   });

//   describe("containsAll", () => {
//     it("contains all elements for empty list", () => {
//       expect(listOf<number>().containsAll(1, 3, 5)).false;
//     });

//     it("contains all elements", () => {
//       expect(listOf(1, 2, 3, 4, 5).containsAll(1, 3, 5)).true;
//     });

//     it("contains not all elements", () => {
//       expect(listOf(1, 2, 3, 4, 5).containsAll(1, 3, 5, 6)).false;
//     });
//   });

//   describe("containsNot", () => {
//     it("returns true for empty list", () => {
//       expect(listOf<number>().containsNot(1)).true;
//     });
//     it("returns true for unknown element", () => {
//       expect(listOf(1, 2, 3).containsNot(4)).true;
//     });
//     it("returns false for known element", () => {
//       expect(listOf(1, 2, 3).containsNot(2)).false;
//     });
//   });

//   describe("distinct", () => {
//     it("returns distinct list with literal", () => {
//       const list = listOf(1, 1, 2, 3).distinct();
//       expect(list.size).equals(3);
//       expect(list.contains(1)).true;
//       expect(list.contains(2)).true;
//       expect(list.contains(3)).true;
//     });

//     it("returns distinct list with objects", () => {
//       const person1 = new Person();
//       const person2 = new Person();
//       const person3 = new Person();
//       const list = listOf(person1, person1, person2, person3).distinct();
//       expect(list.size).equals(3);
//       expect(list.contains(person1)).true;
//       expect(list.contains(person2)).true;
//       expect(list.contains(person3)).true;
//     });
//   });

//   describe("distinctBy", () => {
//     it("returns distinct list by selected property", () => {
//       const person1 = new Person();
//       const person2 = new Person();
//       const person3 = new Person("Bertha", "Bear");
//       const list = listOf(person1, person2, person3).distinctBy(() => {
//         return "firstname";
//       });
//       expect(list.contains(person1)).true;
//       expect(list.contains(person2)).false;
//       expect(list.contains(person3)).true;
//     });
//   });

//   describe("elementAt", () => {
//     it("returns NoSuchElementException for empty list", () => {
//       let throwsError = false;
//       try {
//         listOf().elementAt(3);
//       } catch (error) {
//         throwsError = true;
//       }
//       expect(throwsError).true;
//     });

//     it("returns NoSuchElementException for unknown index", () => {
//       let throwsError = false;
//       try {
//         listOf(1, 2, 3).elementAt(4);
//       } catch (error) {
//         throwsError = true;
//       }
//       expect(throwsError).true;
//     });

//     it("returns element at index", () => {
//       expect(listOf(1, 2, 3).elementAt(1)).equals(2);
//     });
//   });

//   describe("elementAtOrNull", () => {
//     it("returns undefined for empty list", () => {
//       expect(listOf().elementAtOrNull(3)).undefined;
//     });

//     it("returns undefined for unknown index", () => {
//       expect(listOf(1, 2, 3).elementAtOrNull(4)).undefined;
//     });

//     it("returns element at index", () => {
//       expect(listOf(1, 2, 3).elementAtOrNull(1)).equals(2);
//     });
//   });

//   describe("filter", () => {
//     it("returns filtered values", () => {
//       const resultList = listOf(1, 2, 3, 4, 5).filter((element) => {
//         return element > 1 && element < 5;
//       });
//       expect(resultList.contains(2)).true;
//       expect(resultList.contains(3)).true;
//       expect(resultList.contains(4)).true;
//     });

//     it("returns not, not filtered values", () => {
//       const resultList = listOf(1, 2, 3, 4, 5).filter((element) => {
//         return element > 1 && element < 5;
//       });
//       expect(resultList.contains(1)).false;
//       expect(resultList.contains(5)).false;
//     });

//     it("returns list instance for empty list", () => {
//       const resultList = listOf<number>().filter((element) => {
//         return element > 1 && element < 5;
//       });
//       expect(resultList).not.null;
//     });

//     it("returns list instance with no entries for empty list", () => {
//       const resultList = listOf<number>().filter((element) => {
//         return element > 1 && element < 5;
//       });
//       expect(resultList.size).equals(0);
//     });
//   });

//   describe("find", () => {
//     it("returns element which suits constraints", () => {
//       expect(
//         listOf(1, 2, 3, 4, 5).find((element) => {
//           return element === 3;
//         })
//       ).equals(3);
//     });

//     it("returns undefined if no element suits constraints", () => {
//       expect(
//         listOf(1, 2, 3, 4, 5).find((element) => {
//           return element === 6;
//         })
//       ).undefined;
//     });

//     it("returns undefined for empty list", () => {
//       expect(
//         listOf<number>().find((element) => {
//           return element === 5;
//         })
//       ).undefined;
//     });
//   });

//   describe("first", () => {
//     it("returns first element", () => {
//       expect(listOf(1, 2, 3, 4, 5).first()).equals(1);
//     });

//     it("throws NoSuchElementException for empty list", () => {
//       let throwError = false;
//       try {
//         listOf().first();
//       } catch (error) {
//         throwError = true;
//       }
//       expect(throwError).true;
//     });
//   });

//   describe("firstOrNull", () => {
//     it("returns element if not null", () => {
//       expect(listOf(1, 2, 3, 4, 5).firstOrNull()).equals(1);
//     });

//     it("returns undefined for empty list", () => {
//       expect(listOf().firstOrNull()).undefined;
//     });
//   });

//   describe("forEach", () => {
//     it("calls block for each element", () => {
//       let element1Called = false;
//       let element2Called = false;
//       let element3Called = false;
//       listOf(1, 2, 3).forEach((element) => {
//         switch (element) {
//           case 1: {
//             element1Called = true;
//             break;
//           }
//           case 2: {
//             element2Called = true;
//             break;
//           }
//           case 3: {
//             element3Called = true;
//             break;
//           }
//         }
//       });
//       expect(element1Called).true;
//       expect(element2Called).true;
//       expect(element3Called).true;
//     });

//     it("returns undefined for empty list", () => {
//       expect(
//         listOf<number>().forEach((element) => {
//           return 5;
//         })
//       ).undefined;
//     });

//     it("returns value with keyword return and finished iteration", () => {
//       expect(
//         listOf(1, 2, 3, 4, 5).forEach((element) => {
//           if (element === 3) {
//             return element;
//           }
//         })
//       ).equals(3);
//     });
//   });

//   describe("indexOf", () => {
//     it("returns correct index of element", () => {
//       expect(listOf(1, 2, 3, 4, 5).indexOf(3)).equals(2);
//     });

//     it("returns -1 for empty list", () => {
//       expect(listOf().indexOf(3)).equals(-1);
//     });

//     it("returns -1 for unknown element", () => {
//       expect(listOf(1, 2, 3).indexOf(4)).equals(-1);
//     });
//   });

//   describe("isEmpty", () => {
//     it("returns true for empty list", () => {
//       expect(listOf().isEmpty()).true;
//     });

//     it("returns false for filled list", () => {
//       expect(listOf(1, 2, 3).isEmpty()).false;
//     });
//   });

//   describe("isNotEmpty", () => {
//     it("returns true for filled list", () => {
//       expect(listOf(1, 2, 3).isNotEmpty()).true;
//     });

//     it("returns false for empty list", () => {
//       expect(listOf().isNotEmpty()).false;
//     });
//   });

//   describe("lastIndex", () => {
//     it("returns -1 for empty list", () => {
//       expect(listOf().lastIndex).equals(-1);
//     });

//     it("returns index for filled list", () => {
//       expect(listOf(1, 2, 3).lastIndex).equals(2);
//     });
//   });

//   describe("last", () => {
//     it("returns last element", () => {
//       expect(listOf(1, 2, 3).last()).equals(3);
//     });

//     it("throws NoSuchElementException for empty list", () => {
//       let throwsError = false;
//       try {
//         listOf<number>().last();
//       } catch (error) {
//         throwsError = true;
//       }
//       expect(throwsError).true;
//     });
//   });

//   describe("lastOrNull", () => {
//     it("returns last element", () => {
//       expect(listOf(1, 2, 3).lastOrNull()).equals(3);
//     });

//     it("returns undefined for empty list", () => {
//       expect(listOf<number>().lastOrNull()).undefined;
//     });
//   });

//   describe("map", () => {
//     it("returns mapped values", () => {
//       const resultList = listOf(1, 2, 3, 4, 5).map((element) => {
//         return element.toString();
//       });

//       expect(resultList.contains("1")).true;
//       expect(resultList.contains("2")).true;
//       expect(resultList.contains("3")).true;
//       expect(resultList.contains("4")).true;
//       expect(resultList.contains("5")).true;
//     });

//     it("returns a new initialized list", () => {
//       const list = listOf(1, 2, 3, 4, 5);
//       const resultList = list.map((element) => {
//         return element.toString();
//       });

//       expect(resultList).not.equals(list);
//     });

//     it("returns a new initialized list for for empty list", () => {
//       const resultList = listOf<number>().map((element) => {
//         return element.toString();
//       });
//       expect(resultList).not.null;
//     });

//     it("returns a new initialized but empty list", () => {
//       const resultList = listOf<number>().map((element) => {
//         return element.toString();
//       });
//       expect(resultList.isEmpty()).true;
//     });
//   });

//   describe("random", () => {
//     it("throws NoSuchElementException for empty list", () => {
//       const list = listOf<number>();
//       expect(list.random.bind(list)).throw(`List is empty`);
//     });

//     it("returns first element for only one element", () => {
//       expect(listOf(1).random() === 1).true;
//     });

//     it("returns all contained elements", () => {
//       let contains1 = false;
//       let contains2 = false;
//       let contains3 = false;
//       let containsUndefined = false;
//       let containsOthers = false;
//       const list = listOf(1, 2, 3);
//       repeat(100, () => {
//         switch (list.randomOrNull()) {
//           case undefined: {
//             containsUndefined = true;
//             break;
//           }
//           case 1: {
//             contains1 = true;
//             break;
//           }
//           case 2: {
//             contains2 = true;
//             break;
//           }
//           case 3: {
//             contains3 = true;
//             break;
//           }
//           default: {
//             containsOthers = true;
//             break;
//           }
//         }
//       });
//       expect(contains1).true;
//       expect(contains2).true;
//       expect(contains3).true;
//       expect(containsUndefined).false;
//       expect(containsOthers).false;
//     });
//   });

//   describe("randomOrNull", () => {
//     it("returns undefined for empty list", () => {
//       expect(listOf<number>().randomOrNull()).undefined;
//     });

//     it("returns first element for only one element", () => {
//       expect(listOf(1).randomOrNull() === 1).true;
//     });

//     it("returns all contained elements", () => {
//       let contains1 = false;
//       let contains2 = false;
//       let contains3 = false;
//       let containsUndefined = false;
//       let containsOthers = false;
//       const list = listOf(1, 2, 3);
//       repeat(100, () => {
//         switch (list.randomOrNull()) {
//           case undefined: {
//             containsUndefined = true;
//             break;
//           }
//           case 1: {
//             contains1 = true;
//             break;
//           }
//           case 2: {
//             contains2 = true;
//             break;
//           }
//           case 3: {
//             contains3 = true;
//             break;
//           }
//           default: {
//             containsOthers = true;
//             break;
//           }
//         }
//       });
//       expect(contains1).true;
//       expect(contains2).true;
//       expect(contains3).true;
//       expect(containsUndefined).false;
//       expect(containsOthers).false;
//     });
//   });

//   describe("reversed", () => {
//     it("returns empty list for empty list", () => {
//       const list: IList<number> = listOf<number>().reversed();
//       expect(list).not.undefined;
//     });

//     it("returns reversed list", () => {
//       const list = listOf<number>(1, 2, 3).reversed();
//       expect(list.elementAt(2)).equals(1);
//       expect(list.elementAt(1)).equals(2);
//       expect(list.elementAt(0)).equals(3);
//     });
//   });

//   describe("size", () => {
//     it("returns 0 for empty list", () => {
//       expect(listOf().size).equal(0);
//     });

//     it("returns correct size for filled list", () => {
//       expect(listOf(1, 2, 3).size).equals(3);
//     });
//   });

//   describe("sort", () => {
//     it("returns empty list of empty list", () => {
//       const list: IList<number> = listOf<number>().sortedBy();
//       expect(list).not.undefined;
//     });

//     it("sorts scalar types", () => {
//       const list = listOf<number>(3, 2, 5, 1, 2).sortedBy();
//       expect(list.elementAt(0)).equals(1);
//       expect(list.elementAt(1)).equals(2);
//       expect(list.elementAt(2)).equals(2);
//       expect(list.elementAt(3)).equals(3);
//       expect(list.elementAt(4)).equals(5);
//     });

//     it("sorts objects without prop in the same order as their were added to the origin list", () => {
//       const person1 = new Person("Donald");
//       const person2 = new Person("Bertha");
//       const person3 = new Person("Stacey");
//       const person4 = new Person("Adam");
//       const list = listOf(
//         person1,
//         person2,
//         person3,
//         person4,
//         person2
//       ).sortedBy();
//       expect(list.elementAt(0)).equals(person1);
//       expect(list.elementAt(1)).equals(person2);
//       expect(list.elementAt(2)).equals(person3);
//       expect(list.elementAt(3)).equals(person4);
//       expect(list.elementAt(4)).equals(person2);
//     });

//     it("sorts objects by property", () => {
//       const person1 = new Person("Donald");
//       const person2 = new Person("Bertha");
//       const person3 = new Person("Stacey");
//       const person4 = new Person("Adam");
//       const list = listOf(person1, person2, person3, person4, person2).sortedBy(
//         () => {
//           return "firstname";
//         }
//       );
//       expect(list.elementAt(0)).equals(person4);
//       expect(list.elementAt(1)).equals(person2);
//       expect(list.elementAt(2)).equals(person2);
//       expect(list.elementAt(3)).equals(person1);
//       expect(list.elementAt(4)).equals(person3);
//     });
//   });

//   describe("sortByDescending", () => {
//     it("returns empty list of empty list", () => {
//       const list: IList<number> = listOf<number>().sortedByDescending();
//       expect(list).not.undefined;
//     });

//     it("sorts scalar types", () => {
//       const list = listOf<number>(3, 2, 5, 1, 2).sortedByDescending();
//       expect(list.elementAt(0)).equals(5);
//       expect(list.elementAt(1)).equals(3);
//       expect(list.elementAt(2)).equals(2);
//       expect(list.elementAt(3)).equals(2);
//       expect(list.elementAt(4)).equals(1);
//     });

//     it("sorts objects without prop in the same order as their were added to the origin list", () => {
//       const person1 = new Person("Donald");
//       const person2 = new Person("Bertha");
//       const person3 = new Person("Stacey");
//       const person4 = new Person("Adam");
//       const list = listOf(
//         person1,
//         person2,
//         person3,
//         person4,
//         person2
//       ).sortedByDescending();
//       expect(list.elementAt(0)).equals(person1);
//       expect(list.elementAt(1)).equals(person2);
//       expect(list.elementAt(2)).equals(person3);
//       expect(list.elementAt(3)).equals(person4);
//       expect(list.elementAt(4)).equals(person2);
//     });

//     it("sorts objects by property", () => {
//       const person1 = new Person("Donald");
//       const person2 = new Person("Bertha");
//       const person3 = new Person("Stacey");
//       const person4 = new Person("Adam");
//       const list = listOf(
//         person1,
//         person2,
//         person3,
//         person4,
//         person2
//       ).sortedByDescending(() => {
//         return "firstname";
//       });
//       expect(list.elementAt(0)).equals(person3);
//       expect(list.elementAt(1)).equals(person1);
//       expect(list.elementAt(2)).equals(person2);
//       expect(list.elementAt(3)).equals(person2);
//       expect(list.elementAt(4)).equals(person4);
//     });
//   });

//   describe("toArray", () => {
//     it("returns empty array for empty list", () => {
//       const array = listOf<number>().toArray();
//       expect(array).not.undefined;
//     });

//     it("returns array with all entries for filled list", () => {
//       const array = listOf(1, 2, 3).toArray();
//       expect(array.length).equals(3);
//       expect(array[0]).equals(1);
//       expect(array[1]).equals(2);
//       expect(array[2]).equals(3);
//     });
//   });

//   describe("toHashSet", () => {
//     it("returns empty instance of hash set for empty list", () => {
//       const hashSet: IHashSet<number> = listOf<number>().toHashSet();
//       expect(hashSet).not.undefined;
//       expect(hashSet.size).equals(0);
//     });

//     it("returns hash set with all entries for filled list", () => {
//       let index = 0;
//       let called = false;
//       const hashSet = listOf(1, 2, 3).toHashSet();
//       expect(hashSet.size).equals(3);
//       hashSet.forEach((element) => {
//         index++;
//         called = true;
//         expect(element).equals(index);
//       });
//       expect(true).true;
//     });
//   });

//   describe("toList", () => {
//     it("returns empty instance of list for empty list", () => {
//       const list: IList<number> = listOf<number>().toList();
//       expect(list).not.undefined;
//       expect(list.size).equals(0);
//     });

//     it("returns list with all entries for filled list", () => {
//       let index = 0;
//       let called = false;
//       const list = listOf(1, 2, 3).toList();
//       expect(list.size).equals(3);
//       list.forEach((element) => {
//         index++;
//         called = true;
//         expect(element).equals(index);
//       });
//       expect(true).true;
//     });
//   });

//   describe("toMutableHashSet", () => {
//     it("returns empty instance of mutable hash set for empty list", () => {
//       const mutableHashSet: IMutableHashSet<number> =
//         listOf<number>().toMutableHashSet();
//       expect(mutableHashSet).not.undefined;
//       expect(mutableHashSet.size).equals(0);
//     });

//     it("returns hash set with all entries for filled list", () => {
//       let index = 0;
//       let called = false;
//       const mutableHashSet = listOf(1, 2, 3).toMutableHashSet();
//       expect(mutableHashSet.size).equals(3);
//       mutableHashSet.forEach((element) => {
//         index++;
//         called = true;
//         expect(element).equals(index);
//       });
//       expect(true).true;
//     });
//   });

//   describe("toMutableList", () => {
//     it("returns empty instance of mutable list for empty list", () => {
//       const mutableList: IMutableList<number> =
//         listOf<number>().toMutableList();
//       expect(mutableList).not.undefined;
//       expect(mutableList.size).equals(0);
//     });

//     it("returns mutable list with all entries for filled list", () => {
//       let index = 0;
//       let called = false;
//       const mutableList = listOf(1, 2, 3).toMutableList();
//       expect(mutableList.size).equals(3);
//       mutableList.forEach((element) => {
//         index++;
//         called = true;
//         expect(element).equals(index);
//       });
//       expect(true).true;
//     });
//   });
// });
