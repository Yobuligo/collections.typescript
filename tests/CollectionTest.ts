import { assert, expect } from "chai";
import { Collection } from "../src/collections/Collection";
import { IndexOutOfBoundsException } from "../src/exceptions/IndexOutOfBoundsException";

describe("Collection", () => {
  it("Size empty list", () => {
    expect(new Collection().size).equals(0);
  });

  it("Size filled list", () => {
    expect(new Collection(1, 2, 3, 4, 5).size).equals(5);
  });

  it("IsEmpty for empty list", () => {
    expect(new Collection().isEmpty()).true;
  });

  it("IsEmpty for filled list", () => {
    expect(new Collection(1, 2, 3, 4, 5).isEmpty()).false;
  });

  it("IsNotEmpty for empty list", () => {
    expect(new Collection().isNotEmpty()).false;
  });

  it("IsNotEmpty for filled list", () => {
    expect(new Collection(1, 2, 3, 4, 5).isNotEmpty()).true;
  });

  it("contains element", () => {
    expect(new Collection(1, 2, 3, 4, 5).contains(3)).true;
  });

  it("contains not element", () => {
    expect(new Collection(1, 2, 3, 4, 5).contains(6)).false;
  });

  it("contains for empty list", () => {
    expect(new Collection().contains(3)).false;
  });

  it("contains all elements for empty list", () => {
    expect(new Collection().containsAll(1, 3, 5)).false;
  });

  it("contains all elements", () => {
    expect(new Collection(1, 2, 3, 4, 5).containsAll(1, 3, 5)).true;
  });

  it("contains not all elements", () => {
    expect(new Collection(1, 2, 3, 4, 5).containsAll(1, 3, 5, 6)).false;
  });

  it("contains no element", () => {
    expect(new Collection(1, 2, 3, 4, 5).containsAll(6, 7, 8, 9)).false;
  });

  it("elementAt", () => {
    expect(new Collection(1, 2, 3, 4, 5).elementAt(0)).equals(1);
  });

  it("elementAt for empty list", () => {
    try {
      new Collection().elementAt(5);
      assert.fail();
    } catch (e) {
      expect(e).instanceof(IndexOutOfBoundsException);
    }
  });

  it("elementAt for out of range element", () => {
    try {
      new Collection(1, 2, 3, 4, 5).elementAt(10);
      assert.fail();
    } catch (e) {
      expect(e).instanceof(IndexOutOfBoundsException);
    }
  });

  it("elementAtOrNull", () => {
    expect(new Collection(1, 2, 3, 4, 5).elementAtOrNull(0)).equals(1);
  });

  it("elementAtOrNull for empty list", () => {
    expect(new Collection().elementAtOrNull(0)).equals(null);
  });

  it("elementAtOrNull for out of range element", () => {
    expect(new Collection(1, 2, 3, 4, 5).elementAtOrNull(10)).equals(null);
  });
});
