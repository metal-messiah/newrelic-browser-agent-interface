export function checkAgent() {
    return !!(window && (window.NREUM || window.newrelic));
}
export function getAgent() {
    return checkAgent() && window.NREUM;
}
export function checkMethod(methodName) {
    var agent = !!checkAgent() && getAgent();
    if (!!agent)
        return agent.hasOwnProperty(methodName) && typeof window.NREUM[methodName] === "function";
    return false;
}
export function checkConfig() {
    var agent = getAgent();
    if (!!agent)
        return agent.hasOwnProperty('info') && agent.hasOwnProperty('loader_config');
    return false;
}
//# sourceMappingURL=index.js.map