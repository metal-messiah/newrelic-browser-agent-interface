"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfig = exports.checkMethod = exports.getAgent = exports.checkAgent = void 0;
function checkAgent() {
    return !!(window && (window.NREUM || window.newrelic));
}
exports.checkAgent = checkAgent;
function getAgent() {
    return checkAgent() && window.NREUM;
}
exports.getAgent = getAgent;
function checkMethod(methodName) {
    var agent = !!checkAgent() && getAgent();
    if (!!agent)
        return agent.hasOwnProperty(methodName) && typeof window.NREUM[methodName] === "function";
    return false;
}
exports.checkMethod = checkMethod;
function checkConfig() {
    var agent = getAgent();
    if (!!agent)
        return agent.hasOwnProperty('info') && agent.hasOwnProperty('loader_config');
    return false;
}
exports.checkConfig = checkConfig;
//# sourceMappingURL=index.js.map