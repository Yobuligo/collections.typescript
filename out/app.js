"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repeat_1 = require("./src/main/core/Repeat");
var Functions_1 = require("./src/main/Functions");
var mutableHashSet = (0, Functions_1.mutableHashSetOf)();
(0, Repeat_1.repeat)(1000000, function (index) {
    mutableHashSet.add(index.toString());
});
//# sourceMappingURL=app.js.map