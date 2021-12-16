"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentConfigurations = void 0;
var index_1 = __importDefault(require("../methods/index"));
var index_2 = require("../checks/index");
var core_1 = __importDefault(require("../core/core"));
var AgentConfigurations = /** @class */ (function () {
    function AgentConfigurations(appId) {
        if (appId === void 0) { appId = ((_b = (_a = window === null || window === void 0 ? void 0 : window.NREUM) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.applicationID) || '-1'; }
        var _a, _b;
        this.appId = appId;
    }
    return AgentConfigurations;
}());
exports.AgentConfigurations = AgentConfigurations;
var Nrba = /** @class */ (function () {
    function Nrba(config) {
        var methods = new index_1.default(new core_1.default(config || new AgentConfigurations()));
        this.api = methods.scoped;
    }
    return Nrba;
}());
var agentInterface = {
    setGlobalConfiguration: function (info, loaderConfig) {
        var agent = (0, index_2.getAgent)();
        if (agent)
            agent.info = info;
        if (agent)
            agent.loader_config = loaderConfig;
    },
    createScope: function (config) {
        return new Nrba(config);
    },
    checkAgent: index_2.checkAgent,
    api: new index_1.default(new core_1.default(new AgentConfigurations())).global
};
exports.default = agentInterface;
//# sourceMappingURL=interface.js.map