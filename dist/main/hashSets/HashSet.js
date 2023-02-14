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
        _this.addElements(elements);
        return _this;
    }
    HashSet.prototype.contains = function (element) {
        if (this.isEmpty() || this.elements[this.getKey(element)] === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    HashSet.prototype.addElement = function (element) {
        this.elements[this.getKey(element)] = element;
        this._size++;
    };
    HashSet.prototype.getKey = function (element) {
        throw new Error();
        // if (typeof element == "object") {
        //   if (!IHashable.is(element)) {
        //     let anyRef = element as any;
        //     anyRef.hash = hashGenerator.generate();
        //     return anyRef.hash;
        //   } else {
        //     return element.hash;
        //   }
        // } else {
        //   return element.toString();
        // }
    };
    HashSet.prototype.addElements = function (elements) {
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            this.addElement(element);
        }
    };
    return HashSet;
}(List_1.List));
exports.HashSet = HashSet;
//# sourceMappingURL=HashSet.js.map