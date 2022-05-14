"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Println_1 = require("./core/functions/Println");
var Functions_1 = require("./src/Functions");
var list = (0, Functions_1.listOf)("", "2", "3", "45", "123");
list.forEach(function (element) {
    (0, Println_1.println)(element);
});
//# sourceMappingURL=app.js.map