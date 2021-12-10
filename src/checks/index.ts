import { Nreum, GlobalApis, ScopedApis } from '../types/types'

declare global {
    interface Window { NREUM: Nreum; newrelic: any}
}

export function checkAgent(): boolean {
    return !!(window && (window.NREUM || window.newrelic))
}

export function getAgent(): Nreum | false {
    return checkAgent() && window.NREUM
}

export function checkMethod(methodName: keyof GlobalApis | keyof ScopedApis): boolean {
    const agent = !!checkAgent() && getAgent()
    if (!!agent) return agent.hasOwnProperty(methodName) && typeof window.NREUM[methodName] === "function"
    return false
}

export function checkConfig(): boolean {
    const agent = getAgent()
    if (!!agent) return agent.hasOwnProperty('info') && agent.hasOwnProperty('loader_config')
    return false
}
