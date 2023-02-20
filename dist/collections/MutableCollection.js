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
    MutableCollection.prototype.remove = function (element) {
        if (this.containsNot(element)) {
            return false;
        }
        this.elements.splice(this.elements.indexOf(element), 1);
        this._size--;
        return true;
    };
    MutableCollection.prototype.removeAt = function (index) {
        if (this.isEmpty() || this.elements[index] === undefined) {
            return false;
        }
        var indexInternal = this.elements.indexOf(this.elements[index]);
        this.elements.splice(indexInternal, 1);
        this._size--;
        return true;
    };
    MutableCollection.prototype.removeAll = function () {
        this.elements.splice(0);
        this._size = 0;
    };
    MutableCollection.prototype.removeFirst = function () {
        return this.remove(this.first());
    };
    MutableCollection.prototype.removeLast = function () {
        return this.remove(this.last());
    };
    return MutableCollection;
}(Collection_1.Collection));
exports.MutableCollection = MutableCollection;
//# sourceMappingURL=MutableCollection.js.map