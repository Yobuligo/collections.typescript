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
var HashSet_1 = require("./HashSet");
var MutableHashSet = /** @class */ (function (_super) {
    __extends(MutableHashSet, _super);
    function MutableHashSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableHashSet.prototype.add = function (element) {
        this.addElement(element);
    };
    MutableHashSet.prototype.addAll = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
            var element = elements_1[_a];
            this.addElement(element);
        }
    };
    MutableHashSet.prototype.remove = function (element) {
        if (!this.contains(element)) {
            return;
        }
        this.elements.splice(this.elements.indexOf(element), 1);
        this._size--;
    };
    MutableHashSet.prototype.removeAt = function (index) {
        if (this.isEmpty() || this.elements[index] === undefined) {
            return;
        }
        var indexInternal = this.elements.indexOf(this.elements[index]);
        this.elements.splice(indexInternal, 1);
        this._size--;
    };
    MutableHashSet.prototype.removeAll = function () {
        this.elements.splice(0);
        this._size = 0;
    };
    MutableHashSet.prototype.removeFirst = function () {
        this.remove(this.first());
    };
    MutableHashSet.prototype.removeLast = function () {
        this.remove(this.last());
    };
    return MutableHashSet;
}(HashSet_1.HashSet));
exports.MutableHashSet = MutableHashSet;
//# sourceMappingURL=MutableHashSet.js.map