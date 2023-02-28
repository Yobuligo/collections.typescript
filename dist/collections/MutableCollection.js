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
var core_typescript_1 = require("@yobuligo/core.typescript");
var Collection_1 = require("./Collection");
var MutableCollection = /** @class */ (function (_super) {
    __extends(MutableCollection, _super);
    function MutableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableCollection.prototype.remove = function (element) {
        var removed = false;
        while (true) {
            var index = this.elements.indexOf(element);
            if (index !== -1) {
                removed = true;
                this.elements.splice(index, 1);
                this._size--;
            }
            else {
                break;
            }
        }
        return removed;
    };
    MutableCollection.prototype.removeAt = function (index) {
        if (this.isEmpty() || this.elements[index] === undefined) {
            return false;
        }
        this.elements.splice(index, 1);
        this._size--;
        return true;
    };
    MutableCollection.prototype.removeAll = function () {
        this.elements.splice(0);
        this._size = 0;
    };
    MutableCollection.prototype.removeFirst = function () {
        var _this = this;
        var passed = false;
        (0, core_typescript_1.ifNotNull)(this.firstOrNull(), function (value) {
            passed = _this.remove(value);
        });
        return passed;
    };
    MutableCollection.prototype.removeLast = function () {
        var _this = this;
        var passed = false;
        (0, core_typescript_1.ifNotNull)(this.lastOrNull(), function (value) {
            passed = _this.remove(value);
        });
        return passed;
    };
    return MutableCollection;
}(Collection_1.Collection));
exports.MutableCollection = MutableCollection;
//# sourceMappingURL=MutableCollection.js.map