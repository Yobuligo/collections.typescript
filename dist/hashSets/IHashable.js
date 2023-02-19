"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHashable = void 0;
var IHashable = function () { };
exports.IHashable = IHashable;
exports.IHashable.is = function (object) {
    return "hash" in object;
};
//# sourceMappingURL=IHashable.js.map