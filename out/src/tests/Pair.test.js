"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Pair_1 = require("../main/Pair");
describe("Pair", function () {
    it("Return first value", function () {
        (0, chai_1.expect)(new Pair_1.Pair("123", "456").first).equals("123");
    });
    it("Return second value", function () {
        (0, chai_1.expect)(new Pair_1.Pair("123", "456").second).equals("456");
    });
});
//# sourceMappingURL=Pair.test.js.map