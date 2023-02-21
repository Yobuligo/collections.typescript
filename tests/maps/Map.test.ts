import { pair } from "@yobuligo/core.typescript";
import { expect } from "chai";
import { mapOf } from "./../../src/Functions";
import { IHashMap } from "./../../src/hashMaps/IHashMap";
import { IMutableHashMap } from "./../../src/hashMaps/IMutableHashMap";
import { IMap } from "./../../src/maps/IMap";

describe("Map", () => {
  describe("constructor", () => {
    it("creates instance of map", () => {
      const map: IMap<number, number> = mapOf(pair(1, 1));
      expect(map).not.undefined;
    });
  });

  describe("toHashMap", () => {
    it("returns empty hash map for empty map", () => {
      const map = mapOf();
      const hashMap = map.toHashMap();
      expect(hashMap).not.undefined;
      expect(hashMap.isEmpty()).true;
    });

    it("converts map to hashMap", () => {
      const map = mapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const hashMap: IHashMap<number, number> = map.toHashMap();
      expect(hashMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const hashMap = mapOf(pair(1, 1), pair(2, 2), pair(3, 3)).toHashMap();
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
      const hashMap = mapOf(element, element).toHashMap();
      expect(hashMap.size).equals(1);
      expect(hashMap.elementAt(0) === element).true;
    });
  });

  describe("toMap", () => {
    it("returns empty map for empty map", () => {
      const origin = mapOf();
      const map = origin.toMap();
      expect(map).not.undefined;
      expect(map.isEmpty()).true;
      expect(map !== origin);
    });

    it("converts map to map", () => {
      const origin = mapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const map: IMap<number, number> = origin.toMap();
      expect(map).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const map = mapOf(pair(1, 1), pair(2, 2), pair(3, 3)).toMap();
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
      const map = mapOf(element, element).toMap();
      expect(map.size).equals(2);
      expect(map.elementAt(0) === element).true;
      expect(map.elementAt(1) === element).true;
    });
  });

  describe("toMutableHashMap", () => {
    it("returns empty mutable hash map for empty map", () => {
      const map = mapOf();
      const mutableHashMap = map.toMutableHashMap();
      expect(mutableHashMap).not.undefined;
      expect(mutableHashMap.isEmpty()).true;
    });

    it("converts map to mutable hash Map", () => {
      const map = mapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const mutableHashMap: IMutableHashMap<number, number> =
        map.toMutableHashMap();
      expect(mutableHashMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableHashMap = mapOf(
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
      const mutableHashMap = mapOf(element, element).toMutableHashMap();
      expect(mutableHashMap.size).equals(1);
      expect(mutableHashMap.elementAt(0) === element).true;
    });
  });

  describe("toMutableMap", () => {
    it("returns empty mutable map for empty map", () => {
      const origin = mapOf();
      const mutableMap = origin.toMutableMap();
      expect(mutableMap).not.undefined;
      expect(mutableMap.isEmpty()).true;
      expect(mutableMap !== origin);
    });

    it("converts map to mutable map", () => {
      const origin = mapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const mutableMap: IMap<number, number> = origin.toMutableMap();
      expect(mutableMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableMap = mapOf(
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
      const mutableMap = mapOf(element, element).toMutableMap();
      expect(mutableMap.size).equals(2);
      expect(mutableMap.elementAt(0) === element).true;
      expect(mutableMap.elementAt(1) === element).true;
    });
  });
});
