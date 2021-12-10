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
        this.config = config || new AgentConfigurations();
        this.core = new core_1.default(this.config);
        var methods = new index_1.default(this.core);
        this.api = { global: methods.global, scoped: methods.scoped };
    }
    Nrba.prototype.delete = function () {
        var _this = this;
        agentInterface.scopes = agentInterface.scopes.filter(function (s) { return s.config.appId !== _this.config.appId; });
    };
    return Nrba;
}());
var agentInterface = {
    setConfiguration: function (info, loaderConfig) {
        var agent = (0, index_2.getAgent)();
        if (agent)
            agent.info = info;
        if (agent)
            agent.loader_config = loaderConfig;
    },
    scopes: [],
    addScope: function (config) {
        var scope = new Nrba(config);
        agentInterface.scopes = __spreadArray(__spreadArray([], agentInterface.scopes, true), [scope], false);
        return scope;
    },
    checkAgent: index_2.checkAgent
};
exports.default = agentInterface;
//# sourceMappingURL=interface.js.map