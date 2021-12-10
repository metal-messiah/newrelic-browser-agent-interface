// import { config } from '../config/config'
import { fail } from '../core/core';
export function checkAgent() {
    if (!!(window && (window.NREUM || window.newrelic)))
        return true;
    return fail();
}
function getAgent() {
    if (checkAgent())
        return window.NREUM;
    return fail();
}
export function checkMethod(methodName) {
    var agent = !!checkAgent() && getAgent();
    if (!!agent)
        return agent.hasOwnProperty(methodName) && typeof window.NREUM[methodName] === "function";
    return fail();
}
//# sourceMappingURL=index.js.map