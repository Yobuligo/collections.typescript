"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Functions_1 = require("../main/Functions");
describe("Function", function () {
    it("listOf empty", function () {
        (0, chai_1.expect)((0, Functions_1.listOf)()).not.null;
    });
    it("listOf values set", function () {
        var list = (0, Functions_1.listOf)(1, 2, 3, 4, 5);
        (0, chai_1.expect)(list.elementAt(0)).equals(1);
        (0, chai_1.expect)(list.elementAt(1)).equals(2);
        (0, chai_1.expect)(list.elementAt(2)).equals(3);
        (0, chai_1.expect)(list.elementAt(3)).equals(4);
        (0, chai_1.expect)(list.elementAt(4)).equals(5);
    });
});
//# sourceMappingURL=FunctionsTest.js.map