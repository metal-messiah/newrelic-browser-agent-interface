export interface Nreum extends GlobalApis, ScopedApis {
    info?: Info,
    init?: Init,
    loader_config?: LoaderConfig,
    o?: O,
}

export enum Callables {
    ADD_PAGE_ACTION = 'addPageAction',
    ADD_RELEASE = 'addRelease',
    ADD_TO_TRACE = 'addToTrace',
    FINISHED = 'finished',
    INLINE_HIT = 'inlineHit',
    INTERACTION = 'interaction',
    NOTICE_ERROR = 'noticeError',
    SET_CURRENT_ROUTE_NAME = 'setCurrentRouteName',
    SET_CUSTOM_ATTRIBUTE = 'setCustomAttribute',
    SET_ERROR_HANDLER = 'setErrorHandler',
    SET_PAGE_VIEW_NAME = 'setPageViewName',
    SET_TOKEN = 'setToken'
}

export interface GlobalApis extends ScopedApis {
    addToTrace?: AddToTrace,
    finished?: Finished,
    inlineHit?: InlineHit,
    setCurrentRouteName?: SetCurrentRouteName,
    setErrorHandler?: SetErrorHandler,
    setPageViewName?: SetPageViewName,
}

export interface ScopedApis {
    addPageAction?: AddPageAction,
    addRelease?: AddRelease,
    interaction?: Interaction,
    noticeError?: NoticeError,
    setCustomAttribute?: SetCustomAttribute,
}

export interface Info {
    agent?: string,
    applicationID?: string,
    beacon?: string,
    errorBeacon?: string,
    licenseKey?: string,
    queueTime?: number,
    applicationTime?: number,
    ttGuid?: string,
    user?: string,
    agentToken?: string | null
    jsAttributes?: Record<string, ComplexType>,
    transactionName?: string
    account?: string,
    product?: string,
    extra?: string,
    userAttributes?: string,
    atts?: string,
    tNamePlain?: string,
    sa?: string,
    assetServerPort?: number,
    assetServerSSLPort?: number | null,
    corsServerPort?: number,
}

export interface Init {
    ssl?: boolean,
    privacy?: Privacy,
    page_view_timing?: PageViewTiming,
    harvest?: Harvest,
    spa?: Spa,
    distributed_tracing?: DistributedTracing, 
    ins?: Ins, 
    jserrors?: Jserrors, 
    ajax?: Ajax,
}

export interface LoaderConfig {
    accountID?: number,
    agentID?: number,
    trustKey?: number,
    xpid?: string,
}

export interface Privacy {
    cookies_enabled?: boolean
}

export interface PageViewTiming {
    initialHarvestSeconds?: number,
    maxLCPTimeSeconds?: number,
    harvestTimeSeconds?: number,
    enabled?: boolean
}

export interface O {
    CT?: () => any,
    EV?: () => any,
    MO?: () => any,
    PR?: () => any,
    REQ?: () => any,
    SI?: () => any,
    ST?: () => any,
    XHR?: () => any
}

export interface Harvest {
    tooManyRequestsDelay?: number,
}

export interface Spa {
    enabled?: boolean
}

export interface DistributedTracing {
    cors_use_traceconttext_headers?: boolean,
    enabled?: boolean,
    allowed_origins?: string[],
    exclude_newrelic_header?: boolean,
    cors_use_newrelic_header?: boolean,
}

export interface Ins {
    harvestTimeSeconds?: number
}

export interface Jserrors {
    harvestTimeSeconds?: number
}

export interface Ajax { 
    deny_list?: string[],
    enabled?: boolean,
    harvestTimeSeconds?: number,
    maxPayloadSize?: number,
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

export interface ContextObject extends Record<string, any> {}

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

export type SimpleType = string | number;
export type ComplexType = string | number | boolean | unknown;

export interface BrowserInteraction {
    /**
     * Sets the text value of the HTML element that was clicked to start a browser interaction.
     *
     * @param value The text value of the HTML element that represents the action that started the interaction.
     * @returns This method returns the same API object created by interaction().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/actiontext-browser-spa-api
     */
    actionText(value: string): this;

    /**
     * Times sub-components of a SPA interaction separately, including wait time and JS execution time.
     *
     * @param name This will be used as the name of the tracer. If you do not include a name,
     *   New Relic Browser does not add a node to the interaction tree. The callback time will be
     *   attributed to the parent node.
     * @param callback A callback that contains the synchronous work to run at the end of the async work.
     *   To execute this callback, call the wrapper returned using createTracer()
     * @returns This method ends the async time. It calls (and times) the callback that was passed into createTracer().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-create-tracer
     */
    createTracer(name: string, callback?: Callback): Wrapper;

    /**
     * Ends the New Relic SPA interaction at the current time.
     *
     * @returns This method returns the same API object created by interaction().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-end
     */
    end(): this;

    /**
     * Stores values across the current SPA interaction asynchronously in New Relic Browser.
     *
     * @param callback A that accepts the interaction context object
     *   as its only argument.
     * @returns This method returns the same API object created by interaction().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-get-context
     */
    // tslint:disable-next-line:no-unnecessary-generics
    getContext<T extends ContextObject = ContextObject>(callback: GetContextCallback<T>): this;

    /**
     * Overrides other SPA save() calls; ignores an interaction so it is not saved or sent to New Relic.
     *
     * @returns This method returns the same API object created by interaction().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-ignore-browser
     */
    ignore(): this;

    /**
     * Adds custom attributes for SPA interactions to the end of an event. It is called when the interaction
     * has finished. You can invoke methods to modify the interaction, but methods that have asynchronous
     * side effects will not have an effect.
     *
     * @returns This method returns the same API object created by interaction().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-on-end
     */
    // tslint:disable-next-line:no-unnecessary-generics
    onEnd<T extends ContextObject = ContextObject>(callback: GetContextCallback<T>): this;

    /**
     * Ensures a SPA browser interaction will be saved when it ends.
     *
     * @returns This method returns the same API object created by interaction().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-save
     */
    save(): this;

    /**
     * Adds a custom SPA attribute only to the current interaction in New Relic Browser.
     *
     * @param key Used as the attribute name on the BrowserInteraction event.
     * @param value Used as the attribute value on the BrowserInteraction event. This can be a
     *   string, number, boolean, or object. If it is an object, New Relic serializes it to a JSON string.
     * @returns This method returns the same API object created by interaction().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-attribute
     */
    setAttribute(key: string, value: ComplexType): this;

    /**
     * Sets the name and trigger of a SPA's browser interaction that is not a route change or URL change.
     *
     * @param name If null, the name will be set using the targetGroupedUrl attribute.
     *   If not null, this will set the browserInteractionName attribute in the BrowserInteraction event.
     * @param trigger If not null, this will set the TRIGGER attribute on the BrowserInteraction event.
     * @returns This method returns the same API object created by interaction().
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-name
     */
    setName(name: string, trigger?: string): this;
}

export interface Api {
    global: GlobalApis,
    scoped: ScopedApis
}

export type AddRelease = (releaseName: string, releaseId: string) => void 

export type AddPageAction = (name: string, attributes?: Record<string, SimpleType>) => void;

export type AddToTrace = (eventObject: EventObject) => void;

export type Finished = (timestamp?: number) => void;

export type NoticeError = (error: Error | string, customAttributes?: Record<string, SimpleType>) => void;

export type SetCustomAttribute = (name: string, value: SimpleType) => void;

export type SetErrorHandler = (filterCallback: ErrorHandler) => void;

export type SetPageViewName = (name: string, host?: string) => void;

export type Interaction = () => BrowserInteraction;

export type SetCurrentRouteName = (name: string | null) => void;

export type InlineHit = (t: Date, requestName: string, queueTime: number, appTime: number, totalBeTime: number, domTime: number, feTime: number) => void
