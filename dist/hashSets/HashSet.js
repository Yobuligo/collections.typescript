"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSet = void 0;
var List_1 = require("../lists/List");
var HashSet = /** @class */ (function (_super) {
    __extends(HashSet, _super);
    function HashSet() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.hashIndex = 0;
        _this.hashKeys = new Map();
        _this.addElements(elements);
        return _this;
    }
    HashSet.prototype.contains = function (element) {
        if (this.isEmpty()) {
            return false;
        }
        var hashKey = this.findHashKey(element);
        if (hashKey === undefined || this.elements[hashKey] === undefined) {
            return false;
        }
        return true;
    };
    HashSet.prototype.addElement = function (element) {
        this.elements[this.fetchHashKey(element)] = element;
        this._size++;
    };
    HashSet.prototype.addElements = function (elements) {
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            this.addElement(element);
        }
    };
    HashSet.prototype.fetchHashKey = function (element) {
        var _a;
        return (_a = this.findHashKey(element)) !== null && _a !== void 0 ? _a : this.createHashKey(element);
    };
    HashSet.prototype.findHashKey = function (element) {
        return this.hashKeys.get(element);
    };
    HashSet.prototype.createHashKey = function (element) {
        this.hashIndex++;
        this.hashKeys.set(element, this.hashIndex);
        return this.hashIndex;
    };
    return HashSet;
}(List_1.List));
exports.HashSet = HashSet;
//# sourceMappingURL=HashSet.js.map