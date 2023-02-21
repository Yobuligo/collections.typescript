import { pair } from "@yobuligo/core.typescript";
import { expect } from "chai";
import { hashMapOf } from "./../../src/Functions";
import { IHashMap } from "./../../src/hashMaps/IHashMap";
import { IMutableHashMap } from "./../../src/hashMaps/IMutableHashMap";
import { IMap } from "./../../src/maps/IMap";

describe("HashMap", () => {
  describe("constructor", () => {
    it("creates instance of hash map", () => {
      const hashMap: IHashMap<number, number> = hashMapOf(pair(1, 1));
      expect(hashMap).not.undefined;
    });

    it("removes duplicates", () => {
      const element = pair(1, 1);
      const hashMap = hashMapOf(element, element);
      expect(hashMap.size).equals(1);
      expect(hashMap.elementAt(0) === element).true;
    });
  });

  describe("toHashMap", () => {
    it("returns empty hash map for empty hash map", () => {
      const hashMap = hashMapOf().toHashMap();
      expect(hashMap).not.undefined;
      expect(hashMap.isEmpty()).true;
    });

    it("converts hash map to hashMap", () => {
      const hashMap: IHashMap<number, number> = hashMapOf(
        pair(1, 1),
        pair(2, 2),
        pair(3, 3)
      ).toHashMap();
      expect(hashMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const hashMap = hashMapOf(pair(1, 1), pair(2, 2), pair(3, 3)).toHashMap();
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
      const hashMap = hashMapOf(element, element).toHashMap();
      expect(hashMap.size).equals(1);
      expect(hashMap.elementAt(0) === element).true;
    });
  });

  describe("toMap", () => {
    it("returns empty map for empty hash map", () => {
      const origin = hashMapOf();
      const map = origin.toMap();
      expect(map).not.undefined;
      expect(map.isEmpty()).true;
      expect(map !== origin);
    });

    it("converts hash map to map", () => {
      const origin = hashMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const map: IMap<number, number> = origin.toMap();
      expect(map).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const map = hashMapOf(pair(1, 1), pair(2, 2), pair(3, 3)).toMap();
      map.forEach((element) => {
        index++;
        called = true;
        expect(element.first === index).true;
        expect(element.second === index).true;
      });
      expect(called).true;
    });

    it("doesn't remove duplicates", () => {
      const element = pair(1, 1);
      const map = hashMapOf(element, element).toMap();
      expect(map.size).equals(2);
      expect(map.elementAt(0) === element).true;
      expect(map.elementAt(1) === element).true;
    });
  });

  describe("toMutableHashMap", () => {
    it("returns empty mutable hash map for empty hash map", () => {
      const map = hashMapOf();
      const mutableHashMap = map.toMutableHashMap();
      expect(mutableHashMap).not.undefined;
      expect(mutableHashMap.isEmpty()).true;
    });

    it("converts hash map to mutable hash Map", () => {
      const map = hashMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const mutableHashMap: IMutableHashMap<number, number> =
        map.toMutableHashMap();
      expect(mutableHashMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableHashMap = hashMapOf(
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
      const mutableHashMap = hashMapOf(element, element).toMutableHashMap();
      expect(mutableHashMap.size).equals(1);
      expect(mutableHashMap.elementAt(0) === element).true;
    });
  });

  describe("toMutableMap", () => {
    it("returns empty mutable map for empty hash map", () => {
      const origin = hashMapOf();
      const mutableMap = origin.toMutableMap();
      expect(mutableMap).not.undefined;
      expect(mutableMap.isEmpty()).true;
      expect(mutableMap !== origin);
    });

    it("converts hash map to mutable map", () => {
      const origin = hashMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const mutableMap: IMap<number, number> = origin.toMutableMap();
      expect(mutableMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableMap = hashMapOf(
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

    it("doesn't remove duplicates", () => {
      const element = pair(1, 1);
      const mutableMap = hashMapOf(element, element).toMutableMap();
      expect(mutableMap.size).equals(2);
      expect(mutableMap.elementAt(0) === element).true;
      expect(mutableMap.elementAt(1) === element).true;
    });
  });
});
