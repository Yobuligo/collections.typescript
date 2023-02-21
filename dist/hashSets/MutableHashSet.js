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
exports.MutableHashSet = void 0;
var core_typescript_1 = require("@yobuligo/core.typescript");
var HashSet_1 = require("./HashSet");
var MutableHashSet = /** @class */ (function (_super) {
    __extends(MutableHashSet, _super);
    function MutableHashSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableHashSet.prototype.add = function (element) {
        this.addElement(element);
    };
    MutableHashSet.prototype.addAll = function (elements) {
        var _this = this;
        elements.forEach(function (element) {
            _this.add(element);
        });
    };
    MutableHashSet.prototype.addArray = function (elements) {
        this.addElements(elements);
    };
    MutableHashSet.prototype.remove = function (element) {
        var cursor = this.elements.get(element);
        if (cursor !== undefined) {
            this.elements.delete(element);
            this.keys.splice(cursor, 1);
            return true;
        }
        return false;
    };
    MutableHashSet.prototype.removeAt = function (index) {
        var element = this.keys[index];
        if (element) {
            this.elements.delete(element);
            this.keys.splice(index, 1);
            return true;
        }
        return false;
    };
    MutableHashSet.prototype.removeAll = function () {
        this.elements = new Map();
        this.keys = [];
    };
    MutableHashSet.prototype.removeFirst = function () {
        var _this = this;
        var passed = false;
        (0, core_typescript_1.ifNotNull)(this.firstOrNull(), function (value) {
            passed = _this.remove(value);
        });
        return passed;
    };
    MutableHashSet.prototype.removeLast = function () {
        var _this = this;
        var passed = false;
        (0, core_typescript_1.ifNotNull)(this.lastOrNull(), function (value) {
            passed = _this.remove(value);
        });
        return passed;
    };
    return MutableHashSet;
}(HashSet_1.HashSet));
exports.MutableHashSet = MutableHashSet;
//# sourceMappingURL=MutableHashSet.js.map