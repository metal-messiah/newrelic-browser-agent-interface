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
var index_1 = require("../checks/index");
var Core = /** @class */ (function () {
    function Core(config) {
        var _this = this;
        this.config = config;
        this.fail = function () {
            // implement things like supportability metrics or something here?  This could be called whenever a check fails
            return false;
        };
        this.execute = function (func) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (typeof func === 'function')
                return func.apply(void 0, args);
            return _this.fail();
        };
        this.executeScoped = function (methodName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            console.log("executeScoped...", methodName, _this.config);
            if ((0, index_1.checkMethod)(methodName))
                return _this.execute.apply(_this, __spreadArray(__spreadArray([window.NREUM[methodName]], args, false), [_this.config], false));
            return _this.fail();
        };
        this.executeGlobal = function (methodName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if ((0, index_1.checkMethod)(methodName))
                return _this.execute.apply(_this, __spreadArray([window.NREUM[methodName]], args, false));
            return _this.fail();
        };
    }
    return Core;
}());
exports.default = Core;
//# sourceMappingURL=core.js.map