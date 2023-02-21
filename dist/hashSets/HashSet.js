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
exports.HashSet = void 0;
var core_typescript_1 = require("@yobuligo/core.typescript");
var Functions_1 = require("./../Functions");
var List_1 = require("./../lists/List");
var HashSet = /** @class */ (function () {
    function HashSet() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.elements = new Map();
        this.keys = [];
        this.cursor = 0;
        this.addElements(elements);
    }
    Object.defineProperty(HashSet.prototype, "size", {
        get: function () {
            return this.elements.size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HashSet.prototype, "lastIndex", {
        get: function () {
            return this.cursor;
        },
        enumerable: false,
        configurable: true
    });
    HashSet.prototype.contains = function (element) {
        return this.elements.has(element);
    };
    HashSet.prototype.containsAll = function () {
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
    HashSet.prototype.containsNot = function (element) {
        return !this.elements.has(element);
    };
    HashSet.prototype.elementAt = function (index) {
        var _a;
        return ((_a = this.elementAtOrNull(index)) !== null && _a !== void 0 ? _a : (0, core_typescript_1.error)(new core_typescript_1.NoSuchElementException("List does not contain element at index ".concat(index))));
    };
    HashSet.prototype.elementAtOrNull = function (index) {
        return this.keys[index];
    };
    HashSet.prototype.filter = function (block) {
        var resultList = [];
        this.keys.forEach(function (element) {
            if (block(element)) {
                resultList.push(element);
            }
        });
        return new (List_1.List.bind.apply(List_1.List, __spreadArray([void 0], resultList, false)))();
    };
    HashSet.prototype.find = function (block) {
        for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element !== undefined && block(element)) {
                return element;
            }
        }
        return undefined;
    };
    HashSet.prototype.first = function () {
        var _a;
        return ((_a = this.firstOrNull()) !== null && _a !== void 0 ? _a : (0, core_typescript_1.error)(new core_typescript_1.NoSuchElementException("List is empty")));
    };
    HashSet.prototype.firstOrNull = function () {
        for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element !== undefined) {
                return element;
            }
        }
        return undefined;
    };
    HashSet.prototype.forEach = function (block) {
        var returnValue = undefined;
        this.elements.forEach(function (key, element) {
            var result = block(element, key);
            if (result !== undefined) {
                returnValue = result;
                return returnValue;
            }
        });
        return returnValue;
    };
    HashSet.prototype.indexOf = function (element) {
        var _a;
        return (_a = this.elements.get(element)) !== null && _a !== void 0 ? _a : -1;
    };
    HashSet.prototype.isEmpty = function () {
        return this.elements.size === 0;
    };
    HashSet.prototype.isNotEmpty = function () {
        return !this.isEmpty();
    };
    HashSet.prototype.last = function () {
        var _a;
        return ((_a = this.lastOrNull()) !== null && _a !== void 0 ? _a : (0, core_typescript_1.error)(new core_typescript_1.NoSuchElementException("List is empty")));
    };
    HashSet.prototype.lastOrNull = function () {
        for (var i = this.cursor; i > 0; i--) {
            if (this.keys[i] !== undefined) {
                return this.keys[i];
            }
        }
        return undefined;
    };
    HashSet.prototype.map = function (block) {
        var mappedElements = [];
        this.keys.forEach(function (element) {
            var mappedElement = block(element);
            mappedElements.push(mappedElement);
        });
        return new (List_1.List.bind.apply(List_1.List, __spreadArray([void 0], mappedElements, false)))();
    };
    HashSet.prototype.toArray = function () {
        var resultList = [];
        this.keys.forEach(function (element) {
            resultList.push(element);
        });
        return resultList;
    };
    HashSet.prototype.toHashSet = function () {
        return Functions_1.hashSetOf.apply(void 0, this.toArray());
    };
    HashSet.prototype.toList = function () {
        return Functions_1.listOf.apply(void 0, this.toArray());
    };
    HashSet.prototype.toMutableHashSet = function () {
        return Functions_1.mutableHashSetOf.apply(void 0, this.toArray());
    };
    HashSet.prototype.toMutableList = function () {
        return Functions_1.mutableListOf.apply(void 0, this.toArray());
    };
    HashSet.prototype.addElements = function (elements) {
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var element = elements_2[_i];
            this.addElement(element);
        }
    };
    HashSet.prototype.addElement = function (element) {
        this.elements.set(element, this.cursor);
        this.keys[this.cursor] = element;
        this.cursor++;
    };
    return HashSet;
}());
exports.HashSet = HashSet;
//# sourceMappingURL=HashSet.js.map