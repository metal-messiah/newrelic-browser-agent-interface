import  { checkMethod } from '../checks/index'
import * as NewRelic from "../types/types";
import {config } from '../config/config';

export function fail(): false {
    // implement things like supportability metrics or something here?  This could be called whenever a check fails
    return false
}

export function executeMethod(methodName: NewRelic.Callables, ...args: any[]): any {
    if (checkMethod(methodName)) return execute(window.NREUM[methodName], ...args, config)
    return fail()
}

function execute<T>(func: T, ...args: any[]){
    if (typeof func === 'function') return func(...args)
    return fail()
}