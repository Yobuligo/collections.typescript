"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repeat_1 = require("./src/main/core/Repeat");
var Functions_1 = require("./src/main/Functions");
var values = [];
(0, Repeat_1.repeat)(100000, function (index) {
    values.push(index.toString());
});
var hashSet = Functions_1.hashSetOf.apply(void 0, values);
// println(hashSet.elementAt("500"));
//# sourceMappingURL=app.js.map