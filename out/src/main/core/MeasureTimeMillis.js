"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureTimeMillis = void 0;
function measureTimeMillis(block) {
    var startTime = new Date();
    block();
    var endTime = new Date();
    return endTime.getTime() - startTime.getTime();
}
exports.measureTimeMillis = measureTimeMillis;
//# sourceMappingURL=MeasureTimeMillis.js.map