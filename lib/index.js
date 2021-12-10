"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.checkAgent = exports.api = void 0;
var methods = __importStar(require("./methods/index"));
exports.api = { global: methods.global, scoped: methods.scoped };
var index_1 = require("./checks/index");
Object.defineProperty(exports, "checkAgent", { enumerable: true, get: function () { return index_1.checkAgent; } });
var config_1 = require("./config/config");
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return config_1.init; } });
//# sourceMappingURL=index.js.map