"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO = void 0;
/**
 * This function is responsible for raising a TODO exception
 */
function TODO(message) {
    if (message === void 0) { message = "Not implemented exception"; }
    throw new Error(message);
}
exports.TODO = TODO;
//# sourceMappingURL=TODO.js.map