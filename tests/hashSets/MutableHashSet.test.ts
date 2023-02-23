import { repeat } from "@yobuligo/core.typescript";
import { expect } from "chai";
import { listOf, mutableHashSetOf } from "./../../src/Functions";
import { IMutableHashSet } from "./../../src/hashSets/IMutableHashSet";

describe("MutableHashSet", () => {
  let mutableHashSet: IMutableHashSet<number>;

  beforeEach(() => {
    mutableHashSet = mutableHashSetOf();
  });

  describe("add", () => {
    it("adds element", () => {
      mutableHashSet.add(1);
      expect(mutableHashSet.size).equals(1);
      expect(mutableHashSet.contains(1)).true;
    });

    it("returns true", () => {
      expect(mutableHashSet.add(1)).true;
    });

    it("returns false for duplicate", () => {
      mutableHashSet.add(1);
      expect(mutableHashSet.add(1)).false;
    });

    it("adds same element only once", () => {
      let called = false;
      mutableHashSet.add(1);
      mutableHashSet.add(1);
      expect(mutableHashSet.size).equals(1);
      mutableHashSet.forEach((element) => {
        called = true;
        expect(element).equals(1);
      });
      expect(called).true;
    });

    it("adds element only once without increasing last index", () => {
      repeat(5, () => {
        mutableHashSet.add(1);
      });
      expect(mutableHashSet.lastIndex).equals(0);
      expect(mutableHashSet.elementAt(0) === 1).true;
    });
  });

  describe("addAll", () => {
    it("append entries to empty list", () => {
      let index = 0;
      let called = false;
      mutableHashSet.addAll(listOf(1, 2, 3));
      expect(mutableHashSet.size).equals(3);
      mutableHashSet.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(called).true;
    });

    it("returns true", () => {
      expect(mutableHashSet.addAll(listOf(1, 2, 3))).true;
    });

    it("returns false for duplicate", () => {
      expect(mutableHashSet.addAll(listOf(1, 1, 2, 3))).false;
    });

    it("append entries to filled list", () => {
      let index = 0;
      let called = false;
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      mutableHashSet.addAll(listOf(4, 5, 6));
      expect(mutableHashSet.size).equals(6);
      mutableHashSet.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(called).true;
    });
  });

  describe("addArray", () => {
    it("appends entries to empty list", () => {
      let index = 0;
      let called = false;
      mutableHashSet.addArray([1, 2, 3]);
      expect(mutableHashSet.size).equals(3);
      mutableHashSet.forEach((element) => {
        called = true;
        index++;
        expect(element).equals(index);
      });
      expect(called).true;
    });

    it("returns true", () => {
      expect(mutableHashSet.addArray([1, 2, 3])).true;
    });

    it("returns false for duplicate", () => {
      expect(mutableHashSet.addArray([1, 1, 2, 3])).false;
    });

    it("appends entries to filled list", () => {
      let index = 0;
      let called = false;
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      mutableHashSet.addArray([4, 5, 6]);
      expect(mutableHashSet.size).equals(6);
      mutableHashSet.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(called).true;
    });
  });

  describe("remove", () => {
    it("returns true for successfully removed element", () => {
      expect(mutableHashSetOf(1, 2, 3).remove(2)).true;
    });

    it("returns false when removing unknown element", () => {
      expect(mutableHashSetOf(1, 2, 3).remove(4)).false;
    });

    it("removes the element from the elements list", () => {
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      mutableHashSet.remove(2);
      expect(mutableHashSet.size).equals(2);
      expect(mutableHashSet.contains(1)).true;
      expect(mutableHashSet.contains(2)).false;
      expect(mutableHashSet.contains(3)).true;
    });
  });

  describe("removeAt", () => {
    it("returns false when removing unknown index", () => {
      expect(mutableHashSetOf(1, 2, 3).removeAt(1)).true;
    });

    it("returns true when removing element at index", () => {
      expect(mutableHashSetOf(1, 2, 3).removeAt(4)).false;
    });

    it("removes the element from the elements list", () => {
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      mutableHashSet.removeAt(1);
      expect(mutableHashSet.size).equals(2);
      expect(mutableHashSet.contains(1)).true;
      expect(mutableHashSet.contains(2)).false;
      expect(mutableHashSet.contains(3)).true;
    });
  });

  describe("removeAll", () => {
    it("works for empty lists", () => {
      let throwsError = false;
      try {
        mutableHashSet.removeAll();
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).false;
    });

    it("removes all entries", () => {
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      mutableHashSet.removeAll();
      expect(mutableHashSet.size).equals(0);
    });
  });

  describe("removeFirst", () => {
    it("returns false for empty list", () => {
      expect(mutableHashSet.removeFirst()).false;
    });

    it("returns true for filled list", () => {
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      expect(mutableHashSet.removeFirst()).true;
    });

    it("removes first element", () => {
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      mutableHashSet.removeFirst();
      expect(mutableHashSet.contains(1)).false;
      expect(mutableHashSet.contains(2)).true;
      expect(mutableHashSet.contains(3)).true;
    });
  });

  describe("removeLast", () => {
    it("returns false for empty list", () => {
      expect(mutableHashSet.removeLast()).false;
    });

    it("returns true for filled list", () => {
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      expect(mutableHashSet.removeLast()).true;
    });

    it("removes last element", () => {
      mutableHashSet = mutableHashSetOf(1, 2, 3);
      mutableHashSet.removeLast();
      expect(mutableHashSet.contains(1)).true;
      expect(mutableHashSet.contains(2)).true;
      expect(mutableHashSet.contains(3)).false;
    });
  });
});
