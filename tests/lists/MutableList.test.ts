import { expect } from "chai";
import { listOf, mutableListOf } from "./../../src/Functions";
import { IMutableList } from "./../../src/lists/IMutableList";

describe("MutableList", () => {
  let mutableList: IMutableList<number>;

  beforeEach(() => {
    mutableList = mutableListOf();
  });

  describe("add", () => {
    it("adds element", () => {
      mutableList.add(1);
      expect(mutableList.size).equals(1);
      expect(mutableList.contains(1)).true;
    });

    it("returns true", () => {
      expect(mutableList.add(1)).true;
    });

    it("adds element twice", () => {
      let called = false;
      mutableList.add(1);
      mutableList.add(1);
      expect(mutableList.size).equals(2);
      mutableList.forEach((element) => {
        called = true;
        expect(element).equals(1);
      });
      expect(called).true;
    });

    it("returns true when adding the same element twice", () => {
      mutableList.add(1);
      expect(mutableList.add(1)).true;
    });

    it("adds at index", () => {
      let index = 0;
      let called = false;
      mutableList = mutableListOf(1, 2, 4, 5);
      mutableList.add(3, 2);
      expect(mutableList.size).equals(5);
      mutableList.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(called).true;
    });
  });

  describe("addAll", () => {
    it("append entries to empty list", () => {
      let index = 0;
      let called = false;
      mutableList.addAll(listOf(1, 2, 3));
      expect(mutableList.size).equals(3);
      mutableList.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(called).true;
    });

    it("returns true", () => {
      expect(mutableList.addAll(listOf(1, 2, 3))).true;
    });

    it("append entries to filled list", () => {
      let index = 0;
      let called = false;
      mutableList = mutableListOf(1, 2, 3);
      mutableList.addAll(listOf(4, 5, 6));
      expect(mutableList.size).equals(6);
      mutableList.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(called).true;
    });

    it("injects entries at index", () => {
      let index = 0;
      let called = false;
      mutableList = mutableListOf(1, 2, 5, 6);
      mutableList.addAll(listOf(3, 4), 2);
      expect(mutableList.size).equals(6);
      mutableList.forEach((element) => {
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
      mutableList.addArray([1, 2, 3]);
      expect(mutableList.size).equals(3);
      mutableList.forEach((element) => {
        called = true;
        index++;
        expect(element).equals(index);
      });
      expect(called).true;
    });

    it("appends entries to filled list", () => {
      let index = 0;
      let called = false;
      mutableList = mutableListOf(1, 2, 3);
      mutableList.addArray([4, 5, 6]);
      expect(mutableList.size).equals(6);
      mutableList.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(called).true;
    });

    it("returns true", () => {
      expect(mutableList.addArray([1, 2, 3])).true;
    });

    it("injects entries at index", () => {
      let index = 0;
      let called = false;
      mutableList = mutableListOf(1, 2, 5, 6);
      mutableList.addArray([3, 4], 2);
      expect(mutableList.size).equals(6);
      mutableList.forEach((element) => {
        index++;
        called = true;
        expect(element).equals(index);
      });
      expect(called).true;
    });
  });

  describe("remove", () => {
    it("returns true for successfully removed element", () => {
      expect(mutableListOf(1, 2, 3).remove(2)).true;
    });

    it("returns false when removing unknown element", () => {
      expect(mutableListOf(1, 2, 3).remove(4)).false;
    });

    it("removes the element from the elements list", () => {
      mutableList = mutableListOf(1, 2, 3);
      mutableList.remove(2);
      expect(mutableList.size).equals(2);
      expect(mutableList.contains(1)).true;
      expect(mutableList.contains(2)).false;
      expect(mutableList.contains(3)).true;
    });
  });

  describe("removeAt", () => {
    it("returns false when removing unknown index", () => {
      expect(mutableListOf(1, 2, 3).removeAt(1)).true;
    });

    it("returns true when removing element at index", () => {
      expect(mutableListOf(1, 2, 3).removeAt(4)).false;
    });

    it("removes the element from the elements list", () => {
      mutableList = mutableListOf(1, 2, 3);
      mutableList.removeAt(1);
      expect(mutableList.size).equals(2);
      expect(mutableList.contains(1)).true;
      expect(mutableList.contains(2)).false;
      expect(mutableList.contains(3)).true;
    });
  });

  describe("removeAll", () => {
    it("works for empty lists", () => {
      let throwsError = false;
      try {
        mutableList.removeAll();
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).false;
    });

    it("removes all entries", () => {
      mutableList = mutableListOf(1, 2, 3);
      mutableList.removeAll();
      expect(mutableList.size).equals(0);
    });
  });

  describe("removeFirst", () => {
    it("returns false for empty list", () => {
      expect(mutableList.removeFirst()).false;
    });

    it("returns true for filled list", () => {
      mutableList = mutableListOf(1, 2, 3);
      expect(mutableList.removeFirst()).true;
    });

    it("removes first element", () => {
      mutableList = mutableListOf(1, 2, 3);
      mutableList.removeFirst();
      expect(mutableList.contains(1)).false;
      expect(mutableList.contains(2)).true;
      expect(mutableList.contains(3)).true;
    });
  });

  describe("removeLast", () => {
    it("returns false for empty list", () => {
      expect(mutableList.removeLast()).false;
    });

    it("returns true for filled list", () => {
      mutableList = mutableListOf(1, 2, 3);
      expect(mutableList.removeLast()).true;
    });

    it("removes last element", () => {
      mutableList = mutableListOf(1, 2, 3);
      mutableList.removeLast();
      expect(mutableList.contains(1)).true;
      expect(mutableList.contains(2)).true;
      expect(mutableList.contains(3)).false;
    });
  });

  describe("sortBy", () => {
    it("sorts elements after removing an element (removing corrects indices", () => {
      mutableList = mutableListOf(1, 2, 3, 4, 5);
      mutableList.removeAt(2)
      const list = mutableList.sortedBy()
      expect(list.elementAt(0)).equals(1)
      expect(list.elementAt(1)).equals(2)
      expect(list.elementAt(2)).equals(4)
      expect(list.elementAt(3)).equals(5)
    });
  });
});
