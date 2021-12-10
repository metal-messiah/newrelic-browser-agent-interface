"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeMethod = exports.fail = void 0;
var index_1 = require("../checks/index");
var config_1 = require("../config/config");
function fail() {
    // implement things like supportability metrics or something here?  This could be called whenever a check fails
    return false;
}
exports.fail = fail;
function executeMethod(methodName) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if ((0, index_1.checkMethod)(methodName))
        return execute.apply(void 0, __spreadArray(__spreadArray([window.NREUM[methodName]], args, false), [config_1.config], false));
    return fail();
}
exports.executeMethod = executeMethod;
function execute(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof func === 'function')
        return func.apply(void 0, args);
    return fail();
}
//# sourceMappingURL=core.js.map