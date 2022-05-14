"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Collection_1 = require("../src/collections/Collection");
var IndexOutOfBoundsException_1 = require("../src/exceptions/IndexOutOfBoundsException");
describe("Collection", function () {
    it("Size empty list", function () {
        (0, chai_1.expect)(new Collection_1.Collection().size).equals(0);
    });
    it("Size filled list", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).size).equals(5);
    });
    it("IsEmpty for empty list", function () {
        (0, chai_1.expect)(new Collection_1.Collection().isEmpty()).true;
    });
    it("IsEmpty for filled list", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).isEmpty()).false;
    });
    it("IsNotEmpty for empty list", function () {
        (0, chai_1.expect)(new Collection_1.Collection().isNotEmpty()).false;
    });
    it("IsNotEmpty for filled list", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).isNotEmpty()).true;
    });
    it("contains element", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).contains(3)).true;
    });
    it("contains not element", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).contains(6)).false;
    });
    it("contains for empty list", function () {
        (0, chai_1.expect)(new Collection_1.Collection().contains(3)).false;
    });
    it("contains all elements for empty list", function () {
        (0, chai_1.expect)(new Collection_1.Collection().containsAll(1, 3, 5)).false;
    });
    it("contains all elements", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).containsAll(1, 3, 5)).true;
    });
    it("contains not all elements", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).containsAll(1, 3, 5, 6)).false;
    });
    it("contains no element", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).containsAll(6, 7, 8, 9)).false;
    });
    it("elementAt", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).elementAt(0)).equals(1);
    });
    it("elementAt for empty list", function () {
        try {
            new Collection_1.Collection().elementAt(5);
            chai_1.assert.fail();
        }
        catch (e) {
            (0, chai_1.expect)(e).instanceof(IndexOutOfBoundsException_1.IndexOutOfBoundsException);
        }
    });
    it("elementAt for out of range element", function () {
        try {
            new Collection_1.Collection(1, 2, 3, 4, 5).elementAt(10);
            chai_1.assert.fail();
        }
        catch (e) {
            (0, chai_1.expect)(e).instanceof(IndexOutOfBoundsException_1.IndexOutOfBoundsException);
        }
    });
    it("elementAtOrNull", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).elementAtOrNull(0)).equals(1);
    });
    it("elementAtOrNull for empty list", function () {
        (0, chai_1.expect)(new Collection_1.Collection().elementAtOrNull(0)).equals(null);
    });
    it("elementAtOrNull for out of range element", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).elementAtOrNull(10)).equals(null);
    });
    it("filter not null", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).filter(function (element) {
            return element > 1 && element < 5;
        })).not.null;
    });
    it("filter contains correct values", function () {
        var resultList = new Collection_1.Collection(1, 2, 3, 4, 5).filter(function (element) {
            return element > 1 && element < 5;
        });
        (0, chai_1.expect)(resultList.contains(2)).true;
        (0, chai_1.expect)(resultList.contains(3)).true;
        (0, chai_1.expect)(resultList.contains(4)).true;
    });
    it("filter contains not incorrect values", function () {
        var resultList = new Collection_1.Collection(1, 2, 3, 4, 5).filter(function (element) {
            return element > 1 && element < 5;
        });
        (0, chai_1.expect)(resultList.contains(1)).false;
        (0, chai_1.expect)(resultList.contains(5)).false;
    });
    it("filter for empty list returns list", function () {
        var resultList = new Collection_1.Collection().filter(function (element) {
            return element > 1 && element < 5;
        });
        (0, chai_1.expect)(resultList).not.null;
    });
    it("filter for empty list returns empty list", function () {
        var resultList = new Collection_1.Collection().filter(function (element) {
            return element > 1 && element < 5;
        });
        (0, chai_1.expect)(resultList.size).equals(0);
    });
    it("find", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).find(function (element) {
            return element == 3;
        })).equals(3);
    });
    it("find returns null if no result", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).find(function (element) {
            return element == 6;
        })).null;
    });
    it("find for empty list returns null", function () {
        (0, chai_1.expect)(new Collection_1.Collection().find(function (element) {
            return element == 5;
        })).null;
    });
});
//# sourceMappingURL=CollectionTest.js.map