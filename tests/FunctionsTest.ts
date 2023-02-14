import { expect } from "chai";
import { listOf } from "./../src/main/Functions";
describe("Functions", () => {
  describe("listOf", () => {
    it("creates empty list", () => {
      const list = listOf();
      expect(list).not.undefined;
    });
  });
});
