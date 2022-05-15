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
exports.mutableHashMapOf = exports.hashMapOf = exports.mutableHashSetOf = exports.hashSetOf = exports.mutableMapOf = exports.mapOf = exports.mutableListOf = exports.listOf = exports.hashGenerator = void 0;
var HashMap_1 = require("./hashMaps/HashMap");
var MutableHashMap_1 = require("./hashMaps/MutableHashMap");
var HashGenerator_1 = require("./hashSets/HashGenerator");
var HashSet_1 = require("./hashSets/HashSet");
var MutableHashSet_1 = require("./hashSets/MutableHashSet");
var List_1 = require("./lists/List");
var MutableList_1 = require("./lists/MutableList");
var Map_1 = require("./maps/Map");
var MutableMap_1 = require("./maps/MutableMap");
exports.hashGenerator = new HashGenerator_1.HashGenerator();
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
function mutableMapOf() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (MutableMap_1.MutableMap.bind.apply(MutableMap_1.MutableMap, __spreadArray([void 0], elements, false)))();
}
exports.mutableMapOf = mutableMapOf;
function hashSetOf() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (HashSet_1.HashSet.bind.apply(HashSet_1.HashSet, __spreadArray([void 0], elements, false)))();
}
exports.hashSetOf = hashSetOf;
function mutableHashSetOf() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (MutableHashSet_1.MutableHashSet.bind.apply(MutableHashSet_1.MutableHashSet, __spreadArray([void 0], elements, false)))();
}
exports.mutableHashSetOf = mutableHashSetOf;
function hashMapOf() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (HashMap_1.HashMap.bind.apply(HashMap_1.HashMap, __spreadArray([void 0], elements, false)))();
}
exports.hashMapOf = hashMapOf;
function mutableHashMapOf() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (MutableHashMap_1.MutableHashMap.bind.apply(MutableHashMap_1.MutableHashMap, __spreadArray([void 0], elements, false)))();
}
exports.mutableHashMapOf = mutableHashMapOf;
//# sourceMappingURL=Functions.js.map