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
exports.mapOf = exports.mutableListOf = exports.listOf = void 0;
var List_1 = require("./lists/List");
var MutableList_1 = require("./lists/MutableList");
var Map_1 = require("./maps/Map");
function listOf() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (List_1.List.bind.apply(List_1.List, __spreadArray([void 0], elements, false)))();
}
exports.listOf = listOf;
function mutableListOf() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (MutableList_1.MutableList.bind.apply(MutableList_1.MutableList, __spreadArray([void 0], elements, false)))();
}
exports.mutableListOf = mutableListOf;
function mapOf() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (Map_1.Map.bind.apply(Map_1.Map, __spreadArray([void 0], elements, false)))();
}
exports.mapOf = mapOf;
//# sourceMappingURL=Functions.js.map