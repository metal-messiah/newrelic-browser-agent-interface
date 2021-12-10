"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.config = exports.AgentConfigurations = void 0;
var AgentConfigurations = /** @class */ (function () {
    function AgentConfigurations() {
        var _a, _b;
        this.applicationID = (_b = (_a = window === null || window === void 0 ? void 0 : window.NREUM) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.applicationID;
    }
    return AgentConfigurations;
}());
exports.AgentConfigurations = AgentConfigurations;
exports.config = new AgentConfigurations();
function init(options) {
    exports.config.applicationID = (options === null || options === void 0 ? void 0 : options.applicationID) || exports.config.applicationID;
}
exports.init = init;
//# sourceMappingURL=config.js.map