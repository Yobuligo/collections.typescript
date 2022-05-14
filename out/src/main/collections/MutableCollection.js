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
exports.MutableCollection = void 0;
var Collection_1 = require("./Collection");
var MutableCollection = /** @class */ (function (_super) {
    __extends(MutableCollection, _super);
    function MutableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableCollection.prototype.add = function (element) {
        this.elements.push(element);
        this._size++;
    };
    MutableCollection.prototype.addAll = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.elements).push.apply(_a, elements);
        this._size += elements.length;
    };
    MutableCollection.prototype.remove = function (element) {
        if (this.isEmpty()) {
            return;
        }
        this.elements.splice(this.indexOf(element), 1);
        this._size--;
    };
    MutableCollection.prototype.removeAt = function (index) {
        if (this.isEmpty()) {
            return;
        }
        this.elements.splice(index, 1);
        this._size--;
    };
    MutableCollection.prototype.removeAll = function () {
        this.elements.splice(0);
        this._size = 0;
    };
    MutableCollection.prototype.removeFirst = function () {
        this.removeAt(1);
    };
    MutableCollection.prototype.removeLast = function () {
        if (this.isEmpty()) {
            return;
        }
        this.removeAt(this.elements.length - 1);
    };
    return MutableCollection;
}(Collection_1.Collection));
exports.MutableCollection = MutableCollection;
//# sourceMappingURL=MutableCollection.js.map