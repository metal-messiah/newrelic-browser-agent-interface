import Methods from '../methods/index'
import { checkAgent, getAgent } from '../checks/index'
import Core from '../core/core';
import * as NewRelic from '../types/types'

export class AgentConfigurations {
    constructor( public appId: string = window?.NREUM?.info?.applicationID || '-1' ){}
}

class Nrba {
    api: NewRelic.ScopedApis
    
    constructor(config: AgentConfigurations){
        const methods = new Methods(new Core(config || new AgentConfigurations()))
        this.api = methods.scoped
    }
}

const agentInterface: {
    setGlobalConfiguration: (info: NewRelic.Info, loaderConfig: NewRelic.LoaderConfig) => void,
    createScope: (config: AgentConfigurations) => Nrba,
    checkAgent: () => boolean,
    api: NewRelic.GlobalApis
} = {
    api: new Methods(new Core(new AgentConfigurations())).global,
    checkAgent,
    createScope: (config) => {
        return new Nrba(config)
    },
    setGlobalConfiguration: (info, loaderConfig) => {
        const agent = getAgent()
        if (agent) agent.info = info
        if (agent) agent.loader_config = loaderConfig
    }
}

export default agentInterface
