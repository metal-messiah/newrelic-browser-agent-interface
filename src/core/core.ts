import  { checkMethod } from '../checks/index'
import * as NewRelic from "../types/types";
import { AgentConfigurations } from '../interface/interface';

export default class Core {
    constructor(public config: AgentConfigurations){}

    private fail: () => false = () => {
        // implement things like supportability metrics or something here?  This could be called whenever a check fails
        return false
    }

    private execute:<T>(func: T, ...args: any[]) => any | false = (func, ...args) => {
        if (typeof func === 'function') return func(...args)
        return this.fail()
    }

    executeScoped: (methodName: keyof NewRelic.GlobalApis | keyof NewRelic.ScopedApis, ...args: any[]) => any | false = (methodName, ...args) => {
        console.log("executeScoped...", methodName, this.config)
        if (checkMethod(methodName)) return this.execute(window.NREUM[methodName], ...args, this.config )
        return this.fail()
    }

    executeGlobal: (methodName: keyof NewRelic.GlobalApis | keyof NewRelic.ScopedApis, ...args: any[]) => any | false = (methodName, ...args) => {
        if (checkMethod(methodName)) return this.execute(window.NREUM[methodName], ...args )
        return this.fail()
    }
}