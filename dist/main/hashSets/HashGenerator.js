"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashGenerator = void 0;
var HashGenerator = /** @class */ (function () {
    function HashGenerator() {
        this.index = -1;
    }
    HashGenerator.prototype.generate = function () {
        this.index++;
        return this.index.toString();
    };
    return HashGenerator;
}());
exports.HashGenerator = HashGenerator;
//# sourceMappingURL=HashGenerator.js.map