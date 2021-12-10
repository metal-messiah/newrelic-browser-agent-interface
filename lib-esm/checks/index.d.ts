import { Nreum, GlobalApis, ScopedApis } from '../types/types';
declare global {
    interface Window {
        NREUM: Nreum;
        newrelic: any;
    }
}
export declare function checkAgent(): boolean;
export declare function getAgent(): Nreum | false;
export declare function checkMethod(methodName: keyof GlobalApis | keyof ScopedApis): boolean;
export declare function checkConfig(): boolean;
