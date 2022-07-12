"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Collection_1 = require("../../main/collections/Collection");
var IndexOutOfBoundsException_1 = require("../../main/exceptions/IndexOutOfBoundsException");
var NoSuchElementException_1 = require("../../main/exceptions/NoSuchElementException");
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
    it("first", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).first()).equals(1);
    });
    it("first for empty list raises exception", function () {
        try {
            new Collection_1.Collection().first();
        }
        catch (e) {
            (0, chai_1.expect)(e).instanceOf(NoSuchElementException_1.NoSuchElementException);
        }
    });
    it("firstOrNull", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).firstOrNull()).equals(1);
    });
    it("firstOrNull for empty list returns null", function () {
        (0, chai_1.expect)(new Collection_1.Collection().firstOrNull()).null;
    });
    it("forEach", function () {
        var element1Called = false;
        var element2Called = false;
        var element3Called = false;
        var element4Called = false;
        var element5Called = false;
        new Collection_1.Collection(1, 2, 3, 4, 5).forEach(function (element) {
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
                case 4: {
                    element4Called = true;
                    break;
                }
                case 5: {
                    element5Called = true;
                    break;
                }
            }
        });
        (0, chai_1.expect)(element1Called).true;
        (0, chai_1.expect)(element2Called).true;
        (0, chai_1.expect)(element3Called).true;
        (0, chai_1.expect)(element4Called).true;
        (0, chai_1.expect)(element5Called).true;
    });
    it("forEach for empty list returns null", function () {
        (0, chai_1.expect)(new Collection_1.Collection().forEach(function () {
            return 5;
        })).null;
    });
    it("forEach finished and returns value", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).forEach(function (element) {
            if (element == 3) {
                return element;
            }
        })).equals(3);
    });
    it("indexOf", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).indexOf(3)).equals(2);
    });
    it("indexOf for empty list", function () {
        (0, chai_1.expect)(new Collection_1.Collection().indexOf(3)).equals(-1);
    });
    it("isEmpty true", function () {
        (0, chai_1.expect)(new Collection_1.Collection().isEmpty()).true;
    });
    it("isEmpty false", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).isEmpty()).false;
    });
    it("isNotEmpty true", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).isNotEmpty()).true;
    });
    it("isNotEmpty false", function () {
        (0, chai_1.expect)(new Collection_1.Collection().isNotEmpty()).false;
    });
    it("last", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).last()).equals(5);
    });
    it("last for empty list raises exception", function () {
        try {
            new Collection_1.Collection().last();
        }
        catch (e) {
            (0, chai_1.expect)(e).instanceOf(NoSuchElementException_1.NoSuchElementException);
        }
    });
    it("lastOrNull", function () {
        (0, chai_1.expect)(new Collection_1.Collection(1, 2, 3, 4, 5).lastOrNull()).equals(5);
    });
    it("lastOrNull for empty list returns null", function () {
        (0, chai_1.expect)(new Collection_1.Collection().lastOrNull()).null;
    });
    it("map", function () {
        var resultList = new Collection_1.Collection(1, 2, 3, 4, 5).map(function (element) {
            return element.toString();
        });
        (0, chai_1.expect)(resultList.contains("1")).true;
        (0, chai_1.expect)(resultList.contains("2")).true;
        (0, chai_1.expect)(resultList.contains("3")).true;
        (0, chai_1.expect)(resultList.contains("4")).true;
        (0, chai_1.expect)(resultList.contains("5")).true;
    });
    it("map returned new list", function () {
        var collection = new Collection_1.Collection(1, 2, 3, 4, 5);
        var resultList = collection.map(function (element) {
            return element.toString();
        });
        (0, chai_1.expect)(resultList).not.equals(collection);
    });
    it("map for empty list returns list", function () {
        var resultList = new Collection_1.Collection().map(function (element) {
            return element.toString();
        });
        (0, chai_1.expect)(resultList).not.null;
    });
    it("map for empty list returns empty list", function () {
        var resultList = new Collection_1.Collection().map(function (element) {
            return element.toString();
        });
        (0, chai_1.expect)(resultList.isEmpty()).true;
    });
});
//# sourceMappingURL=Collection.test.js.map