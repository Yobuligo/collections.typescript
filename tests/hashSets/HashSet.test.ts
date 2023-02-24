import { repeat } from "@yobuligo/core.typescript";
import { expect } from "chai";
import { hashSetOf } from "../../src/Functions";
import { IHashSet } from "../../src/hashSets/IHashSet";
import { IMutableHashSet } from "../../src/hashSets/IMutableHashSet";
import { IList } from "../../src/lists/IList";
import { IMutableList } from "../../src/lists/IMutableList";

class Person {
  constructor(
    public firstname: string = "Stacey",
    public lastname: string = "Starfish"
  ) {}
}

describe("HashSet", () => {
  describe("contains", () => {
    it("returns false for empty hash set", () => {
      expect(hashSetOf<number>().contains(1)).false;
    });

    it("returns false for unknown element", () => {
      expect(hashSetOf(1, 2, 3).contains(4)).false;
    });

    it("returns true for known element", () => {
      expect(hashSetOf(1, 2, 3).contains(2)).true;
    });
  });

  describe("containsAll", () => {
    it("contains all elements for empty hash set", () => {
      expect(hashSetOf<number>().containsAll(1, 3, 5)).false;
    });

    it("contains all elements", () => {
      expect(hashSetOf(1, 2, 3, 4, 5).containsAll(1, 3, 5)).true;
    });

    it("contains not all elements", () => {
      expect(hashSetOf(1, 2, 3, 4, 5).containsAll(1, 3, 5, 6)).false;
    });
  });

  describe("containsNot", () => {
    it("returns true for empty hash set", () => {
      expect(hashSetOf<number>().containsNot(1)).true;
    });
    it("returns true for unknown element", () => {
      expect(hashSetOf(1, 2, 3).containsNot(4)).true;
    });
    it("returns false for known element", () => {
      expect(hashSetOf(1, 2, 3).containsNot(2)).false;
    });
  });

  describe("distinct", () => {
    it("returns distinct list with literal", () => {
      const list = hashSetOf(1, 1, 2, 3).distinct();
      expect(list.size).equals(3);
      expect(list.contains(1)).true;
      expect(list.contains(2)).true;
      expect(list.contains(3)).true;
    });

    it("returns distinct list with objects", () => {
      const person1 = new Person();
      const person2 = new Person();
      const person3 = new Person();
      const list = hashSetOf(person1, person1, person2, person3).distinct();
      expect(list.size).equals(3);
      expect(list.contains(person1)).true;
      expect(list.contains(person2)).true;
      expect(list.contains(person3)).true;
    });
  });

  describe("distinctBy", () => {
    it("returns distinct list by selected property", () => {
      const person1 = new Person();
      const person2 = new Person();
      const person3 = new Person("Bertha", "Bear");
      const list = hashSetOf(person1, person2, person3).distinctBy(() => {
        return "firstname";
      });
      expect(list.contains(person1)).true;
      expect(list.contains(person2)).false;
      expect(list.contains(person3)).true;
    });
  });

  describe("elementAt", () => {
    it("returns NoSuchElementException for empty hash set", () => {
      let throwsError = false;
      try {
        hashSetOf().elementAt(3);
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });

    it("returns NoSuchElementException for unknown index", () => {
      let throwsError = false;
      try {
        hashSetOf(1, 2, 3).elementAt(4);
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });

    it("returns element at index", () => {
      expect(hashSetOf(1, 2, 3).elementAt(1)).equals(2);
    });
  });

  describe("elementAtOrNull", () => {
    it("returns undefined for empty hash set", () => {
      expect(hashSetOf().elementAtOrNull(3)).undefined;
    });

    it("returns undefined for unknown index", () => {
      expect(hashSetOf(1, 2, 3).elementAtOrNull(4)).undefined;
    });

    it("returns element at index", () => {
      expect(hashSetOf(1, 2, 3).elementAtOrNull(1)).equals(2);
    });
  });

  describe("filter", () => {
    it("returns filtered values", () => {
      const resultList = hashSetOf(1, 2, 3, 4, 5).filter((element) => {
        return element > 1 && element < 5;
      });
      expect(resultList.contains(2)).true;
      expect(resultList.contains(3)).true;
      expect(resultList.contains(4)).true;
    });

    it("returns not, not filtered values", () => {
      const resultList = hashSetOf(1, 2, 3, 4, 5).filter((element) => {
        return element > 1 && element < 5;
      });
      expect(resultList.contains(1)).false;
      expect(resultList.contains(5)).false;
    });

    it("returns hash set instance for empty hash set", () => {
      const resultList = hashSetOf<number>().filter((element) => {
        return element > 1 && element < 5;
      });
      expect(resultList).not.null;
    });

    it("returns hash set instance with no entries for empty hash set", () => {
      const resultList = hashSetOf<number>().filter((element) => {
        return element > 1 && element < 5;
      });
      expect(resultList.size).equals(0);
    });
  });

  describe("find", () => {
    it("returns element which suits constraints", () => {
      expect(
        hashSetOf(1, 2, 3, 4, 5).find((element) => {
          return element === 3;
        })
      ).equals(3);
    });

    it("returns undefined if no element suits constraints", () => {
      expect(
        hashSetOf(1, 2, 3, 4, 5).find((element) => {
          return element === 6;
        })
      ).undefined;
    });

    it("returns undefined for empty hash set", () => {
      expect(
        hashSetOf<number>().find((element) => {
          return element === 5;
        })
      ).undefined;
    });
  });

  describe("first", () => {
    it("returns first element", () => {
      expect(hashSetOf(1, 2, 3, 4, 5).first()).equals(1);
    });

    it("throws NoSuchElementException for empty hash set", () => {
      let throwError = false;
      try {
        hashSetOf().first();
      } catch (error) {
        throwError = true;
      }
      expect(throwError).true;
    });
  });

  describe("firstOrNull", () => {
    it("returns element if not null", () => {
      expect(hashSetOf(1, 2, 3, 4, 5).firstOrNull()).equals(1);
    });

    it("returns undefined for empty hash set", () => {
      expect(hashSetOf().firstOrNull()).undefined;
    });
  });

  describe("forEach", () => {
    it("calls block for each element", () => {
      let element1Called = false;
      let element2Called = false;
      let element3Called = false;
      hashSetOf(1, 2, 3).forEach((element) => {
        switch (element) {
          case 1: {
            element1Called = true;
            break;
          }
          case 2: {
            element2Called = true;
            break;
          }
          case 3: {
            element3Called = true;
            break;
          }
        }
      });
      expect(element1Called).true;
      expect(element2Called).true;
      expect(element3Called).true;
    });

    it("returns undefined for empty hash set", () => {
      expect(
        hashSetOf<number>().forEach((element) => {
          return 5;
        })
      ).undefined;
    });

    it("returns value with keyword return and finished iteration", () => {
      expect(
        hashSetOf(1, 2, 3, 4, 5).forEach((element) => {
          if (element === 3) {
            return element;
          }
        })
      ).equals(3);
    });
  });

  describe("indexOf", () => {
    it("returns correct index of element", () => {
      expect(hashSetOf(1, 2, 3, 4, 5).indexOf(3)).equals(2);
    });

    it("returns -1 for empty hash set", () => {
      expect(hashSetOf().indexOf(3)).equals(-1);
    });

    it("returns -1 for unknown element", () => {
      expect(hashSetOf(1, 2, 3).indexOf(4)).equals(-1);
    });
  });

  describe("isEmpty", () => {
    it("returns true for empty hash set", () => {
      expect(hashSetOf().isEmpty()).true;
    });

    it("returns false for filled hash set", () => {
      expect(hashSetOf(1, 2, 3).isEmpty()).false;
    });
  });

  describe("isNotEmpty", () => {
    it("returns true for filled hash set", () => {
      expect(hashSetOf(1, 2, 3).isNotEmpty()).true;
    });

    it("returns false for empty hash set", () => {
      expect(hashSetOf().isNotEmpty()).false;
    });
  });

  describe("last", () => {
    it("returns last element", () => {
      expect(hashSetOf(1, 2, 3).last()).equals(3);
    });

    it("throws NoSuchElementException for empty hash set", () => {
      let throwsError = false;
      try {
        hashSetOf<number>().last();
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });
  });

  describe("lastIndex", () => {
    it("returns -1 for empty list", () => {
      expect(hashSetOf().lastIndex).equals(-1);
    });

    it("returns index for filled list", () => {
      expect(hashSetOf(1, 2, 3).lastIndex).equals(2);
    });
  });

  describe("lastOrNull", () => {
    it("returns last element", () => {
      expect(hashSetOf(1, 2, 3).lastOrNull()).equals(3);
    });

    it("returns undefined for empty hash set", () => {
      expect(hashSetOf<number>().lastOrNull()).undefined;
    });
  });

  describe("map", () => {
    it("returns mapped values", () => {
      const resultList = hashSetOf(1, 2, 3, 4, 5).map((element) => {
        return element.toString();
      });

      expect(resultList.contains("1")).true;
      expect(resultList.contains("2")).true;
      expect(resultList.contains("3")).true;
      expect(resultList.contains("4")).true;
      expect(resultList.contains("5")).true;
    });

    it("returns a new initialized hash set", () => {
      const hashSet = hashSetOf(1, 2, 3, 4, 5);
      const resultList = hashSet.map((element) => {
        return element.toString();
      });

      expect(resultList).not.equals(hashSet);
    });

    it("returns a new initialized hash set for for empty hash set", () => {
      const resultList = hashSetOf<number>().map((element) => {
        return element.toString();
      });
      expect(resultList).not.null;
    });

    it("returns a new initialized but empty hash set", () => {
      const resultList = hashSetOf<number>().map((element) => {
        return element.toString();
      });
      expect(resultList.isEmpty()).true;
    });
  });

  describe("random", () => {
    it("throws NoSuchElementException for empty list", () => {
      const list = hashSetOf<number>();
      expect(list.random.bind(list)).throw(`List is empty`);
    });

    it("returns first element for only one element", () => {
      expect(hashSetOf(1).random() === 1).true;
    });

    it("returns all contained elements", () => {
      let contains1 = false;
      let contains2 = false;
      let contains3 = false;
      let containsUndefined = false;
      let containsOthers = false;
      const list = hashSetOf(1, 2, 3);
      repeat(100, () => {
        switch (list.randomOrNull()) {
          case undefined: {
            containsUndefined = true;
            break;
          }
          case 1: {
            contains1 = true;
            break;
          }
          case 2: {
            contains2 = true;
            break;
          }
          case 3: {
            contains3 = true;
            break;
          }
          default: {
            containsOthers = true;
            break;
          }
        }
      });
      expect(contains1).true;
      expect(contains2).true;
      expect(contains3).true;
      expect(containsUndefined).false;
      expect(containsOthers).false;
    });
  });

  describe("randomOrNull", () => {
    it("returns undefined for empty list", () => {
      expect(hashSetOf<number>().randomOrNull()).undefined;
    });

    it("returns first element for only one element", () => {
      expect(hashSetOf(1).randomOrNull() === 1).true;
    });

    it("returns all contained elements", () => {
      let contains1 = false;
      let contains2 = false;
      let contains3 = false;
      let containsUndefined = false;
      let containsOthers = false;
      const list = hashSetOf(1, 2, 3);
      repeat(100, () => {
        switch (list.randomOrNull()) {
          case undefined: {
            containsUndefined = true;
            break;
          }
          case 1: {
            contains1 = true;
            break;
          }
          case 2: {
            contains2 = true;
            break;
          }
          case 3: {
            contains3 = true;
            break;
          }
          default: {
            containsOthers = true;
            break;
          }
        }
      });
      expect(contains1).true;
      expect(contains2).true;
      expect(contains3).true;
      expect(containsUndefined).false;
      expect(containsOthers).false;
    });
  });

  describe("reversed", () => {
    it("returns empty list for empty list", () => {
      const list: IList<number> = hashSetOf<number>().reversed();
      expect(list).not.undefined;
    });

    it("returns reversed list", () => {
      const list = hashSetOf<number>(1, 2, 3).reversed();
      expect(list.elementAt(2)).equals(1);
      expect(list.elementAt(1)).equals(2);
      expect(list.elementAt(0)).equals(3);
    });
  });

  describe("size", () => {
    it("returns 0 for empty hash set", () => {
      expect(hashSetOf().size).equal(0);
    });

    it("returns correct size for filled hash set", () => {
      expect(hashSetOf(1, 2, 3).size).equals(3);
    });
  });

  describe("toArray", () => {
    it("returns empty array for empty hash set", () => {
      const array = hashSetOf<number>().toArray();
      expect(array).not.undefined;
    });

    it("returns array with all entries for filled hash set", () => {
      const array = hashSetOf(1, 2, 3).toArray();
      expect(array.length).equals(3);
      expect(array[0]).equals(1);
      expect(array[1]).equals(2);
      expect(array[2]).equals(3);
    });
  });

  describe("toHashSet", () => {
    it("returns empty instance of hash set for empty hash set", () => {
      const hashSet: IHashSet<number> = hashSetOf<number>().toHashSet();
      expect(hashSet).not.undefined;
      expect(hashSet.size).equals(0);
    });

    it("returns hash set with all entries for filled hash set", () => {
      let index = 0;
      let called = false;
      const hashSet = hashSetOf(1, 2, 3).toHashSet();
      expect(hashSet.size).equals(3);
      hashSet.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(true).true;
    });
  });

  describe("toList", () => {
    it("returns empty instance of hash set for empty hash set", () => {
      const hashSet: IList<number> = hashSetOf<number>().toList();
      expect(hashSet).not.undefined;
      expect(hashSet.size).equals(0);
    });

    it("returns hash set with all entries for filled hash set", () => {
      let index = 0;
      let called = false;
      const hashSet = hashSetOf(1, 2, 3).toList();
      expect(hashSet.size).equals(3);
      hashSet.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(true).true;
    });
  });

  describe("toMutableHashSet", () => {
    it("returns empty instance of mutable hash set for empty hash set", () => {
      const mutableHashSet: IMutableHashSet<number> =
        hashSetOf<number>().toMutableHashSet();
      expect(mutableHashSet).not.undefined;
      expect(mutableHashSet.size).equals(0);
    });

    it("returns hash set with all entries for filled hash set", () => {
      let index = 0;
      let called = false;
      const mutableHashSet = hashSetOf(1, 2, 3).toMutableHashSet();
      expect(mutableHashSet.size).equals(3);
      mutableHashSet.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(true).true;
    });
  });

  describe("toMutableList", () => {
    it("returns empty instance of mutable hash set for empty hash set", () => {
      const mutableList: IMutableList<number> =
        hashSetOf<number>().toMutableList();
      expect(mutableList).not.undefined;
      expect(mutableList.size).equals(0);
    });

    it("returns mutable hash set with all entries for filled hash set", () => {
      let index = 0;
      let called = false;
      const mutableList = hashSetOf(1, 2, 3).toMutableList();
      expect(mutableList.size).equals(3);
      mutableList.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(true).true;
    });
  });

  describe("integration", () => {
    it("can add objects of the same type multiple times", () => {
      const hashSet = hashSetOf(new Person(), new Person(), new Person());
      expect(hashSet.size).equals(3);
    });

    it("objects with changed content are still found in the hash set", () => {
      const second = new Person();
      const hashSet = hashSetOf(new Person(), second, new Person());
      second.firstname = "Bertha";
      expect(hashSet.contains(second)).true;
    });

    it("objects with changed content still have the same hey in the hash set", () => {
      const firstname = "Bertha";
      const second = new Person();
      const hashSet = hashSetOf(new Person(), second, new Person());
      second.firstname = firstname;
      expect(hashSet.elementAt(1) === second).true;
      expect(hashSet.elementAt(1).firstname === firstname).true;
    });

    it("a changed string value which was added to the hash set has no effect to the hash set", () => {
      let two = "two";
      const hashSet = hashSetOf("one", two, "three");
      two = "four";
      expect(hashSet.contains(two)).false;
      expect(hashSet.elementAt(1) === "two").true;
    });
  });
});
