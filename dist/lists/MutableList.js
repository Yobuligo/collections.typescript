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
exports.MutableList = void 0;
var core_typescript_1 = require("@yobuligo/core.typescript");
var MutableCollection_1 = require("../collections/MutableCollection");
var MutableList = /** @class */ (function (_super) {
    __extends(MutableList, _super);
    function MutableList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableList.prototype.add = function (element, index) {
        if (index !== undefined) {
            return this.addArray([element], index);
        }
        else {
            return this.addArray([element]);
        }
    };
    MutableList.prototype.addAll = function (elements, index) {
        if (index !== undefined) {
            return this.addArray(elements.toArray(), index);
        }
        else {
            return this.addArray(elements.toArray());
        }
    };
    MutableList.prototype.addArray = function (elements, index) {
        var _a;
        if (index !== undefined && index !== null) {
            if (index > this.lastIndex + 1) {
                throw new core_typescript_1.IllegalArgumentException("Error when adding elements. The index is out of bounce. The index must be smaller than ".concat(this.lastIndex + 1));
            }
            var cursor = index;
            var leftList = this.elements.slice(0, cursor);
            var rightList = this.elements.slice(cursor, this.elements.length);
            this.elements = __spreadArray(__spreadArray(__spreadArray([], leftList, true), elements, true), rightList, true);
        }
        else {
            (_a = this.elements).push.apply(_a, elements);
        }
        this._size = this.elements.length;
        return true;
    };
    return MutableList;
}(MutableCollection_1.MutableCollection));
exports.MutableList = MutableList;
//# sourceMappingURL=MutableList.js.map