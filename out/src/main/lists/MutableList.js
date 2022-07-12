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
exports.MutableList = void 0;
var MutableCollection_1 = require("../collections/MutableCollection");
var MutableList = /** @class */ (function (_super) {
    __extends(MutableList, _super);
    function MutableList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableList.prototype.addAll = function (index, elements) {
        var _this = this;
        if (elements === undefined) {
            var elementsTemp = index;
            elementsTemp.forEach(function (element) {
                _this.add(element);
            });
        }
        else {
            var indexTemp = index;
            var elementsTemp = elements;
            var elementsToIndex_1 = this.elements.slice(0, indexTemp);
            var elementsFromIndex = this.elements.slice(indexTemp, this.elements.length);
            elementsTemp.forEach(function (element) {
                elementsToIndex_1.push(element);
            });
            elementsToIndex_1.push.apply(elementsToIndex_1, elementsFromIndex);
            this.elements = elementsToIndex_1;
            this._size = this.elements.length;
        }
    };
    MutableList.prototype.addArray = function (index) {
        var _a;
        var elements = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            elements[_i - 1] = arguments[_i];
        }
        if (index === undefined) {
            (_a = this.elements).push.apply(_a, elements);
            this._size += elements.length;
        }
        else {
            throw new Error();
        }
    };
    return MutableList;
}(MutableCollection_1.MutableCollection));
exports.MutableList = MutableList;
//# sourceMappingURL=MutableList.js.map