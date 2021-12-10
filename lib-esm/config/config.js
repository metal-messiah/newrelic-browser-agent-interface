var AgentConfigurations = /** @class */ (function () {
    function AgentConfigurations() {
        var _a, _b;
        this.applicationID = (_b = (_a = window === null || window === void 0 ? void 0 : window.NREUM) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.applicationID;
    }
    return AgentConfigurations;
}());
export { AgentConfigurations };
export var config = new AgentConfigurations();
export function init(options) {
    config.applicationID = (options === null || options === void 0 ? void 0 : options.applicationID) || config.applicationID;
}
//# sourceMappingURL=config.js.map