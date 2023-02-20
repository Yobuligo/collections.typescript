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
exports.mutableHashMapOf = exports.hashMapOf = exports.mutableHashSetOf = exports.hashSetOf = exports.mutableMapOf = exports.mapOf = exports.mutableListOf = exports.listOf = void 0;
var HashMap_1 = require("./hashMaps/HashMap");
var MutableHashMap_1 = require("./hashMaps/MutableHashMap");
var HashSet_1 = require("./hashSets/HashSet");
var MutableHashSet_1 = require("./hashSets/MutableHashSet");
var List_1 = require("./lists/List");
var MutableList_1 = require("./lists/MutableList");
var Map_1 = require("./maps/Map");
var MutableMap_1 = require("./maps/MutableMap");
/**
 * Creates a readonly list for elements of type {@link T}.
 * The contained elements are passed in via parameter {@link elements}.
 */
var listOf = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (List_1.List.bind.apply(List_1.List, __spreadArray([void 0], elements, false)))();
};
exports.listOf = listOf;
/**
 * Creates a list for elements of type {@link T} whose content is changeable.
 * The list elements can be initialized by parameter {@link elements}.
 */
var mutableListOf = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (MutableList_1.MutableList.bind.apply(MutableList_1.MutableList, __spreadArray([void 0], elements, false)))();
};
exports.mutableListOf = mutableListOf;
/**
 * Creates a readonly mapping list for elements of type {@link T}.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the first property to the second property.
 * The contained elements are passed in via parameter {@link elements}.
 */
var mapOf = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (Map_1.Map.bind.apply(Map_1.Map, __spreadArray([void 0], elements, false)))();
};
exports.mapOf = mapOf;
/**
 * Creates a mapping list for elements of type {@link T} whose content is changeable.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the first property to the second property.
 * The mapping list elements can be initialized by parameter {@link elements}.
 */
var mutableMapOf = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (MutableMap_1.MutableMap.bind.apply(MutableMap_1.MutableMap, __spreadArray([void 0], elements, false)))();
};
exports.mutableMapOf = mutableMapOf;
/**
 * Creates a readonly hash set list for elements of type {@link T}.
 * The access to the elements is faster but on the other hand the list is not sorted and needs more memory.
 * The contained elements are passed in via parameter {@link elements}.
 */
var hashSetOf = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (HashSet_1.HashSet.bind.apply(HashSet_1.HashSet, __spreadArray([void 0], elements, false)))();
};
exports.hashSetOf = hashSetOf;
/**
 * Creates a hash set list for elements of type {@link T} whose content is changeable.
 * The access to the elements is faster but on the other hand the list is not sorted and needs more memory.
 * The hash set list elements can be initialized by parameter {@link elements}.
 */
var mutableHashSetOf = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (MutableHashSet_1.MutableHashSet.bind.apply(MutableHashSet_1.MutableHashSet, __spreadArray([void 0], elements, false)))();
};
exports.mutableHashSetOf = mutableHashSetOf;
/**
 * Creates a readonly hash map list for elements of type {@link T}.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the first property to the second property.
 * The access to the elements is faster but on the other hand the list is not sorted and needs more memory.
 * The contained elements are passed in via parameter {@link elements}.
 */
var hashMapOf = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (HashMap_1.HashMap.bind.apply(HashMap_1.HashMap, __spreadArray([void 0], elements, false)))();
};
exports.hashMapOf = hashMapOf;
/**
 * Creates a hash map list for elements of type {@link T} whose content is changeable.
 * The elements are of type {@link Pair}. A {@link Pair} is a mapping from the first property to the second property.
 * The access to the elements is faster but on the other hand the list is not sorted and needs more memory.
 * The hash map list elements can be initialized by parameter {@link elements}.
 */
var mutableHashMapOf = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return new (MutableHashMap_1.MutableHashMap.bind.apply(MutableHashMap_1.MutableHashMap, __spreadArray([void 0], elements, false)))();
};
exports.mutableHashMapOf = mutableHashMapOf;
//# sourceMappingURL=Functions.js.map