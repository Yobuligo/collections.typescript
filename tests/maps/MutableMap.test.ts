import { pair } from "@yobuligo/core.typescript";
import { expect } from "chai";
import { IHashMap } from "../../src/hashMaps/IHashMap";
import { IMutableHashMap } from "../../src/hashMaps/IMutableHashMap";
import { IMap } from "../../src/maps/IMap";
import { IMutableMap } from "../../src/maps/IMutableMap";
import { mutableMapOf } from "./../../src/Functions";

describe("MutableMap", () => {
  describe("constructor", () => {
    it("creates instance of mutableMap", () => {
      const mutableMap: IMutableMap<number, number> = mutableMapOf(pair(1, 1));
      expect(mutableMap).not.undefined;
    });
  });

  describe("toHashMap", () => {
    it("returns empty hash map for empty mutable map", () => {
      const hashMap = mutableMapOf().toHashMap();
      expect(hashMap).not.undefined;
      expect(hashMap.isEmpty()).true;
    });

    it("converts map to hashMap", () => {
      const hashMap: IHashMap<number, number> = mutableMapOf(
        pair(1, 1),
        pair(2, 2),
        pair(3, 3)
      ).toHashMap();
      expect(hashMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const hashMap = mutableMapOf(
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
      const hashMap = mutableMapOf(element, element).toHashMap();
      expect(hashMap.size).equals(1);
      expect(hashMap.elementAt(0) === element).true;
    });
  });

  describe("toMap", () => {
    it("returns empty map for empty mutable map", () => {
      const origin = mutableMapOf();
      const map = origin.toMap();
      expect(map).not.undefined;
      expect(map.isEmpty()).true;
      expect(map !== origin);
    });

    it("converts map to map", () => {
      const origin = mutableMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const map: IMap<number, number> = origin.toMap();
      expect(map).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableMap = mutableMapOf(
        pair(1, 1),
        pair(2, 2),
        pair(3, 3)
      ).toMap();
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
      const mutableMap = mutableMapOf(element, element).toMap();
      expect(mutableMap.size).equals(2);
      expect(mutableMap.elementAt(0) === element).true;
      expect(mutableMap.elementAt(1) === element).true;
    });
  });

  describe("toMutableHashMap", () => {
    it("returns empty mutable hash map for empty mutable map", () => {
      const mutableMap = mutableMapOf();
      const mutableHashMap = mutableMap.toMutableHashMap();
      expect(mutableHashMap).not.undefined;
      expect(mutableHashMap.isEmpty()).true;
    });

    it("converts map to mutable hash Map", () => {
      const mutableMap = mutableMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const mutableHashMap: IMutableHashMap<number, number> =
        mutableMap.toMutableHashMap();
      expect(mutableHashMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableHashMap = mutableMapOf(
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
      const mutableHashMap = mutableMapOf(element, element).toMutableHashMap();
      expect(mutableHashMap.size).equals(1);
      expect(mutableHashMap.elementAt(0) === element).true;
    });
  });

  describe("toMutableMap", () => {
    it("returns empty mutable map for empty mutable map", () => {
      const origin = mutableMapOf();
      const mutableMap = origin.toMutableMap();
      expect(mutableMap).not.undefined;
      expect(mutableMap.isEmpty()).true;
      expect(mutableMap !== origin);
    });

    it("converts map to mutable map", () => {
      const origin = mutableMapOf(pair(1, 1), pair(2, 2), pair(3, 3));
      const mutableMap: IMap<number, number> = origin.toMutableMap();
      expect(mutableMap).not.undefined;
    });

    it("contains elements", () => {
      let index = 0;
      let called = false;
      const mutableMap = mutableMapOf(
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
      const mutableMap = mutableMapOf(element, element).toMutableMap();
      expect(mutableMap.size).equals(2);
      expect(mutableMap.elementAt(0) === element).true;
      expect(mutableMap.elementAt(1) === element).true;
    });
  });
});
