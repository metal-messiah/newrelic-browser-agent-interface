import * as NewRelic from '../types/types';
export declare class AgentConfigurations {
    appId: string;
    constructor(appId?: string);
}
declare class Nrba {
    api: NewRelic.ScopedApis;
    constructor(config: AgentConfigurations);
}
declare const agentInterface: {
    setGlobalConfiguration: (info: NewRelic.Info, loaderConfig: NewRelic.LoaderConfig) => void;
    createScope: (config: AgentConfigurations) => Nrba;
    checkAgent: () => boolean;
    api: NewRelic.GlobalApis;
};
export default agentInterface;
