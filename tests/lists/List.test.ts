import { listOf } from "./../../src/Functions";
// import { assert, expect } from "chai";
// import { Collection } from "../../main/collections/Collection";
// import { IndexOutOfBoundsException } from "../../main/exceptions/IndexOutOfBoundsException";
// import { NoSuchElementException } from "../../main/exceptions/NoSuchElementException";

import { expect } from "chai";

describe("List", () => {
  describe("contains", () => {
    it("returns false for empty list", () => {
      expect(listOf<number>().contains(1)).false;
    });
    it("returns false for unknown element", () => {
      expect(listOf(1, 2, 3).contains(4)).false;
    });
    it("returns true for known element", () => {
      expect(listOf(1, 2, 3).contains(2)).true;
    });
  });

  describe("containsAll", () => {
    it("contains all elements for empty list", () => {
      expect(listOf<number>().containsAll(1, 3, 5)).false;
    });

    it("contains all elements", () => {
      expect(listOf(1, 2, 3, 4, 5).containsAll(1, 3, 5)).true;
    });

    it("contains not all elements", () => {
      expect(listOf(1, 2, 3, 4, 5).containsAll(1, 3, 5, 6)).false;
    });
  });

  describe("containsNot", () => {
    it("returns true for empty list", () => {
      expect(listOf<number>().containsNot(1)).true;
    });
    it("returns true for unknown element", () => {
      expect(listOf(1, 2, 3).containsNot(4)).true;
    });
    it("returns false for known element", () => {
      expect(listOf(1, 2, 3).containsNot(2)).false;
    });
  });

  describe("elementAt", () => {
    it("returns NoSuchElementException for empty list", () => {
      let throwsError = false;
      try {
        listOf().elementAt(3);
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });

    it("returns NoSuchElementException for unknown index", () => {
      let throwsError = false;
      try {
        listOf(1, 2, 3).elementAt(4);
      } catch (error) {
        throwsError = true;
      }
      expect(throwsError).true;
    });

    it("returns element at index", () => {
      expect(listOf(1, 2, 3).elementAt(1)).eq(2);
    });
  });

  describe("elementAtOrNull", () => {
    it("returns undefined for empty list", () => {
      expect(listOf().elementAtOrNull(3)).undefined;
    });

    it("returns undefined for unknown index", () => {
      expect(listOf(1, 2, 3).elementAtOrNull(4)).undefined;
    });

    it("returns element at index", () => {
      expect(listOf(1, 2, 3).elementAtOrNull(1)).eq(2);
    });
  });

  describe("filter", () => {
    it("returns filtered values", () => {
      const resultList = listOf(1, 2, 3, 4, 5).filter((element) => {
        return element > 1 && element < 5;
      });
      expect(resultList.contains(2)).true;
      expect(resultList.contains(3)).true;
      expect(resultList.contains(4)).true;
    });

    it("returns not, not filtered values", () => {
      const resultList = listOf(1, 2, 3, 4, 5).filter((element) => {
        return element > 1 && element < 5;
      });
      expect(resultList.contains(1)).false;
      expect(resultList.contains(5)).false;
    });

    it("returns list instance for empty list", () => {
      const resultList = listOf<number>().filter((element) => {
        return element > 1 && element < 5;
      });
      expect(resultList).not.null;
    });

    it("returns list instance with no entries for empty list", () => {
      const resultList = listOf<number>().filter((element) => {
        return element > 1 && element < 5;
      });
      expect(resultList.size).equals(0);
    });
  });

  describe("find", () => {
    it("returns element which suits constraints", () => {
      expect(
        listOf(1, 2, 3, 4, 5).find((element) => {
          return element === 3;
        })
      ).equals(3);
    });

    it("returns undefined if no element suits constraints", () => {
      expect(
        listOf(1, 2, 3, 4, 5).find((element) => {
          return element === 6;
        })
      ).undefined;
    });

    it("returns undefined for empty list", () => {
      expect(
        listOf<number>().find((element) => {
          return element === 5;
        })
      ).undefined;
    });
  });

  describe("first", () => {
    it("returns first element", () => {
      expect(listOf(1, 2, 3, 4, 5).first()).equals(1);
    });

    it("throws NoSuchElementException for empty list", () => {
      let throwError = false;
      try {
        listOf().first();
      } catch (error) {
        throwError = true;
      }
      expect(throwError).true;
    });
  });

  describe("firstOrNull", () => {
    it("returns element if not null", () => {
      expect(listOf(1, 2, 3, 4, 5).firstOrNull()).equals(1);
    });

    it("returns undefined for empty list", () => {
      expect(listOf().firstOrNull()).undefined;
    });
  });

  describe("forEach", () => {
    it("calls block for each element", () => {
      let element1Called = false;
      let element2Called = false;
      let element3Called = false;
      listOf(1, 2, 3).forEach((element) => {
        switch (element) {
          case 1: {
            element1Called = true;
            break;
          }
          case 2: {
            element2Called = true;
            break;
          }
          case 3: {
            element3Called = true;
            break;
          }
        }
      });
      expect(element1Called).true;
      expect(element2Called).true;
      expect(element3Called).true;
    });

    it("returns undefined for empty list", () => {
      expect(
        listOf<number>().forEach((element) => {
          return 5;
        })
      ).undefined;
    });

    it("returns value with keyword return and finished iteration", () => {
      expect(
        listOf(1, 2, 3, 4, 5).forEach((element) => {
          if (element == 3) {
            return element;
          }
        })
      ).equals(3);
    });
  });

  describe("indexOf", () => {
    it("returns correct index of element", () => {
      expect(listOf(1, 2, 3, 4, 5).indexOf(3)).equals(2);
    });

    it("returns -1 for empty list", () => {
      expect(listOf().indexOf(3)).equals(-1);
    });

    it("returns -1 for unknown element", () => {
      expect(listOf(1, 2, 3).indexOf(4)).equals(-1);
    });
  });
});

// describe("Collection", () => {
//   it("Size empty list", () => {
//     expect(new Collection().size).equals(0);
//   });

//   it("Size filled list", () => {
//     expect(new Collection(1, 2, 3, 4, 5).size).equals(5);
//   });

//   it("IsEmpty for empty list", () => {
//     expect(new Collection().isEmpty()).true;
//   });

//   it("IsEmpty for filled list", () => {
//     expect(new Collection(1, 2, 3, 4, 5).isEmpty()).false;
//   });

//   it("IsNotEmpty for empty list", () => {
//     expect(new Collection().isNotEmpty()).false;
//   });

//   it("IsNotEmpty for filled list", () => {
//     expect(new Collection(1, 2, 3, 4, 5).isNotEmpty()).true;
//   });

//   it("isEmpty true", () => {
//     expect(new Collection().isEmpty()).true;
//   });

//   it("isEmpty false", () => {
//     expect(new Collection(1, 2, 3, 4, 5).isEmpty()).false;
//   });

//   it("isNotEmpty true", () => {
//     expect(new Collection(1, 2, 3, 4, 5).isNotEmpty()).true;
//   });

//   it("isNotEmpty false", () => {
//     expect(new Collection().isNotEmpty()).false;
//   });

//   it("last", () => {
//     expect(new Collection(1, 2, 3, 4, 5).last()).equals(5);
//   });

//   it("last for empty list raises exception", () => {
//     try {
//       new Collection().last();
//     } catch (e) {
//       expect(e).instanceOf(NoSuchElementException);
//     }
//   });

//   it("lastOrNull", () => {
//     expect(new Collection(1, 2, 3, 4, 5).lastOrNull()).equals(5);
//   });

//   it("lastOrNull for empty list returns null", () => {
//     expect(new Collection().lastOrNull()).null;
//   });

//   it("map", () => {
//     const resultList = new Collection(1, 2, 3, 4, 5).map((element) => {
//       return element.toString();
//     });

//     expect(resultList.contains("1")).true;
//     expect(resultList.contains("2")).true;
//     expect(resultList.contains("3")).true;
//     expect(resultList.contains("4")).true;
//     expect(resultList.contains("5")).true;
//   });

//   it("map returned new list", () => {
//     const collection = new Collection(1, 2, 3, 4, 5);
//     const resultList = collection.map((element) => {
//       return element.toString();
//     });

//     expect(resultList).not.equals(collection);
//   });

//   it("map for empty list returns list", () => {
//     const resultList = new Collection().map((element) => {
//       return element.toString();
//     });
//     expect(resultList).not.null;
//   });

//   it("map for empty list returns empty list", () => {
//     const resultList = new Collection().map((element) => {
//       return element.toString();
//     });
//     expect(resultList.isEmpty()).true;
//   });
// });
