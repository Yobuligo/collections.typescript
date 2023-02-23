import { pair } from "@yobuligo/core.typescript";
import { expect } from "chai";
import { mutableHashMapOf } from "./../../src/Functions";
import { IHashMap } from "./../../src/hashMaps/IHashMap";
import { IMutableHashMap } from "./../../src/hashMaps/IMutableHashMap";
import { IMap } from "./../../src/maps/IMap";

describe("MutableHashMap", () => {
  describe("constructor", () => {
    it("creates instance of hash map", () => {
      const hashMap: IMutableHashMap<number, number> = mutableHashMapOf(
        pair(1, 1)
      );
      expect(hashMap).not.undefined;
    });

    it("removes duplicates", () => {
      const element = pair(1, 1);
      const mutableHashMap = mutableHashMapOf(element, element);
      expect(mutableHashMap.size).equals(1);
      expect(mutableHashMap.elementAt(0) === element).true;
    });
  });

  describe("toHashMap", () => {
    it("returns empty hash map for empty mutable hash map", () => {
      const hashMap = mutableHashMapOf().toHashMap();
      expect(hashMap).not.undefined;
      expect(hashMap.isEmpty()).true;
    });

    it("converts hash map to hashMap", () => {
      const hashMap: IHashMap<number, number> = mutableHashMapOf(
        pair(1, 1),
        pair(2, 2),
        pair(3, 3)
      ).toHashMap();
      expect(hashMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const hashMap = mutableHashMapOf(
        pair(1, 1),
        pair(2, 2),
        pair(3, 3)
      ).toHashMap();
      hashMap.forEach((element) => {
        index++;
        called = true;
        expect(element.first === index).true;
        expect(element.second === index).true;
      });
      expect(called).true;
    });

    it("removes duplicates", () => {
      const element = pair(1, 1);
      const hashMap = mutableHashMapOf(element, element).toHashMap();
      expect(hashMap.size).equals(1);
      expect(hashMap.elementAt(0) === element).true;
    });
  });

  describe("toMap", () => {
    it("returns empty map for empty mutable hash map", () => {
      const origin = mutableHashMapOf();
      const map = origin.toMap();
      expect(map).not.undefined;
      expect(map.isEmpty()).true;
      expect(map !== origin);
    });

    it("converts hash map to map", () => {
      const origin = mutableHashMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const map: IMap<number, number> = origin.toMap();
      expect(map).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const map = mutableHashMapOf(pair(1, 1), pair(2, 2), pair(3, 3)).toMap();
      map.forEach((element) => {
        index++;
        called = true;
        expect(element.first === index).true;
        expect(element.second === index).true;
      });
      expect(called).true;
    });

    it("removes duplicates", () => {
      const element = pair(1, 1);
      const map = mutableHashMapOf(element, element).toMap();
      expect(map.size).equals(1);
      expect(map.elementAt(0) === element).true;
    });
  });

  describe("toMutableHashMap", () => {
    it("returns empty mutable hash map for empty mutable hash map", () => {
      const map = mutableHashMapOf();
      const mutableHashMap = map.toMutableHashMap();
      expect(mutableHashMap).not.undefined;
      expect(mutableHashMap.isEmpty()).true;
    });

    it("converts hash map to mutable hash Map", () => {
      const map = mutableHashMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const mutableHashMap: IMutableHashMap<number, number> =
        map.toMutableHashMap();
      expect(mutableHashMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableHashMap = mutableHashMapOf(
        pair(1, 1),
        pair(2, 2),
        pair(3, 3)
      ).toMutableHashMap();
      mutableHashMap.forEach((element) => {
        index++;
        called = true;
        expect(element.first === index).true;
        expect(element.second === index).true;
      });
      expect(called).true;
    });

    it("removes duplicates", () => {
      const element = pair(1, 1);
      const mutableHashMap = mutableHashMapOf(
        element,
        element
      ).toMutableHashMap();
      expect(mutableHashMap.size).equals(1);
      expect(mutableHashMap.elementAt(0) === element).true;
    });
  });

  describe("toMutableMap", () => {
    it("returns empty mutable map for empty mutable hash map", () => {
      const origin = mutableHashMapOf();
      const mutableMap = origin.toMutableMap();
      expect(mutableMap).not.undefined;
      expect(mutableMap.isEmpty()).true;
      expect(mutableMap !== origin);
    });

    it("converts hash map to mutable map", () => {
      const origin = mutableHashMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const mutableMap: IMap<number, number> = origin.toMutableMap();
      expect(mutableMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableMap = mutableHashMapOf(
        pair(1, 1),
        pair(2, 2),
        pair(3, 3)
      ).toMutableMap();
      mutableMap.forEach((element) => {
        index++;
        called = true;
        expect(element.first === index).true;
        expect(element.second === index).true;
      });
      expect(called).true;
    });

    it("removes duplicates", () => {
      const element = pair(1, 1);
      const mutableMap = mutableHashMapOf(element, element).toMutableMap();
      expect(mutableMap.size).equals(1);
      expect(mutableMap.elementAt(0) === element).true;
    });
  });
});
