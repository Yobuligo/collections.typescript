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
exports.HashMap = void 0;
var Functions_1 = require("../Functions");
var HashSet_1 = require("../hashSets/HashSet");
var HashMap = /** @class */ (function (_super) {
    __extends(HashMap, _super);
    function HashMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HashMap.prototype.toHashMap = function () {
        return Functions_1.hashMapOf.apply(void 0, this.elements);
    };
    HashMap.prototype.toMap = function () {
        return Functions_1.mapOf.apply(void 0, this.elements);
    };
    HashMap.prototype.toMutableHashMap = function () {
        return Functions_1.mutableHashMapOf.apply(void 0, this.elements);
    };
    HashMap.prototype.toMutableMap = function () {
        return Functions_1.mutableMapOf.apply(void 0, this.elements);
    };
    return HashMap;
}(HashSet_1.HashSet));
exports.HashMap = HashMap;
//# sourceMappingURL=HashMap.js.map