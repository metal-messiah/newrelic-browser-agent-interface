import Core from '../core/core';
import * as NewRelic from '../types/types';
export declare class AgentConfigurations {
    appId: string;
    constructor(appId?: string);
}
declare class Nrba {
    api: NewRelic.Api;
    config: AgentConfigurations;
    core: Core;
    constructor(config: AgentConfigurations);
    delete(): void;
}
declare const agentInterface: {
    setConfiguration: (info: NewRelic.Info, loaderConfig: NewRelic.LoaderConfig) => void;
    scopes: Nrba[];
    addScope: (config: AgentConfigurations) => Nrba;
    checkAgent: () => boolean;
};
export default agentInterface;
