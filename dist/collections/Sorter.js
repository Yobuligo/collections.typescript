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
exports.Sorter = void 0;
var SortDirection_1 = require("./SortDirection");
var SorterDefault = /** @class */ (function () {
    function SorterDefault() {
    }
    SorterDefault.prototype.sort = function (elements, sortDirection, selector) {
        var sortedList = __spreadArray([], elements, true);
        var sortProp = selector === null || selector === void 0 ? void 0 : selector();
        if (sortProp) {
            sortedList.sort(function (left, right) {
                var leftPropValue = left[sortProp];
                var rightPropValue = right[sortProp];
                if (leftPropValue === rightPropValue) {
                    return 0;
                }
                if (sortDirection === SortDirection_1.SortDirection.ASC) {
                    if (leftPropValue < rightPropValue) {
                        return -1;
                    }
                }
                else {
                    if (rightPropValue < leftPropValue) {
                        return -1;
                    }
                }
                return 1;
            });
        }
        else {
            if (sortDirection === SortDirection_1.SortDirection.ASC) {
                sortedList.sort();
            }
            else {
                sortedList.sort(function (left, right) {
                    if (right === left) {
                        return 0;
                    }
                    if (right < left) {
                        return -1;
                    }
                    return 1;
                });
            }
        }
        return sortedList;
    };
    return SorterDefault;
}());
exports.Sorter = new SorterDefault();
//# sourceMappingURL=Sorter.js.map