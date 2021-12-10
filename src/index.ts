import * as methods from './methods/index'
export const api: any = {global: methods.global, scoped: methods.scoped}
export { checkAgent } from './checks/index'
export { init } from './config/config'
