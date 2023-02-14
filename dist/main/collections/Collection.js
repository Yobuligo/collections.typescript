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
var IndexOutOfBoundsException_1 = require("../exceptions/IndexOutOfBoundsException");
var NoSuchElementException_1 = require("../exceptions/NoSuchElementException");
var Functions_1 = require("../Functions");
var Collection = /** @class */ (function () {
    function Collection() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.elements = [];
        this.lastIndex = 0;
        this.elements = elements;
        this._size = this.elements.length;
    }
    Object.defineProperty(Collection.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.contains = function (element) {
        if (this.isEmpty() || this.elements.indexOf(element) == -1) {
            return false;
        }
        else {
            return true;
        }
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
            if (!this.contains(element)) {
                return false;
            }
        }
        return true;
    };
    Collection.prototype.elementAt = function (index) {
        if (this.isEmpty() || this.elements[index] === undefined) {
            throw new IndexOutOfBoundsException_1.IndexOutOfBoundsException("Empty list does not contain element at index ".concat(index));
        }
        return this.elements[index];
    };
    Collection.prototype.elementAtOrNull = function (index) {
        if (this.isEmpty() || this.elements[index] === undefined) {
            return undefined;
        }
        return this.elements[index];
    };
    Collection.prototype.filter = function (block) {
        var resultList = [];
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var object = _a[_i];
            if (block(object)) {
                resultList.push(object);
            }
        }
        return new (Collection.bind.apply(Collection, __spreadArray([void 0], resultList, false)))();
    };
    Collection.prototype.find = function (block) {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var object = _a[_i];
            if (block(object)) {
                return object;
            }
        }
        return undefined;
    };
    Collection.prototype.first = function () {
        if (this.isEmpty()) {
            throw new NoSuchElementException_1.NoSuchElementException("List is empty");
        }
        return this.elements[0];
    };
    Collection.prototype.firstOrNull = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        else {
            return this.elements[0];
        }
    };
    Collection.prototype.forEach = function (block) {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            var result = block(element);
            if (result != null) {
                return result;
            }
        }
        return undefined;
    };
    Collection.prototype.indexOf = function (element) {
        return this.elements.indexOf(element);
    };
    Collection.prototype.isEmpty = function () {
        if (this._size == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Collection.prototype.isNotEmpty = function () {
        if (this.isEmpty()) {
            return false;
        }
        else {
            return true;
        }
    };
    Collection.prototype.last = function () {
        if (this.isEmpty()) {
            throw new NoSuchElementException_1.NoSuchElementException("List is empty");
        }
        return this.elements[this.elements.length - 1];
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
            var object = _a[_i];
            var mappedElement = block(object);
            mappedElements.push(mappedElement);
        }
        return new (Collection.bind.apply(Collection, __spreadArray([void 0], mappedElements, false)))();
    };
    Collection.prototype.toArray = function () {
        var arrayList = [];
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            arrayList.push(element);
        }
        return arrayList;
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
        return Functions_1.mutableListOf.apply(void 0, this.elements);
    };
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map