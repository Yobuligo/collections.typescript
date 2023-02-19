import { expect } from "chai";
import { hashSetOf } from "./../../src/Functions";
import { IHashSet } from "./../../src/hashSets/IHashSet";


// Test with string
// Test with number
// Test with object
// Test with object and object changed after registration

describe("HashSet", () => {
  describe("constructor", () => {
    it("creates hashSet", () => {
      const testObject: IHashSet<number> = hashSetOf(1, 2, 3);
      expect(testObject).not.undefined;
    });
  });
});
