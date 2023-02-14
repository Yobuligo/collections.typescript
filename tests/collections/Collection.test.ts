// import { assert, expect } from "chai";
// import { Collection } from "../../main/collections/Collection";
// import { IndexOutOfBoundsException } from "../../main/exceptions/IndexOutOfBoundsException";
// import { NoSuchElementException } from "../../main/exceptions/NoSuchElementException";

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

//   it("contains element", () => {
//     expect(new Collection(1, 2, 3, 4, 5).contains(3)).true;
//   });

//   it("contains not element", () => {
//     expect(new Collection(1, 2, 3, 4, 5).contains(6)).false;
//   });

//   it("contains for empty list", () => {
//     expect(new Collection().contains(3)).false;
//   });

//   it("contains all elements for empty list", () => {
//     expect(new Collection().containsAll(1, 3, 5)).false;
//   });

//   it("contains all elements", () => {
//     expect(new Collection(1, 2, 3, 4, 5).containsAll(1, 3, 5)).true;
//   });

//   it("contains not all elements", () => {
//     expect(new Collection(1, 2, 3, 4, 5).containsAll(1, 3, 5, 6)).false;
//   });

//   it("contains no element", () => {
//     expect(new Collection(1, 2, 3, 4, 5).containsAll(6, 7, 8, 9)).false;
//   });

//   it("elementAt", () => {
//     expect(new Collection(1, 2, 3, 4, 5).elementAt(0)).equals(1);
//   });

//   it("elementAt for empty list", () => {
//     try {
//       new Collection().elementAt(5);
//       assert.fail();
//     } catch (e) {
//       expect(e).instanceof(IndexOutOfBoundsException);
//     }
//   });

//   it("elementAt for out of range element", () => {
//     try {
//       new Collection(1, 2, 3, 4, 5).elementAt(10);
//       assert.fail();
//     } catch (e) {
//       expect(e).instanceof(IndexOutOfBoundsException);
//     }
//   });

//   it("elementAtOrNull", () => {
//     expect(new Collection(1, 2, 3, 4, 5).elementAtOrNull(0)).equals(1);
//   });

//   it("elementAtOrNull for empty list", () => {
//     expect(new Collection().elementAtOrNull(0)).equals(null);
//   });

//   it("elementAtOrNull for out of range element", () => {
//     expect(new Collection(1, 2, 3, 4, 5).elementAtOrNull(10)).equals(null);
//   });

//   it("filter not null", () => {
//     expect(
//       new Collection(1, 2, 3, 4, 5).filter((element) => {
//         return element > 1 && element < 5;
//       })
//     ).not.null;
//   });

//   it("filter contains correct values", () => {
//     const resultList = new Collection(1, 2, 3, 4, 5).filter((element) => {
//       return element > 1 && element < 5;
//     });
//     expect(resultList.contains(2)).true;
//     expect(resultList.contains(3)).true;
//     expect(resultList.contains(4)).true;
//   });

//   it("filter contains not incorrect values", () => {
//     const resultList = new Collection(1, 2, 3, 4, 5).filter((element) => {
//       return element > 1 && element < 5;
//     });
//     expect(resultList.contains(1)).false;
//     expect(resultList.contains(5)).false;
//   });

//   it("filter for empty list returns list", () => {
//     const resultList = new Collection().filter((element) => {
//       return element > 1 && element < 5;
//     });
//     expect(resultList).not.null;
//   });

//   it("filter for empty list returns empty list", () => {
//     const resultList = new Collection().filter((element) => {
//       return element > 1 && element < 5;
//     });
//     expect(resultList.size).equals(0);
//   });

//   it("find", () => {
//     expect(
//       new Collection(1, 2, 3, 4, 5).find((element) => {
//         return element == 3;
//       })
//     ).equals(3);
//   });

//   it("find returns null if no result", () => {
//     expect(
//       new Collection(1, 2, 3, 4, 5).find((element) => {
//         return element == 6;
//       })
//     ).null;
//   });

//   it("find for empty list returns null", () => {
//     expect(
//       new Collection().find((element) => {
//         return element == 5;
//       })
//     ).null;
//   });

//   it("first", () => {
//     expect(new Collection(1, 2, 3, 4, 5).first()).equals(1);
//   });

//   it("first for empty list raises exception", () => {
//     try {
//       new Collection().first();
//     } catch (e) {
//       expect(e).instanceOf(NoSuchElementException);
//     }
//   });

//   it("firstOrNull", () => {
//     expect(new Collection(1, 2, 3, 4, 5).firstOrNull()).equals(1);
//   });

//   it("firstOrNull for empty list returns null", () => {
//     expect(new Collection().firstOrNull()).null;
//   });

//   it("forEach", () => {
//     let element1Called = false;
//     let element2Called = false;
//     let element3Called = false;
//     let element4Called = false;
//     let element5Called = false;
//     new Collection(1, 2, 3, 4, 5).forEach((element) => {
//       switch (element) {
//         case 1: {
//           element1Called = true;
//           break;
//         }
//         case 2: {
//           element2Called = true;
//           break;
//         }
//         case 3: {
//           element3Called = true;
//           break;
//         }
//         case 4: {
//           element4Called = true;
//           break;
//         }
//         case 5: {
//           element5Called = true;
//           break;
//         }
//       }
//     });
//     expect(element1Called).true;
//     expect(element2Called).true;
//     expect(element3Called).true;
//     expect(element4Called).true;
//     expect(element5Called).true;
//   });

//   it("forEach for empty list returns null", () => {
//     expect(
//       new Collection().forEach(() => {
//         return 5;
//       })
//     ).null;
//   });

//   it("forEach finished and returns value", () => {
//     expect(
//       new Collection(1, 2, 3, 4, 5).forEach((element) => {
//         if (element == 3) {
//           return element;
//         }
//       })
//     ).equals(3);
//   });

//   it("indexOf", () => {
//     expect(new Collection(1, 2, 3, 4, 5).indexOf(3)).equals(2);
//   });

//   it("indexOf for empty list", () => {
//     expect(new Collection().indexOf(3)).equals(-1);
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
