import { expect } from "chai";
import { Pair } from "../main/Pair";

describe("Pair", () => {
  it("Return first value", () => {
    expect(new Pair("123", "456").first).equals("123");
  });

  it("Return second value", () => {
    expect(new Pair("123", "456").second).equals("456");
  });
});
