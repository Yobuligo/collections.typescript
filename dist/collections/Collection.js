"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var core_typescript_1 = require("@yobuligo/core.typescript");
var Functions_1 = require("../Functions");
var List_1 = require("../lists/List");
var Functions_2 = require("./../Functions");
var SortDirection_1 = require("./SortDirection");
var Sorter_1 = require("./Sorter");
var Collection = /** @class */ (function () {
    function Collection() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.elements = [];
        this.elements = elements;
        this._size = this.elements.length;
    }
    Collection.prototype.contains = function (element) {
        return !this.containsNot(element);
    };
    Collection.prototype.containsAll = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        if (this.isEmpty()) {
            return false;
        }
        for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
            var element = elements_1[_a];
            if (this.containsNot(element)) {
                return false;
            }
        }
        return true;
    };
    Collection.prototype.containsNot = function (element) {
        return this.isEmpty() || this.elements.indexOf(element) == -1;
    };
    Collection.prototype.distinct = function () {
        var mutableHashSet = (0, Functions_1.mutableHashSetOf)();
        mutableHashSet.addArray(this.elements);
        return mutableHashSet.toList();
    };
    Collection.prototype.distinctBy = function (selector) {
        var distinctProp = selector();
        var propIndex = (0, Functions_1.mutableHashSetOf)();
        var mutableList = (0, Functions_2.mutableListOf)();
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            var propValue = element[distinctProp];
            if (propIndex.add(propValue)) {
                mutableList.add(element);
            }
        }
        return mutableList.toList();
    };
    Collection.prototype.elementAt = function (index) {
        var _a;
        return ((_a = this.elementAtOrNull(index)) !== null && _a !== void 0 ? _a : (0, core_typescript_1.error)(new core_typescript_1.NoSuchElementException("Empty list does not contain element at index ".concat(index))));
    };
    Collection.prototype.elementAtOrNull = function (index) {
        if (this.isEmpty() || this.elements[index] === undefined) {
            return undefined;
        }
        return this.elements[index];
    };
    Collection.prototype.filter = function (predicate) {
        var resultList = [];
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (predicate(element)) {
                resultList.push(element);
            }
        }
        return new (List_1.List.bind.apply(List_1.List, __spreadArray([void 0], resultList, false)))();
    };
    Collection.prototype.find = function (predicate) {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (predicate(element)) {
                return element;
            }
        }
        return undefined;
    };
    Collection.prototype.first = function () {
        var _a;
        return ((_a = this.firstOrNull()) !== null && _a !== void 0 ? _a : (0, core_typescript_1.error)(new core_typescript_1.NoSuchElementException("List is empty")));
    };
    Collection.prototype.firstOrNull = function () {
        return this.elements[0];
    };
    Collection.prototype.forEach = function (block) {
        var index = 0;
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            var result = block(element, index);
            index++;
            if (result !== undefined) {
                return result;
            }
        }
        return undefined;
    };
    Collection.prototype.indexOf = function (element) {
        return this.elements.indexOf(element);
    };
    Collection.prototype.isEmpty = function () {
        return this._size === 0;
    };
    Collection.prototype.isNotEmpty = function () {
        return !this.isEmpty();
    };
    Object.defineProperty(Collection.prototype, "lastIndex", {
        get: function () {
            if (this.isEmpty()) {
                return -1;
            }
            return this.elements.length - 1;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.last = function () {
        var _a;
        return ((_a = this.lastOrNull()) !== null && _a !== void 0 ? _a : (0, core_typescript_1.error)(new core_typescript_1.NoSuchElementException("List is empty")));
    };
    Collection.prototype.lastOrNull = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.elements[this.elements.length - 1];
    };
    Collection.prototype.map = function (block) {
        var mappedElements = [];
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            var mappedElement = block(element);
            mappedElements.push(mappedElement);
        }
        return new (List_1.List.bind.apply(List_1.List, __spreadArray([void 0], mappedElements, false)))();
    };
    Collection.prototype.random = function () {
        var _a;
        return ((_a = this.randomOrNull()) !== null && _a !== void 0 ? _a : (0, core_typescript_1.error)(new core_typescript_1.NoSuchElementException("List is empty")));
    };
    Collection.prototype.randomOrNull = function () {
        var index = Math.floor(Math.random() * (this.lastIndex + 1));
        return this.elementAtOrNull(index);
    };
    Collection.prototype.reversed = function () {
        var mutableList = (0, Functions_2.mutableListOf)();
        for (var index = this.lastIndex; index >= 0; index--) {
            mutableList.add(this.elements[index]);
        }
        return mutableList.toList();
    };
    Collection.prototype.sortedBy = function (selector) {
        return Functions_1.listOf.apply(void 0, Sorter_1.Sorter.sort(this.elements, SortDirection_1.SortDirection.ASC, selector));
    };
    Collection.prototype.sortedByDescending = function (selector) {
        return Functions_1.listOf.apply(void 0, Sorter_1.Sorter.sort(this.elements, SortDirection_1.SortDirection.DESC, selector));
    };
    Object.defineProperty(Collection.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.toArray = function () {
        return __spreadArray([], this.elements, true);
    };
    Collection.prototype.toHashSet = function () {
        return Functions_1.hashSetOf.apply(void 0, this.elements);
    };
    Collection.prototype.toList = function () {
        return Functions_1.listOf.apply(void 0, this.elements);
    };
    Collection.prototype.toMutableHashSet = function () {
        return Functions_1.mutableHashSetOf.apply(void 0, this.elements);
    };
    Collection.prototype.toMutableList = function () {
        return Functions_2.mutableListOf.apply(void 0, this.elements);
    };
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map