import { expect } from "chai";
import { Pair } from "../src/main/Pair";

describe("Pair", () => {
  it("returns first value", () => {
    expect(new Pair("123", "456").first).equals("123");
  });

  it("returns second value", () => {
    expect(new Pair("123", "456").second).equals("456");
  });
});
