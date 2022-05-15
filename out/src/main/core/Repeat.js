"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = void 0;
function repeat(times, block) {
    for (var index = 0; index < times; index++) {
        block(index);
    }
}
exports.repeat = repeat;
//# sourceMappingURL=Repeat.js.map