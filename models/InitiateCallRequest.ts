/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InitiateCallRequest = {
    /**
     * The phone number of the called party. Phone numbers are formatted with a `+` and country code.
     */
    To: string;
    /**
     * The phone number of the party that initiated the call. Phone numbers are formatted with a `+` and country code.
     */
    From: string;
    /**
     * The URL from which Telnyx will retrieve the TeXML call instructions.
     */
    Url?: string;
    /**
     * HTTP request type used for `Url`. The default value is inherited from TeXML Application setting.
     */
    UrlMethod?: InitiateCallRequest.UrlMethod;
    /**
     * A failover URL for which Telnyx will retrieve the TeXML call instructions if the `Url` is not responding.
     */
    FallbackUrl?: string;
    /**
     * URL destination for Telnyx to send status callback events to for the call.
     */
    StatusCallback?: string;
    /**
     * HTTP request type used for `StatusCallback`.
     */
    StatusCallbackMethod?: InitiateCallRequest.StatusCallbackMethod;
    /**
     * The call events for which Telnyx should send a webhook. Multiple events can be defined when separated by a space.
     */
    StatusCallbackEvent?: InitiateCallRequest.StatusCallbackEvent;
};

export namespace InitiateCallRequest {

    /**
     * HTTP request type used for `Url`. The default value is inherited from TeXML Application setting.
     */
    export enum UrlMethod {
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

    /**
     * The call events for which Telnyx should send a webhook. Multiple events can be defined when separated by a space.
     */
    export enum StatusCallbackEvent {
        INITIATED = 'initiated',
        RINGING = 'ringing',
        ANSWERED = 'answered',
        COMPLETED = 'completed',
    }


}

