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
var MutableCollection_1 = require("../collections/MutableCollection");
var MutableList = /** @class */ (function (_super) {
    __extends(MutableList, _super);
    function MutableList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableList.prototype.add = function (index, element) {
        var elementsTemp = [];
        if (element === undefined) {
            var elementTemp = index;
            elementsTemp.push(elementTemp);
            this.addArray.apply(this, elementsTemp);
        }
        else {
            var indexTemp = index;
            var elementTemp = element;
            elementsTemp.push(elementTemp);
            this.addArray.apply(this, __spreadArray([indexTemp], elementsTemp, false));
        }
    };
    MutableList.prototype.addAll = function (index, elements) {
        if (elements === undefined) {
            var elementsTemp = index;
            this.addArray.apply(this, elementsTemp.toArray());
        }
        else {
            var indexTemp = index;
            var elementsTemp = elements;
            this.addArray.apply(this, __spreadArray([indexTemp], elementsTemp.toArray(), false));
        }
    };
    MutableList.prototype.addArray = function (index) {
        var _a;
        var elements = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            elements[_i - 1] = arguments[_i];
        }
        if (elements === undefined) {
            var elementsTemp = index;
            (_a = this.elements).push.apply(_a, elementsTemp);
            this._size += elementsTemp.length;
        }
        else {
            var indexTemp = index;
            var elementsTemp = elements;
            var elementsResult = this.elements.slice(0, indexTemp);
            elementsResult.push.apply(elementsResult, elementsTemp);
            elementsResult.push.apply(elementsResult, this.elements.slice(indexTemp, this.elements.length));
            this.elements = elementsResult;
            this._size = this.elements.length;
        }
    };
    return MutableList;
}(MutableCollection_1.MutableCollection));
exports.MutableList = MutableList;
//# sourceMappingURL=MutableList.js.map