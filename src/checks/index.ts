// import { config } from '../config/config'
import { fail } from '../core/core'
import { Nreum, Callables } from '../types/types'

declare global {
    interface Window { NREUM: Nreum; newrelic: any}
}

export function checkAgent(): boolean {
    if (!!(window && (window.NREUM || window.newrelic))) return true
    return fail()
}

function getAgent(): Nreum | false {
    if (checkAgent()) return window.NREUM
    return fail()
}

export function checkMethod(methodName: Callables): boolean {
    const agent = !!checkAgent() && getAgent()
    if (!!agent) return agent.hasOwnProperty(methodName) && typeof window.NREUM[methodName] === "function"
    return fail()
}
