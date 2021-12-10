import Methods from '../methods/index'
import { checkAgent, getAgent } from '../checks/index'
import Core from '../core/core';
import * as NewRelic from '../types/types'

export class AgentConfigurations {
    constructor( public appId: string = window?.NREUM?.info?.applicationID || '-1' ){}
}

class Nrba {
    api: NewRelic.Api
    config: AgentConfigurations
    core: Core

    constructor(config: AgentConfigurations){
        this.config = config || new AgentConfigurations()
        this.core = new Core(this.config)

        const methods = new Methods(this.core)
        this.api = {global: methods.global, scoped: methods.scoped}
    }

    delete (): void{
        agentInterface.scopes = agentInterface.scopes.filter(s => s.config.appId !== this.config.appId)
    }
}

const agentInterface: {
    setConfiguration: (info: NewRelic.Info, loaderConfig: NewRelic.LoaderConfig) => void,
    scopes: Nrba[],
    addScope: (config: AgentConfigurations) => Nrba,
    checkAgent: () => boolean
} = {
    setConfiguration: (info, loaderConfig) => {
        const agent = getAgent()
        if (agent) agent.info = info
        if (agent) agent.loader_config = loaderConfig
    },
    scopes: [],
    addScope: (config) => {
        const scope = new Nrba(config)
        agentInterface.scopes = [...agentInterface.scopes, scope]
        return scope
    },
    checkAgent
}

export default agentInterface
