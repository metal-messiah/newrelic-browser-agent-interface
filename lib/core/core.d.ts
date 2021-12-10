import * as NewRelic from "../types/types";
import { AgentConfigurations } from '../interface/interface';
export default class Core {
    config: AgentConfigurations;
    constructor(config: AgentConfigurations);
    private fail;
    private execute;
    executeScoped: (methodName: keyof NewRelic.GlobalApis | keyof NewRelic.ScopedApis, ...args: any[]) => any | false;
    executeGlobal: (methodName: keyof NewRelic.GlobalApis | keyof NewRelic.ScopedApis, ...args: any[]) => any | false;
}
