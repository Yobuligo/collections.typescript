"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.println = void 0;
/**
 * This function is responsible for wrapping the function console.log.
 */
function println() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
}
exports.println = println;
//# sourceMappingURL=Println.js.map