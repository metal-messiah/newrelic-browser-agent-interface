export interface Nreum extends Callable {
    info?: Info;
    init?: Init;
    loader_config?: LoaderConfig;
    o?: O;
}
export declare enum Callables {
    ADD_PAGE_ACTION = "addPageAction",
    ADD_RELEASE = "addRelease",
    ADD_TO_TRACE = "addToTrace",
    FINISHED = "finished",
    INLINE_HIT = "inlineHit",
    INTERACTION = "interaction",
    NOTICE_ERROR = "noticeError",
    SET_CURRENT_ROUTE_NAME = "setCurrentRouteName",
    SET_CUSTOM_ATTRIBUTE = "setCustomAttribute",
    SET_ERROR_HANDLER = "setErrorHandler",
    SET_PAGE_VIEW_NAME = "setPageViewName",
    SET_TOKEN = "setToken"
}
export interface Callable {
    addPageAction?: () => any;
    addRelease?: () => any;
    addToTrace?: () => any;
    finished?: () => any;
    inlineHit?: () => any;
    interaction?: () => any;
    noticeError?: () => any;
    setCurrentRouteName?: () => any;
    setCustomAttribute?: () => any;
    setErrorHandler?: () => any;
    setPageViewName?: () => any;
    setToken?: () => any;
}
export interface Info {
    agent?: string;
    applicationID?: string;
    beacon?: string;
    errorBeacon?: string;
    licenseKey?: string;
    queueTime?: number;
    applicationTime?: number;
    ttGuid?: string;
    user?: string;
    agentToken?: string | null;
    jsAttributes?: Record<string, ComplexType>;
    transactionName?: string;
    account?: string;
    product?: string;
    extra?: string;
    userAttributes?: string;
    atts?: string;
    tNamePlain?: string;
    sa?: string;
    assetServerPort?: number;
    assetServerSSLPort?: number | null;
    corsServerPort?: number;
}
export interface Init {
    ssl?: boolean;
    privacy?: Privacy;
    page_view_timing?: PageViewTiming;
    harvest?: Harvest;
    spa?: Spa;
    distributed_tracing?: DistributedTracing;
    ins?: Ins;
    jserrors?: Jserrors;
    ajax?: Ajax;
}
export interface LoaderConfig {
    accountID?: number;
    agentID?: number;
    trustKey?: number;
    xpid?: string;
}
export interface Privacy {
    cookies_enabled?: boolean;
}
export interface PageViewTiming {
    initialHarvestSeconds?: number;
    maxLCPTimeSeconds?: number;
    harvestTimeSeconds?: number;
    enabled?: boolean;
}
export interface O {
    CT?: () => any;
    EV?: () => any;
    MO?: () => any;
    PR?: () => any;
    REQ?: () => any;
    SI?: () => any;
    ST?: () => any;
    XHR?: () => any;
}
export interface Harvest {
    tooManyRequestsDelay?: number;
}
export interface Spa {
    enabled?: boolean;
}
export interface DistributedTracing {
    cors_use_traceconttext_headers?: boolean;
    enabled?: boolean;
    allowed_origins?: string[];
    exclude_newrelic_header?: boolean;
    cors_use_newrelic_header?: boolean;
}
export interface Ins {
    harvestTimeSeconds?: number;
}
export interface Jserrors {
    harvestTimeSeconds?: number;
}
export interface Ajax {
    deny_list?: string[];
    enabled?: boolean;
    harvestTimeSeconds?: number;
    maxPayloadSize?: number;
}
export interface EventObject {
    /** Event name */
    name: string;
    /** Start time in ms since epoch */
    start: number;
    /** End time in ms since epoch.  Defaults to same as start resulting in trace object with a duration of zero. */
    end?: number | undefined;
    /** Origin of event */
    origin?: string | undefined;
    /** Event type */
    type?: string | undefined;
}
export interface ContextObject extends Record<string, any> {
}
export interface Callback {
    (): void;
}
export interface ErrorHandler {
    (err: any): boolean;
}
export interface GetContextCallback<T extends ContextObject = ContextObject> {
    (contextObject: T): void;
}
export interface Wrapper {
    (): void;
}
export declare type SimpleType = string | number;
export declare type ComplexType = string | number | boolean | unknown;
