import { Nreum, Callables } from '../types/types';
declare global {
    interface Window {
        NREUM: Nreum;
        newrelic: any;
    }
}
export declare function checkAgent(): boolean;
export declare function checkMethod(methodName: Callables): boolean;
