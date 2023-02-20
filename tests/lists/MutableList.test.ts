import { expect } from "chai";
import { mutableListOf } from "./../../src/Functions";
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

    it("adds element twice", () => {});
    it("adds at index", () => {});
  });

  describe("addAll", () => {});

  describe("addAll", () => {});

  describe("addArray", () => {
    it("appends entries to empty list", () => {
      let index = 0;
      mutableList.addArray([1,2,3]);
      expect(mutableList.size).equals(3);
      mutableList.forEach((element) => {
        index++;
        expect(element).equals(index);
      });
    });

    it("appends entries to filled list", () => {
      let index = 0;
      mutableList = mutableListOf(1, 2, 3);
      mutableList.addArray([4, 5, 6]);
      expect(mutableList.size).equals(6);
      mutableList.forEach((element) => {
        index++;
        expect(element).equals(index);
      });
    });

    it("injects entries at index", () => {
        
    });
  });

  describe("remove", () => {});

  describe("removeAt", () => {});

  describe("removeAll", () => {});

  describe("removeFirst", () => {});

  describe("removeLast", () => {});
});
