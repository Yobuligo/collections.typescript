import { expect } from "chai";
import { listOf } from "../src/Functions";

describe("Function", () => {
  it("listOf empty", () => {
    expect(listOf()).not.null;
  });

  it("listOf values set", () => {
    const list = listOf(1, 2, 3, 4, 5);
    expect(list.elementAt(0)).equals(1);
    expect(list.elementAt(1)).equals(2);
    expect(list.elementAt(2)).equals(3);
    expect(list.elementAt(3)).equals(4);
    expect(list.elementAt(4)).equals(5);
  });
});
