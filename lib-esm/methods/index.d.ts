import Core from "../core/core";
import * as NewRelic from "../types/types";
export default class Methods {
    core: Core;
    constructor(core: Core);
    /**
    * Executes an inline hit.
    *
    * @param requestName the 'web page' name or service name
    * @param queueTime the amount of time spent in the app tier queue
    * @param appTime the amount of time spent in the application code
    * @param totalBeTime the total roundtrip time of the remote service call
    * @param domTime the time spent processing the result of the service call (or user defined)
    * @param feTime the time spent rendering the result of the service call (or user defined)
    * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/notice-error
    */
    private inlineHitScoped;
    private inlineHitGlobal;
    /**
         * Adds a unique name and ID to identify releases with multiple JavaScript bundles on the same page.
         *
         * @param releaseName A short description of the component; for example, the name of a project,
         *  application, file, or library.
         * @param releaseId The ID or version of this release; for example, a version number, build number
         *   from your CI environment, GitHub SHA, GUID, or a hash of the contents. Since New Relic converts this
         *   value into a string, you can also use null or undefined if necessary
         * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/add-release
         */
    private addReleaseScoped;
    private addReleaseGlobal;
    /**
     * Reports a Browser PageAction event to Insights along with a name and attributes.
     *
     * @param name Name or category of the action. Reports to Insights as the actionName attribute.
     * @param attributes JSON object with one or more key/value pairs.
     *   The key will report to Insights as its own PageAction attribute with the specified values.
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action
     */
    private addPageActionScoped;
    private addPageActionGlobal;
    /**
     * Adds a JavaScript object with a custom name, start time, etc. to an in-progress session trace.
     *
     * @param eventObject If you are sending the same event object to New Relic Insights as a
     *   PageAction, omit the TYPE attribute. If included, it will override the event type and cause the
     *   PageAction event to be sent incorrectly. Instead, use the NAME attribute for event information.
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/add-to-trace
     */
    private addToTraceScoped;
    private addToTraceGlobal;
    /**
     * Records an additional time point as "finished" in a session trace, and sends the event to Insights.
     *
     * @param timestamp Defaults to the current time of the call. If used, this marks the time that
     *   the page is "finished" according to your own criteria.
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/finished
     */
    private finishedScoped;
    private finishedGlobal;
    /**
     * Adds a user-defined attribute name and value to subsequent events on the page.
     *
     * @param name Name of the attribute. Appears as column in the PageView event.
     *   It will also appear as a column in the PageAction event if you are using it.
     * @param value Value of the attribute. Appears as the value in the named attribute column in the
     *   PageView event. It will appear as a column in the PageAction event if you are using it. Custom attribute
     *   values cannot be complex objects, only simple types such as strings and numbers.
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/set-custom-attribute
     */
    private setCustomAttributeScoped;
    private setCustomAttributeGlobal;
    /**
     * Allows selective ignoring of known errors that the Browser agent captures.
     *
     * @param filterCallback The callback will be called with each error, so it is not
     *   specific to one error. `err` will usually be an error object, but it can be other data types.
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/set-error-handler
     */
    private setErrorHandlerScoped;
    private setErrorHandlerGlobal;
    /**
     * Groups page views to help URL structure or to capture the URL's routing information.
     *
     * @param name Name of the page you want to use when viewing it in New Relic Browser or Insights.
     * @param host Default is http://custom.transaction. Typically set host to your site's domain URI.
     *   To further group these custom transactions, provide a custom host. Otherwise, the page views will be
     *   assigned the default domain custom.transaction. Segments within the name must be explicitly added to
     *   the Whitelist segments in your URL whitelist settings if they do not already appear.
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/set-pageview-name
     */
    private setPageViewNameScoped;
    private setPageViewNameGlobal;
    /**
     * Returns a new API object that is bound to the current SPA interaction.
     *
     * @returns This method returns an API object that is bound to a specific BrowserInteraction
     *   event. Each time this method is called for the same BrowserInteraction, a new object is created, but it still
     *   references the same interaction.
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/interaction-browser-spa-api
     */
    private interactionScoped;
    private interactionGlobal;
    /**
     * Gives SPA routes more accurate names than default names. Monitors specific routes rather than by default
     * grouping.
     *
     * @param name Current route name for the page. Route names passed to setCurrentRouteName() can
     *   be any string, but they should represent a routing pattern rather than a specific resource. For example,
     *   use /users/:id rather than /users/123. If null, exits out of the route change requirement and returns to
     *   the default naming strategy.
     * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-current-route-name
     */
    private setCurrentRouteNameScoped;
    private setCurrentRouteNameGlobal;
    /**
   * Identifies a browser error without disrupting your app's operations.
   *
   * @param error Provide a meaningful error message that you can use when analyzing data on
   *   New Relic Browser's JavaScript errors page.
   * @param customAttributes An object containing name/value pairs representing custom attributes.
   * @see https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/notice-error
   */
    private noticeErrorScoped;
    private noticeErrorGlobal;
    global: NewRelic.GlobalApis;
    scoped: NewRelic.ScopedApis;
}
