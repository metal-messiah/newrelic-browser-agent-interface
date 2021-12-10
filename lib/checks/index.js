"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMethod = exports.checkAgent = void 0;
// import { config } from '../config/config'
var core_1 = require("../core/core");
function checkAgent() {
    if (!!(window && (window.NREUM || window.newrelic)))
        return true;
    return (0, core_1.fail)();
}
exports.checkAgent = checkAgent;
function getAgent() {
    if (checkAgent())
        return window.NREUM;
    return (0, core_1.fail)();
}
function checkMethod(methodName) {
    var agent = !!checkAgent() && getAgent();
    if (!!agent)
        return agent.hasOwnProperty(methodName) && typeof window.NREUM[methodName] === "function";
    return (0, core_1.fail)();
}
exports.checkMethod = checkMethod;
//# sourceMappingURL=index.js.map