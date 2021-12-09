export class AgentConfigurations {
    applicationID?: string = window?.NREUM?.info?.applicationID
}

export const config = new AgentConfigurations();

export function init(options: AgentConfigurations){
    config.applicationID = options?.applicationID || config.applicationID
}