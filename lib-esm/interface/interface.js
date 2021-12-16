import Methods from '../methods/index';
import { checkAgent, getAgent } from '../checks/index';
import Core from '../core/core';
var AgentConfigurations = /** @class */ (function () {
    function AgentConfigurations(appId) {
        if (appId === void 0) { appId = ((_b = (_a = window === null || window === void 0 ? void 0 : window.NREUM) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.applicationID) || '-1'; }
        var _a, _b;
        this.appId = appId;
    }
    return AgentConfigurations;
}());
export { AgentConfigurations };
var Nrba = /** @class */ (function () {
    function Nrba(config) {
        var methods = new Methods(new Core(config || new AgentConfigurations()));
        this.api = methods.scoped;
    }
    return Nrba;
}());
var agentInterface = {
    setGlobalConfiguration: function (info, loaderConfig) {
        var agent = getAgent();
        if (agent)
            agent.info = info;
        if (agent)
            agent.loader_config = loaderConfig;
    },
    createScope: function (config) {
        return new Nrba(config);
    },
    checkAgent: checkAgent,
    api: new Methods(new Core(new AgentConfigurations())).global
};
export default agentInterface;
//# sourceMappingURL=interface.js.map