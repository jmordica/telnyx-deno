/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCallRequest = {
    /**
     * The value to set the call status to. Setting the status to completed ends the call.
     */
    Status?: string;
    /**
     * The URL where TeXML will make a request to retrieve a new set of TeXML instructions to continue the call flow.
     */
    Url?: string;
    /**
     * HTTP request type used for `Url`.
     */
    Method?: UpdateCallRequest.Method;
    /**
     * A failover URL for which Telnyx will retrieve the TeXML call instructions if the Url is not responding.
     */
    FallbackUrl?: string;
    /**
     * HTTP request type used for `FallbackUrl`.
     */
    FallbackMethod?: UpdateCallRequest.FallbackMethod;
    /**
     * URL destination for Telnyx to send status callback events to for the call.
     */
    StatusCallback?: string;
    /**
     * HTTP request type used for `StatusCallback`.
     */
    StatusCallbackMethod?: UpdateCallRequest.StatusCallbackMethod;
    /**
     * TeXML to replace the current one with.
     */
    Texml?: string;
};

export namespace UpdateCallRequest {

    /**
     * HTTP request type used for `Url`.
     */
    export enum Method {
        GET = 'GET',
        POST = 'POST',
    }

    /**
     * HTTP request type used for `FallbackUrl`.
     */
    export enum FallbackMethod {
        GET = 'GET',
        POST = 'POST',
    }

    /**
     * HTTP request type used for `StatusCallback`.
     */
    export enum StatusCallbackMethod {
        GET = 'GET',
        POST = 'POST',
    }


}

